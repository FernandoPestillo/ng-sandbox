import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../pages/modules/cliente/cliente';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../services/configurations/alert-service';

@Component({
  selector: 'app-modal-manager-component',
  imports: [],
  templateUrl: './modal-manager-component.html',
  styleUrl: './modal-manager-component.scss',
})
export class ModalManagerComponent implements OnInit {
  constructor(private alertService: AlertService, private dialog: MatDialog) {}

  ngOnInit() {
    this.alertService.errorEvent$.subscribe((event) => {
      this.abrirModal(event);
    });
  }

  abrirModal(event: { tipoEntidade: string; id: string }) {
    switch (event.tipoEntidade) {
      case 'cliente':
        this.dialog.open(Cliente, {
          data: { id: event.id },
        });
        break;

      // case 'venda':
      //   this.dialog.open(VendaFormModalComponent, {
      //     data: { id: event.id }
      //   });
      //   break;

      // outros modais...
    }
  }
}
