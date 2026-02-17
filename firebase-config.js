// ===== إعدادات Firebase =====
const firebaseConfig = {
    apiKey: "AIzaSyBEk2TemPijtg6dHCd0dFLOzciXUIZCOHA",
    authDomain: "mousa-tech-store.firebaseapp.com",
    projectId: "mousa-tech-store",
    storageBucket: "mousa-tech-store.firebasestorage.app",
    messagingSenderId: "395430710427",
    appId: "1:395430710427:web:c914a92653225535010a3e",
    measurementId: "G-GX1XFLE3FP"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// تهيئة Firestore
const db = firebase.firestore();

// تهيئة Analytics
const analytics = firebase.analytics();

console.log('✅ Firebase connected successfully');
