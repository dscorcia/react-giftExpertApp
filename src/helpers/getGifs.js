

     //El getGifs lo muevo a un archivo en particular ya que no tenia relacion con este componente. 
    //Esta funcion va a devolver una promesa, antes devolvia las imagenes de gift

export const getGifs = async(category)=>{
    //Usamos encondeURI para eliminar los espacios
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=veJFVQzGXDLQC7EbSMcZxzh0AAKQ4jpd`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
           url: img.images.downsized_medium.url
        }

    })
    
    return gifs;
    
}