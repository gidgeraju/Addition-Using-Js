function Addition() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = num1 + num2;
    document.getElementById('result').innerText = `Result: ${num3}`;
}
