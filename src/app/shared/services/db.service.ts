import { Project } from './../models/project.model';
import { Message } from '../models/message.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  projects$ = this.db.collection<Project[]>('projects')
  .valueChanges({idField: 'id'});

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
