
class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene")
    }
  
    preload() {
      // load images/tile sprites
      this.load.image('rocket', './assets/rocket.png')
      this.load.image('spaceship', './assets/spaceship.png')
      this.load.image('starfield', './assets/starfield.png')
      // Mod (5) - Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points
      this.load.image('smallSpaceship', './assets/smallSpaceship.png')
      // load spritesheet
      this.load.spritesheet('explosion', './assets/explosion.png', {
        frameWidth: 64,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 9
      })
      // load audio
      this.load.audio('sfx-select', './assets/sfx-select.wav')
      // Mod 3 - Create 4 new explosion sound effects and randomize which one plays on impact
      this.load.audio('sfx-explosion1', './assets/sound.wav')
      this.load.audio('sfx-explosion2', './assets/soundz.wav')
      this.load.audio('sfx-explosion3', './assets/sound2.wav')
      this.load.audio('sfx-explosion4', './assets/sound3.wav')
      this.load.audio('sfx-shot', './assets/sfx-shot.wav')
    }
  
    create() {
      // animation configuration
      this.anims.create({
        key: 'explode',
        frames: this.anims.generateFrameNumbers('explosion', {
          start: 0,
          end: 9,
          first: 0
        }),
        frameRate: 30
      });

      // MOD - 
  
      let menuConfig = {
        fontFamily: 'Impact',
        fontSize: '28px',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        align: 'right',
        padding: {
          top: 3,
          bottom: 4
        },
        fixedWidth: 0
      };


      let diffColor = {
        fontFamily: 'Impact',
        fontSize: '28px',
        backgroundColor: '#ED6B6B',
        color: '#8E2828',
        align: 'right',
        padding: {
          top: 3,
          bottom: 4
        },
        fixedWidth: 0
      };

    

  
  
      // display menu text
      this.add.text(game.config.width / 1.5, game.config.height / 4 - borderUISize - borderPadding, ' ROCKET PATROL ', diffColor).setOrigin(0.5);
      this.add.text(game.config.width / 2.75, game.config.height / 4, ' Use ←→ arrows to move & (F) to fire ', menuConfig).setOrigin(0.5);
      //menuConfig.backgroundColor = '#00FF00';
     // menuConfig.color = '#000';

      this.add.text(game.config.width / 2, game.config.height / 4 + borderUISize + borderPadding, ' Press ← for Novice or → for Expert ', diffColor).setOrigin(0.5);
      diffColor.backgroundColor = '#00FF00';
      diffColor.color = '#000';

      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

      // Mod 1 point, create high score
      this.add.text(game.config.width / 6 , game.config.height / 6.3 + borderUISize * 4, ` High Score: ${game.highScore || 0} `, menuConfig).setOrigin(0.5);
    }
  
    update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000
        }
        this.sound.play('sfx-select')
        this.scene.start('playScene')
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 45000
        }
        this.sound.play('sfx-select')
        this.scene.start('playScene')
      }
    }
  }



/*this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("playScene");
        */