import { ToastService } from './../../../shared/services/toaster/toast.service';
import { DatePipe, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup'
import { periodform, RegperiodService } from '../../../shared/services/setting/regperiod.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
@Component({
  selector: 'app-registration-period',
  standalone: true,
  imports: [NgIf, ToggleSwitchModule, InputNumberModule, DatePicker, FormsModule, DialogModule, NgClass, CardModule, ReactiveFormsModule, TagModule, DatePipe, ButtonModule, ToastModule, ConfirmPopupModule],
  templateUrl: './registration-period.component.html',
  styleUrl: './registration-period.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class RegistrationPeriodComponent implements OnInit {
  updateperiodform!: FormGroup;
  createperiodform!: FormGroup
  constructor(private ToastService: ToastService, private fb: FormBuilder, private confirmationService: ConfirmationService, private messageService: MessageService, private regperiod: RegperiodService) {
    this.createperiodform = this.fb.group({
      from: [null, Validators.required],
      to: [null, Validators.required],
      isClosed: [false],
      registrationFees: [null, [Validators.required, Validators.min(0)]],
    })
    this.updateperiodform = this.fb.group({
      id: [null],
      from: [null, Validators.required],
      to: [null, Validators.required],
      isClosed: [false],
      registrationFees: [null, [Validators.required, Validators.min(0)]],
    })
  }
  periods!: periodform[];
  ngOnInit(): void {
    this.regperiod.GetAllPeriods().subscribe(
      {
        next: (res) => {
          this.periods = res.data
        }
      }
    )
  }




  //#region update dialog
  UpdateVisable: boolean = false;
  showUpdateDialog(id: number) {
    this.regperiod.GetPeriod(id).subscribe({
      next: (res) => {
        this.UpdateVisable = true;
        this.updateperiodform.patchValue({
          id: res.data.id,
          from: res.data.from,
          to: res.data.to,
          isClosed: res.data.isClosed,
          registrationFees: res.data.registrationFees,
        });
      },
      error: (error) => {
        console.error('Error fetching building details:', error);
        this.UpdateVisable = false;
      },
    })

  }
  get U() {
    return this.updateperiodform.controls;
  }

  onUpdateSubmit() {
    if (this.updateperiodform.valid) {
      const formData = new FormData();
      for (const key in this.updateperiodform.value) {
        formData.append(key, this.updateperiodform.value[key]);

      }
      console.log(formData);

      this.regperiod.UpdatePeriod(formData).subscribe({
        next: (res) => {
          const result = this.periods.findIndex(item => item.id === res.data.id);
          if (result !== -1) {
            this.periods.splice(result, 1);
            this.periods.push(res.data);
            this.ToastService.success("update refgister period", res.message)
            this.UpdateVisable = false;
          }//
        }
      })

    } else {
      this.updateperiodform.markAllAsTouched();
    }
  }

  //#endregion
  //#region create dialog
  visiblecreateform: boolean = false;
  get f() {
    return this.createperiodform.controls;
  }
  showDialog() {
    this.visiblecreateform = true;
  }
  onSubmit() {
    if (this.createperiodform.valid) {
      console.log(this.createperiodform);

      const formData = new FormData();
      for (const key in this.createperiodform.value) {

        if (key == "from" || key == "to") {
          const data: string = new Date(this.createperiodform.value[key]).toISOString();
          formData.append(key, data);
        } else {
          formData.append(key, this.createperiodform.value[key]);
        }
      }
      this.regperiod.CreatePeriod(formData).subscribe(
        {
          next: (res) => {
            this.periods.push(res.data)
            this.ToastService.success("registration period", res.message)
          }
        }
      )


    } else {
      this.createperiodform.markAllAsTouched();
      this.visiblecreateform = true;
    }
  }
  //#endregion
  //#region confirmation dialog
  confirm2(event: Event, Message: string, detail: string, lable: string, severity: string, action: number, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: Message,
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: lable,
        severity: severity
      },
      accept: () => {
        if (action == 0) {
          this.regperiod.DeletePeriod(id).subscribe({
            next: (res) => {

              const result = this.periods.findIndex(item => item.id === id);
              if (result !== -1) {
                this.periods.splice(result, 1);
              }// removes the object from the array
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: detail, life: 3000 })
            }
          })
        } else if (action == 1) {
          this.regperiod.Closeperiod(id).subscribe({

            next: (res) => {
              const result = this.periods.find(item => item.id === id);
              result!.isClosed = true
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: detail, life: 3000 })
            }
          })
        }
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }
  //#endregion
}
