import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Recepten } from './recepten';

@Injectable()
export class ReceptenService {

   	private receptenServiceURI: string = 'http://localhost:4000';

   	constructor() {}

   	// voeg aan localstorage indien nieuw recept (op basis van naam)
   	addRecept(naam: string, caloriën: string, tijdInMin: number): void {
		var recept = new Recepten(this.naam, this.caloriën, this.tijdInMin);

       	if (localStorage.getItem(recept) != null) {
           	answer = localStorage.getItem(recept);
       	}
   		else {
       		localStorage.setItem(this.naam, recept);
		}
   	}
}
