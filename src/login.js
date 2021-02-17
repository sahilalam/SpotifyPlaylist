let login=(redirect_uri,token,client_id,scope)=>{
    let url=`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${token}&redirect_uri=${redirect_uri}&scope=${scope}&state=34fFs29kd09`;
    document.getElementById('lg').setAttribute('href',`${url}`);
    document.getElementById('login').hidden=false;
    document.getElementById('wait').hidden=true;
}
export default login;