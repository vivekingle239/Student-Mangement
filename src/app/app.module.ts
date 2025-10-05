import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // standalone component

@NgModule({
  imports: [
    BrowserModule,
    AppComponent  // standalone component ko imports me add karo
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
