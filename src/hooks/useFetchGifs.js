import { useEffect, useState } from "react"
import { getGifts } from "../helpers/GetGifs";


//estandar poner use al archivo de hooks
//los hooks son funciones

export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifts(category)
            .then(img =>{//then ya que devuelve promesa
                setTimeout( ()=>{
                    
                    setState({
                        data: img,
                        loading: false
                    })
                },800);
            })
    },[category])//se evalua el efecto cada q la categoria cambia 

    return state;
}