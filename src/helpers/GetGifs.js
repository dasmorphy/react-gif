

export const getGifts = async (category)=>{
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=WYn9x4hZq9nlvR979uIx03sC7mtZiqo9`;
    const res = await fetch(url);
    const {data} = await res.json();

    const resultsGift = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return resultsGift
  

}