// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems)
galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', onreateGalleryMarkup)

function createGalleryMarkup(galleryItems) {
    return galleryItems
     .map(({ preview, original, description }) => {
            return `
<div class="gallery__item">
<a class="gallery__link" href='${original}'>
<img class="gallery__image"
src='${preview}'
data-source='${original}'
alt='${description}'/>
</a>
</div>`;
      }).join('');
}

function onreateGalleryMarkup(e) {
  e.preventDefault();
  if (!e.target.dataset.source) {
    return 
  }
  const modal = basicLightbox.create(
`<img 
src= ${e.target.dataset.source}
>`)
  modal.show()
   
  document.addEventListener("keydown", closeModal)
  function closeModal(e) {
    if (e.code === "Escape") { 
    }
    modal.close() 
  }
  document.removeEventListener("keydown", closeModal)
}
console.log(galleryItems);
