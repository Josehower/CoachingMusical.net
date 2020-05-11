const botonEbook = document.querySelector('.banner-ebook__boton');
const imgEbook = document.querySelector('.banner-ebook__imagen-ebook');

botonEbook.addEventListener('click', () => {
  ml_account('webforms', '1363260', 'z5e3w8', 'show');
});

imgEbook.addEventListener('click', () => {
    ml_account('webforms', '1363260', 'z5e3w8', 'show');
  });

/* ! este event listener funciona para cualquier boton o imagen 
siempre y cuando sea la unica con la clase especificada 

no olvidar anadir script tag 

<script src="bannerEbook.js"></script>
a el html
*/

// TODO mejorar la funcionalidad haciendo que esto aplique a cualquier imagen o boton