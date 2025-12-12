import { Component } from '@angular/core';
import { AlertService } from '../../services/configurations/alert-service';

@Component({
  selector: 'app-toastr-modal',
  imports: [],
  templateUrl: './toastr-modal.html',
  styleUrl: './toastr-modal.scss',
})
export class ToastrModal {
  private mensagem = { message: 'Exibir mensagem' };
  private mensagemComTitulo = { message: 'Mensagem do Toastr', title: 'Alerta' };

  constructor(private alertService: AlertService) {}

  exibirInfo() {
    this.alertService.info(this.mensagem);
  }
  exibirWarning() {
    this.alertService.warning(this.mensagemComTitulo);
  }
  exibirErro() {
    this.alertService.error(this.mensagemComTitulo);
  }
  exibirSucesso() {
    this.alertService.success(this.mensagem);
  }
}
