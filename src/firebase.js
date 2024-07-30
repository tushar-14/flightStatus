import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDYoeR8cwZdcMGSulNjPPEK6TX34HG4sDg",
  authDomain: "flight-status-f10cb.firebaseapp.com",
  projectId: "flight-status-f10cb",
  storageBucket: "flight-status-f10cb.appspot.com",
  messagingSenderId: "791387790133",
  appId: "1:791387790133:web:1ee6b6005ecfab41a98a7c",
  measurementId: "G-S16CF0C69J",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  // console.log(permission);

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BAPFQV6LwErJUtLwxu8ruOM_I00iyN6veqipHk--eR6ovgMLQf3TuUm_pK0CGBFXteLpppaNoX_XFWyW2hcUjes",
    });
  }
};
