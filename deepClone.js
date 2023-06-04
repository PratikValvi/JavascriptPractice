const deepClone = (obj, clonedObjs = new Map()) => {
    //Check if value if primitive if primitive return as it is
    if (Object(obj) !== obj) {
        return obj
    }

    //Check if obj is already cloned if cloned return reference of that obj
    if (clonedObjs.has(obj)) {
        return clonedObjs.get(obj)
    }

    const isArray = Array.isArray(obj)

    let cloneObj = isArray ? [] : {}
    clonedObjs.set(obj, cloneObj)

    if (isArray) {
        cloneObj = obj.map(element => deepClone(element, clonedObjs))
    } else if (typeof obj === "object" && obj !== null) {
        Object.entries(obj).forEach(([key, value]) => {
            const isObject = (value !== null && typeof value === "object")
            cloneObj[key] = isObject ? deepClone(value, clonedObjs) : value;
        })
    }

    return cloneObj
}

// Test Case 1: Simple object with primitive values
const obj1 = {a: 1, b: 'hello', c: true};
const clonedObj1 = deepClone(obj1);
console.log(clonedObj1); // Output: {a: 1, b: 'hello', c: true}
console.log(obj1 === clonedObj1); // Output: false

// Test Case 2: Object with nested objects and arrays
const obj2 = {a: {b: [1, 2, 3]}, c: {d: {e: 'hello'}}};
const clonedObj2 = deepClone(obj2);
console.log(clonedObj2); // Output: {a: {b: [1, 2, 3]}, c: {d: {e: 'hello'}}}
console.log(obj2 === clonedObj2); // Output: false

// Test Case 3: Object with circular reference
const obj3 = {a: {b: {c: null}}};
obj3.a.b.c = obj3.a;
const clonedObj3 = deepClone(obj3);
console.log(clonedObj3); // Output: {a: {b: {c: [Circular]}}}
console.log(obj3 === clonedObj3); // Output: false