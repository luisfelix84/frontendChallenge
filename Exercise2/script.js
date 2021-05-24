
const img = document.createElement("img")
img.src = "https://imagizer.imageshack.com/img922/8779/nwYKsR.jpg";
img.classList.add("image")

document.getElementById("card").appendChild(img);


const bar = document.createElement("div");
bar.classList.add("bar");

document.getElementById("card").appendChild(bar);


const title = document.createElement("H2");
const text = document.createTextNode("1984");
title.classList.add("title");

title.appendChild(text);
bar.appendChild(title);


const button = document.createElement("button");
const buttonText = document.createTextNode("INSTAGRAM");

button.addEventListener('click', function () {
    window.location = 'https://www.instagram.com/1984pt/'
}, false)

button.classList.add("button");

button.appendChild(buttonText);
bar.appendChild(button);