
import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 1;

  constructor() { }

  // Leer todas las tareas
  getTasks(): Task[] {
    return this.tasks;
  }

  // Crear una nueva tarea
  addTask(title: string): void {
    const newTask: Task = {
      id: this.idCounter++,
      title: title,
      completed: false
    };
    this.tasks.push(newTask);
  }

  // Actualizar una tarea
  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  // Eliminar una tarea
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

