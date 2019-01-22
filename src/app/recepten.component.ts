import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Recepten } from './recepten';
import { ReceptenService } from './recepten.service';

@Component ({
   selector: 'recepten',
   templateUrl: './recepten.component.html'
})

export class ReceptenComponent {
    search: FormGroup;
    result_list: Recepten[];

    ngOnInit() {
       this.recept = new FormGroup({
         naam: new FormControl(''),
         calori�n: new FormControl(''),
         tijdInMin: new FormControl(0)
       });
   }

   constructor(private ReceptenService: ReceptenService) {}

   onSubmit() {
       this.ReceptenService.addRecept(this.recept.value.naam, 
       this.recept.value.calori�n, this.recept.value.tijdInMin);
   }
}
