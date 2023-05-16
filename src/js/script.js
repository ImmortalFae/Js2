let foods = [ "Khachapuri" ,"Lobiani" , "Qababi" ,"Khinkali" ,"Mwvadi" ];
console.log (foods);
for (let i = 0; i < foods.length; i ++){
    document.getElementById("foods").innerHTML += foods[i] + "<br>";
}

const numbers = [ 15,53,22,198,10,28,16,70,33,951 ];
let odds  = numbers.filter(n => n%2);
console.log (odds);

function display(x,secondfunc){
    secondfunc(x);
}

function shefasebisfunc(price){
    if (price > 50) {
        console.log("The price is expensive");
      } else if (price < 50 && price > 20) {
        console.log("The price is average");
      } else {
        console.log("The price is cheap");
      }
}
function getPrice(){
    const price = prompt ("enter your price", 0);
    display(parseInt(price),shefasebisfunc);
}