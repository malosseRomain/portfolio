function getAndSetImgHeight() {
    var textContainers = document.querySelectorAll('.text-container');
    var images = document.querySelectorAll('.image-container img');

    images.forEach((img, index) => {
        img.onload = function() {
            setHeight(img, index);
        };
        if (img.complete) {
            setHeight(img, index);
        }
    });

    function setHeight(img, index) {
        const minHeight = 400;
        const imgHeight = img.offsetHeight;
        const containerHeight = Math.max(imgHeight, minHeight);

        if (textContainers[index]) {
            textContainers[index].style.height = containerHeight + 'px';
            textContainers[index].style.display = 'flex';
            textContainers[index].style.flexDirection = 'column';
            textContainers[index].style.justifyContent = 'center';
        }
    }
}

window.addEventListener('load', getAndSetImgHeight);
