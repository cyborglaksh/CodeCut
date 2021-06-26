// let x=document.getElementById("list1")
// let z=document.getElementById("list2")
// let listPanel1=document.getElementById("listPanel1")
// let listPanel2=document.getElementById("listPanel2")

// function myFunction(y){
//   if (y.className.indexOf("w3-show") == -1) {
//     y.className += " w3-show";
//     y.previousElementSibling.className = 
//     y.previousElementSibling.className.replace("w3-black", "w3-blue");
//   } else { 
//     y.className = y.className.replace(" w3-show", "");
//     y.previousElementSibling.className = 
//     y.previousElementSibling.className.replace("w3-blue", "w3-black");
//   }

// }
// listPanel1.addEventListener("click",()=>{
//   myFunction(x)
  
// })
// listPanel2.addEventListener("click",()=>{
//   myFunction(z)
// })
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}