import getsongs from "./getsongs.js";
let search=(access_token,user_id)=>{
    let q=document.getElementById('searchtrack').value;
    console.log(q);
    let url=`https://api.spotify.com/v1/search?q=${q}&type=track&limit=9&access_token=${access_token}`;
    getsongs(url,access_token,"",1,user_id,"","",true);
}
export default search;