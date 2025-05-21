/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// This function inserts the greatest common divisor (GCD) of each pair of adjacent nodes in a linked list.
// It creates a new node with the GCD value and links it between the two nodes.
// The function returns the modified linked list with the new nodes inserted.
function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    if (head == null) {
        return null;
    }

    let currentNode = head;
    while (currentNode.next != null) {
        const insertValue = getGreatestCommonDivisor(currentNode.val, currentNode.next.val);
        const insertNode = new ListNode(insertValue, currentNode.next);
        currentNode.next = insertNode;
        currentNode = insertNode.next;
    }
    return head;
};

// This function calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
// It finds the GCD by repeatedly taking the modulus of the larger number with the smaller number until the remainder is zero.
function getGreatestCommonDivisor(currentValue: number, nextValue: number): number {
    let bigValue, smallValue = 0;
    if (currentValue <= nextValue) {
        smallValue = currentValue;
        bigValue = nextValue;
    } else {
        smallValue = nextValue;
        bigValue = currentValue;
    }

    let modDiv = 0;
    while (true) {
        modDiv = bigValue % smallValue;
        if (modDiv == 0) {
            return smallValue;
        }

        bigValue = smallValue;
        smallValue = modDiv;
    }
};