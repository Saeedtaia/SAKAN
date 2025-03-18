import { Component, effect, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ObjtoarrPipe } from '../../../shared/pipes/objtoarr.pipe';
import { TranslocoPipe } from '@ngneat/transloco';
import { Student } from '../../../shared/data/student/student';
import { CommonModule } from '@angular/common';
import { Guardian } from '../../../shared/data/guardian/guardian.model';
import { FAKE_GUARDIANS } from '../../../shared/samples/guardian/mock-guardian';
@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    ImageModule,
    AvatarModule,
    ButtonModule,
    InputTextModule,
    FloatLabel,
    ObjtoarrPipe,
    TranslocoPipe,
    CommonModule,
  ],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss',
})
export class StudentDetailsComponent implements OnInit {
  student: Student = {} as Student;
  Guardian: Guardian = {} as Guardian;
  private route = inject(ActivatedRoute);
  paramValue: string | null = '';
  constructor() {
    // effect(() => {
    //   this.paramValue = this.route.snapshot.paramMap.get('StudentId');
    //   console.log('Route Param:', this.paramValue);
    // });
  }
  ngOnInit(): void {
    this.student = this.route.snapshot.data['StudentDetails'][0];
    this.studentdetailsform.patchValue(this.student);
    this.Guardian = [...FAKE_GUARDIANS].find(guardian => guardian.guardianID === this.student.guardianID) || {} as Guardian;
    this.guardianData.patchValue(this.Guardian)
  }
  desabled: boolean = true;
  test() {
    this.desabled = false;
  }

  //#region Student Details Form Controls
  studentdetailsform: FormGroup = new FormGroup({
    studentID: new FormControl(null, [Validators.required]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    secondName: new FormControl('', [Validators.required]),
    thirdName: new FormControl('', [Validators.required]),
    fourthName: new FormControl('', [Validators.required]),
    countryId: new FormControl(null, [Validators.required]),
    nationalID: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+\d{11,15}$/),
    ]),
    telephone: new FormControl(''),
    birthDate: new FormControl(null, [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    religion: new FormControl('', [Validators.required]),
    placeOfBirth: new FormControl('', [Validators.required]),
    hasSpecialNeeds: new FormControl(false),
    guardianID: new FormControl(null, [Validators.required]),
    studentCode: new FormControl('', [Validators.required]),
    academicYear: new FormControl(null, [Validators.required]),
    collegeID: new FormControl(null, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    applicationID: new FormControl(null, [Validators.required]),
    residencePlace: new FormControl(null, [Validators.required]),
    isMarried: new FormControl(false),
    addressLine: new FormControl('', [Validators.required]),
    roomID: new FormControl(null, [Validators.required]),
    userID: new FormControl('', [Validators.required]),
    historyId: new FormControl(null, [Validators.required]),
    oldStudentId: new FormControl(0),
    newStudentId: new FormControl(0),
  });
  //#endregion

  //#region guardian data
  guardianData: FormGroup = new FormGroup({
    guardianID: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    firstName: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
    secondName: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
    thirdName: new FormControl<string>('', [Validators.maxLength(50)]),
    countryId: new FormControl<number | null>(null, [Validators.required]),
    nationalID: new FormControl<string>('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    phone: new FormControl<string>('', [Validators.required, Validators.pattern(/^\+9665\d{8}$/)]),
    telephone: new FormControl<string>('', [Validators.pattern(/^\+966\d{8,9}$/)]),
    birthDate: new FormControl<Date | null>(null, [Validators.required]),
    gender: new FormControl<string>('', [Validators.required]),
    religion: new FormControl<string>('', [Validators.required]),
    placeOfBirth: new FormControl<string>('', [Validators.required, Validators.maxLength(100)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    addressLine: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
    isMarried: new FormControl<boolean>(false, [Validators.required]),
    occupation: new FormControl<string>('', [Validators.required, Validators.maxLength(100)]),
    kinship: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
  })
  //#endregion
}
