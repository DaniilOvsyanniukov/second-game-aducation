class GameScene extends Phaser.Scene{
    constructor() {
        super('Game');

    }
    init() {
        this.cursors = this.input.keyboard.createCursorKeys();
        
    }
    create() {
        this.createBackgtound();
        this.player = new Player(this);
        this.enemies = new Enemies(this);
        this.enemies.createEnemy();
        this.enemies.createEnemy();
        this.enemies.createEnemy();
    }

    update() {
        this.bg.tilePositionX += 0.5;
        this.player.move();
        // this.enemy.move();
    }
    createBackgtound() {
            this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'bg').setOrigin(0);

    }

}