import React, { useState } from 'react';
import { useDropzone } from "react-dropzone";
import ImageFilter from './ImageFilter';

const Multimedia = React.memo(({ handleImageDrop, applyFilter}) => {
  const [selectedOption, setSelectedOption] = useState("");
  

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };
  

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      handleImageDrop(acceptedFiles);
    },
  });

  return (
    <div className="col-span-1 flex-grow flex flex-col">
      <h3 className="text-white bg-black h-10">Multimedia</h3>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleOptionClick('multimediaArtista')}
        >
          Multimedia Artista
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleOptionClick('multimediaNook')}
        >
          Multimedia Nook
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-start m-1">
        <div className="mb-12">
          {selectedOption === 'multimediaArtista' && (
            <div className="border-solid border-2 border-black mb-4 h-8" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Sube tu imagen</p>
            </div>
          )} 
         
          {selectedOption === 'multimediaNook' && (
            <div className="mb-2">
          
              <img src="image1.jpg" alt="Image 1" />
              <img src="image2.jpg" alt="Image 2" />
            </div>
          )}
        </div>
        <div className="flex-grow flex justify-start items-start">
        <ImageFilter onFilterClick={handleFilterClick} applyFilter={applyFilter} />
        </div>
      </div>
    </div>
  );
});

export default Multimedia;