import { MotorJuego } from '../core/MotorJuego.js';
import { Arma } from '../dominio/Arma.js';
import { Personaje } from '../dominio/Personaje.js';

// CONTROLADOR: pegamento entre UI y dominio
export class ControladorJuego {
    constructor() {
        this.motor = new MotorJuego(700, 300);

        // Catálogo de armas
        this.inventario = [
            new Arma("Pistola Láser", 10, "#ef233c", 400, 1),
            new Arma("Cañón de Plasma", 30, "#06d6a0", 250, 2),
            new Arma("Rifle Francotirador", 50, "#118ab2", 900, 0.8)
        ];
        this.indiceArma = 0;

        // Protagonista
        this.jugador = new Personaje("Héroe", 50, 180, this.inventario[this.indiceArma]);
        this.motor.agregarEntidad(this.jugador);

        this.vincularEventos();
        this.actualizarUI();
    }

    vincularEventos() {
        this.motor.btnAtacar.addEventListener('click', () => {
            const nuevoProyectil = this.jugador.atacar();
            this.motor.agregarEntidad(nuevoProyectil);
        });

        this.motor.btnCambiarArma.addEventListener('click', () => {
            this.indiceArma = (this.indiceArma + 1) % this.inventario.length;
            this.jugador.cambiarArma(this.inventario[this.indiceArma]);
            this.actualizarUI();
        });
    }

    actualizarUI() {
        this.motor.actualizarHUD(`Arma actual: ${this.jugador.arma.obtenerNombre()} | Entidades activas procesadas dinámicamente.`);
    }
}
