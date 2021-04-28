function ResetCal(){
    document.getElementById("SACVT").value = "";
    document.getElementById("SACVC").value = "";
    document.getElementById("SACT").value = "";
    document.getElementById("SACD").value = "";
    document.getElementById("SacOutput").value = "";
}

function ResetPlan(){
    document.getElementById("BottomTime").value = "";
    document.getElementById("PlanDepth").value = "";
    document.getElementById("PlanSAC").value = "";
    document.getElementById("Brevet1").checked = false;
    document.getElementById("Brevet2").checked = false;
    document.getElementById("Brevet3").checked = false;
    document.getElementById("Planout").value = "";
}

function ResetCylinder(){
    document.getElementById("AirConsumption").value = "";
    document.getElementById("Cylinderout").value = "";
}

function ResetCanvas(){
    var canvas = document.getElementById("canvasDivePlan");
    var graphics = canvas.getContext("2d");
    graphics.clearRect(0, 0, canvas.clientWidth, canvas.height);
}