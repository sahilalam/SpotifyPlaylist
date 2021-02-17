let getdata=async(url)=>{
    let data=await fetch(url);
    data=await data.json();
    return data;
}
export default getdata;