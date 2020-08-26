import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

    /* Get what a key holds in the storage */
    async get(key: string) {
      const item = await Storage.get({key: key});
      return JSON.parse(item.value)
    }

    /* Add key to storage */
    set(key: string, value: string): void {
      Storage.set({
        key: key,
        value: JSON.stringify(value)
      })
    }

    /* Clear storage. All keys are removed*/
    clear():void {
      Storage.clear();
    }

    /* Remove specific key from storage */
    remove(key: string) {
      Storage.remove({key: key});
    }
}
