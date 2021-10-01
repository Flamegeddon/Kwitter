const firebaseConfig = {
      apiKey: "AIzaSyDQdBLKf0cev-vUub00CU9M4GK7Ao82eOo",
      authDomain: "kwitterwebapparjun.firebaseapp.com",
      databaseURL: "https://kwitterwebapparjun-default-rtdb.firebaseio.com",
      projectId: "kwitterwebapparjun",
      storageBucket: "kwitterwebapparjun.appspot.com",
      messagingSenderId: "897115469044",
      appId: "1:897115469044:web:337b61a7d50492a2169aa1",
      measurementId: "G-3V9ZWVQKY8"
    };
firebase.initializeApp(firebaseConfig);
room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
