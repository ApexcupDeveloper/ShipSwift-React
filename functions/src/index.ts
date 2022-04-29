import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

var AuthenticationClient = require('auth0').AuthenticationClient;

var auth0 = new AuthenticationClient({
    domain: 'shipswift.eu.auth0.com'
});

const serviceAccount = require('../shipswift-e0bc7-firebase-adminsdk-gz9d9-e78b28fe51.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'shipswift-order-invoices'
});

export const makeAuthFromToken = functions.region('europe-west2').https.onCall(async (data, context) => {
    const token = data.token;
    const uid = data.uid;

    const tokenInfo = await auth0.users.getInfo(token);
    functions.logger.info("token", tokenInfo);

    if (tokenInfo) {
        const fbToken = await admin.auth().createCustomToken(uid);
        return { token: fbToken };
    }

    return { token: null };
});

export const cleanPreviews = functions.region('europe-west2').pubsub
    .schedule('every 10 mins')
    .onRun(async (context: functions.EventContext) => {
        functions.logger.info('cleanup starts...');

        const batch = admin.firestore().batch();

        const items = await admin.firestore()
            .collection('media_previews')
            .where('expiredDate', '<', new Date().getTime())
            .get();

        functions.logger.info(items.docs.length, ' Previews Expired');

        items.docs.forEach(item => {
            batch.delete(item.ref);
        });

        await batch.commit()

        functions.logger.info('cleanup finished');
    });