
function drawDivePlan(bottomTime, totalTime, maxDepth){
    var canvas = document.getElementById("canvasDivePlan");
    var graphics = canvas.getContext("2d");
    graphics.font = "12px Arial";
    graphics.moveTo(0,0);
    graphics.lineTo(maxDepth,maxDepth*10);

    //maxdepth
    graphics.moveTo(maxDepth,maxDepth*10);
    var x = parseInt(maxDepth*5,10) + parseInt(bottomTime*20,10);
    graphics.fillText("max depth at "+maxDepth+"m", maxDepth, parseInt(maxDepth*10+10,10));

    graphics.lineTo(x, maxDepth*10);

    graphics.moveTo(x,maxDepth*10);
    if(maxDepth > 20){
        if(maxDepth/2 < 15)
        {
            //smaller
            graphics.lineTo(parseInt(x+(maxDepth/2)) ,(maxDepth/2)*10);
            
            //deep deco
            graphics.fillText("deep safety stop at "+maxDepth/2+"m", parseInt(x+(maxDepth/2)) ,(maxDepth/2)*10+10);
            graphics.moveTo(parseInt(x+(maxDepth/2)) ,(maxDepth/2)*10);
            graphics.lineTo(parseInt(x+(maxDepth/2)) + 10 ,(maxDepth/2)*10);

            graphics.moveTo(parseInt(x+(maxDepth/2)) + 10 ,(maxDepth/2)*10);
            graphics.lineTo(parseInt(x+(maxDepth/2)) + 10 + 10, 50);

            //small deco
            graphics.fillText("small safety stop at 5m", parseInt(x+(maxDepth/2)) + 10 + 10, 60);
            graphics.moveTo(parseInt(x+(maxDepth/2)) + 10 + 10, 50);
            graphics.lineTo(parseInt(x+(maxDepth/2)) + 10 + 10 + 10, 50);
            
            graphics.moveTo(parseInt(x+(maxDepth/2)) + 10 + 10 + 10, 50);
            graphics.lineTo(parseInt(x+(maxDepth/2)) + 10 + 10 + 10 + 10, 0);


        }
        else
        {
            //15
            graphics.lineTo(parseInt(x+(maxDepth-(maxDepth-15))) ,150);

            //deep deco
            graphics.fillText("deep safety stop at 15m", parseInt(x+(maxDepth-(maxDepth-15))) ,160);
            graphics.moveTo(parseInt(x+(maxDepth-(maxDepth-15))) ,150);
            graphics.lineTo(parseInt(x+(maxDepth-(maxDepth-15))) + 10 ,150);

            graphics.moveTo(parseInt(x+(maxDepth-(maxDepth-15))) + 10 ,150);
            graphics.lineTo(parseInt(x+(maxDepth-(maxDepth-15))) + 10 + 10 ,50);

            //small deco
            graphics.fillText("small safety stop 5m", parseInt(x+(maxDepth-(maxDepth-15))) + 10 + 10 ,60);
            graphics.moveTo(parseInt(x+(maxDepth-(maxDepth-15))) + 10 + 10 ,50);
            graphics.lineTo(parseInt(x+(maxDepth-(maxDepth-15))) + 10 + 10 +10 ,50);

            graphics.moveTo(parseInt(x+(maxDepth-(maxDepth-15))) + 10 + 10 +10 ,50);
            graphics.lineTo(parseInt(x+(maxDepth-(maxDepth-15))) + 10 + 10 +10 +10 ,0);

        }
    }
    else{
        graphics.lineTo(x+ parseInt(maxDepth,10), 5*10);

        //small deco
        graphics.fillText("small safety stop 5m", x+ parseInt(maxDepth,10),60);
        graphics.moveTo(x+ parseInt(maxDepth,10), 5*10);
        graphics.lineTo(x+ parseInt(maxDepth,10) + parseInt(10,10), 5*10);
    
        graphics.moveTo(x+ parseInt(maxDepth,10) + parseInt(10,10), 5*10);
        graphics.lineTo(x+ parseInt(maxDepth,10) + parseInt(10,10) + parseInt(10,10), 0);
    
        
    }

    graphics.stroke();
}