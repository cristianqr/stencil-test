import { Component, h } from '@stencil/core';

@Component({
    tag: 'ndl-modal',
    styleUrl: 'modal.component.scss',
})
export class ModalComponent {
    render() {
        return (
            <div>
                <ndl-backdrop></ndl-backdrop>
                <div class="ndl-modal container">
                    <div class="row ndl-modal-container">
                        <div class="col col-sm-10 col-md-8 col-lg-3 ndl-modal-wrapper">
                            <div class="ndl-modal-content">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
