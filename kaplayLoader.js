const scaleFactor = 5;

const dialogueData = {
  desk: `This is my PC. I work mostly in Python these days for my backend development work but I've made few games in JavaScript and GDScript. Anyway regardless of the language, I just like programming.<br>
Here is my <a href="https://github.com/sfranz2422" target="_blank">Github</a> and <a href="https://github.com/sfranz2422" target="_blank">LinkedIn</a>`,
certificates: `These are some of my certifications. I've worked in some type of help desk most of my career, at different schools and at a University. I'm Comptia A+ certified and previously I was Cisco CCNA certified`,
couch: `That's my couch. I like to relax here and watch YouTube and CSI reruns.`,
resume: `This is my resume. <a href="" target="_blank">Check it out.</a>
  Contact me at stephenfranz22@gmail.com if you have any interesting job opportunities!`,
gamingsetup: `I started learning to code when I was 12 years old because I wanted to make my own video games.  My first game was made with BASIC on a Commodore 64!  This portfolio is made with Kaboom.js a JavaScript library for making games.  I've also make games with <a href="http://www.google.com">p5play</a> and Godot.  Actually I've made an entire site, called <a href="https://quizplayground.com/">Quiz Playground</a> that incorporates formative assessment with gaming.`,
bookshelf: `There are a lot of programming and web development books on my shelves in addition to science fiction and fantasy.  Speaking of web development, here is a website I've made for a client recently. I built Red Leaf's website using Flask for a scalable backend.`,
door: `If you want to exit my portfolio, just close the tab.`,
me:`<p>Welcome to my interactive portfolio! <br>In this 2D world, you can explore a virtual version of my house, where each object offers a bit of insight into my work. To begin your journey, simply click anywhere in the room to move. You\’ll be able to interact with various objects along the way. When you move me in front of an object, a short description will pop up, sharing more about it and about me!</p>`
};



kaplay({
    // fullscreen:true,
  scale:scaleFactor,
  width:240,
  height:96,
   touchToMouse: true,
   canvas: document.getElementById("game"),
  // debug: false, // set to false once ready for production

})

 


