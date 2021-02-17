import getdata from './getdata.js';
import setcolsongs from "./setcolsongs.js";
let getsongs=(url,access_token,col,page,user_id,p_id)=>{
    
    getdata(url).then((data)=>{
        document.getElementById('resultheading').innerText="MY Playlists";
        let row=document.getElementById('resultcontent');
        row.innerHTML="";
        row.append(col);
        let col1=document.createElement('div');
        col1.setAttribute("class","col-12 text-center heading2");
        col1.innerText="Songs- Page:"+page;
        row.append(col1);
        document.getElementById('prev').hidden=(data.previous==null)?true:false;
        document.getElementById('next').hidden=(data.next==null)?true:false;
        document.getElementById('prev').onclick=()=>{
            page--;
            getsongs(data.previous+`&access_token=${access_token}`,access_token,col,page,user_id,p_id);
        }
        document.getElementById('next').onclick=()=>{
            page++;
            getsongs(data.next+`&access_token=${access_token}`,access_token,col,page,user_id,p_id);
        }
        let row1=document.createElement('div');
        row1.setAttribute("class","row justify-content-center");
        
        for(let i=0;i<data.items.length;i++)
        {
            console.log(data.items[i]);
            let maincol=document.createElement('div');
            maincol.setAttribute("class","col-md-3 col-8 p-0 m-3 box");
            let col=setcolsongs(data.items[i],access_token,user_id,p_id,i);
            maincol.append(col);
            row1.append(maincol);
        }
        
        row.append(row1);
    }).catch((err)=>{
        console.log(err);
    })
}
export default getsongs;