const width = document.getElementById("width");
const height = document.getElementById("height");
const availwidth = document.getElementById("availwidth");
const availheight = document.getElementById("availheight");
const colordepth = document.getElementById("colordepth");
const pixeldepth = document.getElementById("pixeldepth");

width.innerHTML = `width: ${screen.width}`;
height.innerHTML = `height: ${screen.height}`;
availwidth.innerHTML = `availwidth: ${screen.availWidth}`;
availheight.innerHTML = `availheight: ${screen.availHeight}`;
colordepth.innerHTML = `colordepth: ${screen.colorDepth}`;
pixeldepth.innerHTML = `pixeldepth: ${screen.pixelDepth}`;