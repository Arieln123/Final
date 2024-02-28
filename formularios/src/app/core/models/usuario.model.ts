import { IPerson, Isuer } from "./iuser";

export class User implements Isuer{

    email!: string;
    password!: string;
    id: number | null ;
    constructor ( user?: any){
        
        this.id = user == undefined ? null : user.id;
        this.password = user == undefined ? null : user.password;
        this.email = user == undefined ? null :user.email;
    
    }
    
}

export class Person implements IPerson {
    name !: string;
    lastname !: string;
    dni !: number | null;
    city !: string;
    id : number | null ;
    constructor( person ?: any){
        this.name = person == undefined ? null : person.id;
        this.lastname = person == undefined ? null : person.lastname;
        this.dni = person == undefined ? null : person.dni;
        this.city = person == undefined ? null : person.city;
        this.id = person == undefined ? null : person.id;
    }
}