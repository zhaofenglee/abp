import { Component } from '@angular/core';
import { eLayoutType } from '@abp/ng.core';

@Component({
  standalone: false,
  selector: 'abp-layout-empty',
  template: ` <router-outlet></router-outlet> `,
})
export class EmptyLayoutComponent {
  static type = eLayoutType.empty;
}
