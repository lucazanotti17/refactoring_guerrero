// CORE: clase base (herencia)
export class EntidadJuego {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.activa = true; // Si es false, el motor la eliminará
    }

    // Métodos "virtuales" a sobreescribir (polimorfismo)
    actualizar(dt) {}
    dibujar(ctx) {}
}
