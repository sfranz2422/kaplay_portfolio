// steve.onPhysicsResolve(() => {
//   // Set the viewport center to player.pos
// setCamPos(steve.pos.x, height());
// });

// onKeyDown("right", () => {
//   // steve.play("run")
//   steve.move(SPEED, 0);
//     steve.flipX = false;
//   if (steve.isGrounded() && steve.curAnim() !== "run"){
//     steve.play("run")
//   }

// });

// onKeyDown("left", () => {
//   // steve.play("run")
//   steve.move(-SPEED, 0);
//     steve.flipX = true;
//   if (steve.isGrounded() && steve.curAnim() !== "run"){
//     steve.play("run")
//   }

  // onKeyRelease('left', ()=>{
  //   if(steve.isGrounded() && !isKeyDown("left") && !isKeyDown("right")){
  //     steve.play("idle")
  //   }
  // })

  // onKeyRelease('right', ()=>{
  //   if(steve.isGrounded() && !isKeyDown("left") && !isKeyDown("right")){
  //     steve.play("idle")
  //   }
  // })


// onUpdate(() => {
//   if (targetPos) {
//       const dir = targetPos.sub(player.pos);
//       if (dir.len() > 5) { // Stop moving if close enough
//           player.move(dir.unit().scale(speed));
//       } else {
//           targetPos = null; // Stop moving when reached
//       }
//   }
// });