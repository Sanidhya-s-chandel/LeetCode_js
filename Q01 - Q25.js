// 1.) Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Sol_01}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j <= nums.length; j++){
            if (nums[i] + nums[j] === target){
            return [i,j]
            }
        }
    }
};

// 2.) Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 
// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// Sol_02}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newNode = new ListNode(0);
    let currentNode = newNode;
    let carry = 0;
    while(l1 || l2 || carry){
        let sum = carry;
        if(l1){
            sum += l1.val
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val
            l2 = l2.next;
        }
        carry = Math.floor(sum/10);
        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next; 
    }
    return newNode.next
};

// 3. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Sol_03}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const array = [...nums1, ...nums2].sort((a,b) => a - b)
    const mid = Math.floor(array.length / 2);
    
    if (array.length % 2 === 0) {
        return (array[mid] + array[mid - 1]) / 2;
    } else {
        return array[mid];
    }
};

// 4. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// Sol_04}

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;    
};

// 5. Longest Palindromic Substring

// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 
// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// Sol_05}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) {
        return "";
    }

    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const odd = expandAroundCenter(s, i, i);
        const even = expandAroundCenter(s, i, i + 1);
        const max_len = Math.max(odd, even);

        if (max_len > end - start) {
            start = i - Math.floor((max_len - 1) / 2);
            end = i + Math.floor(max_len / 2);
        }
    }

    return s.substring(start, end + 1);    
};

// 6. Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 
// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

// Sol_06)

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if ( numRows === 1 ) {
        return s;
    }

    const modulo = 2 * numRows - 2;

    const modulos = {};
    const res = {};
        for ( i = 1; i <= numRows; i++ ) {
            res[i] = [];
            if ( i === 1 ) {
                modulos[ 0 ] = i; 
            } else if ( i === numRows ) {
                modulos[numRows - 1] = i;
            } else {
                modulos[ i - 1 ] = i;
                modulos[ modulo - ( i - 1) ] = i
            }
        }

    s.split('').forEach( (letter, index) => {
        const position = index % modulo;

        const row = modulos[position];

        res[row].push(letter);
    } );

    return Object.values(res).reduce((string, array) => {
        string += array.join('');

        return string;
    }, '');
};

// 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 
// Constraints:

// -231 <= x <= 231 - 1

// Sol_07}

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var reverse = function(x) {
    let isNegative = x < 0
    let numStr = Math.abs(x).toString() // 
    let revNum = ''
    for(let i = numStr.length - 1; i >= 0; i--){
        revNum += numStr[i]
    }

    let result = isNegative ? -Number(revNum) : Number(revNum)

    if(result < -(2 ** 31) || result > 2 ** 31 - 1){
        return 0
    }

    return result
};

// 8. String to Integer (atoi)
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

// Example 1:

// Input: s = "42"

// Output: 42

// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// Example 2:

// Input: s = " -042"

// Output: -42

// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                ^
// Example 3:

// Input: s = "1337c0d3"

// Output: 1337

// Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//              ^
// Example 4:

// Input: s = "0-1"

// Output: 0

// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//           ^
// Example 5:

// Input: s = "words and 987"

// Output: 0

// Reading stops at the first non-digit character 'w'.

// Constraints:

// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

// Sol_08}

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const i = Number.parseInt(s);

    const limit = Math.pow(2, 31)

    if (i) {
        if (i <= -limit) return -limit
        if (i >= limit - 1) return limit - 1

        return i
    }

    return 0;
};

// 9.) Palindrome Number
// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
// Constraints:

// -231 <= x <= 231 - 1
 
// Follow up: Could you solve it without converting the integer to a string?

// Sol_09}

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = x.toString()
    let i = 0
    let j = x.length - 1
    while (i < j) {
        if (x[i] != x[j]) {
            return false
        }
        i++ 
        j--
    }
    return true
};

// 10.) Regular Expression Matching
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
 
// Constraints:

// 1 <= s.length <= 20
// 1 <= p.length <= 20
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

// Sol_10}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const match = (ch, pt) => {
    if(pt === "." || ch === pt) return true;
    return false;
}

var isMatch = function(s, p) {

    let i = 0, j = 0;;
    while(i < s.length && j < p.length) {
        let ch = s[i];
        const pt = p[j];
        if(j < p.length - 1 && p[j+1] === "*") {
            j += 2;
            let newP;
            if (j < p.length) {
                newP = p.substring(j);
                let newS = s.substring(i);
                if(isMatch(newS, newP)) return true;
            }
            while(match(ch, pt)) {
                ++i;

                if (j < p.length) {
                    let newS = s.substring(i);
                    if(isMatch(newS, newP)) return true;
                }

                if(i === s.length) break;
                ch = s[i];
            }
        } else {
            if(!match(ch, pt)) return false;
            ++i;
            ++j;
        }
    }

    while(j < p.length - 1 && p[j+1] === "*") {
        j += 2;
    }

    let res = j === p.length && i === s.length;

    return res;
};

// 11.) Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// sol_11}

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = height[0];
    let length = height.length;
    let right = height[length];  
    let leftIndex = 0;
    let rightIndex = length -1;
    let max = 0;
    let containerMax = 0;
    let index =0;
    while((leftIndex < rightIndex))
    {
      if(height[leftIndex] > height[rightIndex]) // meaning right value to be considered
      {
          index = rightIndex - leftIndex;
          if(containerMax < (height[rightIndex]*index))
          {
              
              console.log("Index = ",index)
              containerMax = height[rightIndex]*index}
      }
      else
      {
          index = rightIndex - leftIndex;
          if(containerMax < (height[leftIndex]*index))
          {
              console.log("Index = ",index)
              containerMax = height[leftIndex]*index}
      }
     
      if(height[leftIndex] > height[rightIndex])
      rightIndex--;
      else
      leftIndex++;
    }
    return containerMax;
};

// 12.) Integer to Roman
// Seven different symbols represent Roman numerals with the following values:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

// Example 1:

// Input: num = 3749

// Output: "MMMDCCXLIX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
// Example 2:

// Input: num = 58

// Output: "LVIII"

// Explanation:

// 50 = L
//  8 = VIII
// Example 3:

// Input: num = 1994

// Output: "MCMXCIV"

// Explanation:

// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV
 
// Constraints:

// 1 <= num <= 3999

// Sol_12}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const digits = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }

    let output = ''
    let count = num

    for(const [value, digit] of Object.entries(digits).reverse()){
        while(count - value >= 0){
            output = output + digit
            count = count - value
        }
    }

    return output
};

// 13.) Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// Sol_13}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToInteger = function(str) {
        const dict = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]])

        return dict.get(str) || 0
    }

    if (s.length < 2) {
        return romanToInteger(s)
    }
    
    let result = 0
    let l = 0

    while(l < s.length) {
        let left = romanToInteger(s[l])
        let right = romanToInteger(s[l+1])
        
        if (left < right) {
            result += right - left
            l+=2
        } else {
            result += left
            l+=1
        }
    }

    return result
};

// 14.) Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 
// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// Sol_14}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let output = "";
    let index = 0;
    let mn = strs.reduce((min, current) => {
            return current.length < min.length ? current : min;
            }, strs[0]);
    for(index=0; index < mn.length; index++){
        let temp = [];
        for(i=0; i < strs.length; i++){
            temp.push(strs[i][index]);
        }
        let size_ = new Set(temp).size;
        if(size_== 1){
            output += temp[0];
        }else{
            break;
        }
    }

    return output;
};

// 15.) 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 
// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// Sol_15}

var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j-1] && j < k) {
                    j++;
                }
            }
        }
    }
    return res;    
};

// 16.) 3Sum Closest
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 
// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

// Sol_16}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
      let i,j,k,c=Number.MAX_SAFE_INTEGER;
      for(i=0;i<nums.length-2;i++){
       j=i+1;
       k=j+1; 
      while(j<nums.length-1){
          let d=(nums[i]+nums[j]+nums[k])
          if(d==target)
              return d;
          if((Math.abs(target-d)<Math.abs(target-c)) ){
              c=d;
          }
          else{
              if(target<d){
              j++;
              k=j;
              }
          }
          k++;
          if(k>=nums.length){
              j++;
              k=j+1;
          }
              
       }
      }
      return c;
};

// 17.) Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 
// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// Sol_17}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) {
        return [];
    }
    
    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const res = [];
    
    function backtrack(idx, comb) {
        if (idx === digits.length) {
            res.push(comb);
            return;
        }
        
        for (const letter of digitToLetters[digits[idx]]) {
            backtrack(idx + 1, comb + letter);
        }
    }
    
    backtrack(0, "");  
    return res;    
};

// 18.) 4Sum
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 
// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// Sol_18}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let mySet = new Set();
nums.sort((a, b) => a - b);
let result = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    k = j + 1;
    let l = nums.length - 1;
    while (k < l) {
      let sum = nums[i] + nums[j] + nums[k] + nums[l];
      if (sum < target) {
        k++;
        while (nums[k] == nums[k - 1]) {
          k++;
        }
      } else if (sum > target) {
        l--;
        while (nums[l] == nums[l + 1]) {
          l--;
        }
      } else if (sum == target) {
        let temp = [nums[i], nums[j], nums[k], nums[l]];
        temp.sort((a, b) => a - b);
        mySet.add(JSON.stringify(temp));
        k++;
        while (nums[k] == nums[k - 1]) {
          k++;
        }
        l--;
        while (nums[l] == nums[l + 1]) {
          l--;
        }
      }
    }
  }
}
mySet.forEach((v) => result.push(JSON.parse(v)));
return result;
};

// 19.) Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 
// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 
// Follow up: Could you do this in one pass?

// Sol_19}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }

    let dummy = new Node(0);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;

    for(let i=0; i<=n; i++) {
        fast = fast.next;
    }

    while(fast != null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummy.next;

};

// 20.) Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 
// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Example 4:

// Input: s = "([])"
// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Sol_20}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parenthesisIndexes = [];
    let braceIndexes = [];
    let squareBracketIndex = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            parenthesisIndexes.push(i);

        }
        if (s[i] === ")") {
            if (!parenthesisIndexes.length) {
                return false;
            }
            let current = parenthesisIndexes.pop();
            if ((!parenthesisIndexes.length || parenthesisIndexes.length % 2 !== 0) && (current < squareBracketIndex[squareBracketIndex.length - 1] || current < braceIndexes[braceIndexes.length - 1])) {
                console.log(current, squareBracketIndex[squareBracketIndex.length - 1])
                return false;
            }
        }
        if (s[i] === "{") {
            
            braceIndexes.push(i);

        }
        if (s[i] === "}") {
            if (!braceIndexes.length) {
                return false;
            }
            let current = braceIndexes.pop();
            if ((!braceIndexes.length || braceIndexes.length % 2 !== 0) && (current < squareBracketIndex[squareBracketIndex.length - 1] || current < parenthesisIndexes[parenthesisIndexes.length - 1])) {
                return false;
            }  
        }
        if (s[i] === "[") {
            squareBracketIndex.push(i);
        }
        if (s[i] === "]") {
            if (!squareBracketIndex.length) {
                return false;
            }
            let current = squareBracketIndex.pop();
            if ((!squareBracketIndex.length || squareBracketIndex.length % 2 !== 0) && (current < braceIndexes[braceIndexes.length - 1] || current < parenthesisIndexes[parenthesisIndexes.length - 1])) {
                return false;
            }  
        }
    }

    if (!parenthesisIndexes.length && !braceIndexes.length && !squareBracketIndex.length) {
        return true;
    } 
        return false;

    return result;
};

// 21.) Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 
// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// Sol_21}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let newList = new ListNode(0);
    let headOfNewList = newList;

    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            newList.next = list1;

            list1 = list1.next;
        } else {
            newList.next = list2;

            list2 = list2.next;
        }

        newList = newList.next;
    }

    if (list1 == null) {
        newList.next = list2;
    }
    else {
        newList.next = list1;
    }

    return headOfNewList.next;
};

// 22.) Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 
// Constraints:

// 1 <= n <= 8

// Sol_22}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let set = new Set();
    let alreadyProccesed = new Set();
    let opened = 1;
    let closed = 0;
    set.add("10(");
    proccessedSome = true;
    while (proccessedSome) {
        proccessedSome = false;
        for (let current of set.values()) {
            if (current.length < (n * 2 + 2)){
                set.delete(current);
            }
            if (alreadyProccesed.has(current)){
                continue;
            }

            let opened = Number.parseInt(current[0]);
            let closed = Number.parseInt(current[1]);
            let value = current.slice(2);
            
            if (opened < n) {
                set.add(`${opened + 1}${closed}${value + "("}`);
            }

            if (closed < n && closed + 1 <= opened){
                set.add(`${opened}${closed + 1}${value + ")"}`);
            }
            
            alreadyProccesed.add(current);
            proccessedSome = true;
        }
    }
    
    return Array.from(set.values()).map(v => v.slice(2));
};

// 23.) Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 
// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

// Sol_23}

var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) {
        return null;
    }

    while (lists.length > 1) {
        let temp = [];
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            temp.push(mergeLists(l1, l2));
        }
        lists = temp;
    }

    return lists[0];    
};

function mergeLists(l1, l2) {
    let node = new ListNode();
    let ans = node;

    while (l1 && l2) {
        if (l1.val > l2.val) {
            node.next = l2;
            l2 = l2.next;
        } else {
            node.next = l1;
            l1 = l1.next;
        }
        node = node.next;
    }

    node.next = l1 ? l1 : l2;
    return ans.next;
}

// 24.) Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Explanation:

// Example 2:

// Input: head = []
// Output: []

// Example 3:

// Input: head = [1]
// Output: [1]

// Example 4:

// Input: head = [1,2,3]
// Output: [2,1,3]

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

// Sol_24}

var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let prev = dummy, cur = head;

    while (cur && cur.next) {
        let npn = cur.next.next;
        let second = cur.next;

        second.next = cur;
        cur.next = npn;
        prev.next = second;

        prev = cur;
        cur = npn;
    }

    return dummy.next;    
};

// 25.) Reverse Nodes in k-Group
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
 
// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000
 
// Follow-up: Can you solve the problem in O(1) extra memory space?

// Sol_25}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

let kthnode = (node , k)=>{
    let t = node
    while( t && k>1){
     t = t.next
     k--
    } 
    return t
 }
 
 var reverseKGroup = function(head, k) {
     let dummy2 = new ListNode(0,head)
     let node = dummy2
 
     while(true){
         let prev = node.next
         let kth = kthnode(prev , k)
         if(!kth){
           break 
         }
         let nextgroup = kth.next
         let curr = nextgroup
         let h = prev
         for(let i= 0;i<k;i++){
            let temp = h.next
            h.next = curr
            curr = h
            h = temp
         }
         node.next = curr
         prev.next = nextgroup
         node = prev
     }
     return dummy2.next
 
};