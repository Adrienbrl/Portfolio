const filtersGallery = document.querySelectorAll("#projets .filters ul li");
const imageGallery = document.querySelectorAll("#projets .gallery img");
const all = document.querySelector(".all");

for (let filter of filtersGallery) {
    filter.addEventListener("click", function () {
        for (let filter of filtersGallery) {
            filter.classList.remove("active-tag");
        }
        filter.classList.add("active-tag");
        for (let image of imageGallery) {
            const tag = image.getAttribute("data-gallery-tag");
            const shouldDisplay = tag.includes(filter.getAttribute("data-gallery-tag")) || filter === all;
            image.style.display = shouldDisplay ? "block" : "none";
            const galleryItem = image.parentElement; 
            galleryItem.style.display = shouldDisplay ? "block" : "none";
        }
    });
}

