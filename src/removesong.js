let getdata=async(url,uri)=>{
    let data=await fetch(url,{
        method:'DELETE',
        body:JSON.stringify({
            "tracks": [
            {
              "uri": `${uri}`
            }
            ]
        })
    })
    data=await data.json();
    console.log(data)
    return data;
}
let removesong=(user_id,p_id,access_token,uri)=>{
    let url=`https://api.spotify.com/v1/playlists/${p_id}/tracks?access_token=${access_token}`;
    getdata(url,uri).then((data)=>{
        console.log(data);
        document.getElementById(`${p_id}`).click();
    }).catch((err)=>{
        console.log(err);
    })
}
export default removesong;