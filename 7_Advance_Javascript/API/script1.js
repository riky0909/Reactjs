function Regi_api()
{
    Name=document.getElementById('name').value;
    email=document.getElementById('email').value;
    password=document.getElementById('pwd').value;
    mobile=document.getElementById('mobile').value;
    databa={username:Name,email:email,password:password,mobile:mobile}
    console.log(databa);
    fetch('http://localhost/api/registration_api',{method:'POST',headers:{'content-Type':'application/json','Accept':'application/json',},body:JSON.stringify({allData:databa})}).then(res=>res.json()).then(response=>{
        console.log(response);
        if(response.Code==1)
        {
            // localStorage.setItem('use','puyut');
            localStorage.setItem('userid',response.data)
        }
        else
        {
            console.log('something went wrong');
        }
    })
}
// login api
logindata=document.querySelector('#login-btn')
userlocalstorage=localStorage.getItem('userid')
console.log(userlocalstorage);
