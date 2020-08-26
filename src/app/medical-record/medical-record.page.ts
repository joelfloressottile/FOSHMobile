import { Component, OnInit } from '@angular/core';
import { MedicalRecord } from '../dummies/medical-record';
import { ModalController } from '@ionic/angular';
import { RecordViewPage } from '../record-view/record-view.page';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.page.html',
  styleUrls: ['./medical-record.page.scss'],
})
export class MedicalRecordPage implements OnInit {

  medicalRecords: any = MedicalRecord;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async viewRecord(record){
    let modal = await this.modalCtrl.create({
      component: RecordViewPage,
      componentProps: {
        record: record,
      },
      cssClass: 'record-modal'
    });
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
