import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}

  public data: any = 'basic';
}
