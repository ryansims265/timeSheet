


var firebaseConfig = {
    apiKey: "AIzaSyA2dI2zWOEsFCpHiCDs5T4200ax98VJRb8",
    authDomain: "anotherone-631a5.firebaseapp.com",
    databaseURL: "https://anotherone-631a5.firebaseio.com",
    projectId: "anotherone-631a5",
    storageBucket: "",
    messagingSenderId: "710450884721",
    appId: "1:710450884721:web:f469249e7ff2ce00"
  };
  firebase.initializeApp(firebaseConfig);


  var database = firebase.database();

  $("#submit-button").on("click", function(event) {
    event.preventDefault();

    var name = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var startdate = $("#startdate-input").val().trim();
    var monthlyrate = $("#monthlyrate-input").val().trim();
    console.log(name);
    console.log(role);
    console.log(startdate);
    console.log(monthlyrate);

    database.ref().set({
      name: name,
      role: role,
      startdate: startdate,
      monthlyrate: monthlyrate
    });



    });
  