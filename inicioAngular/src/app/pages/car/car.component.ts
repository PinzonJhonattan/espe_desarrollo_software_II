import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";   


@Component({
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css'],
    imports: [UpperCasePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarComponent {

    brand = signal('Renault');
    student = signal('jhonattan')
    year = signal(2020);
    getCarDescription = computed(() => `${this.brand()} - ${this.year()}`); //señal computada
    capitalizeStudent = computed(() => this.student().toUpperCase());  //señales computada

    constructor() {
    }

        /* getCarDescription() {
            return `${this.brand()} - ${this.year()}`;  
        }
 */
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

}