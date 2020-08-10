//Para saber que es un hook com standar se pone la palabra use adelante

import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

//creamos un customHook
export const useFetchGif = (category)=>{

    const [state, setState] = useState({
    data:[],
    loading:true

    });

 useEffect(()=>{

        getGifs(category)
        .then(img=>{setState({
            data:img,
            loading:false
            })
        })
    

 },[category])

    return state; //retorna la data que es un arreglo [], con el loading en true
}
