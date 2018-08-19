import { Component } from '@angular/core';
// import sweetalert2 from 'sweetalert2'

// CommonJS
const swal = require('sweetalert2')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  accepts: any[];
  orders: any[];

  public setOrder() {
   
  }

  constructor() {
    // this.accept();

    this.accepts = new Array<any>();
    this.accepts.push({
      "order": "Arroz integral, Batata e carne moida - 400g",
      "address": "Av. Cesario Lange",
      "distance": "10km",
      "value": "R$14,00",
    });

    this.accepts.push({
      "order": "Arroz, feijao, carne assada, salada - 600g",
      "address": "Av. Jorge e Mateus",
      "distance": "8km",
      "value": "R$18,00",
    });

    this.orders = new Array<any>();
    this.orders.push({
      "order": "Lentilha e salada - 500g",
      "address": "Av. Silva Sauro",
      "distance": "2km",
      "value": "R$16,00",
    });

    setInterval(this.setOrder(), 3000);
  }

  public accept() {
    swal('Yeah. You accept this order.\n:D');

    this.accepts.push({
      "order": "Lentilha e salada - 500g",
      "address": "Av. Silva Sauro",
      "distance": "2km",
      "value": "R$16,00",
    });

    this.orders.splice(0, 1);

    this.orders.push({
      "order": "Frango e saladinha - 500g",
      "address": "Rua Jose alencar",
      "distance": "5km",
      "value": "R$12,00",
    });
    
    this.orders.push({
      "order": "Arroz, Feijao, salada de cenoura e filé de frango- 400g",
      "address": "Rua Pedro Paulo",
      "distance": "4km",
      "value": "R$18,00",
    });
  }

  

  public deal() {
    swal({
      title: '<strong>Deal!</strong>',
      type: 'info',
      html:
        'Input your offer: </b>' +
        '<input type="text" placeholder="Ex.R$20,00"/>  ',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> OFFER!<br/>',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i> CANCEL',
      cancelButtonAriaLabel: 'Thumbs down',
    });
  }
}
