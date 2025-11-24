document.addEventListener("DOMContentLoaded", () => {
  console.log("Сайт сәтті жүктелді!");

  const btn = document.getElementById("testBtn");

  if (btn) {
    btn.addEventListener("click", () => {
      alert("Скрипт дұрыс жұмыс істеп тұр!");
    });
  }
});
