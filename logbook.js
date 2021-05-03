var testObject = [{ 'divenumber': 50, 'username': 'Flavio', 'maxdepth': 35, 'duration': 60 }, 
                    { 'divenumber': 12, 'username': 'Michael', 'maxdepth': 20, 'duration': 35 }, 
                    { 'divenumber': 35, 'username': 'Aaron', 'maxdepth': 25, 'duration': 43 }, 
                    { 'divenumber': 9, 'username': 'Marcel', 'maxdepth': 23, 'duration': 32 }, 
                    { 'divenumber': 10, 'username': 'Ben', 'maxdepth': 25, 'duration': 43 }, 
                    { 'divenumber': 11, 'username': 'Flavio', 'maxdepth': 23, 'duration': 32 }];


function logDive(){
    var username = document.getElementById("Username").value;
    var maxDepth = document.getElementById("LogMaxDepth").value;
    var duration = document.getElementById("LogTime").value;
    var diveNumber = document.getElementById("DiveNumber").value;

    saveInLocalStorage(diveNumber,username,maxDepth,duration);
}

function saveInLocalStorage(diveNumber,username,maxDepth,duration){
    var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
    var newdive = { 'divenumber': diveNumber, 'username': username, 'maxdepth': maxDepth, 'duration': duration };
    retrievedObject.push(newdive);
    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(retrievedObject));
    outputTable();
}

function outputTable(){
    //localStorage.clear();
    var logBook = document.getElementById("Logbookbody");

    var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
    console.log(retrievedObject);
    logBook.innerHTML = "";
    for (var i = 0; i < retrievedObject.length; i++) {
        var tr = "<tr>";
        tr += "<td>" + retrievedObject[i].divenumber + "</td>";
        tr += "<td>" + retrievedObject[i].username + "</td>";
        tr += "<td>" + retrievedObject[i].maxdepth + "</td>";
        tr += "<td>" + retrievedObject[i].duration + "</td></tr>";
        logBook.innerHTML += tr;
    }

}

function initialize(){
    var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
    localStorage.setItem('testObject', JSON.stringify(retrievedObject));
    outputTable();
}






