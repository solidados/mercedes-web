const btns = document.querySelectorAll(".feature__link");
const lists = document.querySelectorAll(".feature-sub");

btns.forEach((btnItem, index) => {
  btnItem.addEventListener("click", (event) => {
    // const targetElement = event.target;

    btns.forEach((btnItem) => {
      // if (targetElement.closest(".feature__link")) {}
        btnItem.classList.remove("feature__link_active");
    });
    btnItem.classList.add("feature__link_active");

    lists.forEach((listItem) => {
      listItem.classList.add("hidden");
    });

    lists[index].classList.remove("hidden");
  });
});
