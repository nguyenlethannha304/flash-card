import { Component, OnInit, ViewChild } from '@angular/core';
import { Flash } from './flash.model'
import { Observable } from 'rxjs';
import { FlashService } from './flash.service';
import { FlashFormComponent } from './flash-form/flash-form.component';

@Component({
  selector: 'app-flashs',
  templateUrl: './flashs.component.html',
  styleUrls: ['./flashs.component.css']
})
export class FlashsComponent implements OnInit {
  flashs$!: Observable<Flash[]>;
  constructor(private flashService: FlashService) { }
  @ViewChild(FlashFormComponent) flashFormComp!: FlashFormComponent;
  ngOnInit(): void {
    this.flashs$ = this.flashService.flashs$
  }
  trackFlash(index: number, flash: Flash) {
    return flash.id
  }
  // Handling Output from flash-detail
  handleModifyFlashEmit(flash: Flash) {
    this.flashService.editFlash(flash)
  }
  handleEditEmit(flash: Flash) {
    this.flashFormComp.setFormValues({ id: flash.id, question: flash.question, answer: flash.answer, result: flash.result })
  }
  handleDeleteEmit(id: Flash["id"]) {
    this.flashService.deleteFlash(id)
  }
}
