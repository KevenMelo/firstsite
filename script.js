var authuser = [];
var authpassword = [];

/*function authusuario(x, y) {
    if (localStorage.meuArrUser) {
        arr = JSON.parse(localStorage.getItem(meuArrUser));
    }

    for (var i in arr) {
        if (login == i) {
            return  x=1
        } else {return y=0}
    }
} */

/*function authusenha() {
    if (localStorage.meuArrPassword) {
        arr1 = JSON.parse(localStorage.getItem(meuArrPassword));
    }

    for (var i in arr1) {
        if (password == i) {
            return h = 1
        } else { return j=0}
    }
} */


function handleClickLogin() {
    try {
    var login = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (localStorage.meuArrPassword) {
        arr1 = JSON.parse(localStorage.getItem('meuArrPassword'));
    }
    if (localStorage.meuArrUser) {
        arr = JSON.parse(localStorage.getItem('meuArrUser'));
    }

    var b = false;

    for (var i in arr && arr1 ) {
      //  console.log(arr)
        //console.log(arr1)
        //console.log(i)
        
        var acess = arr[i]
        var acesspassword = arr1[i]
        console.log(acess)
        console.log(acesspassword)
        if (login === acess && password === acesspassword) {
            location.href= 'home.html'; 
            console.log('usuário encontrado')
            b = true;
         } 
         if ( b== false) {
             alert('USUÁRIO NÃO ENCONTRADO!!!')  
         }    
    }
}catch (error) {
    console.log(error);
}}


    /*if (login === authusuario(x) && password === authusenha(h)) {
       location.href= 'home.html'; 
       console.log('usuário encontrado')
    } else {
        alert('USUÁRIO NÃO ENCONTRADO!!!')  
    }  */  
    



function createaccount() {
   return (location.href= 'create.html');
};


function auth() {
 try {  if (localStorage.meuArrUser && localStorage.meuArrPassword) {
    authuser = JSON.parse(localStorage.getItem('meuArrUser'));
    authpassword = JSON.parse(localStorage.getItem('meuArrPassword'));
   }
    var createuser = document.getElementById('create-email').value;
    var createpassword = document.getElementById('create-password').value;
    authuser.push(createuser);
    authpassword.push(createpassword);
    
    localStorage.meuArrUser = JSON.stringify(authuser);
    localStorage.meuArrPassword = JSON.stringify(authpassword);

    let route = "index.html"
    window.location = route;
} catch (error) {
    console.error(error);
}
}