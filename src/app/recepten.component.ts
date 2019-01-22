import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Recepten } from './recepten';
import { ReceptenService } from './recepten.service';

@Component ({
   selector: 'recepten',
   templateUrl: './recepten.component.html'
})

export class ReceptenComponent {
    recept: FormGroup;
    result_list: Recepten[];

    ngOnInit() {
       this.recept = new FormGroup({
         naam: new FormControl(''),
         calorien: new FormControl(''),
         tijdInMin: new FormControl(0)
       });
   }

   constructor(private ReceptenService: ReceptenService) {}

   onSubmit() {
       this.ReceptenService.addRecept(this.recept.value.naam, 
       this.recept.value.calorien, this.recept.value.tijdInMin);
       this.result_list = this.ReceptenService.toonRecepten();
   }
}
