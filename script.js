const input = document.querySelector('.container__box--input');
const val = document.querySelector('.val');

function countLetters(){
   let count = input.value;
   let removeSpace = count.split(" ").join(""); //Usuwanie spacji
   let length = removeSpace.length;
    render(length);
    
}

function render(length){
    val.innerText = ` ${length}`;
}


input.addEventListener('keyup', countLetters);
