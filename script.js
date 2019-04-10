const box = document.getElementsByTagName('td');

let countClick = 0;
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function (e) {
        // Check the turn of each player
        if (box[i].innerText == '') {
            countClick += 1;
            if (countClick % 2 == 0) {
                box[i].innerText = 'o';
                box[i].style.color = '#000';
            } else {
                box[i].innerText = 'x';
                box[i].style.color = '#f00'
            }
        }
        // Set up the message
        function winMessage(a) {
            if (box[a].innerHTML === 'x') {
                alert("X has won!");
                document.location.reload()
            } else {
                alert("O has won!")
                document.location.reload()
            }
        }
        // Set up the background color
        function bgColor(b, c, d, e) {
            box[b].style.backgroundColor = 'orange'; box[c].style.backgroundColor = 'orange'; box[d].style.backgroundColor = 'orange';
        }
        // function of the  winning condition.
        function check(a, b, c) {
            if (box[a].innerHTML !== "" && box[a].innerHTML === box[b].innerHTML && box[a].innerHTML === box[c].innerHTML) {
                bgColor(a, b, c);
                setTimeout(() => {
                    winMessage(a);
                }, 1000);
            }
        }
        // Check the winning condition
        check(0, 1, 2); check(3, 4, 5); check(6, 7, 8); check(0, 3, 6); check(1, 4, 7); check(2, 5, 8); check(0, 4, 8); check(2, 4, 6)
        if (box[0].innerHTML !== '' && box[1].innerHTML !== '' && box[2].innerHTML !== '' &&
            box[3].innerHTML !== '' && box[4].innerHTML !== '' && box[5].innerHTML !== '' &&
            box[6].innerHTML !== '' && box[7].innerHTML !== '' && box[8].innerHTML !== '') {
            setTimeout(() => {
                alert('Cats game!')
                document.location.reload();
            }, 1000);
        }
    }, false)
}
