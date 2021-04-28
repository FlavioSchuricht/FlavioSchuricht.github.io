function showRightInput(){
    var choice = document.getElementById("Calculations").value;
    switch (parseInt(choice)){
        case 1: //SAC
            document.getElementById("SACdiv").style = "visibility: visible";
            document.getElementById("PlanDivediv").style = "visibility: hidden;";
            document.getElementById("Cylinderdiv").style = "visibility: hidden;";
            document.getElementById("HowTodiv").style = "visibility: hidden;";
            break;
        case 2: //PlanDive
            document.getElementById("SACdiv").style = "visibility: hidden;";
            document.getElementById("PlanDivediv").style = "visibility: visible;";
            document.getElementById("Cylinderdiv").style = "visibility: hidden";
            document.getElementById("HowTodiv").style = "visibility: hidden;";
            break;
        case 3: //Cylinder
            document.getElementById("Cylinderdiv").style = "visibility: visible;";
            document.getElementById("SACdiv").style = "visibility: hidden;";
            document.getElementById("PlanDivediv").style = "visibility: hidden;";
            document.getElementById("HowTodiv").style = "visibility: hidden;";
            break;
        case 4:
            document.getElementById("Cylinderdiv").style = "visibility: hidden;";
            document.getElementById("SACdiv").style = "visibility: hidden;";
            document.getElementById("PlanDivediv").style = "visibility: hidden;";
            document.getElementById("HowTodiv").style = "visibility: visible;";
            break;
    }
}
function calOnLoad(){
    hideCalculus();
}

function hideCalculus(){
    document.getElementById("SACdiv").style = "visibility: hidden";
    document.getElementById("PlanDivediv").style = "visibility: hidden";
    document.getElementById("Cylinderdiv").style = "visibility: hidden";
}





