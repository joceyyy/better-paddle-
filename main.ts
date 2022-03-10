namespace SpriteKind {
    export const left_paddle = SpriteKind.create()
    export const right_paddle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.left_paddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.right_paddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
function create_right_paddle () {
    right_paddle = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.setStayInScreen(true)
    right_paddle.right = 160
}
function create_left_paddle () {
    left_paddle = sprites.create(img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b f 4 4 4 4 4 e e b b f . 
        . . f e f b d d d e 4 4 4 f . . 
        . . e 4 c d d d d e 4 4 e f . . 
        . . e f b b d b d d e e f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.setStayInScreen(true)
    left_paddle.left = 0
}
function create_ball () {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . . . . f 3 3 3 f 3 3 3 f . . . 
        . . . . f 3 3 3 3 3 1 3 f . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . . . f 3 b b b 3 f . . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
