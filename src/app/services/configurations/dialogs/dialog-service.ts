import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  abrirDialogoForm(data: any) {
    console.log('Erro identificado: \n' + data);
  }
}
