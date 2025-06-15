import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'filterByRoomNumber',
 standalone: true
})
export class FilterByRoomNumberPipe implements PipeTransform {
 transform(rooms: any[], searchText: string): any[] {
  if (!rooms || !Array.isArray(rooms)) return [];
  if (!searchText || searchText.trim() === '') return rooms;

  const lowerSearch = searchText.toLowerCase();

  return rooms.filter(room =>
   room.roomNumber?.toLowerCase().includes(lowerSearch)
  );
 }
}
