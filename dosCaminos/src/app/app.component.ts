import { Component } from '@angular/core';
import { Estado } from './estado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  carreras=["manto","tic","tu","ga","te"];

  estados=[
    new Estado(1,"Aguascalientes","AGS"),
    new Estado(2,"Baja California Norte","BCN"),
    new Estado(3,"Chiapas","CHP"),
    new Estado(4,"Durango","DRG")
  ];
 visible =false;

 name : string = "";
nBoton : string ="Activar";
 mostrar(){
   if(!this.visible){
     this.visible=true;
     this.nBoton ="Desactivar"
   }else{
     this.visible=false;
     this.nBoton ="Activar"
   }
 }
 operacion : string = "";
 operacion2 : string = "";
}
