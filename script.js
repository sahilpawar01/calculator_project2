let result = '0';

function appendToDisplay(value) {
    if (result === '0' && value !== '.') {
        result = '';
    }
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '0';
    result = '0';
}

function calculateResult() {
    try {
        result = eval(document.getElementById('result').value).toString();
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        result = '0';
    }
}
