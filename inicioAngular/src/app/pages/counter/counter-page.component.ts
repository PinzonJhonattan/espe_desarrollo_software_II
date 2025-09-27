import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
    styleUrls: ['./counter-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterPageComponent {
    counter:number = 0;
    counterSignal = signal(0);

    constructor() {
        setInterval(() => {
            this.counter++;
            this.counterSignal.update((currentValue:number) => currentValue + 1);
            console.log(this.counter);
        }, 1000);
    }
    

    add(value:number){
        this.counter += value;
        /* this.counterSignal.set(this.counterSignal() + value); */
        this.counterSignal.update((currentValue:number) => currentValue + value);
    }
    reset(){
        this.counter = 0;
        this.counterSignal.set(0);
    }
}