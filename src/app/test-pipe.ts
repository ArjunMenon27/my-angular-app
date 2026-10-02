import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: false,
})
export class TestPipe implements PipeTransform {

  transform(value: any): string {
    const name = value.split('@')[0];
  const domain = value.split('@')[1];    
  return `${name.substring(0, 3)}****@${domain}`;

  }

}
