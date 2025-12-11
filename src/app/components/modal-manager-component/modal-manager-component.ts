import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Cliente } from '../../pages/modules/cliente/cliente';
import { AlertService } from '../../services/configurations/alert-service';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-modal-manager-component',
  imports: [DialogModule],
  templateUrl: './modal-manager-component.html',
  styleUrl: './modal-manager-component.scss',
})
export class ModalManagerComponent implements OnInit {
  @ViewChild('dialogContent', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('dynamicDialog') dialog: any;

  dialogTitle = '';
  isOpen = false;
  currentComponent!: ComponentRef<any>;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.errorEvent$.subscribe((event) => {
      this.open(Cliente, 'Cadastro de Cliente');
    });
  }

  open(component: any, title: string) {
    this.dialogTitle = title;
    this.isOpen = true;

    // limpa conteúdo anterior
    this.container.clear();

    // cria o novo componente dentro do dialog
    this.currentComponent = this.container.createComponent(component);
  }

  close() {
    this.isOpen = false;
    this.container.clear();
  }
}
