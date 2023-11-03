// FILTRAGE DES FILTRES PROJETS ON 
const filtersGallery = document.querySelectorAll(".filters ul li");
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
// FILTRAGE DES FILTRES PROJETS OFF



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

// BUTTON SHARE ON
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  const shareBtn = document.querySelector('.share');
  shareBtn.classList.toggle('active');
});
// BUTTON SHARE OFF

// BUTTON TO THE TOP ON
const btn = document.querySelector('.to-the-top');

btn.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})
// BUTTON TO THE TOP OFF

// MODAL DES PROJETS ON
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
// MODAL DES PROJETS OFF

// CURTAIN MENU
const curtainButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector(".curtain-menu")
const navLinks = navigation.querySelectorAll("a");
const curtainOverlay = document.querySelector(".curtain-overlay");

curtainButton.addEventListener("click", toggleNav)

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    curtainButton.classList.remove("active");
    navigation.classList.remove("active");
    curtainOverlay.style.display = curtainOverlay.style.display === "none" ? "block" : "none";
  });
});

function toggleNav(){
  curtainButton.classList.toggle("active")
  navigation.classList.toggle("active")
  curtainOverlay.style.display = curtainOverlay.style.display === "block" ? "none" : "block";
}

curtainOverlay.addEventListener("click", () => {
  curtainButton.classList.remove("active");
  navigation.classList.remove("active");
  curtainOverlay.style.display = "none";
});
// CURTAIN MENU OFF


