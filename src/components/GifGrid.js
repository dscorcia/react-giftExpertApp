import React  from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])

    const {data:images,loading} = useFetchGif(category);





    // //useEffect permite poder ejecutar cierto codigo de manera condicional ejemplo para que no se dispare la peticion http ante un minimo cambio
    // //Primer argumento le pasamos una funcion(la funcion que qeuremos que ejecute), 2do argumento le pasamos un argumento vacio, eso significa qu ese ejcutará una vez sola

    //  //El getGifs lo muevo a un archivo en particular ya que no tenia relacion con este componente. 
    // //Luego lo exporto para poder usarlo en este archivo y como devuelve una promesa tengo que hacer el .then
   
    

    

  
    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            {/* PAra mostrar mientras carga. Tambien usamos operador ternario */}
           {loading && <p className="card animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                        
                    {

                        images.map(img =>(
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))

                    }
                
            </div>
        </>
    )
}
