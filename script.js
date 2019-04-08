const box = document.getElementsByTagName('td');
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
            console.log(" won")
        } else if (box[3].innerHTML !== "" && box[3].innerHTML === box[4].innerHTML && box[3].innerHTML === box[5].innerHTML) {
            console.log(' elysee won too')
        } else if(box[6].innerHTML !== "" && box[6].innerHTML === box[7].innerHTML && box[6].innerHTML === box[8].innerHTML){
            console.log(' won again')
        }else if(box[0].innerHTML !== "" && box[0].innerHTML === box[4].innerHTML ){
            console.log(" 1 4 7")
        }





    }, false)
}
