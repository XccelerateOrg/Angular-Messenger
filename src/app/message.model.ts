export class Message {
    public content: string;
    public sender: string;
    public received: Date;

    constructor(content: string, sender: string, received: Date) {
        this.content = content;
        this.sender = sender;
        this.received = received;
    }
}
