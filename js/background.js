const images = ["yoursky.jpg", "mysky.jpg", "yourme.jpg", "myyou.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);