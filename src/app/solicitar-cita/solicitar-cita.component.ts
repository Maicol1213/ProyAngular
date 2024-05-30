import { Component } from '@angular/core';
import { CitaService } from '../cita.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitaComponent {
  citaForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private citaService: CitaService) {
    this.citaForm = this.fb.group({
      nombre: ['', Validators.required],
      identidad: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      fechaHora: ['', Validators.required],
      sedeServicio: ['', Validators.required],
      tipoServicio: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.citaForm.valid) {
      this.citaService.solicitarCita(this.citaForm.value).subscribe(response => {
        this.mensaje = 'Cita solicitada exitosamente';
      }, error => {
        this.mensaje = 'Error al solicitar la cita';
      });
    }
  }
}
