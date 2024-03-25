import React from 'react';

const Capas = ({mangaDerColor,mangaIzqColor, handleMangaDerColorChange, handleMangaIzqColorChange,
frenteColor, handleFrenteColorChange, espaldaColor, handleEspaldaColorChange, cuelloColor, handleCuelloColorChange}) => {
   
  
  return (
    <div className="col-span-1 flex-grow">
      <h3 className='text-white bg-black h-10 border '>Capas camisa</h3>
      <div className="col-span-1 flex-grow flex flex-col m-2">
        <div className="m-5">
        <input 
         type="color" id="mesh" name="mesh" value={cuelloColor} onChange={handleCuelloColorChange} />
        <label htmlFor="Cuello">Cuello</label>
        </div>
        <div className="m-5">
        <input
         type="color" id="mesh" name="mesh" value={frenteColor} onChange={handleFrenteColorChange}/>
        <label htmlFor="Frente">Frente</label>
        </div>
        <div className="m-5">
        <input
         type="color" id="mesh" name="mesh" value={espaldaColor} onChange={handleEspaldaColorChange}/>
        <label htmlFor="Espalda">Espalda</label>
        </div>
        <div className="m-5">
        <input
         type="color" id="mesh" name="mesh" value={mangaDerColor} onChange={handleMangaDerColorChange}/>
        <label htmlFor="Manga_der">Manga derecha</label>
        </div>
        <div className="m-5">
        <input
         type="color" id="mesh" name="mesh" value={mangaIzqColor} onChange={handleMangaIzqColorChange}/>
        <label htmlFor="Manga_izq">Manga Izquierda</label>
        </div>
      </div>
    </div>
  );
};

export default Capas;
