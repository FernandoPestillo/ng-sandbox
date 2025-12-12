import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertService } from '../../services/configurations/alert-service';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { Cliente } from '../../modules/cliente/cliente';
import { Empresa } from '../../modules/empresa/empresa';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-modal-manager-component',
  imports: [DialogModule],
  templateUrl: './modal-manager-component.html',
  styleUrl: './modal-manager-component.scss',
})
export class ModalManagerComponent implements OnInit {
  @ViewChild('dialogContent', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('dynamicDialog') dialog: any;

  currentComponent!: ComponentRef<any>;

  constructor(private alertService: AlertService, private router: Router) {}

  ngOnInit() {
    this.alertService.errorEvent$.subscribe((event) => {
      const randomID = Number((Math.random() * 10).toFixed(0));
      if (Math.random() < 0.5) {
        this.open(Cliente, randomID);
      } else {
        this.open(Empresa, randomID);
      }
    });

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.close();
    });
  }

  open(component: any, id: number) {
    // limpa conteúdo anterior
    this.container.clear();

    // cria o novo componente dentro do dialog
    this.currentComponent = this.container.createComponent(component);

    if (
      'getById' in this.currentComponent.instance &&
      typeof this.currentComponent.instance.getById === 'function'
    ) {
      this.currentComponent.instance.getById(id);
    }
  }

  close() {
    this.container.clear();
  }
}
