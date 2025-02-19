let inpt = document.getElementById("inpt");
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");
let toggleBtn = document.getElementById("theme");
let langBtn = document.getElementById("lang");

langBtn.addEventListener("click", () => {
  if (btn.innerText === "أضف رسالة") {
    btn.innerText = "Add Message";
    inpt.placeholder = "Enter Message";
    document.body.classList.toggle("rtl");
    toggleBtn.classList.remove("end-0");
    toggleBtn.classList.add("start-0");
  } else {
    btn.innerText = "أضف رسالة";
    inpt.placeholder = "أدخل رسالة";
    document.body.classList.toggle("rtl");
    toggleBtn.classList.remove("start-0");
    toggleBtn.classList.add("end-0");
  }
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (btn.classList.contains("btn-primary")) {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-primary-emphasis");
    toggleBtn.classList.remove("btn-dark");
    toggleBtn.classList.add("btn-light");
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    btn.classList.remove("btn-primary-emphasis");
    btn.classList.add("btn-primary");
    toggleBtn.classList.remove("btn-light");
    toggleBtn.classList.add("btn-dark");
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

btn.addEventListener("click", () => {
  msg.innerHTML = inpt.value;
  inpt.value = "";
});
