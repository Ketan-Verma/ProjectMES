var header = document.getElementById("nav-bar")

header.addEventListener("click",function(e){
   has_class = header.querySelector(".active");
   if(has_class)has_class.classList.remove("active");
   e.target.classList.add("active");
});

let imgs = ["./images/img1.JPG","./images/img2.JPG","./images/img3.JPG","./images/img4.JPG"]
let img = document.getElementById("img-home");
img.src = imgs[0];

setInterval(tictic, 4000);
let i = 1 ;
function tictic() {
img.src = imgs[i];
i++;
if(i>=imgs.length)i=0;

}

