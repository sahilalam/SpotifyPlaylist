let getdata=async(url,position,uri)=>{
    console.log(uri,position)
    let data=await fetch(url,{
        method:'DELETE',
        body:{
            tracks: [
              {
                uri: `${uri}`,
                positions: [
                  position
                ]
              }
            ]
          }
    })
    data=await data.json();
    console.log(data)
    return data;
}
let removesong=(user_id,p_id,access_token,position,uri)=>{
    let url=`https://api.spotify.com/v1/playlists/${p_id}/tracks?access_token=${access_token}`;
}
export default removesong;