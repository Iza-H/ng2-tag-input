import { TemplateRef, QueryList } from '@angular/core';
import { TagInputComponent } from '../tag-input';
import { Ng2Dropdown, Ng2MenuItem } from 'ng2-material-dropdown';
import { EventEmitter } from '@angular/core';
import { TagModel } from '../helpers/accessor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
export declare class TagInputDropdown {
    private tagInput;
    dropdown: Ng2Dropdown;
    templates: QueryList<TemplateRef<any>>;
    offset: string;
    focusFirstElement: boolean;
    showDropdownIfEmpty: boolean;
    autocompleteObservable: (text: string) => Observable<any>;
    minimumTextLength: number;
    limitItemsTo: number;
    displayBy: string;
    identifyBy: string;
    matchingFn: (value: string, target: TagModel) => boolean;
    appendToBody: boolean;
    items: TagModel[];
    private _autocompleteItems;
    autocompleteItems: TagModel[];
    constructor(tagInput: TagInputComponent);
    ngOnInit(): void;
    updatePosition(): void;
    readonly isVisible: boolean;
    onHide(): EventEmitter<Ng2Dropdown>;
    onItemClicked(): EventEmitter<string>;
    readonly selectedItem: Ng2MenuItem;
    readonly state: any;
    private addNewItem(item);
    show(): void;
    scrollListener(): void;
    private getMatchingItems(value);
    private setItems(items);
    private resetItems();
    private populateItems(data);
    private getItemsFromObservable(text);
}