import { DbDocs } from './dbdoc.enum';
import { Project } from './../models/project.model';
import { Message } from '../models/message.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Details } from '../models/details.model';

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
  getProjectById(id: string): Observable<Project>{

    const projectSummary$ = this.db.collection<Project>(DbDocs.firestoreProjectCol)
    .doc(id).valueChanges();

    const projectDetails$ = this.db.collection<Project>(DbDocs.firestoreProjectCol)
    .doc(id).collection(DbDocs.firestoreProjectDetailsSubcol)
    .doc(DbDocs.firestoreProjectDetailsData).valueChanges();

    return projectDetails$
      .pipe(
        mergeMap( (details: Details ) => {
          return projectSummary$
                    .pipe(
                      map((project: Project) => {
                          project.details = details;
                          return project;
                        }
                      )
                    )
        })
      );

  }

}
