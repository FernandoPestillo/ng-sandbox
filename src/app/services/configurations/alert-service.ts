import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DynamicFormService } from './dialogs/dynamic-form-service';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService, private dynamicForm: DynamicFormService) {}

  info(alert: { message: string; title?: string }) {
    this.toastr.info(alert.message, alert.title);
  }

  warning(alert: { message: string; title?: string }) {
    this.toastr.warning(alert.message, alert.title);
  }

  error(alert: { message: string; title?: string }) {
    const toast = this.toastr.error(alert.message, alert.title);

    const tipo = 'empresa';
    const entityId = 1;
    toast.onTap.subscribe(() => {
      console.log('Clicou');
      this.dynamicForm.open(tipo, entityId);
    });
  }

  success(alert: { message: string; title?: string }) {
    this.toastr.success(alert.message, alert.title);
  }
}
