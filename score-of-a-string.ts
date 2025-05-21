// This function calculates the score of a string based on the absolute difference between the ASCII values of adjacent characters.
// The score is the sum of these absolute differences.
function scoreOfString(s: string): number {
    let sum = 0;
    for (var i = 0; i < s.length - 1; i++) {
        const firstCharCode = s.charCodeAt(i);
        const secondCharCode = s.charCodeAt(i + 1);
        sum += Math.abs(firstCharCode - secondCharCode);
    }
    return sum;
};