var header = document.getElementById("nav-bar")

header.addEventListener("click",function(e){
   has_class = header.querySelector(".active");
   if(has_class)has_class.classList.remove("active");
   e.target.classList.add("active");
});

