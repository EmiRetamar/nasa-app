import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';

@Component({
	selector: 'ed-material-list',
	templateUrl: './material-list.component.html',
	styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

	estudiante1: ClassEstudiante;
	estudiante2: Estudiante;
	estudiante3: Estudiante;

	listaEstudiantes: Estudiante[];

	constructor() { }

	ngOnInit() {
		console.log('Inicializando el componente MaterialList');
		this.estudiante1 = new ClassEstudiante(1, 'Emi Retamar', 'Buenos Aires');
		console.log('edad.estudiante1:', this.estudiante1.getEdad());

		this.estudiante2 = {
			id: 2,
			nombre: 'Juan Perez',
			ciudad: 'Montevideo'
			//fotoURL: 'http://i.imgur.com/lPBJXJl.png'
		};

		this.estudiante3 = {
			id: 3,
			nombre: 'Maria Rodriguez',
			ciudad: 'Bogota'
		};

		this.listaEstudiantes = [
			this.estudiante1,
			this.estudiante2,
			this.estudiante3
		];

		setTimeout(() => {
			this.estudiante3 = {
				id: 4,
				nombre: 'Juana Lopez',
				ciudad: 'Santiago de Chile'
			}
		}, 3000);
	}

	onMouseClick($event: Estudiante) {
		console.log('Click on: ', $event.nombre);
	}

}
