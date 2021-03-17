export const reset = () => {
    return {
        type: "RESET",
    };
};

export const increment = (num) => {
    return {
        type: `INCREMENTP${num}`,
    };
};
