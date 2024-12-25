const images = [
  "./images/images.jpeg",
  "./images/iwif-2014-nagaland.jpg",
  "./images/chhattisgarh-iwif-2016.jpg",
  "./images/goa-iwif-2016.jpg",
  "./images/uttarakhand-wifi-2016.jpg",
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

function displayImage(index) {
  sliderImage.src = images[index];
}

displayImage(currentIndex);

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  displayImage(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  displayImage(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  displayImage(currentIndex);
}, 8000);
