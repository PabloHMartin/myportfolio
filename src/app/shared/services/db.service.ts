import { DbDocs } from './dbdoc.enum';
import { Project } from './../models/project.model';
import { Message } from '../models/message.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { merge, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  projects$ = this.db.collection<Project[]>('projects')
  .valueChanges({idField: 'id'});

  constructor(private db: AngularFirestore) { }

  /**
   * Saves a message on db
   * @param: Message
   */
  async saveMessage(message: Message): Promise<any> {
    return this.db.collection('messages').add({
      ...message,
      date: new Date().toLocaleDateString("es-ES").toString()
    });
  }

  /**
   * Gets collection and subcollection of a project by id
   * @param: id
   */
  getProjectById(id: string): Observable<any>{

    const projectSummary$ = this.db.collection<Project>(DbDocs.firestoreProjectCol)
    .doc(id).valueChanges();

    const projectDetails$ = this.db.collection<Project>(DbDocs.firestoreProjectCol)
    .doc(id).collection(DbDocs.firestoreProjectDetailsSubcol)
    .doc(DbDocs.firestoreProjectDetailsData).valueChanges();

    return merge(projectSummary$,projectDetails$);
  }

}
