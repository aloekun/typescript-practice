// This is a simple debounce function implementation in TypeScript.
// It takes a function and a delay time as arguments.

// The structure of function is:
type F = (...args: number[]) => void

/**
 * Debounce function that delays invoking the provided function until after a specified wait time has elapsed since the last time it was invoked.
 * @param fn - The function to debounce.
 * @param t - The number of milliseconds to wait before invoking the function.
 * @returns A debounced version of the provided function.
 */
function debounce(fn: F, t: number): F {
    let timeoutId: number | null = null;
    return function(...args) {
        if (timeoutId != null) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(
            () => {
                fn(...args)
            },
            t
        )
    };
};

/*
// use-case example
const specialLog = (...args: number[]) => {
    console.log(args);
}
const debouncedFn = debounce(specialLog, 1000);
debouncedFn(1, 2, 3); // Waits for 1 second before logging [1, 2, 3]
debouncedFn(4, 5, 6); // Cancels the previous call and waits for another second before logging [4, 5, 6]

// output:
// [4, 5, 6]
*/