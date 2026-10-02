import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { Help } from './help/help';
import { ContactUS } from './contact-us/contact-us';
import { TestPipe } from './test-pipe';

@NgModule({
  declarations: [
    App,
    Home,
    Login,
    Register,
    Help,
    ContactUS,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
