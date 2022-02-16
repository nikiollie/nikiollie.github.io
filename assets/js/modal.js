
// Get the modals
var modals = document.getElementsByClassName('modal');

// Get the button that opens the modal
var proj_images = document.getElementsByClassName("project-image");

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close");

for (let i = 0; i < modals.length; i++) {
    // When the user clicks the button, open the modal
    proj_images[i].onclick = function() {
        modals[i].style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span[i].onclick = function() {
        modals[i].style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(e) {
        const allModals = document.querySelectorAll('.modal');
        if (!e.path.some(x => x.className && x.className.includes('modal-content'))) {
          allModals.forEach(x => x.style.display = 'none');
        }
      }, true)
}
