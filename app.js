var header = document.getElementById("nav-bar")

header.addEventListener("click",function(e){
   has_class = header.querySelector(".active");
   if(has_class)has_class.classList.remove("active");
   e.target.classList.add("active");
});

let imgs = ["./images/bgmain.JPG","./images/bg2.JPG","./images/bg3.JPG"]
let hs = ["MES","Boom!","Good"]
let ps = ["A software that is designed to optimise manufacturing processes...","hello this is MES"," our services Good, others bad"]
let img = document.getElementById("img-home");
let h = document.getElementById("glass-h")
let p = document.getElementById("glass-p")

setInterval(tictic, 5000);
let i = 0 ;
function tictic() {
img.src = imgs[i];
h.innerText = hs[i]
p.innerText = ps[i]
i++;
if(i>=imgs.length)i=0;

}

