import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='';
  date='';
  cost:number=0;
  distance:number=0;
  heat:number=0;
  crypto:number=0;


  onNameChange(value: string){
    this.name=value;
  }

  onDateChange(value: string){
    this.date=value;
  }

  onCostChange(value: string){
    this.cost=parseFloat(value);
  }

  onDistanceChange(value: string){
    this.distance=parseFloat(value);
  }

  onHeatChange(value: string){
    this.heat=parseFloat(value);
  }

  onCryptoChange(value: string){
    this.crypto=parseFloat(value);
  }


}
