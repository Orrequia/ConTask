import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Message {
    text: String;
    _id: Number;
    Message(text: String = null) {
        this.text = text
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

    message: Message;
    datas = {};

    show_form = false;
    show_update = false;
    username: String;
    password: String;

    addMessage() {
        this.message = new Message();
        this.show_form = true;
    }
    cancel() {
      this.show_form = false;
    }
      // Inject HttpClient into your component or service.*/
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get<Array<Message>>('http://localhost:3000/api/messages').subscribe(datas => {
            // Read the result field from the JSON response.
            this.datas = datas;
        });
    }
    createMessage() {
        //this.datas.push(this.message);
        this.http.post('http://localhost:3000/api/messages', this.message).subscribe();
        this.show_form = false;
        this.message = new Message();
    }
    viewUpdater(message) {
        this.message = new Message();
        this.message.text = message.text;
        this.message._id = message._id;

        this.show_update = true;
    }
    cancelUpdate() {
        this.show_update = false;
    }
    updateMessage() {
        this.http.put('http://localhost:3000/api/messages/' + this.message._id, this.message).subscribe();
        //this.datas.find(result => result._id === this.message._id)
        //    .text = this.message.text;
        this.show_update = false;
    }
    deleteMessage() {
        this.http.delete('http://localhost:3000/api/messages/' + this.message._id).subscribe();

        this.show_update = false;
    }
}
