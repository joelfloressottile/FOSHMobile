import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, IonSlides, AlertController } from '@ionic/angular';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-q-completion',
  templateUrl: './q-completion.page.html',
  styleUrls: ['./q-completion.page.scss'],
})
export class QCompletionPage implements OnInit {
  @Input() title;
  @Input() questionnaire;
  @ViewChild('slides', {static: true}) slides: IonSlides;
  slideIndex = 0;
  slideOptions = {
    allowTouchMove: false
  }
  answers;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
  ) { 
  }

  ngOnInit() {
    this.slides.update();
    console.log('Questionnaire: ', this.questionnaire);
    this.answers = new Array(this.questionnaire.questions.length).fill(null);
    console.log('Answers set: ', this.answers);
  }

  radioSelection(event){
    //console.log('Event: ', event);
    //console.log('Selection was: ', event.detail.value);
    this.answers[this.slideIndex] = event.detail.value;
    console.log('@ Answers updated: ', this.answers);
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }


  moveSlideForward(slideIndex: number){
    if(this.slideIndex == this.questionnaire.questions.length - 1){
      this.checkCompletion();
    }
    else{
      this.slides.slideTo(slideIndex+1);
      this.slideIndex++;
    }
  }

  moveSlideBackward(slideIndex: number){
    if(this.slideIndex == 0 )
      return;
    else{
      this.slides.slideTo(slideIndex-1);
      this.slideIndex--;
    }
  }

  // resetSlides(){
  //   this.slideIndex = 0;
  //   this.slides.slideTo(0);
  // }

  async checkCompletion(){
    let alert = await this.alertCtrl.create({
      header: '¿Estás seguro de haber terminado?',
      subHeader: 'Por favor, confirma.',
      message: 'Necesitamos que estés seguro de la información que nos vas a proveer. Si ya revisaste tus respuestas, puedes confirmar para terminar. Si no, revísalas.',
      buttons: [{
        text: 'Aún no reviso.',
        role: 'cancel'
      },
      {
        text: 'Sí, terminé.',
        handler: () => {
          this.closeModal();
        }
      }
    ]
    })

    await alert.present();

  }

}
