const scaleFactor = 5;

const dialogueData = {
  desk: `<p>This is my PC. I work mostly in Python these days for my backend development work but I've made few games in JavaScript and GDScript. Anyway regardless of the language, I just like programming.<br>
Here is my <a href="https://github.com/sfranz2422" target="_blank">Github</a> and <a href="https://www.linkedin.com/in/steve-j-franz-3538942b/" target="_blank">LinkedIn</a></p>`,
  tv: `<p>This is my TV.  I like to play PC and Switch games.  I'm actually the esports coach at my school.</p>`,
certificate: `<p>These are some of my certifications. I've worked in some type of help desk and school most of my career. I'm <a href="https://www.credly.com/badges/4f5bd321-c138-440b-b4a5-92368334f3e0/public_url" target="_blank">Comptia A+</a> certified and previously I was Cisco CCNA certified.  As far as teaching goes, I'm certified to teach math in grades 7-12, previously I taught a college in high school Calculus class.</p>`,
couch: `<p>That's my couch. I like to relax here and watch YouTube and CSI reruns with my wife.</p>`,
printer: `<p>This is my resume. <a href="https://github.com/sfranz2422/resume/blob/main/2025%20Masters%20Resume.pdf" target="_blank">Check it out.</a>
  Contact me at <a href="mailto:stephenfranz22@gmail.com">stephenfranz22@gmail.com</a> if you have any interesting job opportunities!</p>`,
gamingsetup: `<p>I started learning to code when I was 12 years old because I wanted to make my own video games.  My first game was made with BASIC on a Commodore 64!  This portfolio is made with Kaboom.js a JavaScript library for making games.  I've also make games with <a target="_blank" href="https://thefranz.itch.io/">p5play</a> and Godot.   In fact, I created <a href="https://syntaxgym.replit.app/">Syntax Gym</a>, a web-based platform for teaching syntax.  On top of that, I've made an entire site, called <a target="_blank" href="https://quizplayground.replit.app/">Quiz Playground</a> that incorporates formative assessment with games I've made with Godot.</p>`,
bookshelf: `<p>There are a lot of programming and web development books on my shelves in addition to science fiction and fantasy.  Speaking of web development, <a target="_blank" href="https://redlawns.com/">here is a website</a> I recently made for a client. I built Red Leaf's website using Flask for a scalable backend.`,
door: `<p>If you want to exit my portfolio, just close the tab.</p>`,
me:`<p>Welcome to my interactive portfolio! <br>In this 2D world, you can explore a virtual version of my house, where each object offers a bit of insight into my work. To begin your journey, simply click anywhere in the room to move. You\’ll be able to interact with various objects along the way. When you move me in front of an object, a short description will pop up, sharing more about it and about me!</p>`,

};



kaplay({
    // fullscreen:true,
  scale:scaleFactor,
  width:240,
  height:96,
   touchToMouse: true,
   canvas: document.getElementById("game"),
  debug:true,
  // debug: false, // set to false once ready for production

})

 


