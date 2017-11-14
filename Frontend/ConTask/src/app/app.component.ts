import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'seed-app',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    name = '';
    id = 5;
    results: Object;

    my_notes = [
        { id: 1, title: 'Nota 1', description: 'Descripción de la nota numero 1' },
        { id: 2, title: 'Nota 2', description: 'Descripción de la nota numero 2' },
        { id: 3, title: 'Nota 3', description: 'Descripción de la nota numero 3' },
        { id: 4, title: 'Nota 4', description: 'Descripción de la nota numero 4' },
    ];

    note = { id: null, title: null, description: null };

    show_form = false;
    show_new_message = false;

    addNote() {
      this.show_form = true;
    }

    cancel() {
      this.show_form = false;
      this.note = { id: null, title: null, description: null };
    }

    createNote() {

      this.note.id = this.id;
      this.id++;
      this.my_notes.push(this.note);
      this.show_form = false;
      this.note = { id: null, title: null, description: null };
    };

      addMessage() {
          this.show_new_message = true;
      }

      // Inject HttpClient into your component or service.*/
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        // Make the HTTP request:
        this.http.get('http://localhost:3000/api/messages').subscribe(data => {
            // Read the result field from the JSON response.
            this.results = data;
        });
    }
}


