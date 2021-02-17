let setcol=(data)=>{
    let maincol=document.createElement('div');
    maincol.setAttribute('class','col-12 p-0 m-0');
    maincol.setAttribute('id',`${data.id}`)
    let col=document.createElement('div');
    col.setAttribute('class','button');
    let img=document.createElement('div');
    img.setAttribute("class","col-12 p-0 m-0");
    img.style.backgroundImage=`url('${data.images[0].url}')`;
    img.style.height="200px";
    img.style.backgroundSize="100% 100%";
    img.style.borderRadius="5px";
    let col2=document.createElement('div');
    col2.setAttribute('class',"col-12 p-1 text-center");
    let a=document.createElement('a');
    a.setAttribute("href","#");
    a.setAttribute("class","text")
    
    a.style.textDecoration="none";
    a.innerText=`${data.name}`;

    col2.append(a);
    col.append(img,col2);
    maincol.append(col);
    return maincol;
}
export default setcol;