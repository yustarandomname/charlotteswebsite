const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const skeches = document.getElementById("skeches");

const expandedImg = document.getElementById("expandedImg");
expandedIndex = null;
let imgNumber = 0;

const imageIndexes = {
  werk_0 : {
    main: "main",
    sketches: ["1"]},
  werk_1 : {
    main: "main",
    sketches: ["1","2","3","4"]},
  werk_2 : {
    main: "main",
    sketches: ["1","2","3"]},
  werk_3 : {
    main: "main",
    sketches: ["1","2","3"]},
  werk_4 : {
    main: "main",
    sketches: ["1","2","3"]},
  werk_5 : {
    main: "main",
    sketches: null},
  werk_6 : {
    main: "main",
    sketches: ["1","2","3","4","5"]},
  werk_7 : {
    main: "main",
    sketches: ["1","2","3","4","5","6","7","8","9","10","11"]},
  werk_8 : {
    main: "main",
    sketches: ["1","2"]},
  werk_9 : {
    main: "main",
    sketches: null}, 
  werk_10 : {
    main: "main",
    sketches: ["1","2"]}
}

const imgPerCol = Math.ceil(Object.keys(imageIndexes).length/3);

for(let i in imageIndexes){
    const image =  document.createElement("img");
    image.src  = "imgs/"+i+"/main.jpg";
    image.alt = "artwork";
    image.classList.add("portfolioImage");
    imgNumber += 1;
    if (imgNumber<=imgPerCol){
      gallery.children[0].appendChild(image);
    } else if(imgNumber<=imgPerCol*2){
      gallery.children[1].appendChild(image);
    } else{
      gallery.children[2].appendChild(image);
    }
  
    image.addEventListener("click", () =>{
      popup.style.display = "block";
      expandedImg.src = "imgs/"+i+"/main.jpg";
      skeches.innerHTML = "";
      for(let ii in imageIndexes[i].sketches){
            const sketchImage = document.createElement("img");
            sketchImage.src = "imgs/"+i+"/"+ii+".jpg";
            sketchImage.classList.add("sketchImage");
            skeches.appendChild(sketchImage);
      }

    })

  }
  
  
  // console.log(Object.keys(imageIndexes).length)
  // console.log(Object.keys(imageIndexes)[2])
  // console.log(Object.keys(imageIndexes))