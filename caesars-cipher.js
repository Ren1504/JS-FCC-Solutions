function rot13(word) 
{

word = word.split("")

let final = []



for(let i=0 ; i<word.length ; i++)
{
  if(word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90)
  {
    var ascii = word[i].charCodeAt(0) + 13

      if(ascii > 90)
      {
        ascii = ascii - 91 + 65
      }

      final.push(String.fromCharCode(ascii))
  }

  else
  {
    final.push(word[i])
  }
}


return(final.join(""))

}