/*-----constants-----*/
const Players = {
    '1': {
        name: 'Player 1',
        color: 'blue'
    },
    '-1' : {
        name: 'Player 2',
        color: 'red'
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
    static renderLookup = {
        '0': '4',
        '1': '4',
        '2': '4',
        '3': '4',
        '4': '4',
        '5': '4',
        '6': '4',
        '7': '4',
        '8': '4',
        '9': '4',
        '10': '4',
        '11': '4',
        'null': '0'
    }
    initialize(cb) {
        this.domElement.innerText = EachCell.renderLookup[cb]
    }
    render(c, idx) {
        this.domElement[idx].innerText = 0
        if (idx + c <= 11 ){
            for (i = idx; i <= this.domElement[idx + c]; i++) {
                this.domElement[i].innerText +=  1
            }
        } else{

        }
        
    }
}

class MancalaGame{
    constructor(rowEl) {
        this.rowEl = rowEl

        this.cellEl = [...rowEl.querySelectorAll('div')]

        this.cellEl.forEach((evt) => {
            const idx = this.cellEl.indexOf(evt)
            return this.initialize(idx)
        })

        this.rowEl.addEventListener('click', evt => {
                const content = evt.target.innerText
                const idx = evt.target.idx
                return this.render(content, idx)
            })
    }


    play() {
        this.turn = 1
        this.winner = null
    }
    initialize(cb) {
        this.playerEach = new EachCell(this.cellEl[cb])
        this.playerEach.initialize(cb)
    }
    render(content, idx) {
        this.playerEach = new EachCell(this.cellEl[idx])
        this.playerEach.render(content, idx)
    }
}







/*----- functions -----*/





function init() {
    game = new MancalaGame(rowEl)
}

/*----- init -----*/
init()