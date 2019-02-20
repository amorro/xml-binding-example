var commonFunctions = {
    myData: ("Hola","don", "Pipo"),
    helloWorld: function () {
        alert("VOLAD!");
    },
    askMeSomething: function () {
        if (confirm("Estas seguro NEN??")) {
            alert("Toma truño");
        } else {
            alert("ME ABURROOOOO");
        }
    },
    askMeBiconditions: function () {
        // a?  b (OK) OR c (Cancel)
        confirm("estas seguro?") ? alert("yuhu") : alert("no yuhu");
    },
    showMessage: function () {
        var msg = document.getElementById("messageAlert");
        console.log(msg);
        msg.style.display = "inline";
    },
    blockMe: function () {
        for (i = 0; i < 10; i++) {
            alert("Alert " + i);
        }
    },
  alertInput:function(id) {
        alert (document.getElementById(id).value);
  }
};

//blockForEach: function(){
//    this.myData.forEach(e = >
//)

