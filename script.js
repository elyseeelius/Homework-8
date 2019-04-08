const box = document.getElementsByTagName('td');
const text= document.getElementsByTagName('h1')[0];
let countClick = 0;


for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function (e) {
        countClick += 1;
        if (box[i].innerText == '') {
            if (countClick % 2 == 0) {
                box[i].innerText = 'o';
                box[i].style.color = '#000';
            } else {
                box[i].innerText = 'x';
                box[i].style.color = '#ff0000'
            }
        }
        if (box[0].innerHTML !== "" && box[0].innerHTML === box[1].innerHTML && box[0].innerHTML === box[2].innerHTML) {
            win(0);
        } else if (box[3].innerHTML !== "" && box[3].innerHTML === box[4].innerHTML && box[3].innerHTML === box[5].innerHTML) {
            win(3);
        } else if (box[6].innerHTML !== "" && box[6].innerHTML === box[7].innerHTML && box[6].innerHTML === box[8].innerHTML) {
            win(6)
        } else if (box[0].innerHTML !== "" && box[0].innerHTML === box[3].innerHTML && box[0].innerHTML === box[6].innerHTML) {
            win(0);
        } else if (box[1].innerHTML !== "" && box[1].innerHTML === box[4].innerHTML && box[1].innerHTML === box[7].innerHTML) {
            win(1);
        } else if (box[2].innerHTML !== "" && box[2].innerHTML === box[5].innerHTML && box[2].innerHTML === box[8].innerHTML) {
            win(2);
        } else if (box[0].innerHTML !== "" && box[0].innerHTML === box[4].innerHTML && box[0].innerHTML === box[8].innerHTML) {
            win(0)
        } else if (box[2].innerHTML !== "" && box[2].innerHTML === box[4].innerHTML && box[2].innerHTML === box[6].innerHTML) {
            win(2)
        } 
    }, false)
    
function win(a) {
    if (box[a].innerHTML === 'x') {
        text.innerText = "X has won!";
    } else {
       text.innerText = "O has won!";
}
}

}
