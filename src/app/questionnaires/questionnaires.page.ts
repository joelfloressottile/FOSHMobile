import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QCompletionPage } from '../q-completion/q-completion.page';
import { Questions } from '../dummies/questions';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.page.html',
  styleUrls: ['./questionnaires.page.scss'],
})
export class QuestionnairesPage implements OnInit {
  questionnaire: any = Questions;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openQuestionnaire(title: string, qIndex: number){
    let modal = await this.modalCtrl.create({
      component: QCompletionPage,
      componentProps: {
        questionnaire: this.questionnaire[qIndex],
        title: title,
      }
    })
    modal.onDidDismiss().then(
      (response) => {
        if(response.data){
          console.log('Closed with action: ', response);
        }
        else{
          console.log('Closed by exiting');
        }
      }
    )

    return await modal.present();
  }

}
