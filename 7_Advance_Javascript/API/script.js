// login_api
 let loginapi=document.querySelector('#login_api');
 let userlocalstorage=localStorage.getItem('userId')
 console.log(userlocalstorage);
// registration_api
function Regi_api() {
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('pwd').value;
    let mobile=document.getElementById('mobile').value;
    let data={username:name,email:email,password:password,mobile:mobile}
    console.log(data);
   fetch('http://localhost/api/registration_api',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json',},body:JSON.stringify({allData:data})}).then(res=>res.json()).then(Response=>{
    console.log(Response);
    if(Response.Code==1)
    {
        localStorage.setItem('userId',Response.Data)
    } 
    else
    {
        console.log("wrong is the code");
    }    
   })
}

