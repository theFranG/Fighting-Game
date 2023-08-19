function rectangularCollision({ rectagle1, rectagle2 }) {
    return (
        rectagle1.attackBox.position.x + rectagle1.attackBox.width >= rectagle2.position.x &&
        rectagle1.attackBox.position.x <= rectagle2.position.x + rectagle2.width &&
        rectagle1.attackBox.position.y + rectagle1.attackBox.height >= rectagle2.position.y &&
        rectagle1.attackBox.position.y <= rectagle2.position.y + rectagle2.height)
}

function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Tie'
    } else if (player.health > enemy.health) {
        document.querySelector('#displayText').innerHTML = 'PLAYER 1 WINS'
    } else if (player.health < enemy.health) {
        document.querySelector('#displayText').innerHTML = 'PLAYER 2 WINS'
    }
}

let timer = 60
let timerId
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    }
    if (timer === 0) {
        determineWinner({ player, enemy })
    }

}