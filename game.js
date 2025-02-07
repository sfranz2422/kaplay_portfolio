loadSprite("back", "/port4.png");
loadSprite("desk", "/desk.png");


scene("game",() =>{


add([
      sprite("back"), // sprite() component makes it render as a sprite
      // pos(120, 80), // pos() component gives it position, also enables movement
      // rotate(0), // rotate() component gives it rotation
      // anchor("center"), // anchor() component defines the pivot point (defaults to "topleft")
  ]);


  //   add([
  //   text("coin dash"),
  //   pos(24, 24),
  // ])

  add([
      sprite("desk"), 
    pos(40,75),
    anchor("center")
  ]);
  
// go("gameOver")

})