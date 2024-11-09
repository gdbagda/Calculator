let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || e.key === '.' || e.key === 'Enter' || e.key === 'Backspace' || e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') {
        handleKey(e.key);
    }
});

function handleInput(value) {
    if (value === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    } else if (value === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}

function handleKey(key) {
    if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    } else {
        handleInput(key);
    }
}
