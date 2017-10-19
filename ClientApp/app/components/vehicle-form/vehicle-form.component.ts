import { VehicleSevice } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  makes: any[];
  vehicle: any = {};

  models: any[];
  features: any[];

  constructor(
    private vehicleService: VehicleSevice) { }

  ngOnInit() {
    this.vehicleService.getMakes()
      .subscribe(makes => {
        this.makes = makes;
        console.log("Makes:", this.makes);
      });      

    this.vehicleService.getFeatures()
      .subscribe(fetures => {
        this.features = fetures;
      });
  }

  onMakeChange(){
    // console.log("vehicle", this.vehicle);
    var selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
  }
}
