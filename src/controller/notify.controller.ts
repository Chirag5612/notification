import { Response } from "express";
import log4js from "log4js";
import FirebaseFunction from '../../helper/firebase';
const logger = log4js.getLogger();

const setNotification = async (req: any, res: Response) => {

    try {

        // pass the device token here
        const token = ['c1JASRXzTNGrnEkxjtRhBw:APA91bFhuKOELICdRy3gMI1fLh_ZOeWvZazl8gEXcfeFpmCFNSrGdw3d7hOlZ4kH2WVEojvzDdgd1wyHxKhv6dL7-cE5p6wbT8148rPhaTzvr34kc5mhcEnK4SvmwikidTwEXjCmph7i'];
        await FirebaseFunction.sendPushNotification(token, 'fcmData');

    } catch (err) {
        logger.info("notification");
        logger.info(err);
    }
}

export default {
    setNotification
}
