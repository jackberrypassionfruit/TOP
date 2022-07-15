
// Store a global number variable so that the "operate" fn has a first value to work with
let firstNum = 0;

// Store a global number variable so that the "operate" fn has a 2nd value to work with
let secondNum = 0;

// Store a global operation variable so the "operate" fn knows what do
let op;

// Get current number displayed on calculator screen, as a list of digits
function getCurrentNumList() {
  const displayDivList = document.querySelectorAll('.output');

  const displayNumList = [];
  displayDivList.forEach(div => displayNumList.push(div.textContent));
  

  return displayNumList;
}

function enterNumInput(num) {
  let currentNumList = getCurrentNumList();

  if (!currentNumList.includes('')) {
    console.log("No More Room for Inputs!");
    document.querySelector('em').textContent = "No More Room for Inputs!";
  }
  else {
    currentNumList.shift();
    currentNumList.push(String(num));
  };

  const displayDivList = document.querySelectorAll('.output');
  for (let i in currentNumList)
  {
    displayDivList[i].textContent = currentNumList[i];
  }
}

function clearCurrentDisplay() {
  const displayDivList = document.querySelectorAll('.output');
  displayDivList.forEach(div => {
    div.textContent = '';
  });
}

// takes in first number, second number, and operation, and returns output. That's it
function operate(firstNum, secondNum, op) {
  let result;

  switch (op)
  {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case 'x':
      result = firstNum * secondNum;
      break;
    case '/':
      result = firstNum / secondNum;
  }
  return result;
}

// Clears display and displays number above. 
function displayNum(num) {
  clearCurrentDisplay();
  const displayDivList = document.querySelectorAll('.output');

  const numList = num.toString().split('');
  for (let i = 0; i < 6 - numList.length; i++) {
    numList.unshift('');
  }

  for (let i = 0; i < 6; i++) {
    displayDivList[5 - i].textContent = numList.pop();
  }
}


// Buttons

// 1
// clears display and all internal variables
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  clearCurrentDisplay();
  firstNum = 0;
  secondNum = 0;
  op = null;
})

// 2
// adds digit to display
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(num => {
  num.addEventListener('click', (e) => {
    enterNumInput(e.currentTarget.textContent)
  })
});


// 3
// Do 3 things: 
  // 1) Store operation in memory
  // 2)  if firstNum does NOT exist:
        // Store first number in memory
      // else
        // do operation with number that was already in memory and store THAT firstNum in memory
  
  // 3) Clear display
const operatorButtons = document.querySelectorAll('.operation');
operatorButtons.forEach(oper => {
  oper.addEventListener('click', (e) => {
    // enterNumInput(e.currentTarget.textContent)

    // 1
    op = e.currentTarget.textContent;
    console.log('op is: ', op);

    // 2
    if (firstNum == 0) {
      firstNum = Number(getCurrentNumList().join(''));
      console.log('firstNum is:', firstNum);
    }
    else {
      firstNum = operate(firstNum, Number(getCurrentNumList().join('')), op);
      console.log('firstNum is:', firstNum);
    }

    // 3
    clearCurrentDisplay();
  })
});

// 4
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', (e) => {

  // Do Multiple Things
    // 1 Store operation's 2nd number on the screen
    // 2 Clear Screen
    // 3 Calculate result
    // 4 Make this result the new firstNum
    // 5 Put result on screen

    // 1
    secondNum = Number(getCurrentNumList().join(''));
    console.log('secondNum is:', secondNum);

    // 2
    clearCurrentDisplay();

    // 3
    const result = operate(firstNum, secondNum, op)

    // 4
    firstNum = result;

    // 5
    displayNum(result);
    console.log('result is: ', result);
});