/*-----constants-----*/
const Players = {
    '1': {
        name: 'Player 1',
    },
    '-1' : {
        name: 'Player 2',
    }
    
}   


/*------ state variables -----*/
let turn, board, winner



/*----- cached element references -----*/
const h1El = document.querySelector('h1')
const boardEl = document.getElementById('board')
const rowEl = document.getElementById('row')
/*----- event listeners -----*/



/*----classes----*/

class EachCell {
    constructor(domElement) {
        this.domElement = domElement
        this.value = null
    }
    renderLookup = {
        5: 4,
        4: 4,
        3: 4,
        2: 4,
        1: 4,
        0: 4,
        6: 4,
        7: 4,
        8: 4,
        9: 4,
        10: 4,
        11: 4,
        
    }
    initialize() {
        this.domElement.innerText = this.renderLookup[this.value]
    }
    render(c) {
    
        if (c >= 0){
            for (let i = 0; i < c; i++) {
                this.value += 1
                this.renderLookup[this.value] += 1
                console.log(this.value)
                console.log(this.renderLookup[this.value])
                this.initialize()
            }
        } else{

        }
        this.renderLookup[this.value] = '0'
        this.initialize()
    }
}

class MancalaGame{
    constructor(rowEl) {
        this.rowEl = rowEl

        this.cellEl = [...rowEl.querySelectorAll('div')]
        
        this.cellEl.forEach((evt) => {
            this.playerEach = new EachCell(evt)
            let idx = this.cellEl.indexOf(evt)
            this.playerEach.value = idx
            this.playerEach.initialize()
        })
        
        
        
        this.rowEl.addEventListener('click', evt => {
            this.playerEach = new EachCell(evt.target)
            let content = evt.target.innerText
            let idx = evt.target.id[4]
            let idx1 = Number(idx)
            this.playerEach.value = idx1
            this.playerEach.render(content)
            })
    }


    play() {
        this.turn = 1
        this.winner = null
    }
}







/*----- functions -----*/





function init() {
    game = new MancalaGame(rowEl)
}

/*----- init -----*/
init()