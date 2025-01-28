import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'gradosSuffix',
  standalone: true
})
export class GradosSuffixPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(grado: string, type: 'grado' | 'escolaridad'): string {
    if (!grado) return '';

    switch(grado) {
      case '1' : 
        return type === 'escolaridad' ? '1ero' : '1er';
      case '2' : 
        return '2do';
      case '3' : 
        return type === 'escolaridad' ? '1ero' : '1er';
      case '4' : 
        return '4to';
      case '5' : 
        return '5to';
      case '6' : 
        return '6to';
      default:
        return grado;
    }
  

    
  }
}
