function toggleLights(element) {
  const currentOpacity = parseFloat(getComputedStyle(element).opacity);
  element.style.opacity = currentOpacity === 0 ? "1" : "0";
}

function toggleShine(element) {
  const currentOpacity = parseFloat(getComputedStyle(element).opacity);
  element.style.opacity = currentOpacity === 0 ? "0.5" : "0";
}

function toggleGate(element, max = 125, origin = 17.7205, speed = 1) {
  // Don't run if already animating
  if (element.dataset.timer) return;
  // Initialize state if not set
  if (!element.dataset.atEnd) {
    element.dataset.atEnd = "false";
  }
  let goingForward = element.dataset.atEnd === "false";
  const interval = setInterval(() => {
    let x = parseInt(element.getAttribute("x"));
    if (goingForward) {
      x += speed;
      if (x >= max) {
        x = max;
        clearInterval(interval);
        element.dataset.timer = "";
        element.dataset.atEnd = "true";
      }
    } else {
      x -= speed;
      if (x <= origin) {
        x = origin;
        clearInterval(interval);
        element.dataset.timer = "";
        element.dataset.atEnd = "false";
      }
    }
    element.setAttribute("x", x);
  }, 20);
  element.dataset.timer = interval;
}

// // CCTV Bullet
// // Get the modal
// var modal = document.getElementById("myModal");
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("cctv_bullet");
// var modalImg = document.getElementById("img01");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = "https://i.imgur.com/fned5TC.png";
// }
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }
// // CCTV Dome
// // Get the modal
// var modal = document.getElementById("myModal");
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("cctv_dome");
// var modalImg = document.getElementById("img01");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = "https://i.imgur.com/OpgieSl.png";
// }
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }
// // Car Click
// // Get the modal
// var modal = document.getElementById("myModal");
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("car");
// var modalImg = document.getElementById("img01");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = "https://i.imgur.com/GsvRW1H.jpeg";
// }
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }
// // Intercom
// // Get the modal
// var modal = document.getElementById("myModal");
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("intercom");
// var modalImg = document.getElementById("img01");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = "/fp-alt/res/intercom_sampleb3.jpg";
// }
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }

function getRandomTemperature(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1) + "°C";
}
function updateTemperatures() {
  const svgObject = document.getElementById("floorplan");
  if (!svgObject || !svgObject.contentDocument) return;
  const svgDoc = svgObject.contentDocument;
  const tempTspan = svgDoc.getElementById("temp");
  if (tempTspan) {
    tempTspan.textContent = getRandomTemperature(23, 27);
  }
}
// Retry updating every 5 seconds
setInterval(updateTemperatures, 5000);


// function getRandomTemperature(min, max) {
//     return (Math.random() * (max - min) + min).toFixed(1) + "°C";
// }
// const temperatures = {
//     "temp": "23°C"
// };
// const tempvar = document.getElementById("tspan1");
// function updateTemperatures() {
//     temperatures["temp"] = getRandomTemperature(23, 27);
//     if (tempvar) {
//         tempvar.textContent = temperatures["temp"];
//     }
// }
// // Update temperature every second
// setInterval(updateTemperatures, 5000);
