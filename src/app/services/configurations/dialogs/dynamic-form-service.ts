import { Injectable, Injector } from '@angular/core';
import { FormRegistryService } from './form-registry-service';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  constructor(private registry: FormRegistryService, private injector: Injector) {}

  open(entity: string, id: number) {
    const componentClass = this.registry.get(entity);
    if (!componentClass) {
      console.error(`Form não registrado para entidade: ${entity}`);
      return;
    }

    // Cria instância do componente
    const component: any = this.injector.get(componentClass);

    // Chama a lógica nativa dele
    component.getById(id);
  }
}
