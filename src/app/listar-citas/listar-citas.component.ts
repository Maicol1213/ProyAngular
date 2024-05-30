import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from '../cita.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {
  citas: any[] = [];
  filtroForm: FormGroup;

  constructor(private fb: FormBuilder, private citaService: CitaService) {
    this.filtroForm = this.fb.group({
      sede: ['', Validators.required],
      tipoServicio: ['']
    });
  }

  ngOnInit(): void {
    this.listarCitas();
  }

  listarCitas() {
    const sede = this.filtroForm.get('sede')?.value;
    const tipoServicio = this.filtroForm.get('tipoServicio')?.value;

    if (sede) {
      this.citaService.listarCitasDelDia(sede, tipoServicio).subscribe(data => {
        this.citas = data;
      }, error => {
        console.error('Error al listar citas', error);
      });
    }
  }
}

