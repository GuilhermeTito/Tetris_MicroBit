// Classes

class tetramino_meioI
{
    congelado : boolean
    x: number
    y: number
    p0: game.LedSprite
    p1: game.LedSprite

    constructor(x: number, y: number)
    {
        this.congelado = false
        this.x = x
        this.y = y
        this.p0 = game.createSprite(this.x, this.y)
        this.p1 = game.createSprite(this.x, this.y + 1)
    }

    descer()
    {
        if(this.congelado == false)
        {
            this.p0.setY(this.p0.y() + 1)
            this.p1.setY(this.p1.y() + 1)
            if (this.p0.y() == 4 || this.p1.y() == 4)
            {
                this.congelar()
            }
        }
    }

    congelar()
    {
        this.congelado = true
    }

    deletar() {
        this.p0.delete()
        this.p1.delete()
    }
}

class tetramino_O
{
    congelado : boolean
    x : number
    y : number
    p00: game.LedSprite
    p01: game.LedSprite
    p10: game.LedSprite
    p11: game.LedSprite
    
    constructor(x : number, y : number)
    {
        this.congelado = false
        this.x = x
        this.y = y
        this.p00 = game.createSprite(this.x, this.y)
        this.p01 = game.createSprite(this.x + 1, this.y)
        this.p10 = game.createSprite(this.x, this.y + 1)
        this.p11 = game.createSprite(this.x + 1, this.y + 1)
    }

    descer()
    {
        if(this.congelado == false)
        {
            this.p00.setY(this.p00.y() + 1)
            this.p01.setY(this.p01.y() + 1)
            this.p10.setY(this.p10.y() + 1)
            this.p11.setY(this.p11.y() + 1)
            if (this.p00.y() == 4 || this.p01.y() == 4 ||
                this.p10.y() == 4 || this.p11.y() == 4)
            {
                this.congelar()
            }
        }
    }

    congelar()
    {
        this.congelado = true
    }

    deletar()
    {
        this.p00.delete()
        this.p01.delete()
        this.p10.delete()
        this.p11.delete()
    }
}

class tetramino_curtoL
{
    congelado : boolean
    x: number
    y: number
    p00: game.LedSprite
    p01: game.LedSprite
    p10: game.LedSprite

    constructor(x: number, y: number)
    {
        this.congelado = false
        this.x = x
        this.y = y
        this.p00 = game.createSprite(this.x, this.y)
        this.p01 = game.createSprite(this.x + 1, this.y)
        this.p10 = game.createSprite(this.x, this.y + 1)
    }

    descer()
    {
        if(this.congelado == false)
        {
            this.p00.setY(this.p00.y() + 1)
            this.p01.setY(this.p01.y() + 1)
            this.p10.setY(this.p10.y() + 1)
            if (this.p00.y() == 4 || this.p01.y() == 4 ||
                this.p10.y() == 4)
            {
                this.congelar()
            }
        }
    }
    
    congelar()
    {
        this.congelado = true
    }

    deletar() {
        this.p00.delete()
        this.p01.delete()
        this.p10.delete()
    }
}

class tetramino_curtoJ
{
    congelado : boolean
    x: number
    y: number
    p00: game.LedSprite
    p01: game.LedSprite
    p11: game.LedSprite

    constructor(x: number, y: number)
    {
        this.congelado = false
        this.x = x
        this.y = y
        this.p00 = game.createSprite(this.x, this.y)
        this.p01 = game.createSprite(this.x + 1, this.y)
        this.p11 = game.createSprite(this.x + 1, this.y + 1)
    }

    descer()
    {
        if(this.congelado == false)
        {
            this.p00.setY(this.p00.y() + 1)
            this.p01.setY(this.p01.y() + 1)
            this.p11.setY(this.p11.y() + 1)
            if (this.p00.y() == 4 || this.p01.y() == 4 ||
                this.p11.y() == 4) {
                this.congelar()
            }
        }
    }

    congelar()
    {
        this.congelado = true
    }

    deletar() {
        this.p00.delete()
        this.p01.delete()
        this.p11.delete()
    }
}

// Funções

function novoTetramino() {
    let num = Math.randomRange(1, 4)
    if (num == 1) {
        return new tetramino_meioI(0, 0)
    }
    if (num == 2) {
        return new tetramino_O(0, 0)
    }
    if (num == 3) {
        return new tetramino_curtoL(0, 0)
    }
    else {
        return new tetramino_curtoJ(0, 0)
    }
}

// "Main"

let tetramino = novoTetramino()

input.onButtonPressed(Button.A, ()=>
{
    tetramino.descer()
})

basic.forever(()=>
{
    if(tetramino.congelado == true)
    {
        tetramino.deletar()
        tetramino = novoTetramino()
    }
})