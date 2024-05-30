import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'http://localhost:8080/citas';

  constructor(private http: HttpClient) { }

  solicitarCita(cita: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/solicitar`, cita);
  }

  listarCitasDelDia(sede: string, tipoServicio?: string): Observable<any> {
    let url = `${this.apiUrl}/dia?sede=${sede}`;
    if (tipoServicio) {
      url += `&tipoServicio=${tipoServicio}`;
    }
    return this.http.get(url);
  }
}
