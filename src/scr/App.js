// Ganti bagian useEffect untuk load gambar:
useEffect(() => {
  const loader = new THREE.TextureLoader();
  const customTex = loader.load("/images/craiyon_053906_image.png"); // Path ke gambar Anda
  customTex.flipY = false;
  setCustomTexture(customTex);
}, []);
