import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

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

  constructor(
    private modalCtrl: ModalController
  ) { 
  }

  ngOnInit() {
    console.log('Questionnaire: ', this.questionnaire);
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  moveSlideForward(slideIndex: number){
    if(this.slideIndex == this.questionnaire.questions.length - 1)
      return;
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

}
