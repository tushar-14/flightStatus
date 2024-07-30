importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDYoeR8cwZdcMGSulNjPPEK6TX34HG4sDg",
  authDomain: "flight-status-f10cb.firebaseapp.com",
  projectId: "flight-status-f10cb",
  storageBucket: "flight-status-f10cb.appspot.com",
  messagingSenderId: "791387790133",
  appId: "1:791387790133:web:1ee6b6005ecfab41a98a7c",
  measurementId: "G-S16CF0C69J",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
