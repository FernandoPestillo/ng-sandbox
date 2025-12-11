import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private errorEvent = new Subject<{ tipoEntidade: string; id: string }>();
  errorEvent$ = this.errorEvent.asObservable();

  constructor(private toastr: ToastrService) {}

  private emitirErro(data: { tipoEntidade: string; id: string }) {
    this.errorEvent.next(data);
  }

  info(alert: { message: string; title?: string }) {
    this.toastr.info(alert.message, alert.title);
  }

  warning(alert: { message: string; title?: string }) {
    this.toastr.warning(alert.message, alert.title);
  }

  error(alert: { message: string; title?: string }) {
    const toast = this.toastr.error(alert.message, alert.title);

    const tipo = 'cliente';
    const entityId = 1;
    toast.onTap.subscribe(() => {
      console.log('Clicou');
      this.emitirErro({ tipoEntidade: 'cliente', id: '1' });
    });
  }

  success(alert: { message: string; title?: string }) {
    this.toastr.success(alert.message, alert.title);
  }
}
