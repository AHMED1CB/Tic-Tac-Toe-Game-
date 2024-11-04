function get(el , isMany = false)  {
     if (!isMany){
          return document.querySelector(el);
     }else{
          return document.querySelectorAll(el);
     }
}


const head = get('.head');
let isEnd = false;
const squares = [...get('.body div' , true)];

let turn = 'O';





squares.map((sq) => {
     sq.onclick =() => {
          if (!isEnd){
               HandleSquareClicked(sq)
          }
     };
} )


function HandleSquareClicked(sq){
     if (sq.innerHTML === '' && !isEnd){
          sq.innerHTML = turn;

          validateWinner();

          turn = turn === 'O' ? 'X' : 'O';

          if (get('.turn')){
               get('.turn').innerHTML = turn + ' ';
          }
     }

}



function isMatch(s1 , s2){
     return squares[s1].innerHTML === squares[s2].innerHTML && squares[s1].innerHTML!== '';

}



function validateWinner(){
  if (isMatch(0,1) && isMatch(1,2)){
       get('.head').innerHTML = squares[1].innerHTML + '  Is The Winner';
               isEnd = true;
     }
     else if (isMatch(3,4) && isMatch(4,5)){
               get('.head').innerHTML = squares[3].innerHTML + '  Is The Winner';
               isEnd = true;
     }
     else if (isMatch(6,7) && isMatch(7,8)){
          get('.head').innerHTML = squares[7].innerHTML + '  Is The Winner';
          isEnd = true;
 }
 else if (isMatch(0,3) && isMatch(3,6)){
     get('.head').innerHTML = squares[6].innerHTML + '  Is The Winner';
     isEnd = true;
}

else if (isMatch(1,4) && isMatch(4,7)){
     get('.head').innerHTML = squares[7].innerHTML + '  Is The Winner';
     isEnd = true;
}

else if (isMatch(2,5) && isMatch(5,8)){
     get('.head').innerHTML = squares[8].innerHTML + '  Is The Winner';
     isEnd = true;
}

else if (isMatch(0,4) && isMatch(4,8)){
     get('.head').innerHTML = squares[8].innerHTML + '  Is The Winner';
     isEnd = true;
}


else if (isMatch(2,4) && isMatch(4,6)){
     get('.head').innerHTML = squares[6].innerHTML + '  Is The Winner';
     
     isEnd = true;

}

else{
     if (squares.every(e => e.innerHTML !== '')){
          
          get('.head').innerHTML = 'Tie';     
          isEnd = true;
     }
}



}
