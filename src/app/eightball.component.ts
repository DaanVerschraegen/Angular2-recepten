import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Eightball } from './eightball';
import { EightballService } from './eightball.service';

@Component ({
   selector: 'eightball',
   templateUrl: './eightball.component.html'
})

export class EightballComponent {
    search: FormGroup;
    result_question: string;
    result_answer: string;

    ngOnInit() {
       this.search = new FormGroup({
         name: new FormControl('')
       });
   }

   constructor(private EightballService: EightballService) {}

   onSubmit() {
       this.result_answer = this.EightballService.searchEightball(this.search.value.name);
   }
}
