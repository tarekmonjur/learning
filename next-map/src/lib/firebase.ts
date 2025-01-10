// Import Firebase (if using module bundler like Webpack or Vite)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";

// Firebase configuration (replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyD1YUhAdOn-CGarGQKBz9KuAMTNd1NeYSc",
  authDomain: "track-location-24.firebaseapp.com",
  projectId: "track-location-24",
  storageBucket: "track-location-24.firebasestorage.app",
  messagingSenderId: "942463077534",
  appId: "1:942463077534:web:069a901f3172584a2d7f8f",
  measurementId: "G-H8XWKQP6F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export type TUser = { userName: string | null, mobileNumber: string | number | null };

export type Poi = { key: number; location: google.maps.LatLngLiteral };
export type LocationType = Record<string, unknown> & Poi;

export async function getLocations () {
  try {
    const locationCollection = collection(db, "locations");
    const querySnapshot = await getDocs(locationCollection);

    const profileCollection = collection(db, "profile");
    const querySnapshot2 = await getDocs(profileCollection);
    let users: unknown[] = [];
    if (!querySnapshot2.empty) {
      users = querySnapshot2.docs.map((doc) => doc.data());
    }

    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((doc, index) => {
        const data = doc.data();
        const user = users.find(u => u?.id === data?.user_id);
        return {
          ...(user || {}),
          ...data,
          key: new Date(data?.timestamp).getTime()+index,
          location: {lat: data?.latitude, lng: data?.longitude},
        } as LocationType;
      });
    }
    return [] as LocationType[];
  } catch (error) {
    console.error("Error get location:", error);
  }
}


export async function findOrCreateUser (user: TUser) {
  try {
    const profileCollection = collection(db, "profile");

    // Query to find user by username and mobileNumber
    const q = query(
      profileCollection,
      where("user_name", "==", user.userName),
      where("mobile_number", "==", user.mobileNumber)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // User found
      const userDoc = querySnapshot.docs[0];
      console.log("User found:", userDoc.id, userDoc.data());
      return { id: userDoc.id, ...userDoc.data() };
    } else {
      // User not found, create new user
      const newUser = {
        user_name: user.userName,
        mobile_number: user.mobileNumber,
        createdAt: new Date().toISOString(),
      };

      const docRef = await addDoc(profileCollection, newUser);
      console.log("New user created with ID:", docRef.id);
      return { id: docRef.id, ...newUser };
    }
  } catch (error) {
    console.error("Error finding or creating user:", error);
    alert('Error finding or creating user');
    // throw error;
  }
}

// Function to send location data to Firestore
async function sendLocationData(latitude: string | number, longitude: string | number) {
  try {
    // Get the current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split("T")[0];
    const user = getLocalUserData();

    // Reference the Firestore collection
    const collectionRef = collection(db, "locations");

    // Add a new document with the location data
    const docRef = await addDoc(collectionRef, {
      user_id: user?.id,
      latitude,
      longitude,
      timestamp: new Date().toISOString(),
      date: currentDate, // For filtering per day
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
    alert('Error send location');
  }
}

export async function collectAndSendLocation() {
  if ("geolocation" in navigator) {
    console.log("Geolocation is available");
  
    // Request the user's location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        // Extract coordinates
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        console.log("Coordinates collected:");
        console.log(`Latitude: ${latitude}`);
        console.log(`Longitude: ${longitude}`);

        // Optional: Use the coordinates, e.g., send to a server
        await sendLocationData(latitude, longitude);
      },
      (error) => {
        console.error("Error fetching location:", error.message);
  
        // Handle errors
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Location permission denied. Please enable location services.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get location timed out.");
            break;
          default:
            alert("An unknown error occurred.");
        }
      }
    );
  } else {
    console.error("Geolocation is not available in this browser.");
    alert("Your browser does not support Geolocation.");
  }
}


export function setLocalUserData(data: Record<string, unknown>) {
  const userData = getLocalUserData();
  if (userData) {
    localStorage.setItem("profile", JSON.stringify({
      ...userData,
      ...data,
    }));
  } else {
    localStorage.setItem("profile", JSON.stringify({
      ...data,
    }));
  }
}

export function getLocalUserData() {
  const user = localStorage.getItem("profile") as string;
  const userData = (user ? JSON.parse(user) : {}) as unknown as Record<string, unknown>;
  return userData;
}
