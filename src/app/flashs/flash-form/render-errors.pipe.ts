import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'renderErrors'
})
export class RenderErrorsPipe implements PipeTransform {
  // transfrom error object to string, and each error is rendered to one line text.
  transform(errorObject: ValidationErrors): string {
    let errorText: string = ''
    Object.keys(errorObject).forEach(key => {
      errorText += `${errorObject[key]}\n`
    })
    return errorText
  }

}
