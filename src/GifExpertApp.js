import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

    //const categories =['One Punch','Samurai X','Dragon Ball']; --> No puedo hacerlo de esta forma porque si quiero agregar un valor al arreglo no puedo
    //Uso el useState  
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = ()=>{
    //     //Uso el spred para matener las categorias anteriores y agregar una nueva ya que sino piso las categorias anteriores y cambia el tipo del state.
    //     setCategories([...categories,'HunterXHunter']);
    //     console.log(categories);

    // }

    return(
        <>

         <h2> GifExpertApp </h2>
         {/* Le puedo pasar propiedades/funcoines a AddCategory, en este caso le pasamos una funcion
         haciendo referencia al setCategories de arriba */}
         <AddCategory setCategories = {setCategories}/>
         <hr></hr>


            <ol>
                {
                    categories.map(category =>(
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))

                }

            </ol>
        
         </>

    )

}

export {
    GifExpertApp
    }
