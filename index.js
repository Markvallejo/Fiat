const $menu= document.getElementById('menu')
const $menu1= document.getElementById('menu1')
const $menu2= document.getElementById('menu2')
const $menu3= document.getElementById('menu3')
const $menu4= document.getElementById('menu4')
const $enviar= document.getElementById('btenviar')
const $bttelefono = document.getElementById('bttelefono')
const $btemail = document.getElementById('btemail')
const $btambos = document.getElementById('btambos')
const $contado = document.getElementById('contado')
const $credito = document.getElementById('credito')

const $mover = document.getElementById('navbarSupportedContent')

 $menu.addEventListener('click', (event) =>{  
   $mover.classList.remove('show');
 });

 $menu1.addEventListener('click', (event) =>{
    $mover.classList.remove('show');
  });

 $menu2.addEventListener('click', (event) =>{
    $mover.classList.remove('show');
 });

 $menu3.addEventListener('click', (event) =>{
    $mover.classList.remove('show');
 });

 $menu4.addEventListener('click', (event) =>{
   $mover.classList.remove('show');
 });

$enviar.addEventListener('click', (event) =>{
   alert('Datos guardados con exito')
})

$bttelefono.addEventListener('click', (event) => {
   $bttelefono.classList.toggle('success')
   $bttelefono.classList.remove('bttelefono')
   select()
})

$btemail.addEventListener('click', (event) => {
   $btemail.classList.toggle('success')
   select()
})

function select(){
   if($bttelefono.classList.contains('success') && $btemail.classList.contains('success')){
      $btambos.classList.add('success')

   }
   else{
      $btambos.classList.remove('success')
   }
}

$btambos.addEventListener('click', (event) => {
   $btambos.classList.toggle('success')
   if($btambos.classList.contains('success')){
    $bttelefono.classList.add('success')
    $btemail.classList.add('success')
   }
   else{
      $bttelefono.classList.remove('success')
      $btemail.classList.remove('success')
   }
  
})

$contado.addEventListener('click', (event) => {
   $contado.classList.toggle('success')
   $credito.classList.remove('success')
 
} )

$credito.addEventListener('click', (event) => {
   $credito.classList.toggle('success')
   $contado.classList.remove('success')
})