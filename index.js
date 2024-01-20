const enviarInformaçoes = () => {
   const form = document.querySelectorAll(".form input, textarea");
   let mensagemError = document.querySelectorAll('.form .obrigatorio-campo');

   form.forEach((element, index) => {
      if (element.value.trim() === "") {
         element.style.border = "1px solid red";
         mensagemError[index].style.display = 'block';
      } else if (element.value.trim() !== "") {
         element.style.border = "2px solid green";
         mensagemError[index].style.display = 'none';
      }
   }); 
}
