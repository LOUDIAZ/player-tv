let playerState = "idle";
const dropdown= document.getElementById("animations");
dropdown.addEventListener("change", function(e){
    playerState = e.target.value;
})
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;

const playerImage = new Image();
playerImage.src = "skeleton.png";
const spriteWidth = 329;
const spriteHeight = 222;

let gameFrame = 0;
const staggerFrames = 3;
const spriteAnimations = [];
const animationStates = [
    {
        name: "idle",
        frames: 21,
    },
    {
        name: "run",
        frames: 13,
    },
    {
        name: "jump",
        frames: 11,
    },
    {
        name: "fall",
        frames: 11,
    },
    {
        name: "ko",
        frames: 21,
    },
    {
        name: "dizzy",
        frames: 21,
    },
    {
        name: "getHit",
        frames: 11,
    },
    {
        name: "attackA",
        frames: 16,
    },
    {
        name: "attackB",
        frames: 16,
    },
    {
        name: "attackC",
        frames: 21,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 80, 80, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();