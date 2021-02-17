import getdata from "./getdata.js";
let checkfollow=async(data,access_token,user_id)=>{
     let url=`	https://api.spotify.com/v1/playlists/${data}/followers/contains?access_token=${access_token}&ids=${user_id}`;
     let result=await getdata(url);
     
     return result[0];
 }
 export default checkfollow;