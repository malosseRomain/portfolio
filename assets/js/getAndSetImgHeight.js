function getAndSetImgHeight() {
    console.log(window.innerWidth)
    var lineContainers = document.querySelectorAll('.line-container');

    lineContainers.forEach(container => {
        var img = container.querySelector('.image-container img');
        var textContainer = container.querySelector('.text-container');

        img.onload = function() {
            setHeight(container, img, textContainer);
        };
        if (img.complete) {
            setHeight(container, img, textContainer);
        }
    });

    function setHeight(container, img, textContainer) {
        const minHeight = 400;
        const imgHeight = img.offsetHeight;
        const containerHeight = Math.max(imgHeight, minHeight);

        // Set the height of both the image and text container to the same height
        img.style.height = containerHeight + 'px';
        textContainer.style.height = containerHeight + 'px';

        // Check if overflow is active
        if (textContainer.scrollHeight > textContainer.clientHeight) {
            textContainer.style.justifyContent = 'baseline';
        } else {
            textContainer.style.justifyContent = 'center';
        }

        textContainer.style.display = 'flex';
        textContainer.style.flexDirection = 'column';
        textContainer.style.overflowY = 'auto';
    }
}

// window.addEventListener('load', getAndSetImgHeight);
// window.addEventListener('resize', getAndSetImgHeight);