import { InMemoryDbService } from 'angular-in-memory-web-api'; 
export class InMemoryDataService implements InMemoryDbService{
createDb(){

const contactos = [
    {id:1, nombre:'Juan', apellido: 'Perez', empresa: 'Alcaldia', telefono:'3017555555', correo:'juanperez@hotmail.com' },
    {id:2, nombre:'Adriana', apellido: 'Lopez', empresa: 'Alcaldia', telefono:'3017555555', correo:'juanperez@hotmail.com' },
    {id:3, nombre:'Angela', apellido: 'Valencia', empresa: 'Alcaldia', telefono:'3017555555', correo:'juanperez@hotmail.com' }

];
return {contactos};
    }
}