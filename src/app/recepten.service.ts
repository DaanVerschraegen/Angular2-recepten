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
   	addRecept(naam: string, calorien: string, tijdInMin: number): void {
		var recept = new Recepten(naam, calorien, tijdInMin);

       	if (localStorage.getItem(naam) != null) {
           	recept = JSON.parse(localStorage.getItem(naam));
       	}
   		else {
       		localStorage.setItem(naam, JSON.stringify(recept));
		}
   	}
   	
   	toonRecepten(){
   		var result_list: Recepten[];
   		var keys = Object.keys(localStorage);
   		var aantalKeys = keys.length;
   		
   		while (aantalKeys--){
   			result_list.push( JSON.parse(localStorage.getItem(keys[aantalKeys])) );
   		}
   		
   		return result_list;
   	}
}
