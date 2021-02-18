import getdata from './getdata.js';
import setcolsongs from "./setcolsongs.js";
let getsongs=(url,access_token,col,page,user_id,p_id,owner_id,flag=false)=>{
    
    getdata(url).then((data)=>{
        console.log(data)
        document.getElementById('resultheading').innerText=(flag)?"Search Results":"Playlist Songs";
        let row=document.getElementById('resultcontent');
        row.innerHTML="";
        row.append(col);
        let col1=document.createElement('div');
        col1.setAttribute("class","col-12 text-center heading2");
        col1.innerText="Songs- Page:"+page;
        row.append(col1);
        let d=(flag)?data.tracks:data;
        document.getElementById('prev').hidden=(d.previous==null)?true:false;
        document.getElementById('next').hidden=(d.next==null)?true:false;
        document.getElementById('prev').onclick=()=>{
            page--;
            getsongs(d.previous+`&access_token=${access_token}`,access_token,col,page,user_id,p_id,owner_id,flag);
        }
        document.getElementById('next').onclick=()=>{
            page++;
            getsongs(d.next+`&access_token=${access_token}`,access_token,col,page,user_id,p_id,owner_id,flag);
        }
        let row1=document.createElement('div');
        row1.setAttribute("class","row justify-content-center");
        
        for(let i=0;i<d.items.length;i++)
        {
            if(d.items[i])
            {
                let maincol=document.createElement('div');
                maincol.setAttribute("class","col-md-3 col-8 p-0 m-3 box");
                
                let col=setcolsongs(d.items[i],access_token,user_id,p_id,owner_id,flag);
                maincol.append(col);
                row1.append(maincol);
            }
            
        }
        
        row.append(row1);
    }).catch((err)=>{
        console.log(err);
    })
}
export default getsongs;