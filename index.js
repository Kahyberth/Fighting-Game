
//Creacion del canvas
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


//Tamaño del canvas
canvas.width = 1024;
canvas.height = 576;

//Cambiar el color del canvas
c.fillRect(0,0,canvas.width,canvas.height);



class Sprite {
    constructor(position){
        this.position = position;
    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x,this.position.y,50,150);
    }

}

const player = new Sprite({
    x: 0,
    y: 0
})

player.draw();

