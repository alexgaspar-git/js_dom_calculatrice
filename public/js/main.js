// ECRAN
let ecranP = document.querySelector('#ecranP');
let calcMain = document.querySelector('#calcMain');

let calculer = (n1, operator, n2) => {
    let result = ''
    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
    }
    if (result == '69') {
        calcMain.setAttribute('style','background-color: black;')
    }
    return result
}

calcMain.addEventListener('click', (e) => {
    let key = e.target
    let keyContent = key.textContent
    let displayedNum = ecranP.textContent
    if (key.matches('button')) {
        if (key.value === 'add' || key.value === 'subtract' || key.value === 'multiply' || key.value === 'divide') {
            calcMain.dataset.previousKeyType = 'operator'
            calcMain.dataset.firstValue = displayedNum
            calcMain.dataset.operator = key.value
        } else if (key.value === 'calculate') {
            let firstValue = calcMain.dataset.firstValue
            let operator = calcMain.dataset.operator
            let secondValue = ecranP.innerText
            ecranP.innerText = calculer(firstValue, operator, secondValue)
        } else if (key.value === 'clear') {
            ecranP.innerText = 0
            calcMain.removeAttribute('data-first-value');
            calcMain.removeAttribute('data-operator');
        } else if (key.value === 'virgule') {
            ecranP.textContent = displayedNum + '.'
        } else {
            if (displayedNum === '0' || calcMain.dataset.previousKeyType === 'operator') {
                ecranP.textContent = keyContent
                calcMain.removeAttribute('data-previous-key-type')
            } else {
                ecranP.textContent = displayedNum + keyContent
            }
        }
    }
});
