/*
VT x VC / T / P = SAC
VT... Total Volume of Cylinder in liters
VC... Consumed Volume in Bars during Dive
T... duration of the dive in minutes
D... Depth
P... pressure in bars of average dive
SAC... Surface Air Conspumtion in liters per minutes 
*/
function CalSac(){
    var volumeTotal = document.getElementById("SACVT").value;
    if(!checkIfValid(volumeTotal, "SACVT"))
        return;

    var volumeConsumtion = document.getElementById("SACVC").value;
    if(!checkIfValid(volumeConsumtion, "SACVC"))
        return;

    var time = document.getElementById("SACT").value;
    if(!checkIfValid(time, "SACT"))
        return;

    var depth = document.getElementById("SACD").value;
    if(!checkIfValid(depth, "SACD"))
        return;

    var pressure = (depth / 10) + 1;

    var surfaceAirConsumption = volumeTotal*volumeConsumtion/time/pressure;
    document.getElementById("SacOutput").value = "Your average Surface Air Consumption is "+ surfaceAirConsumption.toFixed(2) +" l/min";
}

function checkIfValid(number, prefix){
    if(isNaN(number))
    {
        alert(number+" is not a number please re-enter");
        document.getElementById(prefix).value = "";
        return 0;        
    }
    return 1;
}

function CalCylinder(){
    var air = document.getElementById("AirConsumption").value;
    if(!checkIfValid(air, "AirConsumption"))
        return;
    var cylinder = air/150;
    document.getElementById("Cylinderout").value = "You need at least a " + cylinder.toFixed(2) +"l cylinder.";
    if(cylinder < 10){
        document.getElementById("Cylinderout").value += "Hence you should get the 10l Cylinder";
    }
    else if(cylinder < 12){
        document.getElementById("Cylinderout").value += "Hence you should get the 12l Cylinder";
    }
    else if(cylinder < 15){
        document.getElementById("Cylinderout").value += "Hence you should get the 15l Cylinder";
    }
    else if(cylinder < 20){
        document.getElementById("Cylinderout").value += "Hence you should get the 20l Cylinder";
    }
}


function CalPlan(){
    var totalAir = 0;
    var bottomTime = document.getElementById("BottomTime").value;
    if(!checkIfValid(bottomTime, "BottomTime"))
        return;
    
    var maxDepth = document.getElementById("PlanDepth").value;
    if(!checkIfValid(maxDepth, "PlanDepth"))
        return;
    
    if(document.getElementById("Brevet1").checked){
        if(maxDepth > 20){
            OutOfRange("For Brevet* there is a max. depth of 20m", "PlanDepth");
            return;
        }
    }
    if(document.getElementById("Brevet2").checked){
        if(maxDepth > 30){
            OutOfRange("For Brevet** there is a max. depth of 30m", "PlanDepth");
            return;
        }
    }
    if(document.getElementById("Brevet3").checked){
        if(maxDepth > 40){
            OutOfRange("For Brevet*** there is a max. depth of 40m", "PlanDepth");
            return;
        }
    }

    var planSAC = document.getElementById("PlanSAC").value;
    if(!checkIfValid(planSAC, "PlanSAC"))
        return;

    //#region DecompressionTable check
    if(maxDepth < 12){
        if(bottomTime > 140){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    else if(maxDepth < 15){
        if(bottomTime > 72){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    else if(maxDepth < 18){
        if(bottomTime > 45){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    else if(maxDepth < 21){
        if(bottomTime > 31){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    else if(maxDepth < 24){
        if(bottomTime > 23){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    else if(maxDepth < 27){
        if(bottomTime > 18){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    else if(maxDepth < 30){
        if(bottomTime > 15){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    else if(maxDepth < 33){
        if(bottomTime > 12){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    else if(maxDepth < 36){
        if(bottomTime > 10){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    else if(maxDepth < 39){
        if(bottomTime > 9){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    else if(maxDepth < 42){
        if(bottomTime > 7){
            OutOfRange("As a sportdiver you are not allowed to make decompression dives.","BottomTime");
            return;
        }
    }
    //#endregion

    //#region Calculate totalAir usage
    totalAir += ((maxDepth / 10) + 1) * planSAC * bottomTime;     //BottomTime
    totalAir += 3*1.5*planSAC;                                  //5m decostop
    totalAir += (maxDepth/10) * ((maxDepth/10)+1) *planSAC;       //emerge
    var totalTime = parseInt(bottomTime,10) + 3 + (maxDepth/10);


    if(maxDepth > 20){
        totalAir += (((maxDepth/2) / 10)+1) * 3 * planSAC;
        totalTime += 3;
    }
    //#endregion
    drawDivePlan(bottomTime,totalTime,maxDepth);
    document.getElementById("Planout").value = "For this "+ Math.ceil(totalTime) +"min. dive you have a total airconsumption of "+Math.round(totalAir)+" l";
}

function OutOfRange(message, prefix){
    alert(message);
    document.getElementById(prefix).value = "";   
}