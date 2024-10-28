importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCetKrFhbDJuZlmozVYRqBg1611fVuLkuY",
  authDomain: "geofence-63dfd.firebaseapp.com",
  projectId: "geofence-63dfd",
  storageBucket: "geofence-63dfd.appspot.com",
  messagingSenderId: "103260036896",
  appId: "1:103260036896:web:438eed60a14407c7f18145",
  measurementId: "G-0WNLEJJDN9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/path/to/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});