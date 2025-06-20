import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Formulario } from '../../models/formulario.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-list',
  imports: [CommonModule, CommonModule, RouterModule], 
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  formularios: Formulario[] = [];

  constructor(
    private ApiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarFormularios();
  }

  cargarFormularios(): void {
    this.ApiService.getFormularios().subscribe(
      (data) => {
        this.formularios = data;
        // Si no hay formularios, cargar los dos por defecto
        if (this.formularios.length === 0) {
          this.formularios = [
            { id: 1, nombre: 'Personas', fields: [] },
            { id: 2, nombre: 'Mascotas', fields: [] }
          ];
        }
      },
      (error) => {
        console.error('Error al cargar formularios:', error);
        // En caso de error, cargar los dos por defecto
        this.formularios = [
          { id: 1, nombre: 'Personas...', fields: [] },
          { id: 2, nombre: 'Mascotas...', fields: [] }
        ];
      }
    );
  }

  verFormulario(id: number): void {
    this.router.navigate(['/formulario', id]);
  }
}