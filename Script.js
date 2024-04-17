let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            string = eval(string);
            input.value = string;
        } else if (buttonText === 'AC') {
            string = "";
            input.value = "";
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});
