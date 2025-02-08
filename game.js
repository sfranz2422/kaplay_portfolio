const textbox = document.getElementById("textbox");

loadSprite("back", "/port4.png");
loadSprite("desk", "/desk.png");

// loadSprite("steve", "/steve.png");

// Loading a multi-frame sprite
loadSprite("steve", "/steve.png", {
    // The image contains 9 frames layed out horizontally, slice it into individual frames
    sliceX: 12,
    // Define animations
    anims: {
        "run": {
            from: 1,
            to: 11,
            speed: 15,
            loop: true,
        },
        // This animation only has 1 frame
        "idle": 0,
    },
});


setGravity(640);

scene("game",() =>{
  const SPEED = 80;
  let targetX = null;
  const scaleFactor = 4; // Your game scale


add([
      sprite("back"), 
  pos(-80,48)
   // body({ isStatic: true }),
  ]);

  add([
      sprite("desk"), 
    pos(40,121),

    area(),
    anchor("center"),
    "desk"

  ]);


  add([
      rect(960, .5),
      area(),
   
      outline(.5),
      pos(-80,142),
      body({ isStatic: true }),
  ]);
  
  const steve = add([
      sprite("steve"), 
    pos(40,75),
    anchor("center"),
    scale(.8),
    area(),
    body(),
 "steve"
  ]);
  // steve.play("idle");

  steve.onUpdate(() => {
    if(getCamPos().x < 40){
      setCamPos(40, height());
    }
    else{
      setCamPos(steve.pos.x, height());
    }
  });


 
    steve.onCollide("desk", (desk) => {
        // destroy(desk);
      textbox.innerHTML = "<h1><a target='_blank' href='https://www.google.com/'>Franz</a></h1>"

      if (textbox.style.display === "none") {
        textbox.style.display = "block";
      } 
      
    });
  // });


  // This will run every frame
  onUpdate(() => {
  // debug.log(steve.pos.x)
    if(getCamPos().x < 40){
      setCamPos(40, height());
    }
    if (steve.pos.x < -69){
      steve.pos.x = -69
    }
    if (targetX !== null) {
        let distance = targetX - steve.pos.x;

        if (Math.abs(distance) > 5) { 
            let direction = distance > 0 ? 1 : -1;
            steve.move(direction * SPEED, 0);

            // Flip character based on direction
            steve.flipX = direction < 0; 

            // Play run animation if not already playing
            if (steve.curAnim() !== "run") {
                steve.play("run");
            }

        } else {
            targetX = null;

            // Stop animation when reaching the target
            steve.play("idle");
        }
    }
  })


  onClick(() => {
      const worldMousePos = mousePos().x + getCamPos().x - width() / 2; // Adjust for camera position
      targetX = worldMousePos; // Store the correct world position
  });



  onKeyPress("t", ()=>{
    textbox.innerHTML = "<h1>Franz</h1>"

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } else {
      textbox.style.display = "none";
    }
  })


  steve.onCollideEnd("desk", (a) => {
    textbox.style.display = "none";
    
  });




// go("gameOver")

})