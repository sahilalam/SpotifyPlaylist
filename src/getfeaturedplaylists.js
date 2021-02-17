import getplaylists from "./getplaylists.js";
let getfeaturedplaylists=(access_token,user_id)=>{
    let url=`https://api.spotify.com/v1/browse/featured-playlists?access_token=${access_token}&limit=9&offset=0`;
    getplaylists(url,access_token,user_id,"featuredplaylists");

}
export default getfeaturedplaylists;