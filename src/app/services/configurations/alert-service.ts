import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from './dialog-service';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService, private dialogService: DialogService) {}

  info(alert: { message: string; title?: string }) {
    this.toastr.info(alert.message, alert.title);
  }

  warning(alert: { message: string; title?: string }) {
    this.toastr.warning(alert.message, alert.title);
  }

  error(alert: { message: string; title?: string }) {
    const toast = this.toastr.error(alert.message, alert.title);

    toast.onTap.subscribe(() => {
      console.log('Clicou');
      this.dialogService.abrirDialogoForm(alert.message);
    });
  }

  success(alert: { message: string; title?: string }) {
    this.toastr.success(alert.message, alert.title);
  }
}
