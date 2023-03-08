(function () {

    // Import the functions you need from the SDKs you need
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
    // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBM6QeVOOFtLBdRoj3og1leAmL36gqIHR0",
        authDomain: "testebd-b3fee.firebaseapp.com",
        databaseURL: "https://testebd-b3fee-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "testebd-b3fee",
        storageBucket: "testebd-b3fee.appspot.com",
        messagingSenderId: "1077604731878",
        appId: "1:1077604731878:web:1ba4ee90f0ee9a497b6427",
        measurementId: "G-GNQ9WTWDRZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
})()


console.log("firebase.js on!!")
function PostBd() {

    console.log(document.getElementById("texto").value);

    var id = firebase.database().ref().child('novo').push().key;
    var update = {};
    update['/novo/' + id] = document.getElementById("texto").value;
    firebase.database().ref().update(update);

    document.getElementById("texto").value = '';
}

