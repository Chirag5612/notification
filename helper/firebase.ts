import admin from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import log4js from 'log4js';
const data = require('../src/')

const logger = log4js.getLogger();
const serviceAccount = require("../src/notification-83e77-firebase-adminsdk-1cft4-fe70b444d2.json");

initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const sendPushNotification = async (token: any, obj: any) => {
  
  if (token.length) {
    const dataSend: any = {
      type: 'Type',
      title: 'Title',
      message: 'Message',
      // updatedAt: Date.now(),
      data: 'data'
    };

    await admin.messaging().sendMulticast({
      data: dataSend,
      notification: {
        title: 'Title',
        body: 'Body'
      },
      tokens: token,
    }).then((value) => {
      console.log('Successfully sent message:', value);
      console.log(value.responses);
      logger.info('Admin :: Successfully sent message Issue');
      logger.info(value.responses);
    }).catch((error) => {
      console.log('Error sending message:', error);
      throw error;
    });
  } else {
    console.log('null pass token on');
    logger.info('null pass token on');
  }
};
export default {
  sendPushNotification,
};
