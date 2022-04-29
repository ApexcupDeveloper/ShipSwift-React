import { Observable, Subscriber } from 'rxjs';
import { openDB } from 'idb';
import { config } from '../private';

export class cacheService {
  static initDB = async (name: string, keyPath: string = 'key') => {
    let db = await openDB('api-cache');

    if (!db.objectStoreNames.contains(name)) {
      db.close();
      db = await openDB('api-cache', db.version + 1, {
        upgrade(dbObj) {
          if (!db.objectStoreNames.contains(name)) {
            dbObj.createObjectStore(name, { keyPath });
          }
        }
      })
    }

    return db;
  }

  static setData = async (name: string, data: any, key: string, expiry?: Date): Promise<void> => {
    const db = await this.initDB(name, key);
    await db.put(name, {
      key,
      data,
      expiry
    });
  }

  static getData = async (name: string, key?: string): Promise<any> => {
    const db = await this.initDB(name);
    let data;
    if (!key) {
      data = await db.getAll(name);
      data.filter(d => !d.expiry || d.expiry.getTime() > new Date().getTime()).map(d => {
        return d;
      })
    } else {
      data = await db.get(name, key);
      data = data && (!data.expiry || data.expiry.getTime() > new Date().getTime()) ? data : null;
    }

    return data;
  }

  // static getExpiry = async (name: string, key: string): Promise<any> => {
  //   const db = await this.initDB(name);
  //   let data;
  //   data = await db.get(name, key);
  //   data = data && (!data.expiry || data.expiry.getTime() > new Date().getTime()) ? data.data : null;

  //   return data;
  // }

  static delData = async (name: string, key: string): Promise<void> => {
    const db = await this.initDB(name);
    await db.delete(name, key);
  }

  static clearCache = async (name: string) => {
    try {
      this.stopPoll(name);
      let db = await openDB('api-cache');
      // if (db.objectStoreNames.contains(name))
        await db.clear(name).catch();
    } catch (err) {
      // console.error('clearCache : ', err);
    }
  }

  static stopPoll = (name: string) => {
    try {
      if ((window as any).pollId[name]) {
        clearTimeout((window as any).pollId[name]);
        (window as any).pollId[name] = null;
      }

      if ((window as any).subjects[name]) {
        (window as any).subjects[name].complete();
        (window as any).subjects[name] = null;
      }
    } catch (err) {
      // console.error('stopPoll : ', err);
    }
  }

  static startPollAndUpdateCache = async (name: string, key: string, fn: (...args: any[]) => Promise<any>, args: any[], subscriber: Subscriber<any>) => {
    try {
      const poll = (window as any).pollTime[name];
      const time = (window as any).dataExpiry[name];

      // const key = args.reduce((previous, current) => {
      //   return previous + JSON.stringify(current);
      // }, '');

      const expiry = new Date(new Date().getTime() + (time * 1000));

      if ((window as any).pollId[name]) {
        clearTimeout((window as any).pollId[name]);
        (window as any).pollId[name] = null;
      }

      let value = await this.getData(name, key);
      if (!value || value.expiry.getTime() < new Date().getTime() || value.expiry.getTime() > expiry.getTime()) {
        fn(...args).then(async (data: any) => {
          subscriber.next(data);
          if (!(window as any).pollTime[name]) {
            subscriber.complete();
          }
          await this.setData(name, data, key, expiry);
        }, err => {
          subscriber.error(err);
        });
      } else {
        subscriber.next(value.data);
      }

      (window as any).pollId[name] = setTimeout(() => {
        if (poll) {
          this.startPollAndUpdateCache(name, key, fn, args, subscriber);
        }
      }, poll * 1000);

    } catch (err) {
      // console.error('startPollAndUpdateCache : ', err);
    }
  }

  static callWithCache = (name: string, key: string, fn: (...args: any[]) => Promise<any>, args: any[], time: number = config.cache.timeout, poll: number = config.cache.poll) => {
    return new Observable<any>((subscriber: Subscriber<any>) => {
      if (!('indexedDB' in window)) {
        // console.log('This browser doesn\'t support IndexedDB');
        fn(...args).then(data => {
          subscriber.next(data);
          subscriber.complete();
        }, err => {
          subscriber.error(err);
          subscriber.complete();
        });

        return;
      }
      (window as any).pollTime = (window as any).pollTime || {};
      (window as any).dataExpiry = (window as any).dataExpiry || {};
      (window as any).pollId = (window as any).pollId || {};
      (window as any).subjects = (window as any).subjects || {};

      (window as any).pollTime[name] = poll;
      (window as any).dataExpiry[name] = time;
      (window as any).subjects[name] = subscriber;

      (async () => {
        try {
          await this.startPollAndUpdateCache(name, key, fn, args, subscriber);
        } catch (err) {
          subscriber.error(err);
          if (!(window as any).pollTime[name]) {
            subscriber.complete();
          }
        }
      })()
    });
  }
}
