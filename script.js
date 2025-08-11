
/* Small JS for pastry gallery interactions */
document.addEventListener('DOMContentLoaded', function(){
  // gallery thumbnail click -> change main image
  document.querySelectorAll('.gallery-thumbs').forEach(function(container){
    container.addEventListener('click', function(e){
      const t = e.target;
      if(t && t.tagName === 'IMG'){
        const main = container.closest('.pastry-hero').querySelector('.pastry-main img');
        main.src = t.dataset.full || t.src;
      }
    });
  });
});
