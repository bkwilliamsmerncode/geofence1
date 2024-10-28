import React, {useState, useEffect} from 'react';
import { getFirestore } from "firebase/firestore";
import { requestNotificationPermission, sendPushNotification } from './firebaseMessaging';
import firebase from "firebase/app";
import "firebase/messaging";

const App = () => {
    const [position, setPosition] = useState({ latitude: null, longitude: null });
  // You can now use Firebase services like Firestore
  const db = getFirestore();

  useEffect(() => {
    // Request permission to show push notifications on load
    requestNotificationPermission();
  }, []);

  // Simulate entering geofence for testing
  const handleGeofenceEnter = () => {
    sendPushNotification(); // This would be triggered by geofencing logic
  };

  useEffect(() => {
        if ('geolocation' in navigator) {
           navigator.geolocation.watchPosition(
             (position) => {
               setPosition({
                 latitude: position.coords.latitude,
                 longitude: position.coords.longitude
               });
               checkGeofence(position.coords.latitude, position.coords.longitude);
             },
             (error) => console.error(error),
             { enableHighAccuracy: true }
           );
         } else {
           console.error("Geolocation not available.");
         }
       }, []);
    
       // Function to check if user is within geofence 32.33062642173685, -111.04798000466396
       const checkGeofence = (latitude, longitude) => {
         const geofenceArea = {
           lat: 32.33062642173685, // Replace with target area latitude
           long: -111.04798000466396, // Replace with target area longitude
           radius: 500 // Radius in meters
         };
    
         const distance = calculateDistance(
           latitude, 
           longitude, 
           geofenceArea.lat, 
           geofenceArea.long
         );
    
         if (distance < geofenceArea.radius) {
           sendPushNotification();
         }
       };
    
       // Helper function to calculate distance between two lat/long points
       const calculateDistance = (lat1, lon1, lat2, lon2) => {
         const R = 6371e3; // meters
         const φ1 = (lat1 * Math.PI) / 180;
         const φ2 = (lat2 * Math.PI) / 180;
         const Δφ = ((lat2 - lat1) * Math.PI) / 180;
         const Δλ = ((lon2 - lon1) * Math.PI) / 180;
    
         const a =
           Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
           Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
         const distance = R * c; // in meters
         return distance;
    
        
       };
    
       return (
         <div>
           <h1>Geofencing App</h1>
       <p>Latitude: {position.latitude}</p>
           <p>Longitude: {position.longitude}</p>

           <h1>Welcome to ENHANCE Openings Geofencing App</h1>
           <button onClick={handleGeofenceEnter}>Simulate Entering Geofence</button>
         </div>
       );
     };
    
     export default App;
    





