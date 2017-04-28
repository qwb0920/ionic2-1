import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({selector: '[myHighLight]'})

export class HighLightDirective {
    @Input('myHighLight')highlightColor : string;

    constructor(private el : ElementRef) {
        // el.nativeElement.style.backgroundColor = 'yellow'
    }

    @HostListener('mouseenter')onmouseenter() {
        this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave')onmouseleave() {
        this.highlight()
    }

    private highlight(color : string = '#fff') {
        this.el.nativeElement.style.backgroundColor = color;
    }

}