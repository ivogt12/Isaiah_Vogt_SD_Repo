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
const rowEl = document.getElementById('row')
const marbleEl = document.getElementsByClassName('mar')
marbleArr = []
for(let i = 0; i < marbleEl.length; i++){
    marbleArr.push(marbleEl[i])
}
// const newArr = []
// for(let i = 0; i < marbleArr.length; i+= 4){
//     const segment = marbleArr.slice(i, i + 4)
//     newArr.push(segment)
// }
// console.log(newArr)


/*----classes----*/

class EachCell {
    constructor(domElement) {
        this.domElement = domElement
        this.marbleEl = marbleEl
    }
    render() {
        for( let i = 0; i < rowEl.children.length; i++) {
            let id = rowEl.children[i].id[4]
            let idx = Number(id)
            rowEl.children[i].innerText = this.renderLookup[i]
        }
    }
}

class MancalaGame{
    constructor(rowEl) {
        this.rowEl = rowEl
        this.cellEl = [...rowEl.querySelectorAll('div')]
        this.playerEach = new EachCell(this.rowEl)
        
        
        this.rowEl.addEventListener('click', evt => {
            let newArr = evt.target.children //htmlcol of marbles
            let loopArr = [...newArr]

            let loopLeng = loopArr.length
            let pocket0El = document.getElementById('pocket0')
            let pocket1El = document.getElementById('pocket1')
            
            loopArr.forEach((item, idx)=>{
                // let destEl = document.getElementById('cell' + evt.target.id[4])
                let num = Number(evt.target.id[4])
                let num1 = num + (idx + 1)
                let nextSib = document.getElementById('cell' + (num1.toString()))

                if (num1 === 2 || num1 === 3){

                    num1 = (num + idx + 9)
                    if(num1 >= 12 ) {
                        num1 = 0
                    }
                    console.log(num1)

                    console.log('hi')

                    if(evt.target.id[4] === '1' && num1 === 10){
                        
                        nextSib = document.getElementById('cell' + (num1.toString()))
                        nextSib.appendChild(item)

                        if (loopArr.length > 3 && num >=2 && idx === loopArr.length - 1 || loopArr.length > 4 && num >= 1 && idx === loopArr.length - 1 || loopArr.length > 5 && num >= 0 && idx === loopArr.length - 1){
                            pocket1El.appendChild(item)
                            }
                        }
                    else if(num1 === 11){
                        console.log('hey')
                        nextSib = document.getElementById('cell' + (num1.toString()))
                        nextSib.appendChild(item)
                        if (loopArr.length > 3 && num >=2 && idx === loopArr.length - 1 || loopArr.length > 4 && num >= 1 && idx === loopArr.length - 1 || loopArr.length > 5 && num >= 0 && idx === loopArr.length - 1){
                            pocket1El.appendChild(item)
                    }   

                    }
                }

                }
                else if(num1 > 4 || num1 > 1 || num1 < 2){
                    console.log('yp')
                    nextSib.appendChild(item)

                    if (loopArr.length > 3 && num >=2 && idx === loopArr.length - 1 || loopArr.length > 4 && num >= 1 && idx === loopArr.length - 1 || loopArr.length > 5 && num >= 0 && idx === loopArr.length - 1){
                        pocket0El.appendChild(item)
                    }
                    
                }
            })
        })
    }
}
    
// if id.length > 4, evt.target.id[5]
//getElementById('cell`{toString(id + 10)}`')
//`${}`

    // play() {
    //     this.turn = 1
    //     this.winner = null
    // }
    // }
/*----- functions -----*/
function init() {
    game = new MancalaGame(rowEl)
}

/*----- init -----*/
init()