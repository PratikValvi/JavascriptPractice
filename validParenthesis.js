const checkIfValidParenthesis = (input) => {
    const bracketsMap = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    const stack = [];
    const inputs = input.split(``);
    for(const item of inputs) {
        if (!bracketsMap.has(item)) {
            stack.push(item)
        } else {
            if (stack.length === 0 || bracketsMap.get(item) !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0
}

console.log(checkIfValidParenthesis("({[{}]})"))
