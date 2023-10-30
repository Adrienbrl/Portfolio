const filtersGallery = document.querySelectorAll("#projets ul li");
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




const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  // Boucler sur tous items -> retirer la classe "is-active"
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  })
  
  const elementColor = el.dataset.activeColor;
  const target = el.dataset.target;
  
  console.log(target);
  
  // Styliser l'indicateur
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.backgroundColor = elementColor;
  indicator.style.left = `${el.offsetLeft}px`;
  
  // Ajout la classe is-active
  el.classList.add('is-active');
  el.style.color = elementColor;
}

items.forEach((item, index) => {
  item.addEventListener('click', e => {
    handleIndicator(e.target)
  });
  item.classList.contains('is-active') && handleIndicator(item);
});


const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  const shareBtn = document.querySelector('.share');
  shareBtn.classList.toggle('active');
});

const btn = document.querySelector('.to-the-top');

btn.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})


const viewMoreButtons = document.querySelectorAll('.gallery-item button');

viewMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const galleryItem = button.closest('.gallery-item');
        const galleryTag = galleryItem.querySelector('img').getAttribute('data-gallery-tag');

        if (galleryTag === 'Front') {
            document.getElementById('modal-booki').classList.add("modal-active");
            document.body.classList.add("modal-open");
        } else if (galleryTag === 'Back') {
            document.getElementById('modal-sophie').classList.add("modal-active");
            document.body.classList.add("modal-open");
        } else if (galleryTag === 'Front Optimisation') {
            document.getElementById('modal-nina').classList.add("modal-active");
            document.body.classList.add("modal-open");
        } else if (galleryTag === 'Front Kasa') {
            document.getElementById('modal-kasa').classList.add("modal-active");
            document.body.classList.add("modal-open");
        }
    });
});

const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        button.closest('.modal').classList.remove("modal-active");
        document.body.classList.remove("modal-open");
    });
});


