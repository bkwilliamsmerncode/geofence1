// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase config (replace with your Firebase project config)
const firebaseConfig = {
    apiKey: "AIzaSyCetKrFhbDJuZlmozVYRqBg1611fVuLkuY",
    authDomain: "geofence-63dfd.firebaseapp.com",
    projectId: "geofence-63dfd",
    storageBucket: "geofence-63dfd.appspot.com",
    messagingSenderId: "103260036896",
    appId: "1:103260036896:web:438eed60a14407c7f18145",
    measurementId: "G-0WNLEJJDN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission for push notifications
export const requestNotificationPermission = async () => {
  try {
    await Notification.requestPermission();
    if (Notification.permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: 'BOX6jBjIT2LHE46nx-nP5nZDnIQ7jLT250WKWAGIVBiCU6Rg_YaRX9odEK99EruDLbTrTuheqddOMWaUvE2vooU' // You need to configure VAPID Key in Firebase console
      });
      console.log("Push notification token:", token);
    } else {
      console.log("Notification permission denied");
    }
  } catch (error) {
    console.error("Error getting notification permission:", error);
  }
};

// Function to handle incoming messages
export const onReceiveMessage = () => {
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // You can show a notification here
    new Notification(payload.notification.title, {
      body: payload.notification.body,
      icon: payload.notification.icon
    });
  });
};

export const sendPushNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification("Welcome to the area!", {
        body: "Here's a flyer from ENHANCE Openings!",
        icon: "/path/to/flyer/image.png"
      });
    } else {
      console.error("Notifications not permitted.");
    }
  };
