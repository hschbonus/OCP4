// AFFICHAGE FILTRES

const allImg = document.querySelectorAll(".gallery img");
let imgTag = [];
for (let i = 0; i < allImg.length; i++) {
    imgTag.push(allImg[i].dataset.galleryTag);
  };

const imgSet = [...new Set(imgTag)];

for (let c = 0; c < imgSet.length; c++) {
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

// FONCTION DE FILTRE

const filter = (e) => {
    const filterValue = e.target.id;
    const allImg = document.querySelectorAll(".gallery img");
    if (filterValue === "tous") {
        for (let i = 0; i < allImg.length; i++) {
            allImg[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < allImg.length; i++) {
            if (allImg[i].dataset.galleryTag === filterValue) {
                allImg[i].style.display = "block";
            } else {
                allImg[i].style.display = "none";
            }
        }
    }
}; 

const allCategories = document.querySelectorAll(".gallery-filter input");
for (let i = 0; i < allCategories.length; i++) {
    allCategories[i].addEventListener("click", filter);
}


