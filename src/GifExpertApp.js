import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { CollectionGift } from './components/CollectionGift'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState( ['Dragon ball'])
    //const categories = ['Dragon ball', 'Marvel', 'DC', 'Cartoons'];
    
    
    //con ...categories se estan extrayendo todo el arreglo y se le agrega el nuevo elemento
    // //se usa setCategories para poder cambiar el elemento 
    // const haddleAdd = () =>{
    //     setCategories([...categories, 'Hola']);
    //     //2da solucion (callback) setCategories(categorias => [...categorias, 'Hola'])
    // }
    
    
  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>

        <hr/>
        
        <ol>
            {   //key es id
                categories.map(category => 
                    <CollectionGift 
                        key = {category}
                        category={category}
                    />
                )
            }
            
    
        </ol>
    </>
  )
}
