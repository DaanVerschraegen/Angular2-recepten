import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Eightball } from './eightball';

@Injectable()
export class EightballService {

   	private productsServiceURI: string = 'http://localhost:4000';
    private answers:string[] = new Array("It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.",
            "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy", "try again", "Ask again later.", "Better not tell you now.",
            "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no",
            "Outlook not so good.", "Very doubtful.")


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
