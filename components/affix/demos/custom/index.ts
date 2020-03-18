import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div #node>
            <k-affix [top]="150" [shouldFix]="_shouldFix">
                <k-button type="primary">fix at 150px from the top while scroll top 100px</k-button>
            </k-affix>
            <k-affix [bottom]="0" [exclude]="_exclude" #__test>
                <k-button type="primary">fix at the bottom only while this demo is in viewport</k-button>
            </k-affix>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('node', {static: false}) node;
    @ViewChild('__test', {static: false}) __test;

    _shouldFix = () => {
        // when scroll top greater than or equal to 100
        // fix it at 150px from top
        return window.pageYOffset >= 100;
    }
    
    _exclude = () => {
        // when this demo is not in the viewport
        // don't fix it
        const {top} = this.node.nativeElement.getBoundingClientRect();
        const viewport = document.documentElement.clientHeight;
    
        return top > viewport; 
    }
}