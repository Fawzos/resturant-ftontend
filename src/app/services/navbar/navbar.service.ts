import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NvbarServiceService {
  visible: boolean
  constructor() {
    this.visible = true
  }
  hide() {return this.visible = false}
  show() {return this.visible = true}
  toggle() {return this.visible = !this.visible}

}
