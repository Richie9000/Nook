import { useState } from 'react';
import './App.css'
import Capas from './Capas/Capas.jsx';
import Multimedia from './Multimedia/Multimedia.jsx';
import ShirtMarkUp from './Shirt/ShirtMarkUp.jsx';
import { Image } from 'image-js';



function App() {
  const [mangaDerColor, setMangaDerColor] = useState("#ffffff");
  const [espaldaColor, setEspaldaColor] = useState("#ffffff");
  const [frenteColor, setFrenteColor] = useState("#ffffff");
  const [cuelloColor, setCuelloColor] = useState("#000000");
  const [mangaIzqColor, setMangaIzqColor] = useState("#ffffff");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [filteredImage, setFilteredImage] = useState(null);

  const applyFilter = async (filter) => {
    if (uploadedImage) {
      try {
        const response = await fetch(uploadedImage);
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        const image = await Image.load(imageUrl);

        let filteredImageData = null;

        switch (filter) {
          case "blur":
            filteredImageData = blur(image, 5);
            console.log('Blurred Image Data:', filteredImageData); 
            break;
          case "highpass":
            filteredImageData = image.highpass();
            break;
          case "invert":
            filteredImageData = image.invert();
            break;
          case "grayscale":
            filteredImageData = image.grey();
            break;
          case "gaussian":
            filteredImageData = image.gaussianFilter();
            break;
          case "canny":
            filteredImageData = image.cannyEdgeDetection();
            break;
          default:
            return;
        }

        const filteredBlob = await filteredImageData.toBlob();
        setFilteredImage(URL.createObjectURL(filteredBlob));
      } catch (error) {
        console.error("Error applying filter:", error);
      }
    }
  };

  const handleMangaDerColorChange = (e) => {
    setMangaDerColor(e.target.value);
  };

  const handleEspaldaColorChange = (e) => {
    setEspaldaColor(e.target.value);
  };

  const handleFrenteColorChange = (e) => {
    setFrenteColor(e.target.value);
  };

  const handleCuelloColorChange = (e) => {
    setCuelloColor(e.target.value);
  };

  const handleMangaIzqColorChange = (e) => {
    setMangaIzqColor(e.target.value);
  };

  const handleImageDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        setFilteredImage(null)
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div style={{ height: "80vh"}}>
     <header>
  <nav className="bg-black w-full px-4 py-2 flex justify-between items-center ">
    <div className="logo text-white">NOK</div>
    <ul className="flex">
      <li className="mr-4 text-white">INICIAR SESION</li>
      <li className="mr-4 text-white">INICIO</li>
      <li className="mr-4 text-white">DISEÑADOR</li>
      <li className="mr-4 text-white">ARTISTAS</li>
      <li className="text-white">
        <i className="cart-icon" />
      </li>
    </ul>
  </nav>
     </header>
     <main className='flex h-screen'>
        <div className="canvas-container flex-grow grid grid-cols-3">
          <ShirtMarkUp mangaDerColor={mangaDerColor} 
                       mangaIzqColor={mangaIzqColor} 
                       frenteColor={frenteColor}
                       espaldaColor={espaldaColor}
                       cuelloColor={cuelloColor}
                       uploadedImage={filteredImage || uploadedImage}
                       
                        />
          <Capas  
          handleMangaDerColorChange={handleMangaDerColorChange} 
          handleEspaldaColorChange ={handleEspaldaColorChange}
          handleFrenteColorChange= {handleFrenteColorChange}
          handleMangaIzqColorChange={handleMangaIzqColorChange}
          handleCuelloColorChange={handleCuelloColorChange} />
          <Multimedia handleImageDrop={handleImageDrop} 
          uploadedImage={filteredImage || uploadedImage}
          applyFilter={applyFilter} 
          />
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;

