
//Creacion del canvas
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


//Tamaño del canvas
canvas.width = 1024;
canvas.height = 576;


//Cambiar el color del canvas
c.fillRect(0,0,canvas.width,canvas.height);

//Variables Globales
const gravity = 0.2;

class Sprite {
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        this.height = 150
    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x,this.position.y,50,this.height);
    }

    update(){
        this.draw();
        this.position.y += this.velocity.y;
        //Mientras no este en el aire la velocidad inicial en el eje y va ser igual a 0
        //De lo cotrario va ser igual a la gravedad, hasta que la condicion vuelva a ser verdadera
        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        }
        else{
            this.velocity.y += 0.2;
        }
    }

}

//Jugador 1
const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})

//Jugador 2
const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
})


//Esta funcion se encarga de animar los objetos
function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width,canvas.height);
    player.update();
    enemy.update();
}

animate();
