import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button/button.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatTooltipModule} from '@angular/material';
@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserAnimationsModule, BrowserModule, MatButtonModule, MatTooltipModule, MatIconModule, MatCheckboxModule],
  providers: [],
  bootstrap: [ButtonComponent],
  entryComponents: [ButtonComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton);
  }

  ngDoBootstrap() {}
}
