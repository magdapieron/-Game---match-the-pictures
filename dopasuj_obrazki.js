const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

arr.sort((a, b) => 0.5 - Math.random());

const squares = document.getElementsByClassName("square");

let clickedIndex = null;

let clickedCounter = 0;

for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    square.addEventListener("click", function () {
        if (clickedIndex === null) {
            clickedIndex = i;
            clickedCounter = 1;
            square.style.backgroundImage = "url(./zdj" + arr[i] + ".jpg)";
        } 
        else if(clickedCounter === 1) {
            clickedCounter = 2;
            square.style.backgroundImage = "url(./zdj" + arr[i] + ".jpg)";
            if(arr[clickedIndex] !== arr[i]) {
                setTimeout(function () {
                    squares[clickedIndex].style.backgroundImage = "url(./pytajnik.jfif)"; 
                    square.style.backgroundImage = "url(./pytajnik.jfif)";
                    
                    clickedIndex = null;
                    clickedCounter = 0;
                }, 500);
            }
            else {
                clickedIndex = null;
                clickedCounter = 0;
            }
        }


    })
}
