import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'ndl-panel',
    styleUrl: 'panel.scss',
    shadow: true,
})
export class Panel {
    @Prop() header: string;

    render() {
        return (
            <div class="pnl-wrapper">
                <div class="pnl-header">{this.header}</div>
                <div class="pnl-body">
                    <slot />
                </div>
            </div>
        );
    }
}
