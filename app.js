var header = document.getElementById("nav-bar")

header.addEventListener("click",function(e){
   has_class = header.querySelector(".active");
   if(has_class)has_class.classList.remove("active");
   e.target.classList.add("active");
});

let imgs = ["./images/img1.JPG","./images/img2.JPG","./images/img3.png","./images/img4.png"]
let hs = ["MES","Boom!","Good","another"]
let ps = ["A software that is designed to optimise manufacturing processes...","hello this is MES","catch phrase","catch phrase"]
let img = document.getElementById("img-home");
let h = document.getElementById("glass-h")
let p = document.getElementById("glass-p")
img.src = imgs[0];

setInterval(tictic, 4000);
let i = 1 ;
function tictic() {
img.src = imgs[i];
h.innerText = hs[i]
p.innerText = ps[i]
i++;
if(i>=imgs.length)i=0;

}

