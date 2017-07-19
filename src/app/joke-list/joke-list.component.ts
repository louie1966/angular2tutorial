import {
	Component,
	AfterViewInit,
	AfterContentInit,
	ViewChild,
	ViewChildren,
	ContentChild,
	ContentChildren,
	ElementRef,
	QueryList
} from '@angular/core';
import { JokeComponent } from '../joke/joke.component';
import { Joke } from '../joke';

@Component({
	selector: 'joke-list',
	templateUrl: './joke-list.component.html',
	styleUrls: ['./joke-list.component.css']
})

export class JokeListComponent implements
	AfterContentInit,
	AfterViewInit {

	jokes: Joke[] = [
		new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
		new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
	];

	@ViewChild(JokeComponent) jokeViewChild: JokeComponent;
	@ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
	@ViewChild("header") headerEl: ElementRef;
	@ContentChild(JokeComponent) jokeContentChild: JokeComponent;

	constructor() {
		console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
		console.log(`new - jokeContentChild is ${this.jokeContentChild}`);
	}

	ngAfterContentInit() {
		console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
	}

	ngAfterViewInit() {
		console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);

		let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
		console.log(jokes);

		console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
		this.headerEl.nativeElement.textContent = "Best Joke Machine";
	}
}