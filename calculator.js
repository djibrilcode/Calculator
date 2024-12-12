let calculation = localStorage.getItem('calculation');

    function operation() {
      document.querySelector('.js-operation').innerHTML = calculation;
    }
    function updateCalculation(number) {
      calculation += number;
      operation();

      localStorage.setItem('calculation', calculation)
    }