const box = document.getElementsByTagName('td');
let countClick = 0;
const goal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

let win = [];

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


        let idValue = box[i].id;

        if (!win.includes(idValue)) {
            let intValue = parseInt(idValue);
            win.push(intValue)
            console.log(win)
        }
 if(box[i].innerText = 'x' && goal.includes(win)){
console.log("x has won!");
 }

















    }, false)
}
