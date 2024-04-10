

export const stringShortner = (words) => {
    if(words.length > 40) return words.substring(0, 40) + "...";
    else return words;
}