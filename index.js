
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var order =[];
var i =0 ;

function randomNumbers() {
  for (var j=1; j <= 9; j++)
  document.getElementById("s"+j).innerHTML = number[Math.floor(Math.random()*number.length)];

}


document.getElementById("s1").addEventListener("mouseover", function(){
  document.getElementById("s1").style.visibility = "hidden";
  order[i] = document.getElementById("s1").innerHTML;
  i++;
  if(i == 9)
  alertAfterHovering();
});

document.getElementById("s2").addEventListener("mouseover", function(){
  document.getElementById("s2").style.visibility = "hidden";
  order[i] = document.getElementById("s2").innerHTML;
  i++;

  if(i == 9)
  alertAfterHovering();
});

document.getElementById("s3").addEventListener("mouseover", function(){
  document.getElementById("s3").style.visibility = "hidden";
  order[i] = document.getElementById("s3").innerHTML;
  i++;

  if(i == 9)
  alertAfterHovering();
});
document.getElementById("s4").addEventListener("mouseover", function(){
  document.getElementById("s4").style.visibility = "hidden";
  order[i] = document.getElementById("s4").innerHTML;
  i++;
});
document.getElementById("s5").addEventListener("mouseover", function(){
  document.getElementById("s5").style.visibility = "hidden";
  order[i] = document.getElementById("s5").innerHTML;
  i++;

  if(i == 9)
  alertAfterHovering();
});
document.getElementById("s6").addEventListener("mouseover", function(){
  document.getElementById("s6").style.visibility = "hidden";
  order[i] = document.getElementById("s6").innerHTML;
  i++;
});
document.getElementById("s7").addEventListener("mouseover", function(){
  document.getElementById("s7").style.visibility = "hidden";
  order[i] = document.getElementById("s7").innerHTML;
  i++;

  if(i == 9)
  alertAfterHovering();
});
document.getElementById("s8").addEventListener("mouseover", function(){
  document.getElementById("s8").style.visibility = "hidden";
  order[i] = document.getElementById("s8").innerHTML;
  i++;
});
document.getElementById("s9").addEventListener("mouseover", function(){
  document.getElementById("s9").style.visibility = "hidden";
  order[i] = document.getElementById("s9").innerHTML;
  i++;

  if(i == 9)
  alertAfterHovering();
});

function alertAfterHovering() {
  var all = "The order in which the numbers disappeared is: ";
  for (var j = 0 ; j < i; j++) {
    if(j == (i-1))
      all= all +" "+order[j] ;
    else
    all= all +" "+order[j] +",";
  }
  alert(all);
}
