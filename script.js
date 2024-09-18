const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const downloadBtn = document.getElementById("downloadBtn");
const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput();
});

// function size change and url 
function isEmptyInput() {
  if (qrText.value.length > 0) {
    generateQRCode();
  } else {
    alert("Enter the text or URL to generate your QR code.");
  }
}

// function color and height 
function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}

// download button start 
downloadBtn.addEventListener("click", () => {
  let img = document.querySelector(".qr-body img");
  if (img !== null) {
    let imgAtr = img.getAttribute("src");
    downloadBtn.setAttribute("href", imgAtr);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

// download button end 