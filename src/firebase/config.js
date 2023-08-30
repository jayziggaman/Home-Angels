import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAasrX3Ccbi3e-cBhn0EnIKBU4vWJLBd5I",
  authDomain: "home-angels-000.firebaseapp.com",
  projectId: "home-angels-000",
  storageBucket: "home-angels-000.appspot.com",
  messagingSenderId: "1059963081537",
  appId: "1:1059963081537:web:70b20344e4f02acc93c7c0",
  measurementId: "G-T6D472H1JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const chairRef = collection(db,'chairs')
export const tableRef = collection(db,'tables')
export const curtainRef = collection(db,'curtains')
export const tvStandRef = collection(db,'tv-stands')
export const diningRef = collection(db,'dinning-sets')
export const outerDoorRef = collection(db,'front-door')
export const innerDoorRef = collection(db,'inner-doors')
export const chandelierRef = collection(db,'chandeliers')
export const wardrobeRef = collection(db,'wardrobes')
export const bedFrameRef = collection(db,'bed-frames')
export const wallArtRef = collection(db,'wall-art')
export const kitchenCabinetRef = collection(db,'kitchen-cabinets')