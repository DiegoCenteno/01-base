import { Component } from "@angular/core";

@Component ({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>La base es: {{base}}</h3>
        <button (click)="acumular(base)">+1</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">-1</button>
    `
})
export class ContadorComponent {
    title: string = 'Mi prueba';
    numero: number = 10;
    base: number = 5;
    acumular(valor: number): number{
        this.numero += valor;
        return this.numero;
    }
}