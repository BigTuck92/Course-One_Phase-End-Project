export class Meeting{
    mid: number;
    topic: string;
    dateTime: string;

    constructor (mid: number, topic: string, dateTime: string){
        this.mid = mid;
        this.topic = topic;
        this.dateTime = dateTime;
    }

    showClient() {
        console.log(this.mid+" "+this.topic);        
    }
}