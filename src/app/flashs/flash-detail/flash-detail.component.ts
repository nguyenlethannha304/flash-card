import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Flash } from '../flash.model'
@Component({
  selector: 'app-flash-detail',
  templateUrl: './flash-detail.component.html',
  styleUrls: ['./flash-detail.component.css']
})
export class FlashDetailComponent implements OnInit, DoCheck {
  @Input() flash!: Flash;
  cardHeaderClass: string = '';
  constructor() { }
  currentFlashResult!: Flash["result"];
  ngOnInit(): void {
    this.currentFlashResult = this.flash.result
    this.setCardHeaderClass()
  }
  ngDoCheck() {
    console.log("service")
    if (this.currentFlashResult != this.flash.result) {
      this.currentFlashResult = this.flash.result
      this.setCardHeaderClass();
    }
  }
  setCardHeaderClass() {
    if (this.currentFlashResult != null) {
      this.cardHeaderClass = this.currentFlashResult ? "correct" : "incorrect";
    }
  }
  @Output() modifyFlashEventEmitter = new EventEmitter<Flash>();
  toggleEventEmitterFn() {
    this.flash.show = !this.flash.show
    this.modifyFlashEventEmitter.emit(this.flash)
  }
  resultEventEmitterFn(value: boolean) {
    this.flash.result = value
    this.modifyFlashEventEmitter.emit(this.flash)
  }
  @Output() editFlashEventEmitter = new EventEmitter<Flash>();
  editEventEmitterFn() {
    this.editFlashEventEmitter.emit(this.flash)
  }
  @Output() deleteFlashEventEmitter = new EventEmitter<Flash["id"]>();
  deleteEventEmitterFn() {
    this.deleteFlashEventEmitter.emit(this.flash.id)
  }
}
