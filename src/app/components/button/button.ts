import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonVariant = 'info' | 'warning' | 'success' | 'error';

@Component({
  selector: 'sb-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() variant: ButtonVariant = 'info';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<void>();

  baseClasses =
    'font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border focus:ring-4 focus:outline-none';

  variants: Record<ButtonVariant, string> = {
    info: `
      text-blue-700 border-blue-700 hover:text-white hover:bg-blue-800
      focus:ring-blue-300
      dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white
      dark:focus:ring-blue-800
    `,
    warning: `
      text-yellow-400 border-yellow-400 hover:text-white hover:bg-yellow-500
      focus:ring-yellow-300
      dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white
      dark:focus:ring-yellow-900
    `,
    success: `
      text-green-700 border-green-700 hover:text-white hover:bg-green-800
      focus:ring-green-300
      dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white
      dark:focus:ring-green-800
    `,
    error: `
      text-red-700 border-red-700 hover:text-white hover:bg-red-800
      focus:ring-red-300
      dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white
      dark:focus:ring-red-900
    `,
  };

  get classes(): string {
    return `${this.baseClasses} ${this.variants[this.variant]}`;
  }
}
