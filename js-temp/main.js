/*------ state variables -----*/
let turn = 1
let winner = null


/*----- cached element references -----*/
const h1El = document.querySelector('h1')
const rowEl = document.getElementById('row')
const marbleEl = document.getElementsByClassName('mar')
const playBtn = document.querySelector('button')

const cells = document.getElementsByClassName('marble')
let cellArr = [...cells]
let pocket0El = document.getElementById('pocket0')
let pocket1El = document.getElementById('pocket1')
let row1El = document.getElementsByClassName('row1')
const row2El = document.getElementsByClassName('row2')
let row1 = [...row1El]
let row2 = [...row2El]
console.log(row1)

playBtn.addEventListener('click', init)
function init(){
    render()
    rowEl.addEventListener('click', evt => {
        let newArr = evt.target.children //htmlcol of marbles
        let loopArr = [...newArr]
        let idOfArray = Number(evt.target.id)


        loopArr.forEach((item, idx)=>{
        const n = cellArr.length
        let index = (idx + idOfArray) + 1
        let nextSib = cellArr[(index % n + n) % n]
            
        if(loopArr.length > 5 && loopArr.length < 13 && idOfArray === 0 && idx === loopArr.length - 1 || loopArr.length > 4 && loopArr.length < 12 && idOfArray === 1 && idx === loopArr.length - 1
            ||loopArr.length > 3 && loopArr.length < 11 && idOfArray === 2 && idx === loopArr.length - 1 || loopArr.length > 2 && loopArr.length < 10 && idOfArray === 3 && idx === loopArr.length - 1 
            ||loopArr.length > 1 &&     loopArr.length < 9 && idOfArray === 4 && idx === loopArr.length - 1 || loopArr.length > 0 && loopArr.length < 8 && idOfArray === 5 && idx === loopArr.length - 1){
                                    
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
                }else if(idx === loopArr.length - 1){
            
                        pocket0El.appendChild(item)
                }else nextSib.appendChild(item)
        }else if(idOfArray === 6 && loopArr.length > 12 || idOfArray === 7 && loopArr.length > 11 || idOfArray === 8 && loopArr.length > 10 || idOfArray === 9 && loopArr.length > 9 
                    || idOfArray === 10 && loopArr.length > 8 || idOfArray === 11 && loopArr.length > 7){
                if(idx === loopArr.length - 2){
            
                    pocket0El.appendChild(item)
                }else if(idx === loopArr.length - 1){
                
                        pocket1El.appendChild(item)
                    }else nextSib.appendChild(item)
                    }else nextSib.appendChild(item)
            })

    turn *= -1
    winner = getWinner()
    render()    
})
function getWinner(){
    let pocket0Size = pocket0El.childElementCount
    let pocket1Size = pocket1El.childElementCount
        if (pocket0Size + pocket1Size === 48){
            if(pocket0Size > pocket1Size) return 1
            else if(pocket1Size > pocket0Size) return 2
        }
        else{console.log('up')} return null
    }   
function render(){
       if(winner === 1){
            h1El.innerHTML = `Player ${winner} Wins!`
        }else if(winner === 2){
            h1El.innerHTML = `Player ${winner} Wins!`
        }else{
            h1El.innerHTML = `Player ${turn === 1 ? 1 : 2}'s Turn`
        }
    }
}