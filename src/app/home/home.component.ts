import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Http, Response } from '@angular/http';

@Component({
	selector: 'home-component',
	template: '<h2>Home Component content goes here {{id}}</h2>'
})

export class HomeComponent  implements OnInit {

	sub:any;
	id: any;
	http: Http;
	data: any;

	constructor(private route: ActivatedRoute, private _http: Http){

		this.sub = this.route.params.subscribe(v => 
			{ 
				this.id = v.id; console.log(this.id);
			}
		);

		this.http = _http;

		this.http.request('http://localhost:3000')
			.subscribe((res: Response) => {
				this.data = res.json();
				console.log(this.data);
			});

	}

	ngOnInit() {
		console.log("On Init called");
	}

	ngOnDestroy() {
		console.log("Destroy called");
	}
	
}
