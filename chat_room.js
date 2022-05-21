var firebaseConfig = {
    apiKey: "AIzaSyAbqj4p_LHhryKGjxvOWdpmt5neGseB-k4",
    authDomain: "lets-chat-web-app-ce4a3.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-ce4a3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-ce4a3",
    storageBucket: "lets-chat-web-app-ce4a3.appspot.com",
    messagingSenderId: "1005963708204",
    appId: "1:1005963708204:web:24fad055f9ae278315ce89"
  };
  firebase.initializeApp(firebaseConfig)
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "Chat_App.html";
}
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   console.log("Room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

   //End code
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}