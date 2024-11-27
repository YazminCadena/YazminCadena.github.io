var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr')
    .pauseFor(2500)
    .deleteAll()
    .typeString('El liderazgo no se trata de títulos, se trata de inspirar.')
    .pauseFor(2500)
    //numero de caracteres que se borran
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();