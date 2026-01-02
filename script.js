
let display = document.getElementById("display");


let buttons = document.querySelectorAll(".js");


let expression = "";


buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        let value = btn.innerText;

        if (value === "AC") {
            expression = "";
            display.value = "";

        } else if (value === "C") {
            expression = expression.slice(0, -1);
            display.value = expression;

        } else if (value === "=") {
            try {
                expression = eval(expression);
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }

        } else {
            expression += value;
            display.value = expression;
        }
    });

});

