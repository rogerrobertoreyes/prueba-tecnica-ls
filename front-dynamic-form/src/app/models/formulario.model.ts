export interface Campo {
  id: number;
  formularioId: number;
  label: string;
  type: string;
  required: boolean;
  orden: number;
  formulario: any;
}

export interface Formulario {
  id: number;
  nombre: string;
  fields: Campo[];
}