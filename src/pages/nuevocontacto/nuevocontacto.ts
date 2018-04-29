import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import {Contacto } from '../../app/contacto';
import {ContactoService} from '../../app/contacto.service';

@Component({
  selector: 'page-nuevocontacto',
  templateUrl: 'nuevocontacto.html',
  providers:[ContactoService]
})
export class NuevocontactoPage {
  contactos:Contacto[];
  contacto:Contacto;
  nuevoForm={};

  constructor(public navCtrl: NavController,private contactoService: ContactoService,public toastCtrl: ToastController) {

           }

           getContactos():void{
          //this.bandas=this.bandaService.getBandas();
           this.contactoService.getContactos().then(contactos =>this.contactos=contactos);
         }

          ngOnInit():void{
           this.getContactos();
           }
         
           nuevo(nuevoForm): void {
          if(!nuevoForm.nombre) { return; }
          this.contactoService.crearNuevo(nuevoForm.nombre, nuevoForm.apellido, nuevoForm.empresa,nuevoForm.telefono, nuevoForm.correo)
          .then(contacto => {
    
           this.contactos.push(contacto);
           this.contacto = null;
           nuevoForm.nombre = null;
            nuevoForm.apellido = null;
           nuevoForm.empresa = null;
           nuevoForm.telefono = null;
           nuevoForm.correo = null;

                let toast=this.toastCtrl.create({
                  message:'contacto registrado',
                  duration:3000
             });
             toast.present();
            });
    }
  }