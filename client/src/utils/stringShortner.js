

export const stringShortner = (words) => {
    if(words.length > 30) return words.substring(0, 30) + "...";
    else return words;
}