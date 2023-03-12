const moneyval = 
	{ 'ONE HUNDRED': 100 * 100,
'TWENTY':20 * 100,
 'TEN': 10 * 100,
 'FIVE': 5 * 100,
 'ONE': 1 * 100,
 'QUARTER': 0.25 * 100,
 'DIME': 0.1 * 100,
 'NICKEL': 0.05 * 100,
 'PENNY': 0.01 * 100
  };

function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  let totalCash = 0
  for(let money of cid)
    totalCash+=money[1]*100
  if(change > totalCash)
    {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    else if(change == totalCash)
    {
      return {status: "CLOSED", change: cid}
    }

    else
    {
      var sol =[]
      cid = cid.reverse()
      for(let cash of cid)
      {
        var register = [cash[0],0]
        cash[1]*=100
        while(change >= moneyval[cash[0]] && cash[1] > 0)
        {
          change = change - moneyval[cash[0]]
          cash[1] = cash[1] - moneyval[cash[0]]
          register[1] = register[1] + moneyval[cash[0]]/100
                     
        }
         if(register[1] > 0)
            sol.push(register)
}
// console.log(sol)
      if(change > 0)
        return {status: "INSUFFICIENT_FUNDS", change: []}
      else
          return {status: "OPEN", change:sol}

      }
      
      }
      

    

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])