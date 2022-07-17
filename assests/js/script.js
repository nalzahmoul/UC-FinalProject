// Cover
function setNewImageCover() {
  document.getElementById("cover-image").src =
    ".//assests/pictures/cover-image2.jpeg";
}

function setOldImageCover() {
  document.getElementById("cover-image").src =
    "./assests/pictures/cover-image.jpeg";
}
// Location
function PinUpLocation() {
  locationStore;
  document.getElementById("locationStore").src =
    ".//assests/pictures/storeLocation-2.png";
}

function PopUpLocation() {
  document.getElementById("locationStore").src =
    "./assests/pictures/storeLocation.png";
}

// Products
// Product 1
function setNewImageONE() {
  document.getElementById("Img1").src = "./assests/pictures/HoverImages/1.png";
}

function setOldImageONE() {
  document.getElementById("Img1").src =
    "./assests/pictures/Products/Trockenblumen/Trockenblumen.jpeg";
}

// Product 2
function setNewImageTWO() {
  document.getElementById("Img2").src = "./assests/pictures/HoverImages/3.png";
}

function setOldImageTWO() {
  document.getElementById("Img2").src =
    "./assests/pictures/Products/Palm Spear/Palmspear.jpeg";
}

// Product 3
function setNewImageTHREE() {
  document.getElementById("Img3").src = "./assests/pictures/HoverImages/4.png";
}

function setOldImageTHREE() {
  document.getElementById("Img3").src =
    "./assests/pictures/Products/Lagurus/Lagurus.jpeg";
}

// Product 4
function setNewImageFOUR() {
  document.getElementById("Img4").src = "./assests/pictures/HoverImages/2.png";
}

function setOldImageFOUR() {
  document.getElementById("Img4").src =
    "./assests/pictures/Products/Trockenblumen Bastel Box/Ü_Box_Weiss_2-1025x1536.jpeg";
}

// Product 5
function setNewImageFIVE() {
  document.getElementById("Img5").src = "./assests/pictures/HoverImages/6.png";
}

function setOldImageFIVE() {
  document.getElementById("Img5").src =
    "./assests/pictures/Products/Eukalyptus/Eukalyptus.jpeg";
}

// Product 6
function setNewImageSIX() {
  document.getElementById("Img6").src = "./assests/pictures/HoverImages/5.png";
}

function setOldImageSIX() {
  document.getElementById("Img6").src =
    "./assests/pictures/Products/DIY_Bastelset/DIY_Bastelset.jpeg";
}

// Contact form
function message() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let msg = document.getElementById("msg");
  const danger = document.getElementById("danger");
  danger.style.display = "none";

  if (name.value === "" || email.value === "" || msg.value === "") {
    danger.style.display = "block";
  } else {
    alert("Your message is successfully sent!");
  }

  setTimeout(() => {
    danger.style.display = "none";
  }, 4000);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("msg").value = "";
}

// NEWS

// Contact form
function messageEmail() {
  let email = document.getElementById("email-2");
  const danger = document.getElementById("danger-2");

  if (email.value === "") {
    danger.style.display = "block";
  } else {
    alert("You are successfully registered!");
  }

  setTimeout(() => {
    danger.style.display = "none";
  }, 4000);

  document.getElementById("email-2").value = "";
}

// Account

function validateLogIn() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  if (username.value == "admin" && password.value == "12345") {
    alert(`Hello ${username.value}, you are signed in sucessfully!`);
  } else if (username.value === "" || password.value === "")
    danger.style.display = "block";
  else {
    alert("Sign Up failed");
  }
  setTimeout(() => {
    danger.style.display = "none";
  }, 2000);

  username.value = "";
  password.value = "";
}

function validateRegister() {
  let username = document.getElementById("username-2");
  let pass = document.getElementById("password-2");
  let mobile = document.getElementById("mobile");
  let email = document.getElementById("email-3");

  if (
    username.value === "" ||
    pass.value === "" ||
    mobile.value === "" ||
    email.value === ""
  ) {
    danger.style.display = "block";
  } else {
    alert(`Hello ${username.value}, you are signed up sucessfully!`);
  }
  setTimeout(() => {
    danger.style.display = "none";
  }, 2000);

  username.value = "";
  pass.value = "";
  mobile.value = "";
  email.value = "";
}

// Cart and products
function loadPage() {
  window.location = "./Cart.html";
}

function reserve() {
  let username = document.getElementById("namePickup");
  let mobile = document.getElementById("mobilePickup");
  let note = document.getElementById("note");
  let date = document.getElementById("day");
  let time = document.getElementById("time");

  if (username.value === "" || note.value === "" || mobile.value === "") {
    error.style.display = "block";
  } else {
    alert(
      `Thank you ${username.value} for your reservation! Kindly Pick up your order according to your reservation.`
    );
  }
  setTimeout(() => {
    error.style.display = "none";
  }, 2000);

  username.value = "";
  note.value = "";
  mobile.value = "";
}
