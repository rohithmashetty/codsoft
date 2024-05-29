// script.js
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const equalButton = document.getElementById('equal');
    const clearButton = document.getElementById('clear');
  
    let currentInput = '';
    let operator = '';
    let previousInput = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
  
        if (!isNaN(value) || value === '.') {
          currentInput += value;
          display.innerText = currentInput;
        } else if (value === 'C') {
          currentInput = '';
          operator = '';
          previousInput = '';
          display.innerText = '0';
        } else {
          if (operator) {
            performCalculation();
          }
          operator = value;
          previousInput = currentInput;
          currentInput = '';
        }
      });
    });
  
    equalButton.addEventListener('click', function() {
      performCalculation();
      operator = '';
    });
  
    clearButton.addEventListener('click', function() {
      currentInput = '';
      operator = '';
      previousInput = '';
      display.innerText = '0';
    });
  
    function performCalculation() {
      let result;
      const prev = parseFloat(previousInput);
      const curr = parseFloat(currentInput);
  
      if (isNaN(prev) || isNaN(curr)) return;
  
      switch (operator) {
        case '+':
          result = prev + curr;
          break;
        case '-':
          result = prev - curr;
          break;
        case '*':
          result = prev * curr;
          break;
        case '/':
          result = prev / curr;
          break;
        default:
          return;
      }
  
      currentInput = result;
      display.innerText = result;
      previousInput = '';
    }
  });
  