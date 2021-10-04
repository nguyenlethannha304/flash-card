import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flash, data } from './flash.model'
@Injectable({
  providedIn: 'root'
})
export class FlashService {
  flashs: Flash[] = [];
  flashs$!: BehaviorSubject<Flash[]>;
  finishContruct = false;
  constructor() {
    data.forEach(flash => {
      this.createFlash(flash.id, flash.question, flash.answer, flash.result)
    });
    this.flashs$ = new BehaviorSubject<Flash[]>(this.flashs)
    this.finishContruct = true;
  }
  createFlash(id: Flash["id"] | null, question: Flash["question"], answer: Flash["answer"], result: Flash["result"]) {
    if (id == null) {
      id = this.getUniqueId()
    }
    let newFlash = new Flash(id!, question, answer, result)
    this.updateFlashs(newFlash)
  }
  editFlash(flash: Flash) {
    let flashIndex = this.flashs.findIndex(f => f.id == flash.id)
    this.updateFlashs(flash, flashIndex)
  }
  deleteFlash(id: Flash["id"]) {
    let deleteFlashIndex = this.flashs.findIndex(flash => flash.id == id)
    this.flashs = [...this.flashs.slice(0, deleteFlashIndex), ...this.flashs.slice(deleteFlashIndex + 1)]
    this.flashs$.next(this.flashs)
  }
  updateFlashs(flash: Flash, index = this.flashs.length) {
    // Push flash into last position if not provided
    this.flashs = [...this.flashs.slice(0, index), flash, ...this.flashs.slice(index + 1)]
    // Emit new value of flashs to components everytime update (Service finished Contruct)
    if (this.finishContruct) { this.flashs$.next(this.flashs) }
  }
  getUniqueId() {
    // Use loop in case of infinity loop
    for (let i = 0; i < 1000; i++) {
      let id = getRandomNumberInRange(0, 10000)
      if (this.validateUniqueId(id)) { return id }
    }
    // Throw error after random number 1000 times and still unvalid
    throw Error("This hardly happens")
  }
  validateUniqueId(id: Flash["id"]) {
    for (let flash of this.flashs) {
      if (flash.id == id) return false
    }
    return true
  }
}
function getRandomNumberInRange(min: number, max: number) {
  return Math.floor((Math.random() * (max - min)) + min)
}