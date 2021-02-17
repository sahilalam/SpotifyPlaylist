
let getdata=async(url)=>{
    let data=await fetch(url,{
        method:'PUT',
        body:{
            "public":false
        }
    });
    return data;
}
let follow=(id,access_token)=>{
    let url=`https://api.spotify.com/v1/playlists/${id}/followers?access_token=${access_token}`;
    getdata(url).then((data)=>{
        document.getElementById('myplaylists').click();
    }).catch((err)=>{
        console.log(err);
    })
}
export default follow;