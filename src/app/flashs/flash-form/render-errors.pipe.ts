import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'renderErrors'
})
export class RenderErrorsPipe implements PipeTransform {

  transform(errorObject: ValidationErrors): string {
    let errorText: string = ''
    Object.keys(errorObject).forEach(key => {
      errorText += `${errorObject[key]}\n`
    })
    return errorText
  }

}
