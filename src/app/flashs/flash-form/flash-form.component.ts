import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FlashService } from '../flash.service';
import { Flash } from '../flash.model'
interface ErrorObjects {
  [key: string]: ValidationErrors
}
@Component({
  selector: 'app-flash-form',
  templateUrl: './flash-form.component.html',
  styleUrls: ['./flash-form.component.css']
})
export class FlashFormComponent implements OnInit {
  formFlash: FormGroup = new FormGroup({
    id: new FormControl(""),
    question: new FormControl('', { validators: [validateNonEmpty(), this.validateDuplicateQuestion()], updateOn: 'blur' }),
    answer: new FormControl("", [validateNonEmpty()]),
    result: new FormControl(null),
  })
  errorObjects: ErrorObjects = {}
  constructor(private flashService: FlashService) { }

  setFormValues(options: { id?: Flash["id"], question?: Flash["question"], answer?: Flash["answer"], result?: Flash["result"] }) {
    if (options.id) { this.formFlash.controls["id"].setValue(options.id) }
    if (options.question) { this.formFlash.controls["question"].setValue(options.question) }
    if (options.answer) { this.formFlash.controls["answer"].setValue(options.answer) }
    if (options.result) { this.formFlash.controls["result"].setValue(options.result) }

  }
  // Submit functions
  onSubmit() {
    if (this.formFlash.valid) {
      this.errorObjects = {}
      this.sendDataToService()
      this.formFlash.reset()
    } else {
      this.reportErrors()
    }
  }
  sendDataToService() {
    let id = this.formFlash.value.id
    let question = this.formFlash.value.question
    let answer = this.formFlash.value.answer
    let result = this.formFlash.value.result
    if (id) {
      let flash: Flash = { id, question, answer, result, show: false }
      this.flashService.editFlash(flash)
    } else {
      this.flashService.addFlash(id, question, answer, result)
    }
  }
  reportErrors() {
    this.errorObjects = this.getErrorFormGroup()
  }
  // Validate Functions
  getErrorFormGroup(): ErrorObjects {
    let errorObjects: ErrorObjects = {}
    Object.keys(this.formFlash.controls).forEach(key => {
      let errorFormControl: ValidationErrors = this.getErrorFormControl(this.formFlash.controls[key])
      errorObjects[key] = errorFormControl
    })
    errorObjects['formFlash'] = this.getErrorFormControl(this.formFlash)
    return errorObjects
  }
  getErrorFormControl(control: AbstractControl): ValidationErrors {
    return control.errors!
  }
  validateDuplicateQuestion(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let questionValue = control.value
      if ((questionValue) && !(this.formFlash.get('id')!.value)) {
        let duplicateFlash = this.flashService.flashs.find(flash => flash.question == questionValue)
        if (duplicateFlash) {
          return { "DuplicateQuestion": "The question is already exist" }
        }
      }
      return null
    }
  }
  ngOnInit(): void {
  }

}
function validateNonEmpty(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value ? null : { "Empty": "This field is required" }
  }
};