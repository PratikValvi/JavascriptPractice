const deepClone = (obj, cKey = "", cValue = "", clonedObjs = new Map()) => {
    if(Object(obj) !== obj) {
        return obj
    }
    if(clonedObjs.has(obj)) {
        return clonedObjs.get(obj)
    }
    const isArray = Array.isArray(obj);
    let cloneObj = isArray ? [] : {};
    clonedObjs.set(obj, cloneObj);
    if(isArray) {
        cloneObj = obj.map(item => deepClone(item, cKey, cValue, clonedObjs))
    } else if(obj !== null && typeof obj === "object") {
        Object.entries(obj).forEach(([key, value]) => {
            const isObject = (value !== null && typeof value === "object")
            cloneObj[key] = (key === cKey) ? cValue : (isObject) ? deepClone(value, cKey, cValue, clonedObjs) : value;
        })
    }

    return cloneObj;
}

const originalObject = {
    name: "Pratik",
    age: 28,
    address: {
        city: "Satara",
        state: "Maharashtra"
    }
}

const clonedObj = deepClone(originalObject)

console.log(clonedObj)