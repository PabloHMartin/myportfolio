import { Message } from '../models/message.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db: AngularFirestore) { }

  /**
   * Saves a message on db
   */
  async saveMessage(message: Message): Promise<any> {
    return this.db.collection('messages').add({
      ...message,
      date: new Date().toLocaleDateString("es-ES").toString()
    });
  }

}
