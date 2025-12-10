import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormRegistryService {
  private registry = new Map<string, any>();

  register(entity: string, formComponent: any) {
    this.registry.set(entity, formComponent);
  }

  get(entity: string) {
    return this.registry.get(entity);
  }
}
