import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() messageSend = new EventEmitter<{sender: string, content: string}>();
    constructor() { }

    ngOnInit() {
    }
    onSendMessage(form: any) {
        this.messageSend.emit({sender: form.sender, content: form.content});
    }

}
