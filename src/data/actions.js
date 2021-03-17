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

export const gameStart = () => {
    return {
        type:"START"
    }
}
