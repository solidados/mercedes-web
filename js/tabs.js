const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");

for (let btn of tabsHandlerElems) {
  btn.addEventListener("click", function () {
    tabsHandlerElems.forEach((item) =>
      item.classList.remove("design-list__item-active")
    );
    btn.classList.add("design-list__item-active");

    tabsContentElems.forEach((content) => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
    // btn.dataSet.tabsHandeler;
  });
}
