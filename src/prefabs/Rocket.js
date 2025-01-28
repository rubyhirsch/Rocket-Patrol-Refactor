class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        this.isFiring = false
        this.moveSpeed = 2
        this.sfxShot = scene.sound.add('sfx-shot')

        // MOD 5 - Implement mouse control for player movement and left mouse click to fire
        // mouse input for movement and firing
        scene.input.on('pointermove', this.handleMouseMove, this) // Mouse movement
        scene.input.on('pointerdown', this.handleMouseFire, this) // Mouse firing
    }

    update() {
        // if the mouse input isnt firing then for keyboard
        if (!this.isFiring) {
            if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed
            }
        }
        // when the keyboard fires
       if (Phaser.Input.Keyboard.JustDown(keyFIRE) && !this.isFiring) {
            this.isFiring = true
            this.sfxShot.play()
        }

        // move the rocket upwards if it fires
        if (this.isFiring && this.y >= borderUISize + 3 * borderPadding) {
            this.y -= this.moveSpeed
        }

        // reset rocket on miss
        if (this.y <= borderUISize + 3 * borderPadding) {
            this.reset();
        }
    }

    // handling the mouse movement
    handleMouseMove(pointer) {
        if (!this.isFiring) {
            // update horizontal 
            this.x = Phaser.Math.Clamp(
                pointer.worldX, 
                borderUISize + this.width, 
                game.config.width - borderUISize - this.width
            );
        }
    }

    // handling the mouse firing
    handleMouseFire(pointer) {
        if (!this.isFiring) {
            this.isFiring = true
            this.sfxShot.play()
        }
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding
    }
}

