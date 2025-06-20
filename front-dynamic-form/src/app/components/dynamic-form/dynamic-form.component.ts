import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Formulario } from '../../models/formulario.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  dynamicForm!: FormGroup;
  
  submitted = false;
  formulario: Formulario = {
    id: 0,
    nombre: '',
    fields: []
  };

  constructor(
    private route: ActivatedRoute,
    private ApiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dynamicForm = new FormGroup({ });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ApiService.getFormularioById(+id).subscribe(
        (data) => {
          this.formulario = data;
          this.createForm();
        },
        (error) => {
          console.error('Error al cargar formulario:', error);
          this.formulario = this.getDefaultForm(+id);
          this.createForm();
        }
      );
    }
  }

  get sortedFields() {
    return this.formulario?.fields?.sort((a, b) => a.orden - b.orden) || [];
  }

  private getDefaultForm(id: number): Formulario {
    if (id === 1) {
      // Si no hay formularios, cargar los dos por defecto
      return {
        id: 1,
        nombre: 'Personas',
        fields: [
          { id: 1, formularioId: 1, label: 'Nombres...', type: 'text', required: true, orden: 1, formulario: null },
          { id: 2, formularioId: 1, label: 'Fecha de nacimiento...', type: 'date', required: true, orden: 2, formulario: null },
          { id: 3, formularioId: 1, label: 'Estatura...', type: 'number', required: false, orden: 3, formulario: null }
        ]
      };
    } else if (id === 2) {
      return {
        id: 2,
        nombre: 'Mascotas',
        fields: [
          { id: 4, formularioId: 2, label: 'Nombre...', type: 'text', required: true, orden: 1, formulario: null },
          { id: 5, formularioId: 2, label: 'Especie...', type: 'text', required: true, orden: 2, formulario: null },
          { id: 6, formularioId: 2, label: 'Raza...', type: 'text', required: false, orden: 3, formulario: null },
          { id: 7, formularioId: 2, label: 'Color...', type: 'text', required: false, orden: 4, formulario: null },
          { id: 8, formularioId: 2, label: 'Edad...', type: 'number', required: false, orden: 5, formulario: null }
        ]
      };
    }
    return { id: 0, nombre: '', fields: [] };
  }

  private createForm(): void {
    const formGroup: any = {};
    this.formulario.fields.sort((a, b) => a.orden - b.orden).forEach(field => {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      formGroup[field.label] = ['', validators];
    });
    this.dynamicForm = this.fb.group(formGroup);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.dynamicForm.valid) {
      console.log('Formulario válido:', this.dynamicForm.value);
    }
  }

  volverALista(event: Event) {
    if (this.submitted) {
      if (!confirm('¿Estás seguro de salir? El envío se cancelará.')) {
        return;
      }
    }
    event?.preventDefault();
    this.router.navigate(['/']);
  }
}