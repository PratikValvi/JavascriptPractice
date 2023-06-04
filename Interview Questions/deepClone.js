// let obj1 = {
//     a: 1,
//     b: [2, 3],
//     c: {
//         d: 4,
//         e: 5
//     }
// };

// const deepClone = (obj) => {
//     const cloneObj = Array.isArray(obj) ? [] : {};

//     for (let key in obj) {
//         if (typeof obj[key] === "object") {
//             cloneObj[key] = deepClone(obj[key]);
//         } else {
//             cloneObj[key] = obj[key];
//         }
//     }

//     return cloneObj;
// }

// let obj2 = deepClone(obj1);
// console.log(obj2);

const customDeepClone = (obj, clonedObjs = new WeakMap()) => {
  // Check if object has already been cloned
  if (clonedObjs.has(obj)) {
    return clonedObjs.get(obj);
  }

  const cloneObj = {};

  // Store the cloned object in the WeakMap
  clonedObjs.set(obj, cloneObj);

  for (let key in obj) {
    if (typeof obj[key] === "object" && Array.isArray(obj[key])) {
      cloneObj[key] = obj[key].map(item => customDeepClone(item, clonedObjs));
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      cloneObj[key] = customDeepClone(obj[key], clonedObjs);
    } else {
      cloneObj[key] = obj[key];
    }
  }

  return cloneObj;
};

  