var wp = wp || {}; 

wp.initImages = function () { 
    var imageModal = document.getElementById('image-modal'); 

    function setImage(images, index) { 
        document.getElementById('modal-image').src = images[index].src; 
        // if (images.length <= 1) { 
        //     document.getElementById('image-nav').classList.add('hide'); 
        // } else { 
        //     var prevIndex = (index === 0) 
        //         ? images.length - 1 
        //         : index - 1; 
        //     var nextIndex = (index === images.length - 1) 
        //         ? 0
        //         : index + 1; 
        //     document.getElementById('next-image-button').onclick = function () { 
        //         setImage(images, nextIndex); 
        //     }
        //     document.getElementById('prev-image-button').onclick = function () { 
        //         setImage(images, prevIndex); 
        //     }
        // }
    }

    // Loop through article images, add link to image modal 
    document.querySelectorAll('article').forEach(function (article) { 
        var images = article.querySelectorAll('img'); 
        images.forEach(function (image, index) { 
            image.style.cursor = 'zoom-in'; 
            image.addEventListener('click', function () { 
                imageModal.classList.remove('hide'); 
                setImage(images, index); 
            }); 
        }); 
    }); 

    // Image modal: hide on click
    document.getElementById('image-modal').onclick = function () { 
        imageModal.classList.add('hide'); 
        imageModal.style.cursor = 'zoom-out';
    }
}; 

wp.initImages(); 