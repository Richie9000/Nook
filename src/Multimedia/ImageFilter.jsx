import React from 'react';

const ImageFilter = ({  applyFilter }) => {

  const handleFilterClick = (filter) => {
    if (typeof applyFilter === 'function') {
      applyFilter(filter);
    } else {
      console.error('applyFilter is not a function');
    }
  };

  return (
    <div>
      <div>Agrega filtros</div>
      <div className='col-span-1 flex-grow flex flex-col m-2'>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={() => applyFilter("invert")}
        >
          Invert
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={() => applyFilter("grayscale")}
        >
          Grayscale
        </button>
      
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={() => applyFilter("gaussian")}
        >
         Gaussian
        </button>

      </div>
    
    </div>
  );
};

export default ImageFilter;