function palindrome(str)
{
  var newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let final = ""
  for(let i = newStr.length - 1  ; i >= 0 ; i--)
    final += newStr[i];

  return final == newStr;
}


console.log(palindrome('racecar'))