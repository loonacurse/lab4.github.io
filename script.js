document.getElementById("demo").addEventListener("click", function() {
    this.classList.toggle("bg-color1");
});

document.querySelector("#demo1").addEventListener("click", function() {
    this.classList.toggle("bg-color2");
});

function addImage() {
    const imageContainer = document.getElementById("image-container");

    // Перевірка, чи вже є зображення
    if (!imageContainer.querySelector("img")) {
        const img = document.createElement("img");
        img.src = "https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/603fc39c503d9_03%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2.jpg";
        img.alt = "Sample Image";
        img.style.width = "200px"; // початковий розмір зображення
        imageContainer.appendChild(img);
    }
}

// Функція для збільшення розміру зображення
function increaseImage() {
    const img = document.querySelector("#image-container img");
    if (img) {
        const currentWidth = img.clientWidth;
        img.style.width = (currentWidth + 100) + "px"; // збільшує ширину на 20px
    }
}

// Функція для зменшення розміру зображення
function decreaseImage() {
    const img = document.querySelector("#image-container img");
    if (img) {
        const currentWidth = img.clientWidth;
        img.style.width = (currentWidth - 100) + "px"; 
    }
}

function removeImage() {
    const img = document.querySelector("#image-container img");
    if (img) {
        img.remove();
    }
}