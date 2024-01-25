import { Router } from "express";
import notificationController from "../controller/notify.controller";

// Constants
const noAuthRouter = Router();

noAuthRouter.post("/notify", notificationController.setNotification);

// Export default
export default noAuthRouter;
