// Please see this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/master/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging-compat.js");
//importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-database-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAr2ZQ7tjNDyC4dDH6mvxMSOrAlJJFth50",
  authDomain: "secret-santa-5d21c.firebaseapp.com",
  projectId: "secret-santa-5d21c",
  storageBucket: "secret-santa-5d21c.firebasestorage.app",
  messagingSenderId: "404634042325",
  appId: "1:404634042325:web:ead30531d797d9776bc75c",
  measurementId: "G-Q90V2PWTNL"
});
// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
