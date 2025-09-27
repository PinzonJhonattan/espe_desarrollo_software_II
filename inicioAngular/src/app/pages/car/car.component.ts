import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './car.component.html',
        styleUrls: ['./car.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarComponent {

    brand = signal('Renault');
    student = 'jhonattan'
    year = signal(2020);

    constructor() {
    }

    getCarDescription() {
        return `${this.brand()} - ${this.year()}`;  
    }

    changeCar() {
        this.brand.set('Kia');
        this.year.set(2021);
    }

    resetForm() {
        this.brand.set('Renault');
        this.year.set(2020);
    }

    changeYear() {
        this.year.update(() => 2025);
    }

    changeNameStudent() {
        this.student = this.student.toUpperCase();  
    }
}