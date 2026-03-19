import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-PV7_el-R5uVczb3W704C4j4GWTuLHL0",
  authDomain: "fdm-81715-backend.firebaseapp.com",
  projectId: "fdm-81715-backend",
  storageBucket: "fdm-81715-backend.firebasestorage.app",
  messagingSenderId: "204875482943",
  appId: "1:204875482943:web:ce48f6c060a20fb413758a"
};

export const app = initializeApp(firebaseConfig);