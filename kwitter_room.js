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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("room_name" + room_name);
         row = "<div class = 'room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";          
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
         console.log(name);
         localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}