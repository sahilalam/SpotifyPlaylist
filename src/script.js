import login from "./login.js";
import getplaylists from "./getplaylists.js";
import getuserid from "./getuserid.js";
import getfeaturedplaylists from "./getfeaturedplaylists.js";

let query=window.location;
for(let i=0;i<query.length;i++)
{
    if(query[i]=="#")
    {
        query[i]="?";
        location.replace(query);
        break;
    }
}
query=window.location.search;
console.log(query);
if(query.length>0)
{
    const params=new URLSearchParams(query);
    access_token=(params.has('access_token'))?params.get('access_token'):"";
}
const client_id="a1b4369b68ae4302a246de481a712747";
const client_secret="a2499164634e428b8c533c191103fc3e";
const grant_type="authorization_code";
let user_id="";

if(access_token.length>0)
{
    document.getElementById('wait').hidden=true;
    document.getElementById('login').hidden=true;
    document.getElementById('content').hidden=false;
    document.getElementById('myplaylists').onclick=async()=>{
        let data=await getuserid(access_token);
        user_id=data.id;
        let url=`https://api.spotify.com/v1/me/playlists?access_token=${access_token}&limit=9&offset=0`;
        getplaylists(url,access_token,user_id,"myplaylist");
        
    }
    document.getElementById('featuredplaylist').onclick=()=>{
        getfeaturedplaylists(access_token,user_id,"featuredplaylist");
    }
    document.getElementById('myplaylists').click();

    

}
else
{
    let redirect_uri="https://sahilalam.github.io/SpotifyPlaylist/";
    let scope="user-read-playback-position user-read-private user-read-email user-library-read user-library-modify user-top-read playlist-read-collaborative playlist-modify-public playlist-modify-private ugc-image-upload user-follow-read user-follow-modify user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-recently-played";
    redirect_uri=encodeURIComponent(redirect_uri);
    scope=encodeURIComponent(scope);
    document.getElementById('login').hidden=true;
    document.getElementById('content').hidden=true;
    document.getElementById('wait').hidden=false;
    login(redirect_uri,'token',client_id,scope);
}
