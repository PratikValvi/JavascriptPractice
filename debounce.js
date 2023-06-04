const debounce = (fn, delay) => {
    let id = null;
    return function() {
        const args = arguments;
        const context = this;
        clearTimeout(id);
        id = setTimeout(() => {
            fn.apply(context, args);
        }, delay)
    }
}