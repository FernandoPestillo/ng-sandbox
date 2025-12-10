import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    private toastr: ToastrService // private meuService: MeuService
  ) {}

  info(alert: { message: string; title?: string }) {
    this.toastr.info(alert.message, alert.title);
  }
  warning(alert: { message: string; title?: string }) {
    this.toastr.warning(alert.message, alert.title);
  }
  error(alert: { message: string; title?: string }) {
    this.toastr.error(alert.message, alert.title);
  }
  success(alert: { message: string; title?: string }) {
    this.toastr.success(alert.message, alert.title);
  }

  private exibirToastr() {}

  showAcao(html: string, titulo?: string) {
    const toast = this.toastr.info(html, titulo, { enableHtml: true });

    toast.onTap.subscribe(() => {
      // this.meuService.fazAlgoImportante();   // ação global
    });
  }

  showCustomAction(html: string, onClick: () => void) {
    const toast = this.toastr.info(html, '', { enableHtml: true });

    toast.onTap.subscribe(onClick); // ação por componente
  }
}
