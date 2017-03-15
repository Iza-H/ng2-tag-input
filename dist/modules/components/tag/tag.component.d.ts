import { EventEmitter, TemplateRef, ElementRef, Renderer } from '@angular/core';
import { TagModel } from '../helpers/accessor';
import { TagRipple } from './tag-ripple.component';
export declare class TagComponent {
    element: ElementRef;
    renderer: Renderer;
    model: TagModel;
    readonly: boolean;
    removable: boolean;
    editable: boolean;
    template: TemplateRef<any>;
    displayBy: string;
    identifyBy: string;
    index: number;
    onSelect: EventEmitter<TagModel>;
    onRemove: EventEmitter<TagModel>;
    onBlur: EventEmitter<TagModel>;
    onKeyDown: EventEmitter<any>;
    onTagEdited: EventEmitter<TagModel>;
    editModeActivated: boolean;
    rippleState: string;
    ripple: TagRipple;
    constructor(element: ElementRef, renderer: Renderer);
    select($event?: MouseEvent): void;
    remove(): void;
    focus(): void;
    keydown(event: KeyboardEvent): void;
    blink(): void;
    toggleEditMode(event?: MouseEvent): void;
    getDisplayValue(item: TagModel): string;
    private getContentEditableText();
    private disableEditMode($event);
    private storeNewValue();
    private isDeleteIconVisible();
    isRippleVisible(): boolean;
}