import { Injectable } from "@angular/core";
import { child } from "@angular/fire/database";
import { Firestore, collection, collectionData, collectionSnapshots, Query, DocumentData, getDocs, query, addDoc, deleteDoc, doc, updateDoc } from "@angular/fire/firestore";
import { Observable, from, map, take } from "rxjs";


interface ITodo {
  id: string,
  completed: boolean,
  title: string
}


@Injectable({providedIn: 'root'})
export class TodoService {

  private todosRef = collection(this.firestore, 'todos')

  todos$$: Observable<ITodo[]> = this._onChanges$$()

  constructor(private firestore: Firestore) {}

  private _onChanges$$(): Observable<ITodo[]> {
    return collectionSnapshots(this.todosRef).pipe(
      map(docs => docs.map(doc => ({id: doc.id, ...doc.data()})))
    ) as Observable<ITodo[]>
  }

  async add(todo: Omit<ITodo, 'id'>): Promise<void> {
    try {
      await addDoc(this.todosRef, todo)
      return Promise.resolve()
    }
    catch(err) {
      return Promise.reject(err)
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await deleteDoc(doc(this.firestore, 'todos', id))
      return Promise.resolve()
    }
    catch(err) {
      return Promise.reject(err)
    }
  }

  async update(id: string, options: Partial<Omit<ITodo, 'id'>>): Promise<void> {
    try {
      await updateDoc(doc(this.firestore, 'todos', id), options)
      return Promise.resolve()
    }
    catch(err) {
      return Promise.reject(err)
    }
  }

}


// this.todoService.todos$$.subscribe()
// this.todoService.add({title: 'a new Todo', completed: false}).subscribe(console.log)
// this.todoService.delete('acdsdkkglshgio').subscribe(console.log)
// this.todoService.set('assskdjsdfas', {title: 'a new Todo', completed: false}).subscribe(console.log)
// this.todoService.update('assskdjsdfas', {completed: false}).subscribe(console.log)
