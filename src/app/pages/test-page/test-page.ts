import { Component } from '@angular/core';
import { AlertService } from '../../services/configurations/alert-service';

@Component({
  selector: 'app-test-page',
  imports: [],
  templateUrl: './test-page.html',
  styleUrl: './test-page.scss',
})
export class TestPage {
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
