import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
public nombre:string='';
public contra: string ='';
  constructor(private userrouter:Router) { }

  ngOnInit() {
  }
public ingreso()
{
this.userrouter.navigate(['/casa',this.nombre,this.contra])
}
}
