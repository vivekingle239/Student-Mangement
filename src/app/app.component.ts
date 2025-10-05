import { Component } from '@angular/core';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentComponent],
  template: `<app-student></app-student>`  // <-- yahi se student form dikhega
})
export class AppComponent {}
