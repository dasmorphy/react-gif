import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifts } from '../helpers/GetGifs';
import { GifImg } from './GifImg';

export const CollectionGift = ({category}) => {
    
    const {data:images, loading} = useFetchGifs(category);

   
    
    // const [images, setImages] = useState([])


    // //Cuando se cargue el componente por primera vez, hace la peticion para obtener los gifs 
    // //cada que se rederiza el componente se vuelve a ejecutar
    // useEffect(()=>{
    //     getGifts(category)
    //         .then(setImages);//then porque devolvemos una promesa
    // },[category]) //enviando dependencias


    return (
    <>
        <h3 className="animate__animated animate__fadeInUp">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Cargando...</p> }
        {/* {loading ? <p>Cargando...</p>: <p>Gifs Cargados</p> } SEGUNDA OPCION DE LOADING*/}

        
        <div className="card-grid"> 
            {
                images.map(img => (
                    <GifImg
                        key={img.id}
                        {...img}
                    />
                ))
            }
            {/* <button onClick = {() => setCount(count + 1)}></button> */}
        </div>
    </>
  )
  
}
