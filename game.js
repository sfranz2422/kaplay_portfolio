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

const SPEED = 80;
setGravity(640);

scene("game",() =>{


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

  // steve.onPhysicsResolve(() => {
  //   // Set the viewport center to player.pos
  // setCamPos(steve.pos.x, height());
  // });

  onKeyDown("right", () => {
    // steve.play("run")
    steve.move(SPEED, 0);
      steve.flipX = false;
    if (steve.isGrounded() && steve.curAnim() !== "run"){
      steve.play("run")
    }

  });

  onKeyDown("left", () => {
    // steve.play("run")
    steve.move(-SPEED, 0);
      steve.flipX = true;
    if (steve.isGrounded() && steve.curAnim() !== "run"){
      steve.play("run")
    }

    onKeyRelease('left', ()=>{
      if(steve.isGrounded() && !isKeyDown("left") && !isKeyDown("right")){
        steve.play("idle")
      }
    })

    onKeyRelease('right', ()=>{
      if(steve.isGrounded() && !isKeyDown("left") && !isKeyDown("right")){
        steve.play("idle")
      }
    })
 
    steve.onCollide("desk", (desk) => {
        // destroy(desk);
      textbox.innerHTML = "<h1>Franz</h1>"

      if (textbox.style.display === "none") {
        textbox.style.display = "block";
      } 
      
    });
  });


  // This will run every frame
  onUpdate(() => {
  // debug.log(steve.pos.x)
    if(getCamPos().x < 40){
      setCamPos(40, height());
    }
    if (steve.pos.x < -69){
      steve.pos.x = -69
    }
  })

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