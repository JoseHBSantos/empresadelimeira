//Criar uma função com arrow function
const galeria = () =>{

    //Selecionar todas as imagens miniaturas
    var miniaturas = document.querySelectorAll(".galeria_miniaturas img")
    //console.log(miniaturas)

    //Iterar sobre miniaturas
    miniaturas.forEach(function (miniatura){
        //console.log(miniatura)

        //em cada imagem adicionar um ouvinte
        miniatura.addEventListener("click",function (){
            //console.log(this.src)

            //Substituir o caminho e nome da imagem em destaque
            document.getElementById("foto_grande").src = this.src
        })
    })
}
galeria()