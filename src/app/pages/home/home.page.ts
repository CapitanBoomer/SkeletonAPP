import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public usuu: string = '';
  desarrollador: string = 'CapBoom';
  public user: string = '';
  public apellido: string = '';
  mensaje: string = '';
  constructor(private homeroute: ActivatedRoute,
    private alertController: AlertController) { }

  ngOnInit() { }



  ionViewWillEnter(
  ) { //this.nombre = this.homeroute.snapshot.paramMap.get('nombre') || 'sin nombre';
  this.homeroute.queryParams.subscribe(parametros=>{this.usuu = parametros['usu']||'nada'}) }


  // async alerta() {
  //   const alert = await this.alertController.create({
  //     header: this.nombre,
  //     message: 'su nombre es:'+this.user+' '+this.apellido,
  //     buttons: ['yes'],
  //   });

  //   await alert.present();
  // }
}
