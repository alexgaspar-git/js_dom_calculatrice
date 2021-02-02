// ECRAN
let ecranP = document.querySelector('#ecranP');
let calcMain = document.querySelector('#calcMain');

import {calculer} from './calculer.js'

calcMain.addEventListener('click', (e) => {
    let key = e.target
    let keyContent = key.textContent
    let displayedNum = ecranP.textContent
    if (key.matches('button')) {
        if (key.value === 'add' || key.value === 'subtract' || key.value === 'multiply' || key.value === 'divide') {
            calcMain.dataset.shleeb = 'floob'
            calcMain.dataset.firstValue = displayedNum
            calcMain.dataset.operator = key.value
        } else if (key.value === 'calculate') {
            let firstValue = calcMain.dataset.firstValue
            let operator = calcMain.dataset.operator
            let secondValue = displayedNum
            ecranP.innerText = calculer(firstValue, operator, secondValue)
        } else if (key.value === 'clear') {
            ecranP.innerText = 0
            calcMain.removeAttribute('data-first-value');
            calcMain.removeAttribute('data-operator');
        } else if (key.value === 'virgule') {
            ecranP.textContent = displayedNum + '.'
        } else {
            if (displayedNum === '0' || calcMain.dataset.shleeb === 'floob') {
                ecranP.textContent = keyContent
                calcMain.removeAttribute('data-shleeb')
            } else {
                ecranP.textContent = displayedNum + keyContent
            }
        }
    }
});