import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

import * as admin from 'firebase-admin';

const serviceAccount = {

};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
    storageBucket: 'shipswift-order-invoices'
});

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getPreview')
  async getPreview(data){
     const id = data.id;
    const bucketName = data.name;

    const snap = await admin.firestore().collection('media_previews').doc(id).get();
    const snapData = snap.data();

    if (snapData.expiredDate < new Date().getTime()) {
        return {
            error: 'Access denied',
            url: ''
        }
    }

    const options = {
        action: 'read' as any,
        expires: Date.now() + 2 * 60 * 1000, // 2 minutes
    };


    const [url] = (await admin
        .storage()
        .bucket(bucketName)
        .file(snapData.path)
        .getSignedUrl(options));

    return {
        error: null,
        url: url
    };
  }

  @Post('createPreviewMedia')
  async createPreviewMedia(@Body() data){
      const path = data.path;
      const newDate = new Date();
      newDate.setMinutes(newDate.getMinutes() + 2);

      const ref = await admin.firestore().collection('media_previews').add({
          expiredDate: newDate.getTime(),
          path: path
      })

      return this.getPreview({id: ref.id});
  }
}
