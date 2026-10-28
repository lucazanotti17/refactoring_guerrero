import { EntidadJuego } from '../core/EntidadJuego.js';

// DOMINIO: personaje
export class Personaje extends EntidadJuego {
    constructor(nombre, x, y, armaInicial) {
        super(x, y);
        this.nombre = nombre;
        this.arma = armaInicial;
        this.tiempoAnimacion = 0; // Para la animación de respiración
    }

    cambiarArma(nuevaArma) {
        this.arma = nuevaArma;
    }

    atacar() {
        // Delega la creación del proyectil en el arma
        const puntoSalidaX = this.x + 60;
        const puntoSalidaY = this.y + 20;
        return this.arma.crearProyectil(puntoSalidaX, puntoSalidaY);
    }

    actualizar(dt) {
        // Animación idle: flotación usando seno
        this.tiempoAnimacion += dt * 3;
    }

    dibujar(ctx) {
        const offsetY = Math.sin(this.tiempoAnimacion) * 5;

        // Cuerpo
        ctx.fillStyle = "#8d99ae";
        ctx.fillRect(this.x, this.y + offsetY, 50, 50);

        // Ojo
        ctx.fillStyle = "#2b2d42";
        ctx.fillRect(this.x + 30, this.y + 10 + offsetY, 10, 10);

        // Brillo del ojo
        ctx.fillStyle = "white";
        ctx.fillRect(this.x + 35, this.y + 12 + offsetY, 3, 3);

        // Arma equipada
        ctx.fillStyle = this.arma.obtenerColor();
        ctx.fillRect(this.x + 20, this.y + 25 + offsetY, 45, 10);
    }
}
