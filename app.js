// const username = document.querySelector("#username");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const form = document.querySelector("#form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log(username.value);
//   console.log(email.value);
//   console.log(password.value);
// });

// const ul = document.querySelector(".images");
// const image3 = document.querySelector("#image-3");

// const ul = document.querySelector(".images");
// const image3 = document.querySelector("#image-3");
// const link = document.querySelector("#link-1");

// ul.addEventListener("click", function (event) {
//   console.log(event.target.tagName);
//   g;
//   if (event.target.tagName === "A") {
//     event.target.innerHTML = "abc";
//     console.log(event.target.innerHTML);
//   }
//   console.log(event.target.parentNode.tagName);
//   if (event.target.parentNode && event.target.parentNode.tagName === "LI") {
//     t;
//     event.target.parentNode.remove();
//   }
// });

const image = document.querySelector("#image");
image.addEventListener("mouseover", function () {
  image.src =
    "https://cdn3.vectorstock.com/i/1000x1000/10/37/light-bulb-glowing-element-shining-lamp-vector-21811037.jpg";
});
image.addEventListener("mouseout", function () {
  image.src =
    "https://cdn1.byjus.com/wp-content/uploads/2021/05/word-image7.png";
});
