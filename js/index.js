const image = document.getElementById("review");

function upDate(previewPic) {
  console.log(previewPic.src);
  image.style.backgroundImage = "url(" + previewPic.src + ")";
  image.innerText = previewPic.alt;
}

function unDo() {
  image.style.backgroundImage = "url('')";
  image.innerText = "Hover over an image below to display here.";
}
