function getNumber1(){
    const number1 = document.querySelector('#number-one');
    return (number1.value);
}

function getNumber2(){
    const number2 = document.querySelector('#number-two');
    return (number2.value);
}

const result = document.querySelector('#result');

function updateLabel() {
    const addend1 = getNumber1();
    const addend2 = getNumber2();
    const sum = addend1 + addend2;
    result.value = sum;
  }

const btn = document.querySelector('.btn');
btn.addEventListener('click', updateLabel);