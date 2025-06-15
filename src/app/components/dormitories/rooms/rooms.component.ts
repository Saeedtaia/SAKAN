import { Component, OnInit, model } from '@angular/core';
import { BuildsListService } from '../../../shared/services/buildings/builds-list.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterByRoomNumberPipe } from '../../../shared/pipes/search.pipe';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButton } from 'primeng/radiobutton';
import { Checkbox } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup'
import { ToastService } from '../../../shared/services/toaster/toast.service';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, DialogModule, FilterByRoomNumberPipe, ButtonModule, ToastModule, ConfirmPopupModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class RoomsComponent implements OnInit {
  UpdateVisable = false;
  updateroomform: FormGroup;
  selectedPhotos: File[] = [];
  selectedFiles: File[] = [];
  createroomform!: FormGroup
  images = model([]);
  position = 'bottom';
  showIndicatorsOnItem: boolean = false;
  positionOptions = [
    {
      label: 'Bottom',
      value: 'bottom'
    },]

  constructor(private BuildsListService: BuildsListService, private ToastService: ToastService, private fb: FormBuilder, private confirmationService: ConfirmationService, private messageService: MessageService,) {
    this.createroomform = this.fb.group({
      roomNumber: ['', Validators.required],
      capacity: [null, [Validators.required, Validators.min(1)]],
      price: [null, [Validators.required, Validators.min(0)]],
      buildingId: [null, Validators.required],
      photos: [[]]
    })
    this.updateroomform = this.fb.group({
      roomId: [0, [Validators.required, Validators.min(1)]],
      roomNumber: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
      buildingId: [0, [Validators.required, Validators.min(1)]],
      photos: [[], [Validators.required]]
    });
  }
  filterText: string = '';
  rooms: Room[] = []
  ngOnInit(): void {
    this.BuildsListService.GetAllRooms().subscribe({
      next: (res) => {
        this.rooms = res.data
        this.images.set(res.photoUrls)
      }
    })
  }




  //#region update dialog
  showUpdateDialog(roomId: number) {
    const filteredRooms = this.rooms.filter(room => room.roomId === roomId);
    this.updateroomform.patchValue({
      roomId: filteredRooms[0].roomId,
      roomNumber: filteredRooms[0].roomNumber,
      capacity: filteredRooms[0].capacity,
      price: filteredRooms[0].price,
      buildingId: filteredRooms[0].buildingId,
      photos: [[]]
    })
    this.UpdateVisable = true;
  }
  get U() {
    return this.updateroomform.controls;
  }

  onUpdateSubmit() {
    if (this.updateroomform.valid) {
      const formData = new FormData();
      const formValue = this.updateroomform.value;

      for (const key in formValue) {
        formData.append(key, formValue[key]);
      }

      this.selectedPhotos.forEach(file => {
        formData.append('photos', file);
      });
      if (this.selectedPhotos.length <= 0) {
        this.UpdateVisable = false;
      } else {
        this.BuildsListService.updateRoom(formData).subscribe({
          next: (res) => {
            const result = this.rooms.findIndex(item => item.roomId === res.data.id);
            if (result !== -1) {
              this.rooms.splice(result, 1);
              this.rooms.push(res.data);
              this.ToastService.success("update refgister period", res.message)
              this.UpdateVisable = false;
            }//
          },
          error: (err) => console.error('Update failed', err),
        });
      }
    } else {
      this.updateroomform.markAllAsTouched();
      this.UpdateVisable = true;
    }
  }

  onPhotoSelected(event: any) {
    const files = event.target.files as FileList;
    this.selectedPhotos = Array.from(files);
  }
  //#endregion
  //#region create dialog
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      this.selectedFiles = Array.from(files);
    }
  }
  visiblecreateform: boolean = false;
  get f() {
    return this.createroomform.controls;
  }
  showDialog() {
    this.visiblecreateform = true;
  }
  onSubmit() {
    if (this.createroomform.valid) {
      console.log(this.createroomform);

      const formData = new FormData();
      for (const key in this.createroomform.value) {
        if (key == "photos") {
          this.selectedFiles.forEach(file => formData.append('photos', file));
        } else {
          formData.append(key, this.createroomform.value[key]);
        }
      }
      if (this.selectedFiles.length <= 0) {
        this.visiblecreateform = true;
      } else {
        this.BuildsListService.CreateRoom(formData).subscribe({
          next: (res) => {
            this.rooms.push(res.data)
            this.ToastService.success("Room creation", res.message)
            this.visiblecreateform = false;
          }
        })
      }

    } else {
      this.createroomform.markAllAsTouched();
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
          // delete
          this.BuildsListService.DeleteRoom(id).subscribe(
            {
              next: (res) => {
                const result = this.rooms.findIndex(item => item.roomId === id);
                if (result !== -1) {
                  this.rooms.splice(result, 1);
                }// removes the object from the array
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: detail, life: 3000 })
              }
            }
          )
        }
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }
  //#endregion

}
export interface Room {
  roomId: number
  roomNumber: string
  capacity: number
  price: number
  buildingId: number
  occupiedSpaces: number
  freeSpaces: number
  photoUrls: string[]
}
// update-room.dto.ts
export interface UpdateRoomDto {
  roomId: number;
  roomNumber: string;
  capacity: number;
  price: number;
  buildingId: number;
  photos?: File[];
}
