import getdata from "./getdata.js";

let getuserid=async(access_token)=>{
    let url=`https://api.spotify.com/v1/me?access_token=${access_token}`;
    let data=await fetch(url);
    data=await data.json();
    return data;

}
export default getuserid;