/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for (const char of tokens) {
        const formatNum = Number(char);

        if (isNaN(formatNum)) {
            const num1 = stack.pop();
            const num2 = stack.pop();

            switch (char) {
                case "+" :
                    stack.push(num2 + num1);
                    break;
                case "-" :
                    stack.push(num2 - num1);
                    break;
                case "*" :
                    stack.push(num2 * num1);
                    break;
                case "/" :
                    stack.push(Math.trunc(num2 / num1));
                    break;
            }
        } else {
            stack.push(Number(char))
        }
    }

    return stack[0];
};