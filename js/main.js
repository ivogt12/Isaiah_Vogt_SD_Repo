/*------ state variables -----*/
let turn, board, winner



/*----- cached element references -----*/
const h1El = document.querySelector('h1')
const rowEl = document.getElementById('row')
const marbleEl = document.getElementsByClassName('mar')
/*----classes----*/

class MancalaGame{
    constructor(rowEl, h1El) {
        this.h1El = h1El
        this.rowEl = rowEl
        const cells = document.getElementsByClassName('marble')
        let cellArr = [...cells]
        let pocket0El = document.getElementById('pocket0')
        let pocket1El = document.getElementById('pocket1')
        let pocket0Size = pocket0El.children.length
        let pocket1Size = pocket1El.children.length


        this.rowEl.addEventListener('click', evt => {
            let newArr = evt.target.children //htmlcol of marbles
            let loopArr = [...newArr]
            let idOfArray = Number(evt.target.id)
            
            loopArr.forEach((item, idx)=>{
                const n = cellArr.length
                let index = (idx + idOfArray) + 1
                let nextSib = cellArr[(index % n + n) % n]

                if(loopArr.length > 5 && loopArr.length < 13 && idOfArray === 0 && idx === loopArr.length - 1 || loopArr.length > 4 && loopArr.length < 12 && idOfArray === 1 && idx === loopArr.length - 1
                    ||loopArr.length > 3 && loopArr.length < 11 && idOfArray === 2 && idx === loopArr.length - 1 || loopArr.length > 2 && loopArr.length < 10 && idOfArray === 3 && idx === loopArr.length - 1 ||
                        loopArr.length > 1 && loopArr.length < 9 && idOfArray === 4 && idx === loopArr.length - 1 || loopArr.length > 0 && loopArr.length < 8 && idOfArray === 5 && idx === loopArr.length - 1){
                        
                        pocket0El.appendChild(item)

                     }else if(loopArr.length > 5 && loopArr.length < 13 && idOfArray === 6 && idx === loopArr.length - 1 || loopArr.length > 4 && loopArr.length < 12 && idOfArray >= 7 
                                && idx === loopArr.length - 1||loopArr.length > 3 && loopArr.length < 11 && idOfArray === 8 && idx === loopArr.length - 1 || loopArr.length > 2 && loopArr.length < 10 
                                && idOfArray === 9 && idx === loopArr.length - 1 || loopArr.length > 1 && loopArr.length < 9 && idOfArray === 10 && idx === loopArr.length - 1 || loopArr.length > 0 
                                && loopArr.length < 8 && idOfArray === 11 && idx === loopArr.length - 1){
                    
                        pocket1El.appendChild(item)
                    
                    }else if(idOfArray === 0 && loopArr.length > 12 || idOfArray === 1 && loopArr.length > 11 || idOfArray === 2 && loopArr.length > 10 || idOfArray === 3 && loopArr.length > 9 
                                || idOfArray === 4 && loopArr.length > 8 || idOfArray === 5 && loopArr.length > 7){
                        if(idx === loopArr.length - 2){

                            pocket1El.appendChild(item)
                        } else if(idx === loopArr.length - 1){

                            pocket0El.appendChild(item)
                        } else nextSib.appendChild(item)
                    }else if(idOfArray === 6 && loopArr.length > 12 || idOfArray === 7 && loopArr.length > 11 || idOfArray === 8 && loopArr.length > 10 || idOfArray === 9 && loopArr.length > 9 
                                || idOfArray === 10 && loopArr.length > 8 || idOfArray === 11 && loopArr.length > 7){
                        if(idx === loopArr.length - 2){

                            pocket0El.appendChild(item)
                        } else if(idx === loopArr.length - 1){
    
                            pocket1El.appendChild(item)
                            } else nextSib.appendChild(item)
                        }
                else nextSib.appendChild(item)
            })
            this.turn *= -1
            this.winner = this.getWinner(pocket0Size, pocket0Size)
            this.render()
            console.log(cells.length)
            
        })
    }
    play() {
        this.turn = 1
        this.winner = null
        this.render()
    }
    getWinner(el0, el1){
        if (el0 > el1)
            return 1
         else if(el0 > el1)
            return 2
        else return null
    }   
    render(){
       if(this.winner !== null){
            this.h1El.innerHTML = `Player ${this.winner === 1 ? 1 : 2} Wins!`
        } else{
            this.h1El.innerHTML = `Player ${this.turn === 1 ? 1 : 2}'s Turn`
        }
    }
    
    
}

    
/*----- functions -----*/
function init() {
    game = new MancalaGame(rowEl, h1El)
    game.play()
}

/*----- init -----*/
init()