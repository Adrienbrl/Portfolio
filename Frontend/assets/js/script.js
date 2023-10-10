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






const scrollIndicator = document.querySelector(".scroll-indicator");
const body = document.querySelector("body");

const observer = new IntersectionObserver(handleIntersect)

observer.observe(body)

function handleIntersect(entries){
  const el = entries[0];
  if(el.isIntersecting){
    window.addEventListener("scroll", indicatorAnimation)
  } else if(!el.isIntersecting) {
    window.removeEventListener("scroll", indicatorAnimation)
  }
}


function indicatorAnimation() {

  if(window.scrollY > body.offsetTop) {
    const percentage = ((window.scrollY - body.offsetTop) / body.scrollHeight * 100).toFixed(2);
    scrollIndicator.style.transform = `scaleX(${(percentage / 100)})`
  } else {
    scrollIndicator.style.transform = "scaleX(0)"
  }
}


const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  const shareBtn = document.querySelector('.share');
  shareBtn.classList.toggle('active');
});


// Récupérer la valeur du compteur depuis le stockage local
let count = localStorage.getItem('likeCount');

// Si count est null (première visite), initialiser à 0
if (count === null) {
    count = 0;
}

// Mettre à jour le texte du compteur
likeCount.textContent = count;

likeButton.addEventListener('click', () => {
    // Incrémenter le compteur
    count++;
    
    // Mettre à jour le texte du compteur
    likeCount.textContent = count;

    // Enregistrer la nouvelle valeur dans le stockage local
    localStorage.setItem('likeCount', count);
});


