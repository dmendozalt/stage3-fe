import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appYearRangeFormat]',
})
export class YearRangeFormatDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('keyup', ['$event']) onKeyUp(event: any) {
    this.elRef.nativeElement.value = this.formatRange(
      this.elRef.nativeElement.value
    );
  }

  private formatRange(inputValue: string): any {
    inputValue = inputValue.replace(/[^\d]/g, '').slice(0, 8);

    if (inputValue.length <= 4) {
      return inputValue;
    } else {
      return inputValue.slice(0, 4) + '-' + inputValue.slice(4);
    }
  }
}
