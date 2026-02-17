// ===== إعدادات Firebase =====
const firebaseConfig = {
    apiKey: "AIzaSyB7kM3XqZ1pQ2rS4tU5vW6xY7zA8bC9dE0fG",
    authDomain: "mousa-tech-store.firebaseapp.com",
    projectId: "mousa-tech-store",
    storageBucket: "mousa-tech-store.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456ghi789jkl"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
