import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories: string[] = ['Electromenager', 'Alimentaire', 'Quincaillerie'];
  idp = '';
  Code = '';
  Libelle = '';
  PrixU = '';
  isShown: boolean = false;
  buttonShow: boolean = true;
  dateUpdate: boolean = false;
  toggleShow() {
    this.isShown = !this.isShown;
    this.buttonShow = !this.buttonShow;
  }
}
