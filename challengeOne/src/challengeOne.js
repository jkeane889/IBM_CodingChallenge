/*

IBM Challenge 1

Challenge 1: 

    You are given a positive integer N, and two single-digit integers p and q, 
    where p != q and both are greater than 1. 
    
    You must output all of the integers from 1 to N inclusive, separated by a single space.
    
    However, any integer divisible by p whose decimal representation does not
    contain the digit p should be replaced by the text WAT and any integer 
    divisible by q whose decimal representation does not contain the digit q 
    should be replaced by the text SON. 
    
    Integers for which both of the preceding statements are true should 
    instead be replaced by the text WATSON. Please implement using Node.js and 
    with the mindset that this will be production level code that will be 
    supported by you and your team.

    Input
    A single line on standard input per testcase: N p q 

    Output
    The space-separated sequence as described above 
    (only numbers and uppercase chars), with no leading or trailing spaces.

    Test 1

    Input
    20 3 4
    Expected Output
    1 2 3 4 5 WAT 7 SON WAT 10 11 WATSON 13 14 WAT SON 17 WAT 19 SON

    Test 2

    Input
    7 2 3
    Expected Output
    1 2 3 WAT 5 WATSON 7

*/

/*
    I - three integer arguments
    O - string/array/sequence of chars and integers
    C - time/space complexity (linear O(n) -> iteration over elements in an array)
    E - input of null; no divisible elements; p === q; element that contains p or q as integer  
*/

/*
    Pseudocode:
    - create blank storage array for elements
    - iteration (i) up to N
    - use binary operations to test if element is contained 
    - check if elements in object !== p or if N[i] % p === 0
    - if i is % p
    - push "WAT" into storage array
    - if i is % q
    - push "SON" into storage array
    - if i % p && i % q
    - push "WATSON" into storage array
    - else push i into storage array
*/

const contains = (q, p) => {
    /*  
        Recursive bitwise operation to test if 
    */
  return ( p < 10
      ? p === q
      : p % 10 === q || contains(q, p / 10 >>> 0)
  )
};

const isDivisible = (n, p, q) => {
    if (!n) {
        return null
    };

    let sequence = [];

    /* 
    
        Iterative function that checks if the integer 'n' argument is divisible by p
        and q, and does not contain p or q, then adds 'WATSON' to the output sequence

        Then, checks to see if the current element is divisible by p, and doesn't contain p;
        then adds element to sequence if this is TRUE.

        Then, checks to see if the current element is divisible by q, and doesn't contain q;
        then adds this element to sequence if this is TRUE.

        Finally, if none are true, adds element without changing it.

    */

    for (let i = 1; i <= n; i++) {
        if (((!contains(i, p)) && i % p === 0) && ((!contains(i, q)) && i % q === 0)) {
            sequence.push('WATSON')
        } else if ((!contains(i, p)) && i % p === 0) {
            sequence.push('WAT')
        } else if ((!contains(i, q)) && i % q === 0) {
            sequence.push('SON')
        } else {
            sequence.push(i).toString();
        };
    };

    return sequence.join(' ')
};