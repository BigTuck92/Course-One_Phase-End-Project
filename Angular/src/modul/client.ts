export class Client{
    cid: number;
    name: string;
    email: string;
    password: string;

    constructor (cid: number, name: string, email: string, password: string){
        this.cid = cid;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    showClient() {
        console.log(this.cid+" "+this.name);        
    }
}

