import { Injectable } from "@angular/core";
import { Todo } from "../types/Todo";
import { BehaviorSubject, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodoService {

  _todos$ = new BehaviorSubject<Todo[]>([
    {
      id: 'todo-0',
      title: 'Walk the dog',
      completed: false
    },
    {
      id: 'todo-1',
      title: 'Drink drink drink',
      completed: true
    }
  ])

  todos$ = this._todos$.asObservable()

  updateTodo(id: string, val: Partial<Omit<Todo, 'id'>>) {
    const newTodos = this._todos$.value.map(todo => todo.id === id ? { ...todo, ...val } : todo)
    this._todos$.next(newTodos)
  }

  removeTodo(id: string) {
    const newTodos = this._todos$.value.filter(todo => todo.id !== id)
    this._todos$.next(newTodos)
  }

  async addTodo(title: string, completed = false, id?: string) {
    const ident = id ?? `todo-${Math.round(Math.random() * 100000)}`
    const newTodo: Todo = { title, completed, id: ident }
    const oldTodos = this._todos$.value
    this._todos$.next([...oldTodos, newTodo])
  }

}