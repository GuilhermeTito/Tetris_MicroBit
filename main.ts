let x = 0
let y = 0
let ponto = {0 : game.createSprite(x, y + 1),
             1 : game.createSprite(x + 1, y + 1),
             2 : game.createSprite(x + 1, y) }
let t = 0
basic.forever(function(){
    if(t % 10 == 0){
        ponto[0].setX(x)
        ponto[0].setY(y + 1)
        ponto[1].setX(x + 1)
        ponto[1].setY(y + 1)
        ponto[2].setX(x + 1)
        ponto[2].setY(y)
        y++
        if (y > 3) {
            y = 0
            x++
        }
        if(x > 3)
        {
            x = 0
        }
    }
    t++
})