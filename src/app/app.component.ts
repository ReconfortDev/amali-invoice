import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'invoice-app';

  isfilterOpened = false;
  isModalOpened = false;

  toggleFilter(){
    this.isfilterOpened = !this.isfilterOpened;
  }

  toggleModal(){
    this.isModalOpened = !this.isModalOpened;
  }

}
