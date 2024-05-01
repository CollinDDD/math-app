function Generator(operator) {
    let num1, num2;
  
    // Generate two random numbers between 1 and 10
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
  
    // Ensure num1 is greater than or equal to num2 if operator is '-'
    if (operator === '-') {
      num1 = Math.floor(Math.random() * 20) + 1;
  
      if (num1 < num2) {
        [num1, num2] = [num2, num1];
      }
    }
  
    if (operator === '/') {
      num1 = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
      num2 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  
      // Ensure that the division result is an integer and not higher than 10
      while (num1 % num2 !== 0 || num1 / num2 > 10) {
          num1 = Math.floor(Math.random() * 100) + 1;
          num2 = Math.floor(Math.random() * 10) + 1;
      }
    }
  
  
    // Create the math problem string
    let problem = `${num1} ${operator} ${num2}`;
  
    // Calculate the answer
    let answer;
    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      case '/':
        answer = num1 / num2;
        break;
    }

    return { problem, answer };
  }
  


  export default Generator;
  