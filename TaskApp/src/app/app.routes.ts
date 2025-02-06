import { Routes } from '@angular/router';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
    {
        path : 'app-task-form',
        component : TaskFormComponent
    },

    {
        path : 'app-task-list',
        component : TaskListComponent
    }
];
