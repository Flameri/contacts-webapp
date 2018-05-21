import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textToColor'
})
export class TextToColorPipe implements PipeTransform {

  defaultColor = '#03A9F4';
  colors = {
    'a': '#F44336',
    'b': '#E91E63',
    'c': '#9C27B0',
    'd': '#03A9F4',
    'e': '#009688',
    'f': '#CDDC39',
    'g': '#E91E63',
    'h': '#F44336',
    'i': '#9C27B0',
    'j': '#CDDC39',
    'k': '#CDDC39',
    'm': '#E91E63',
    'n': '#9C27B0',
    'o': '#F44336',
    'q': '#CDDC39',
    'r': '#009688',
    's': '#03A9F4',
    't': '#E91E63',
    'u': '#F44336',
    'w': '#9C27B0',
    'v': '#03A9F4',
  };

  transform(value: any, args?: any): any {
    if (value == null || value === '') {
      return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
    return this.colors[firstChar];
  }

}
