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
    result_question: string;
    result_answer: string;

    ngOnInit() {
       this.search = new FormGroup({
         name: new FormControl('')
       });
   }

   constructor(private ReceptenService: ReceptenService) {}

   onSubmit() {
       this.result_answer = this.EightballService.searchEightball(this.search.value.name);
   }
}
