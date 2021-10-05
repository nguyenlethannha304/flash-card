import { Component, OnInit } from '@angular/core';
import { Flash } from './flash.model'
import { Observable } from 'rxjs';
import { FlashService } from './flash.service';

@Component({
  selector: 'app-flashs',
  templateUrl: './flashs.component.html',
  styleUrls: ['./flashs.component.css']
})
export class FlashsComponent implements OnInit {
  flashs$!: Observable<Flash[]>;
  constructor(private flashService: FlashService) { }

  ngOnInit(): void {
    this.flashs$ = this.flashService.flashs$
  }
  trackFlash(index: number, flash: Flash) {
    return flash.id
  }
  handleModifyFlashEmit(flash: Flash) {
    this.flashService.editFlash(flash)
  }
  handleEditEmit(flash: Flash) {
    ;
  }
  handleDeleteEmit(id: Flash["id"]) {
    this.flashService.deleteFlash(id)
  }
}
