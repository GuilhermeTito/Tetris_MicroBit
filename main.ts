class tetramino_meioI {
    x: number
    y: number
    p0: game.LedSprite
    p1: game.LedSprite

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.p0 = game.createSprite(this.x, this.y)
        this.p1 = game.createSprite(this.x, this.y + 1)
    }
}

class tetramino_O
{
    x : number
    y : number
    p00: game.LedSprite
    p01: game.LedSprite
    p10: game.LedSprite
    p11: game.LedSprite
    
    constructor(x : number, y : number)
    {
        this.x = x
        this.y = y
        this.p00 = game.createSprite(this.x, this.y)
        this.p01 = game.createSprite(this.x + 1, this.y)
        this.p10 = game.createSprite(this.x, this.y + 1)
        this.p11 = game.createSprite(this.x + 1, this.y + 1)
    }
}

class tetramino_curtoL {
    x: number
    y: number
    p00: game.LedSprite
    p01: game.LedSprite
    p10: game.LedSprite

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.p00 = game.createSprite(this.x, this.y)
        this.p01 = game.createSprite(this.x + 1, this.y)
        this.p10 = game.createSprite(this.x, this.y + 1)
    }
}

class tetramino_curtoJ {
    x: number
    y: number
    p00: game.LedSprite
    p01: game.LedSprite
    p11: game.LedSprite

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.p00 = game.createSprite(this.x, this.y)
        this.p01 = game.createSprite(this.x + 1, this.y)
        this.p11 = game.createSprite(this.x + 1, this.y + 1)
    }
}

let i = new tetramino_meioI(0, 0)
let o = new tetramino_O(3, 0)
let l = new tetramino_curtoL(0 , 3)
let j = new tetramino_curtoJ(3, 3)
