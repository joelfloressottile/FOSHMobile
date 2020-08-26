import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private storage: StorageService,
    ) { 
      this.initForm();
    }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  navigate(url){
    this.router.navigate([url]);
  }

  async login(){
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión...'
    })
    this.storage.set('token', '123abc456')
    loading.present();
    await this.delay(2000);
    loading.dismiss();
    this.navigate('home');
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
