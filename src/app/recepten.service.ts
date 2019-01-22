import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Recepten } from './recepten';

@Injectable()
export class ReceptenService {

   	private receptenServiceURI: string = 'http://localhost:4000';

   	constructor() {}

   	// get answer
   	searchEightball(question: string): string {
		let answer:string = ''

       	if (localStorage.getItem(question) != null) {
           	answer = localStorage.getItem(question);
       	}
   		else {
       		let randomNumber:number = Math.floor(Math.random() * Math.floor(this.answers.length));
       		answer = this.answers[randomNumber];
       		localStorage.setItem(question, answer);
		}
      	return answer;
   	}
}
