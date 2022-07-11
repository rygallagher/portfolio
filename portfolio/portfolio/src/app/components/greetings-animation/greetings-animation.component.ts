import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings-animation',
  templateUrl: './greetings-animation.component.html',
  styleUrls: ['./greetings-animation.component.scss'],
})
export class GreetingsAnimationComponent implements OnInit {
    greeting = 'Hi, my name is Ry Gallagher. Welcome to my portfolio!';
    startDelay: boolean = false;

    ngOnInit(): void {
        setTimeout(() => {
            this.startDelay = true;
        }, 500);
    }

    onComplete(): void {
        console.log('greeting complete...');
    }
}
