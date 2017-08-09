import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    messageSender = '';
    messageContent = '';
    @Output() messageSend = new EventEmitter<{sender: string, content: string}>();
    constructor() { }

    ngOnInit() {
    }
    onSendMessage() {
        this.messageSend.emit({sender: this.messageSender, content: this.messageContent});
    }

}
