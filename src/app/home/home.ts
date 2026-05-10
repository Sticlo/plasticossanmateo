import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    console.log('Form data:', data);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    form.reset();
  }
}
