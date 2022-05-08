const changeSrc = (viewport) => {
  imageTransformElement.setAttribute('src', base + viewport + imageTransform);
  imageStandOutElement.setAttribute('src', base + viewport + imageStandOut);
  imageGalleryMilkBottlesElement.setAttribute(
    'src',
    base + viewport + imageGalleryMilkBottles
  );
  imageGalleryOrangeElement.setAttribute(
    'src',
    base + viewport + imageGalleryOrange
  );
  imageGalleryConeElement.setAttribute(
    'src',
    base + viewport + imageGalleryCone
  );
  imageGallerySugarCubesElement.setAttribute(
    'src',
    base + viewport + imageGallerySugarCubes
  );
};

const updateImages = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 620) changeSrc('desktop/');
  if (windowWidth < 620) changeSrc('mobile/');
};

window.addEventListener('resize', updateImages);

if (document.readyState === 'interactive') updateImages();
