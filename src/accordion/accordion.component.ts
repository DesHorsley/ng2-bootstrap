import { Component, HostBinding, Input } from '@angular/core';
import { AccordionPanelComponent } from './accordion-group.component';
import { AccordionConfig } from './accordion.config';

@Component({
  selector: 'accordion',
  template: `<ng-content></ng-content>`
})
export class AccordionComponent {
  @Input() public closeOthers:boolean;

  /* tslint:disable:no-unused-variable */
  @HostBinding('class.panel-group')
  public addClass:boolean = true;
  /* tslint:enable:no-unused-variable */

  protected groups:AccordionPanelComponent[] = [];

  public constructor(config: AccordionConfig) {
    Object.assign(this, config);
  }

  public closeOtherPanels(openGroup:AccordionPanelComponent):void {
    if (!this.closeOthers) {
      return;
    }

    this.groups.forEach((group:AccordionPanelComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  public addGroup(group:AccordionPanelComponent):void {
    this.groups.push(group);
  }

  public removeGroup(group:AccordionPanelComponent):void {
    let index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
