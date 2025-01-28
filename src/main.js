// Name: Ruby Hirsch
// Date: 1/24/25
//Mods done
// (1 point) >> high score COMPLETE
// (5 point) >> small spaceship COMPLETE
// (1 point) >> made faster COMPLETE
// (3 points) working on timer not done yet >> COMPLETE
// (5 points) >> mouse control for movement >> COMPLETE
// (3 points) >> in progress >> change title screen n stuff


let config = {
    type: Phaser.AUTO,
    width: 640, 
    height: 480,
    scene: [Menu, Play ]
}

let game = new Phaser.Game(config);

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
