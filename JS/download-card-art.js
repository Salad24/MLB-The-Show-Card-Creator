function downloadCardArt() {
    domtoimage.toBlob(document.querySelector('.container-of-image-with-text'))
    .then(function (blob) {
        window.saveAs(blob, "My Card Art.png");
    });
}