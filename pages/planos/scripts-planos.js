
 const formulario = document.querySelector("form")

 const inputNome = document.querySelector(".nome")
 const  inputEmail = document.querySelector(".email")
 const inputCelular = document.querySelector(".celular")
 const inputCnpj = document.querySelector(".cnpj")
 const inputCep = document.querySelector(".cep")

function cadastrar() {

   fetch ("http://localhost:8080/cadastrar",
   {
      headers: {
         'Aceept': 'application/json', 
         'Content-Type': 'application/json'
      },
      method: "POST" ,
      body: JSON.stringify({

         nome: inputNome.value,
         email: inputEmail.value,
         celular: inputCelular.value,
         cnpj: inputCnpj.value,
         cep: inputCep.value  
      })
      
   })//fetch
   .then(function(res) { console.log(res)})
   .catch(function(res) { console.log(res)})
}//function cadastrar

formulario.addEventListener('submit', function (event) 
{
   event.preventDefault();
   cadastrar();
   limpar();
})

function limpar(){
   inputNome.value   = ""
   inputEmail.value  = ""
   inputCelular.value= ""
   inputCnpj.value   = ""
   inputCep.value    = ""
}










































