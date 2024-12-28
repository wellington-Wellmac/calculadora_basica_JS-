const resultInput = document.getElementById("result");
let currentExpression = "";

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "=") {
            try {
                resultInput.value = eval(currentExpression);
                currentExpression = resultInput.value;
            } catch {
                resultInput.value = "Erro!";
                currentExpression = "";
            }
        } else if (value === "C") {
            currentExpression = "";
            resultInput.value = "";
        } else {
            currentExpression += value;
            resultInput.value = currentExpression;
        }
    });
});
