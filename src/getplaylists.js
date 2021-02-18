import getdata from './getdata.js';
import setcol from "./setcol.js";
import getsongs from "./getsongs.js";
import checkfollow from "./checkfollow.js";
import follow from "./follow.js";
import unfollow from "./unfollow.js"
let getplaylists=(url,access_token,user_id,type)=>{
    
    getdata(url).then(async(data)=>{
        document.getElementById('resultheading').innerText=(type=="myplaylist")?"My Playlists":"Featured Playlists";
        let row=document.getElementById('resultcontent');
        row.innerHTML="";
        let d=(type=="myplaylist")?data:data.playlists;
        document.getElementById('prev').hidden=(d.previous==null)?true:false;
        document.getElementById('next').hidden=(d.next==null)?true:false;
        document.getElementById('prev').onclick=()=>{
            getplaylists(d.previous+`&access_token=${access_token}`,access_token,user_id,type);
        }
        document.getElementById('next').onclick=()=>{
            getplaylists(d.next+`&access_token=${access_token}`,access_token,user_id,type);
        }
        
        for(let i=0;i<d.items.length;i++)
        {
            console.log(d.items[i].owner.id);
            let maincol=document.createElement('div');
            maincol.setAttribute('class',"col-md-3 col-8 m-3 p-0");
            let col=setcol(d.items[i]);
            col.onclick=()=>{
                getsongs(d.items[i].tracks.href+`?access_token=${access_token}&offset=0&limit=9`,access_token,maincol,1,user_id,d.items[i].id,d.items[i].owner.id);
            }
            col.setAttribute("id",`${d.items[i].id}`);
            
            maincol.append(col);
            
            let checkfollowed=await checkfollow(d.items[i].id,access_token,user_id);
            let a=document.createElement('a');
            a.setAttribute("href","#");
            a.setAttribute("class","text");
            a.style.textDecoration="None";
            a.innerText=(checkfollowed)?"UNFOLLOW":"FOLLOW";
            maincol.append(a);
            if(checkfollowed)
            {
                a.onclick=()=>{
                    unfollow(d.items[i].id,access_token);
                }
            }
            else
            {
                a.onclick=()=>{
                    follow(d.items[i].id,access_token);
                }
            }
            row.append(maincol);
        }
    }).catch((err)=>{
        console.log(err);
    })
}
export default getplaylists;