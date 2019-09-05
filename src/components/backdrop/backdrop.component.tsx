import { Component, h } from '@stencil/core';

@Component({
    tag: 'ndl-backdrop',
    styleUrl: 'backdrop.component.scss',
})
export class BackdropComponent {
    render() {
        return <div class="ndl-backdrop"></div>;
    }
}
