import { Component, OnInit } from '@angular/core';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-empresa',
  imports: [DialogModule],
  templateUrl: './empresa.html',
  styleUrl: './empresa.scss',
})
export class Empresa implements OnInit {
  dialogTitle = 'Cadastro de Empresa';
  isOpen = true;

  constructor() {}

  ngOnInit(): void {
    console.log("app-empresa inicializado'");
  }
}
