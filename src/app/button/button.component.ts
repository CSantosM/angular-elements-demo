import { Input, Component } from '@angular/core';

@Component({
  selector: 'custom-root',
  template: `
          <div  *ngIf="display">
            <h3>Hello {{_userName}}, Testing WITH ngIf</h3>
            <div class="button-row">
              <button mat-icon-button color="primary" (click)="toggleBlue()">
                <mat-icon aria-label="Example icon-button with a heart icon" matTooltip="Like">favorite</mat-icon>
              </button>
              <mat-icon *ngIf="blue">alarm</mat-icon>
            </div>
          </div>
          `,
  styles: [
    `
      * {
        text-align: center;
      }
    `,
  ],
})
export class ButtonComponent {

  blue: boolean;
  _userName: string;
  display = false;

  constructor() {}

  @Input('userName')
  set userName(name: string) {
    console.log('User Name', name);
    this._userName = name;
    if (this._userName) {
      this.display = true;
    }
  }

  toggleBlue() {
    console.log('Blue button pressed');
    this.blue = !this.blue;

  }

}
