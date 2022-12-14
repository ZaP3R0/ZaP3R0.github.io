/*Para controlar el despliegue y la ocultación del menú*/
jQuery('document').ready(function($){
    
    var menuBtn = $('.button-menu'),
        menu = $('.navigation ul');
    menuBtn.click(function() {
        if(menu.hasClass('show')) {
            menu.removeClass('show');

             
            $(".btnInicio").click(function(){
                menu.removeClass('show');
            });

            $(".btnSobreMi").click(function(){
                menu.removeClass('show');
            });

            $(".btnFormacion").click(function(){
                menu.removeClass('show');
            });

            $(".btnConocimiento").click(function(){
                menu.removeClass('show');
            });

            $(".btnPortfolio").click(function(){
                menu.removeClass('show');
            });

            $(".btnContacto").click(function(){
                menu.removeClass('show');
            });
            
        } else {
            menu.addClass('show');
            
            $(".btnInicio").click(function(){
                menu.removeClass('show');
            });

            $(".btnSobreMi").click(function(){
                menu.removeClass('show');
            });

            $(".btnFormacion").click(function(){
                menu.removeClass('show');
            });

            $(".btnConocimiento").click(function(){
                menu.removeClass('show');
            });

            $(".btnPortfolio").click(function(){
                menu.removeClass('show');
            });

            $(".btnContacto").click(function(){
                menu.removeClass('show');
            });
        }
    });
});

/*Método para controlar las animaciones del bloque del main*/
class TextoAnimado {
    constructor(id, objetivo) {
        this.texto = document.getElementById(id);
        this.objetivo = document.getElementById(objetivo);
        this.letras = this.texto.innerText.split(""); //Para acceder al texto de p-logotipo y con el split va cogiendo todos los caracteres
    
        
        this.texto.innerText = '';

        //Por cada letra que hay en block-logo me cambia a esta estructura
        this.letras.forEach((letra) => {
            let caracter = letra === ' ' ? '&nbsp;' : letra; //Condicional para controlar el espacio en blanco

            this.texto.innerHTML = this.texto.innerHTML + `
                <div>
                    <span>${caracter}</span>
                    <span class="segundo-span">${caracter}</span>
                </div>
            `;
        });

        this.objetivo.addEventListener('mouseenter', () => {
            let cuenta = 0;

            const intervalo = setInterval(() => {
                if(cuenta < this.texto.children.length) {
                    this.texto.children[cuenta].classList.add('animacion');
                    cuenta += 1;
                } else {
                    clearInterval(intervalo);
                }
            }, 30);
        });

        this.objetivo.addEventListener('mouseleave', () => {
			let cuenta = 0;

			const intervalo = setInterval(() => {
				if(cuenta < this.texto.children.length){
					this.texto.children[cuenta].classList.remove('animacion');
					cuenta += 1;
				} else {
					clearInterval(intervalo);
				}
			}, 30);
		});
    
    }
}

new TextoAnimado('block-logo', 'p-logotipo');




