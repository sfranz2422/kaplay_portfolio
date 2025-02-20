const textbox = document.getElementById("textbox");
textbox.addEventListener("click", () => {
    // Toggle the visibility of the dialog box
    if (textbox.style.display === "block" && textbox.innerHTML == dialogueData.me) {
        textbox.style.display = "none";  // Hide it
    } else {
        textbox.style.display = "block";  // Show it
    }
});


function checkOrientation(){
  if (window.innerHeight > window.innerWidth){
    document.getElementById("orientation-warning").style.display = "block";
  }
  else{
    document.getElementById("orientation-warning").style.display = "none";

  }
}


window.addEventListener("DOMContentLoaded", checkOrientation)
window.addEventListener("resize", checkOrientation)
window.addEventListener("orientationchange", checkOrientation)


const MIN_CAM_X = 40; // Left boundary
const MAX_CAM_X = 760; // Adjust this based on your background width



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
loadSprite("certificate", "/cert.png");
loadSprite("tv", "/tv.png");
loadSprite("printer", "/printer.png");
loadSprite("hanginglight", "/hanginglight.png");
loadSprite("tallplant", "/tallplant.png");
loadSprite("dishwasher", "/dishwasher.png");
loadSprite("fridge", "/fridge.png");
loadSprite("hangingpan", "/hangingpan.png");
loadSprite("hood", "/hood.png");
loadSprite("oven", "/oven.png");
loadSprite("stovepan", "/stovepan.png");
loadSprite("fridgeopen", "/fridgeopen.png");


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
  let isMenuDisplayed = false
  let openPressed = false
  let closePressed = false

  function createSprite(name, spriteName, position,collisionShape) {
      const obj = add([
          sprite(spriteName),
          pos(position),
          anchor("center"),
          area(collisionShape), // Required to detect clicks
          name // Tag for identification
      ]);

      // Attach click event to each sprite
      obj.onClick(() => {
          console.log(`You clicked the ${name}!`);

        if (openPressed){
          debug.log(`You can't open ${name}`)
        }
        
      });

    //i can put an on destroy here too obj.onDestroy(()=>{})
    
      return obj;
  }


  
add([
    sprite("back"), 
    pos(-80,48)
  ]);

  const couch = createSprite("couch", "couch", vec2(350, 128));
  const chair = createSprite("chair", "chair", vec2(550, 128));
  chair.flipX = true;
  const tallplant = createSprite("tallplant", "tallplant", vec2(420, 120));
  const calendar = createSprite("calendar", "calendar", vec2(40, 90));

  const desk = createSprite("desk", "desk", vec2(40, 123),{shape: new Rect(vec2(5,0),40,40)});





  const certificate = add([
    sprite("certificate"), 
    pos(90,100),
    area(),
    anchor("center"),
    "certificate"
  ]);

  add([
    sprite("certificate"), 
    pos(90,115),
    area(),
    anchor("center"),
    "certificate"
  ]);

  add([
    sprite("lamp"), 
    pos(390,118),
    area(),
    anchor("center"),
    "lamp"
  ]);

  const tv = add([
    sprite("tv"), 
    pos(500,108),
    area(),
    anchor("center"),
    "tv"
  ]);
  add([
    sprite("tvstand"), 
    pos(500,131),
    area(),
    anchor("center"),
    "tvstand"
  ]);




  
  add([
    sprite("clock"), 
    pos(150,90),
    area(),
    anchor("center"),
    "clock"
  ]);

  add([
    sprite("tablewithplants"), 
    pos(150,123),
    area(),
    anchor("center"),
    "tablewithplants"
  ]);

  add([
    sprite("hanginglight"), 
    pos(163,55),
    area(),
    anchor("center"),
    "hanginglight"
  ]);

  add([
    sprite("hanginglight"), 
    pos(500,55),
    area(),
    anchor("center"),
    "hanginglight"
  ]);

  
  add([
    sprite("ceilingfan"), 
    pos(350,55),
    area(),
    anchor("center"),
    "ceilingfan"
  ]);

  add([
    sprite("ceilingfan"), 
    pos(675,55),
    area(),
    anchor("center"),
    "ceilingfan"
  ]);

  add([
    sprite("ceilingfan"), 
    pos(25,55),
    area(),
    anchor("center"),
    "ceilingfan"
  ]);
  
  const printer = add([
    sprite("printer"), 
    pos(16,107),
    area(),
    anchor("center"),
    "printer"
  ]);
  
  const bookshelf = add([
    sprite("bookshelf"), 
    pos(-50,117),
    area(),
    anchor("center"),
    "bookshelf"
  ]);

  const door = add([
    sprite("door"), 
    pos(850,117),
    area(),
    anchor("center"),
    "door"
  ]);


  const fridge = add([
    sprite("fridge"), 
    pos(650,115),
    area(),
    anchor("center"),
    "fridge",
    scale(1.5),
  ]);
  
  const fridgeopen = add([
    sprite("fridgeopen"), 
    pos(639,115),
    area(),
    anchor("center"),
    "fridgeopen",
    scale(1.5),
    // { hidden: true }, // Start hidden
  ]);
      fridgeopen.hidden = true
  
  add([
    sprite("oven"), 
    pos(700,130),
    area(),
    anchor("center"),
    "oven",
    
  ]);

  add([
    sprite("potpanshelf"), 
    pos(700,95),
    area(),
    anchor("center"),
    "potpanshelf",

  ]);

  const hangingpan = add([
    sprite("hangingpan"), 
    pos(718,110),
    area(),
    anchor("center"),
    "hangingpan",

  ]);
  
  add([
    sprite("dishwasher"), 
    pos(732,130),
    area(),
    anchor("center"),
    "dishwasher",

  ]);
  


  add([
    sprite("painting"), 
    pos(347,90),
    area(),
    anchor("center"),
    "painting"
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
    pos(189,75),
    anchor("center"),
    scale(1),
    area({shape: new Rect(vec2(0,-20),10,80)}),
    body(),
 "steve",
    z(500),
  ]);



  steve.onCollide("gamingsetup", (gamingsetup) => {
    textbox.innerHTML = dialogueData.gamingsetup

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

  });

  steve.onCollide("certificate", (certificate) => {
    textbox.innerHTML = dialogueData.certificate

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

  });


  steve.onCollide("couch", (couch) => {
    textbox.innerHTML = dialogueData.couch

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

  });
  
  steve.onCollide("bookshelf", (bookshelf) => {
    textbox.innerHTML = dialogueData.bookshelf

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

  });
    steve.onCollide("desk", (desk) => {
      textbox.innerHTML = dialogueData.desk

      if (textbox.style.display === "none") {
        textbox.style.display = "block";
      } 
      
    });

  steve.onCollide("printer", (printer) => {
    textbox.innerHTML = dialogueData.printer

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

  });
  steve.onCollide("door", (door) => {
    textbox.innerHTML = dialogueData.door

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

  });

  steve.onCollide("tv", (tv) => {
    textbox.innerHTML = dialogueData.tv

    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } 

  });

  // This will run every frame
  onUpdate(() => {


    setCamPos(clamp(steve.pos.x, MIN_CAM_X, MAX_CAM_X), height());

    steve.pos.x = clamp(steve.pos.x, -69, MAX_CAM_X + 100); 
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

if (steve.pos.x > 580){
  if (isMenuDisplayed == false){
    displayMenu()
  }
}
else if (steve.pos.x <= 580){
  let theUi = get("ui")
  // console.log(theUi)
  if (theUi.length > 0){
    destroy(theUi[0])
    isMenuDisplayed = false
  }
}

    if (openPressed == true){
      
    }

    
  }) // end of onupdate

 function displayMenu(){
   isMenuDisplayed = true
   let theUi = get("ui")
   console.log(theUi)
  const ui = add([
    fixed(),
    "ui"
  ])
   
    const openBtn = ui.add([
      rect(24, 10, { radius: 8 }),
      pos(100,10),
      area(),
      scale(1),
      anchor("center"),
      outline(.5),
      color(255, 255, 255),
      // this.onClick(() => {
      //     console.log(`You clicked the ${name}!`);
      //     open()
      //     console.log("open button clicked")
      //     openPressed = true
      // }),
    ]);

    // add a child object that displays the text
      openBtn.add([
      text("Open", {
        size:4,
        align:"center"
      }),
      anchor("center"),
      color(0, 0, 0),
    ]);


     openBtn.onHoverUpdate(() => {
     const t = time() * 10;
       openBtn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7);
       openBtn.scale = vec2(1.2);
     // setCursor("pointer");
   });

   // onHoverEnd() comes from area() component
   // it runs once when the object stopped being hovered
     openBtn.onHoverEnd(() => {
       openBtn.scale = vec2(1);
       openBtn.color = rgb();
   });

  openBtn.onClick(open)


   const closeBtn = ui.add([
     rect(24, 10, { radius: 8 }),
     pos(130,10),
     area(),
     scale(1),
     anchor("center"),
     outline(.5),
     color(255, 255, 255),
   ]);

   // add a child object that displays the text
       closeBtn.add([
     text("Close", {
       size:4,
       align:"center"
     }),
     anchor("center"),
     color(0, 0, 0),
   ]);


      closeBtn.onHoverUpdate(() => {
    const t = time() * 10;
        closeBtn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7);
        closeBtn.scale = vec2(1.2);
    // setCursor("pointer");
   });

   // onHoverEnd() comes from area() component
   // it runs once when the object stopped being hovered
      closeBtn.onHoverEnd(() => {
        closeBtn.scale = vec2(1);
        closeBtn.color = rgb();
   });

     closeBtn.onClick(close)


   
 
}//end of display menu

  
function close(){
    console.log("close button clicked")
    closePressed = true
  
}

function open(){
  console.log("open button clicked")
  openPressed = true
  
}
  
  onClick((obj) => {
    const textbox = document.getElementById("textbox");
    if (textbox.style.display === "block" && textbox.innerHTML == dialogueData.me) {
        textbox.style.display = "none";  // Hide it
    } 
    
    console.log(`Camera Position ${getCamPos().x}`)
    console.log(`Steve Position ${steve.pos.x}`)


      const worldMousePos = mousePos().x + getCamPos().x - width() / 2; // Adjust for camera position
      targetX = worldMousePos; // Store the correct world position

    if (!obj) return; // Ensure the click is on a valid object
    console.log("Clicked tag(s):", obj.tags);
    console.log(obj)

    // Perform actions based on the tag
    // if (obj.is("fridge")) {
    //     console.log("You clicked the fridge!");
    // } else if (obj.is("stove")) {
    //     console.log("You clicked the stove!");
    // } else if (obj.is("sink")) {
    //     console.log("You clicked the sink!");
    // }


    
  });

  steve.onClick(() => {
      // This will run when you click on the player
    textbox.innerHTML = dialogueData.me

    if (textbox.style.display === "block") {
      textbox.style.display = "none";
    } 
    else {
        textbox.style.display = "block";  // Show it
    }

  });

  desk.onClick(() => {
      // This will run when you click on the player
    textbox.innerHTML = dialogueData.desk

    if (textbox.style.display === "block") {
      textbox.style.display = "none";
    } 
    else {
        textbox.style.display = "block";  // Show it
    }

  });

  printer.onClick(() => {
      // This will run when you click on the player
    textbox.innerHTML = dialogueData.printer

    if (textbox.style.display === "block") {
      textbox.style.display = "none";
    } 
    else {
        textbox.style.display = "block";  // Show it
    }

  });

  bookshelf.onClick(() => {
      // This will run when you click on the player
    textbox.innerHTML = dialogueData.printer

    if (textbox.style.display === "block") {
      textbox.style.display = "none";
    } 
    else {
        textbox.style.display = "block";  // Show it
    }

  });

  door.onClick(() => {
      // This will run when you click on the player
    textbox.innerHTML = dialogueData.door

    if (textbox.style.display === "block") {
      textbox.style.display = "none";
    } 
    else {
        textbox.style.display = "block";  // Show it
    }

  });

  certificate.onClick(() => {
      // This will run when you click on the player
    textbox.innerHTML = dialogueData.certificate

    if (textbox.style.display === "block") {
      textbox.style.display = "none";
    } 
    else {
        textbox.style.display = "block";  // Show it
    }

  });

  tv.onClick(() => {
      // This will run when you click on the player
    textbox.innerHTML = dialogueData.tv

    if (textbox.style.display === "block") {
      textbox.style.display = "none";
    } 
    else {
        textbox.style.display = "block";  // Show it
    }

  });


 
  
  fridge.onClick(() => {
    debug.log("clicked on fridge")
    console.log(" clicked on fridge")

   

    
    if (openPressed == true){

      let theFridge = get("fridge")
      // console.log(theUi)
      if (theFridge.length > 0){
        destroy(theFridge[0])
      }

      
      const fridgeopen = add([
        sprite("fridgeopen"), 
          pos(639,115),
          area(),
          anchor("center"),
          "fridgeopen",
          scale(1.5),
      ]);


      openPressed = false
    }
    
  
    
  }); //end of fridge on click

  fridgeopen.onClick(() => {
    console.log("fridge open clicked")
    
    

    
   if (closePressed == true){

      let theOpenFridge = get("fridgeopen")
      console.log(theOpenFridge)
      if (theOpenFridge.length > 0){
        destroy(theOpenFridge[0])
      }
     
      const fridge = add([
        sprite("fridge"), 
          pos(650,115),
          area(),
          anchor("center"),
          "fridge",
          scale(1.5),
      ]);
      
      closePressed = false
    }

  });




  
  // onKeyPress("t", ()=>{
  //    let theUi = get("ui")
  //    console.log(theUi)
  // })


  steve.onCollideEnd("desk", (a) => {
    textbox.style.display = "none";
  });
  steve.onCollideEnd("couch", (a) => {
    textbox.style.display = "none";
  });
  steve.onCollideEnd("bookshelf", (a) => {
    textbox.style.display = "none";
  });
  steve.onCollideEnd("gamingsetup", (a) => {
    textbox.style.display = "none";
  });
  steve.onCollideEnd("printer", (a) => {
    textbox.style.display = "none";
  });
  steve.onCollideEnd("door", (a) => {
    textbox.style.display = "none";
  });
  steve.onCollideEnd("certificate", (a) => {
    textbox.style.display = "none";
  });
  steve.onCollideEnd("tv", (a) => {
    textbox.style.display = "none";
  });

// steve.trigger("click")// not working
  
  on("start", "steve", () => {
    textbox.innerHTML = dialogueData.me

    if (textbox.style.display === "block") {
      textbox.style.display = "none";
    } 
    else {
        textbox.style.display = "block";  // Show it
    }
  });


    steve.trigger("start");
  
// go("gameOver")

})