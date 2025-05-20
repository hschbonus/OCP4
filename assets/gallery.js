

const allImg = document.querySelectorAll(".gallery img");
let imgTag = [];
for (let i = 0; i < allImg.length; i++) {
    imgTag.push(allImg[i].dataset.galleryTag);
  };
console.log(imgTag);

const imgSet = [...new Set(imgTag)];
console.log(imgSet);

for (let c = 0; c < imgSet.length; c++) {
    // Partie filtres
    const sectionCategories = document.querySelector(".gallery-filter");
    const categoriesElement = document.createElement("label");
    const categoriesInput = document.createElement("input");
    categoriesInput.type = "radio";
    categoriesInput.name = "cat";
    categoriesInput.id = imgSet[c];
    categoriesInput.hidden = true;

    const span = document.createElement("span");
    span.className = "btn";
    span.textContent = imgSet[c];

    categoriesElement.appendChild(categoriesInput);
    categoriesElement.appendChild(span);
    sectionCategories.appendChild(categoriesElement);
}