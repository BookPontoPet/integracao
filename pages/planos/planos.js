
var btnBasico = document.getElementById("btn-basico-selecionado")
var btnMedio = document.getElementById("btn-medio-selecionado")
var btnAvancado = document.getElementById("btn-avancado-selecionado")

function exibeCadastroBasico()
{
   /* realiza exibição da ficha de cadastro*/
   document.getElementById('formulariosDeCadastro').style.visibility = 'visible';
   /* scala do card */
   document.getElementById('basico').style.transform = 'scale(1.1)';
   document.getElementById('medio').style.transform = 'scale(0.9)';
   document.getElementById('avancado').style.transform = 'scale(0.9)';
   /* cor do card */
   document.getElementById("basico").style.opacity = '1';
   document.getElementById("medio").style.opacity = '0.6';
   document.getElementById("avancado").style.opacity = '0.6';

   /*  botao do card selecionado */
   btnBasico.style.backgroundColor = 'green';
   btnBasico.style.color = 'white';
   btnBasico.style.paddingLeft = '4rem';
   btnBasico.style.paddingRight = '4rem';
   btnBasico.innerText = 'Plano Selecionado';
   /* botoes dos demais cards  */
   btnMedio.style.backgroundColor = '';
   btnMedio.style.color = '';
   btnMedio.style.paddingLeft = '';
   btnMedio.style.paddingRight = '';
   btnMedio.innerText = 'Selecionar';

   btnAvancado.style.backgroundColor = '';
   btnAvancado.style.color = '';
   btnAvancado.style.paddingLeft = '';
   btnAvancado.style.paddingRight = '';
   btnAvancado.innerText = 'Selecionar';
}
function exibeCadastroMedio()
{ 
   /* realiza exibição da ficha de cadastro*/
   document.getElementById('formulariosDeCadastro').style.visibility = 'visible';
   /* scala do card */
   document.getElementById('basico').style.transform = 'scale(0.9)';
   document.getElementById('medio').style.transform = 'scale(1.1)';
   document.getElementById('avancado').style.transform = 'scale(0.9)';
   /* cor do card */
   document.getElementById("basico").style.opacity = '0.6';
   document.getElementById("medio").style.opacity = '1';
   document.getElementById("avancado").style.opacity = '0.6';

   /*  botao do card selecionado */
   btnMedio.style.backgroundColor = 'green';
   btnMedio.style.color = 'white';
   btnMedio.style.paddingLeft = '4rem';
   btnMedio.style.paddingRight = '4rem';
   btnMedio.innerText = 'Plano Selecionado';
   /* botoes dos demais cards  */
   btnBasico.style.backgroundColor = '';
   btnBasico.style.color = '';
   btnBasico.style.paddingLeft = '';
   btnBasico.style.paddingRight = '';
   btnBasico.innerText = 'Selecionar';

   btnAvancado.style.backgroundColor = '';
   btnAvancado.style.color = '';
   btnAvancado.style.paddingLeft = '';
   btnAvancado.style.paddingRight = '';
   btnAvancado.innerText = 'Selecionar';
}
function exibeCadastroAvancado()
{
  /* realiza exibição da ficha de cadastro*/
  document.getElementById('formulariosDeCadastro').style.visibility = 'visible';
  /* scala do card */
  document.getElementById('basico').style.transform = 'scale(0.9)';
  document.getElementById('medio').style.transform = 'scale(0.9)';
  document.getElementById('avancado').style.transform = 'scale(1.1)';
  /* cor do card */
  document.getElementById("basico").style.opacity = '0.6';
  document.getElementById("medio").style.opacity = '0.6';
  document.getElementById("avancado").style.opacity = '1';

   /*  botao do card selecionado */
   btnMedio.style.backgroundColor = '';
   btnMedio.style.color = '';
   btnMedio.style.paddingLeft = '';
   btnMedio.style.paddingRight = '';
   btnMedio.innerText = 'Selecionar';
   /* botoes dos demais cards  */
   btnBasico.style.backgroundColor = '';
   btnBasico.style.color = '';
   btnBasico.style.paddingLeft = '';
   btnBasico.style.paddingRight = '';
   btnBasico.innerText = 'Selecionar';

   btnAvancado.style.backgroundColor = 'green';
   btnAvancado.style.color = 'white';
   btnAvancado.style.paddingLeft = '4rem';
   btnAvancado.style.paddingRight = '4rem';
   btnAvancado.innerText = 'Plano Selecionado';
}














