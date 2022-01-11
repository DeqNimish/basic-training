// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var highest = 0;
  var secondHighest = 0;
       for (var i = 0; i < array.length; i++) { 
         if (array[i] > highest) {
            secondHighest = highest;
           highest = array[i];
        }
 
       if (array[i] < highest && array[i] > secondHighest) {
          secondHighest = array[i];
       }
    }
  return secondHighest;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
      var character = string.charAt(i);
      if(string.charAt(i) >= 'a' && string.charAt(i) <= 'z'){
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
      }
    }

    return freq;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  // Write your code here
     let result = {};
    for (const i in unflatObject) {
        if ((typeof unflatObject[i]) === 'object') {
            const temp = flatten(unflatObject[i]);
            for (const j in temp) {
                result[i + '.' + j] = temp[j];
            }
        }
        else {
            result[i] = unflatObject[i];
        }
    }
    return result;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
   let result = {},
      temp,
      substrings,
      property,
      i;
    for (property in flatObject) {
      substrings = property.split(".");
      temp = result;
      for (i = 0; i < substrings.length - 1; i++) {
        if (!(substrings[i] in temp)) {
          if (isFinite(substrings[i + 1])) {
            temp[substrings[i]] = [];
          } else {
            temp[substrings[i]] = {};
          }
        }
        temp = temp[substrings[i]];
      }
      temp[substrings[substrings.length - 1]] = flatObject[property];
    }
   return result;
}

