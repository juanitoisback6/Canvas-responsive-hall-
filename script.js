 

let canva = document.getElementById("canva");
let ctx = canva.getContext("2d")

canva.width = window.innerWidth;
canva.height = window.innerHeight;

let mouse = {
          x:undefined, 
          y:undefined
}

window.addEventListener("mouseout", ()=> {
     mouse.x = window.innerWidth/2;
    mouse.y = window.innerHeight/2;
    draw();
})

window.addEventListener("mousemove", (e)=>{

          mouse.x= e.x;
          mouse.y= e.y;
draw();
});

window.addEventListener("resize", ()=>{

canva.width = window.innerWidth;

canva.height = window.innerHeight;
draw();
})

function draw (){

          ctx.clearRect(0, 0, innerWidth, innerHeight);
          
  ctx.beginPath();
  ctx.moveTo(0, 0);
  
//   ctx.lineTo(window.innerWidth, window.innerHeight);
//     ctx.moveTo(window.innerWidth, 0);
  
//   ctx.lineTo(0, window.innerHeight);
//   ctx.closePath();
 
  ctx.strokeStyle = "lightgray";
  ctx.stroke();
  

 
//left
  for (let i = 0; i <71; i++){

        ctx.beginPath();
        ctx.moveTo(mouse.x , mouse.y);  
        let left = window.innerHeight/70; 
        ctx.lineTo(0, i*left);
        ctx.strokeStyle = "green";
          ctx.stroke();
  }


  //tpp
   for (let i = 0; i <70; i++){

        ctx.beginPath();
        ctx.moveTo(mouse.x , mouse.y); 
        let top = window.innerWidth/70; 
        ctx.lineTo(i*top , 0);
        ctx.strokeStyle = "rgb(125, 253, 254)";
          ctx.stroke();
  }
 
//right
   for (let i = 0; i <71; i++){

        ctx.beginPath();
        ctx.moveTo(mouse.x , mouse.y);  
        let right = window.innerHeight/70; 
        ctx.lineTo(window.innerWidth , i*right);
         ctx.strokeStyle = "green";
          ctx.stroke();
  }

  //bottom

   for (let i = 0; i <147; i++){

        ctx.beginPath();
        ctx.moveTo(mouse.x , mouse.y);  
        let bottom = window.innerWidth/147; 
        ctx.lineTo(i*bottom, window.innerHeight);
        
          ctx.stroke();
  }
}

draw();