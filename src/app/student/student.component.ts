import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Student {
  firstName: string;
  middleName: string;
  lastName: string;
  rollNumber: string;
  className: string;
  age: number;
  dob: string;
  gender: string;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']  // optional, create empty file
})
export class StudentComponent {

  studentForm: FormGroup;
  students: Student[] = [];
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      rollNumber: ['', Validators.required],
      className: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  addOrUpdateStudent() {
    if (this.editIndex !== null) {
      this.students[this.editIndex] = this.studentForm.value;
      this.editIndex = null;
    } else {
      this.students.push(this.studentForm.value);
    }
    this.studentForm.reset();
  }

  editStudent(index: number) {
    this.editIndex = index;
    this.studentForm.setValue(this.students[index]);
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
