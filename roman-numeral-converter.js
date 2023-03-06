const ones = {
  0 : "",
  1 : "I",
  2 : "II",
  3 : "III",
  4 : "IV",
  5 : "V",
  6 : "VI",
  7 : "VII",
  8 : "VIII",
  9 : "IX",
  10 : "X"
}
const tens = {
  0 : "",
  1 : "X",
  2 : "XX",
  3 : "XXX",
  4 : "XL",
  5 : "L",
  6 : "LX",
  7 : "LXX",
  8 : "LXXX",
  9 : "XC"
}

const hundreds = {
  0 : "",
  1 : "C",
  2 : "CC",
  3 : "CCC",
  4 : "CD",
  5 : "D",
  6 : "DC",
  7 : "DCC",
  8 : "DCCC",
  9 : "CM"
}

const thousand = {
  1 : "M",
  2 : "MM",
  3 : "MMM",
}


function convertToRoman(num) 
{
  let newNum = num.toString();
  var l = newNum.length;

  if(l == 1 || num == 10)
    return ones[num]
  
  if(l == 2)
    {
      return tens[newNum[0]] + ones[newNum[l-1]]
    }

  if(l == 3)
    {
        return hundreds[newNum[0]] + tens[newNum[1]] + ones[newNum[2]]
    }

  if(l == 4)
  {
    return thousand[newNum[0]] + hundreds[newNum[1]] + tens[newNum[2]] + ones[newNum[3]]
  }
} 

let word = "20"
console.log(convertToRoman(3999))