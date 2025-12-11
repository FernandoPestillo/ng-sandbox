import { Component, OnInit } from '@angular/core';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-cliente',
  imports: [DialogModule],
  templateUrl: './cliente.html',
  styleUrl: './cliente.scss',
})
export class Cliente implements OnInit {
  dialogTitle = 'Cadastro de Cliente';
  isOpen = true;
  public id!: number;

  constructor() {}

  ngOnInit(): void {
    console.log("app-cliente inicializado'");
  }

  getById(id: number) {
    this.id = id;

    console.log('OLHA O GET BY ID AE hahahahahhahaha');
  }
}
