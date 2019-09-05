import { Component, h } from '@stencil/core';

@Component({
    tag: 'ndl-modal-default',
    styleUrl: 'modal-default.component.scss',
    shadow: true,
})
export class ModalDefaultComponent {
    render() {
        return (
            <ndl-modal>
                <div class="ndl-modal-default">
                    <div class="ndl-modal-header">
                        <div class="ndl-modal-title">Header</div>
                        <button class="ndl-modal-close-btn">
                            <span>×</span>
                        </button>
                    </div>
                    <div class="ndl-modal-body">Body</div>
                    <div class="ndl-modal-footer">Footer</div>
                </div>
            </ndl-modal>
        );
    }
}
