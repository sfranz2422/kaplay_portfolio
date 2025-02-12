// const textbox = document.getElementById("textbox");
// textbox.addEventListener("click", () => {
//     // Toggle the visibility of the dialog box
//     if (textbox.style.display === "block") {
//         textbox.style.display = "none";  // Hide it
//     } else {
//         textbox.style.display = "block";  // Show it
//     }
// });

loadSprite("back", "/port4.png");
loadSprite("desk", "/desk.png");
loadSprite("bookshelf", "/bookshelf.png");
loadSprite("calendar", "/calendar.png");
loadSprite("ceilingfan", "/ceilingfan.png");
loadSprite("chair", "/chair.png");
loadSprite("clock", "/clock.png");
loadSprite("couch", "/couch.png");
loadSprite("door", "/door.png");
loadSprite("lamp", "/lamp.png");
loadSprite("me", "/me.png");
loadSprite("outsidewindow", "/outsidewindow.png");
loadSprite("painting", "/painting.png");
loadSprite("potpanshelf", "/potpanshelf.png");
loadSprite("tablewithplants", "/tableiwthplants.png");
loadSprite("tvback", "/tvback.png");
loadSprite("tvstand", "/tvstand.png");
loadSprite("gamingsetup", "/gamingsetup.png");


loadSprite("steve", "/steve.png", {
    sliceX: 12,
    anims: {
        "run": {
            from: 1,
            to: 11,
            speed: 15,
            loop: true,
        },
        "idle": 0,
    },
});


setGravity(640);

scene("game",() =>{
  const SPEED = 80;
  let targetX = null;
  const scaleFactor = 5; // Your game scale


add([
      sprite("back"), 
  pos(-80,48)
   // body({ isStatic: true }),
  ]);

  add([
    sprite("desk"), 
    pos(40,123),
    area(),
    anchor("center"),
    "desk"
  ]);
  
  add([
    sprite("bookshelf"), 
    pos(-20,117),
    area(),
    anchor("center"),
    "bookshelf"
  ]);
  
  add([
    sprite("couch"), 
    pos(350,128),
    area(),
    anchor("center"),
    "couch"
  ]);

  add([
    sprite("gamingsetup"), 
    pos(250,122),
    area(),
    anchor("center"),
    "gamingsetup"
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
    scale(1),
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




  steve.onCollide("gamingsetup", (gamingsetup) => {
      // destroy(desk);
    textbox.innerHTML = dialogueData.gamingsetup

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

  });

  steve.onCollide("couch", (couch) => {
      // destroy(desk);
    textbox.innerHTML = dialogueData.couch

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

  });
  
  steve.onCollide("bookshelf", (bookshelf) => {
      // destroy(desk);
    textbox.innerHTML = dialogueData.bookshelf

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

  });
    steve.onCollide("desk", (desk) => {
        // destroy(desk);
      textbox.innerHTML = dialogueData.desk

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

  steve.onClick(() => {
      // This will run when you click on the player
    textbox.innerHTML = dialogueData.me

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

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