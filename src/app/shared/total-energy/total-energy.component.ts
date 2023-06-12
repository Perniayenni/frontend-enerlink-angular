import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-energy',
  templateUrl: './total-energy.component.html',
  styleUrls: ['./total-energy.component.scss']
})
export class TotalEnergyComponent {

  @Input() title?:string;
  @Input() total?: number;
}
