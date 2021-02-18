import removesong from "./removesong.js";

let setcolsongs=(data,access_token,user_id,p_id,owner_id,flag="false")=>{
    console.log(owner_id)
    let d=(flag)?data:data.track;
    let col=document.createElement('div');
    col.setAttribute('class','col-12');
    let img=document.createElement('div');
    img.setAttribute("class","col-12 p-0 m-0");
    img.style.backgroundImage=`url('${d.album.images[0].url}')`;
    img.style.height="200px";
    img.style.backgroundSize="100% 100%";
    img.style.borderRadius="5px";
    let col2=document.createElement('div');
    col2.setAttribute('class',"col-12 p-1 text-center background");
    col2.innerText=`${d.album.name}`;
    let artists="";
    for(let i=0;i<d.album.artists.length;i++)
    {
        artists+=d.album.artists[i].name;
        if(i<d.album.artists.length-1)
        {
            artists+=', ';
        }
    }
    let col3=document.createElement('div');
    col3.setAttribute('class',"col-12 p-1 text-center");
    col3.innerText=`Artists: ${artists}`;

    let a=document.createElement('a');
    a.setAttribute("href","#");
    a.setAttribute("class","text")
    
    a.style.textDecoration="none";
    if(!flag)
    {
        if(owner_id==user_id)
        {
            a.innerText="Remove";
    
            a.onclick=()=>{
                console.log(data.track.track_number-1,data.track.uri);
                removesong(user_id,p_id,access_token,data.track.uri);
            }
        }
        else
        {
            a.innerText="Can't Remove(You are not the owner of this playlist)"
        }
    }

   
    
    
    
    col.append(img,col2,col3);
    if(!flag)
    {
        col.append(a);
    }
   
    return col;
}
export default setcolsongs;