import { Component, OnInit } from '@angular/core';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-cliente',
  imports: [DialogModule],
  templateUrl: './cliente.html',
  styleUrl: './cliente.scss',
})
export class Cliente implements OnInit {
  dialogTitle = 'Cadastro de Cliente';
  isOpen = true;
  public cliente!: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log("app-cliente inicializado'");
  }

  getById(id: number) {
    console.log('OLHA O GET BY ID AE hahahahahhahaha');
    this.userService.getById('693c01b6a12539c2b40a0d7d').subscribe((user) => {
      this.cliente = JSON.stringify(user);
    });
  }
}
