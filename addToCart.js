if(localStorage.val > 1){
  var globe = (localStorage.val) - 1;
}else{
  var globe =  0;
}
var  num = document.getElementById("Addtocart");
addcart();
function addcart(){
  num.innerHTML = globe++; 
  localStorage.val = globe;
  console.log(globe);
}