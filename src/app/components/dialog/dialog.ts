import { Component } from '@angular/core';
import { AlertService } from '../../services/configurations/alert-service';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  constructor(private alertService: AlertService) {}

  exibirInfo() {
    this.alertService.info({ message: 'TESTE', title: 'titulo' });
  }
  exibirWarning() {
    this.alertService.warning({ message: 'TESTE' });
  }
  exibirErro() {
    this.alertService.error({ message: 'TESTE' });
  }
  exibirSucesso() {
    this.alertService.success({ message: 'TESTE', title: 'titulo' });
  }
}
