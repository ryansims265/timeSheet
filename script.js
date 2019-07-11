//First setup the firebase database 
var firebaseConfig = {
    apiKey: "AIzaSyA2dI2zWOEsFCpHiCDs5T4200ax98VJRb8",
    authDomain: "anotherone-631a5.firebaseapp.com",
    databaseURL: "https://anotherone-631a5.firebaseio.com",
    projectId: "anotherone-631a5",
    storageBucket: "",
    messagingSenderId: "710450884721",
    appId: "1:710450884721:web:f469249e7ff2ce00"
  };
  //Then intialize the firebase database that we just setup
  firebase.initializeApp(firebaseConfig);

//Then set up a variable that calls the database
  var database = firebase.database();

  //Create a call to the submit button that waits for the click 
  $("#submit-button").on("click", function(event) {
    event.preventDefault();
//Create variables for each of the user submission areas 
    var name = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var startdate = $("#startdate-input").val().trim();
    var monthlyrate = $("#monthlyrate-input").val().trim();
    console.log(name);
    console.log(role);
    console.log(startdate);
    console.log(monthlyrate);

    //Then push the user data values to the database
    database.ref().set({
      name: name,
      role: role,
      startdate: startdate,
      monthlyrate: monthlyrate
    });



    });
  

//Next set up a snapshot so that it will update the DOM if the data changes at any time 
    database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());

      console.log(snapshot.val().name);
      console.log(snapshot.val().role);
      console.log(snapshot.val().startdate);
      console.log(snapshot.val().monthlyrate);
      // Change the HTML
      $("#data").text(snapshot.val().name);
      $("#data").text(snapshot.val().role);
      $("#data").text(snapshot.val().startdate);
      $("#data").text(snapshot.val().monthlyrate);

//Setup error handling 
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });