function getData(t){
    var cost = document.getElementById('bill').value
    var tip = t/100
    var people = document.getElementById('noOfPpl').value
    console.log(cost, tip, people)
    var tipAmt = ((cost/people)*tip).toFixed(3)
    var totAmt = (tipAmt*people).toFixed(3)
    document.getElementById('tip').innerHTML = `₹ ${tipAmt}`
    document.getElementById('tot').innerHTML = `₹ ${totAmt}`
  }
  
  function cust(){
    var cost = document.getElementById('bill').value
    var tip = document.getElementById('cust').value/100
    var people = document.getElementById('noOfPpl').value
    console.log(cost, tip, people)
    var tipAmt = ((cost/people)*tip).toFixed(2)
    var totAmt = (tipAmt*people).toFixed(2)
    document.getElementById('tip').innerHTML = `₹ ${tipAmt}`
    document.getElementById('tot').innerHTML = `₹ ${totAmt}`
  }

  function clearData(){
    document.getElementById('tip').innerHTML = `₹ 0.00`
    document.getElementById('tot').innerHTML = `₹ 0.00`
    document.getElementById('bill').value = ''
    document.getElementById('noOfPpl').value = '' 
  }