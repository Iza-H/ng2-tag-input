"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/core");
var ng2_tag_input_module_1 = require("../../ng2-tag-input.module");
var forms_2 = require("@angular/forms");
var common_1 = require("@angular/common");
function getItems() {
    return ['Javascript', 'Typescript'];
}
var validators = [forms_1.Validators.minLength(3), function (control) {
        if (control.value.charAt(0) !== '@') {
            return {
                'startsWithAt@': true
            };
        }
        return null;
    }];
var BasicTagInputComponent = (function () {
    function BasicTagInputComponent() {
        this.items = getItems();
    }
    return BasicTagInputComponent;
}());
BasicTagInputComponent = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input [(ngModel)]=\"items\"></tag-input>"
    })
], BasicTagInputComponent);
exports.BasicTagInputComponent = BasicTagInputComponent;
var TagInputComponentWithOutputs = (function () {
    function TagInputComponentWithOutputs() {
        this.items = getItems();
        this.validators = validators;
    }
    TagInputComponentWithOutputs.prototype.onAdd = function () { };
    TagInputComponentWithOutputs.prototype.onRemove = function () { };
    return TagInputComponentWithOutputs;
}());
TagInputComponentWithOutputs = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input\n                  [(ngModel)]=\"items\"\n                  (onRemove)=\"onRemove($event)\"\n                  (onAdd)=\"onAdd($event)\">\n              </tag-input>"
    })
], TagInputComponentWithOutputs);
exports.TagInputComponentWithOutputs = TagInputComponentWithOutputs;
var TagInputComponentTagsAsObjects = (function () {
    function TagInputComponentTagsAsObjects() {
        this.items = [{ value: 0, display: 'React' }, { value: 1, display: 'Angular' }];
    }
    return TagInputComponentTagsAsObjects;
}());
TagInputComponentTagsAsObjects = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input [(ngModel)]=\"items\"></tag-input>"
    })
], TagInputComponentTagsAsObjects);
exports.TagInputComponentTagsAsObjects = TagInputComponentTagsAsObjects;
var TagInputComponentCustomTagsAsObjects = (function () {
    function TagInputComponentCustomTagsAsObjects() {
        this.items = [{ id: 0, name: 'React' }, { id: 1, name: 'Angular' }];
    }
    return TagInputComponentCustomTagsAsObjects;
}());
TagInputComponentCustomTagsAsObjects = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input [(ngModel)]=\"items\"></tag-input>"
    })
], TagInputComponentCustomTagsAsObjects);
exports.TagInputComponentCustomTagsAsObjects = TagInputComponentCustomTagsAsObjects;
var TagInputComponentWithValidation = (function () {
    function TagInputComponentWithValidation() {
        this.items = getItems();
        this.validators = validators;
    }
    TagInputComponentWithValidation.prototype.onAdd = function () { };
    TagInputComponentWithValidation.prototype.onRemove = function () { };
    return TagInputComponentWithValidation;
}());
TagInputComponentWithValidation = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input\n                  [(ngModel)]=\"items\"\n                  [validators]=\"validators\"\n                  (onRemove)=\"onRemove($event)\"\n                  (onAdd)=\"onAdd($event)\">\n              </tag-input>"
    })
], TagInputComponentWithValidation);
exports.TagInputComponentWithValidation = TagInputComponentWithValidation;
var TagInputComponentWithTransformer = (function () {
    function TagInputComponentWithTransformer() {
        this.items = getItems();
        this.validators = validators.splice(0, 1);
    }
    TagInputComponentWithTransformer.prototype.addPrefix = function (item) {
        return "prefix: " + item;
    };
    return TagInputComponentWithTransformer;
}());
TagInputComponentWithTransformer = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input [(ngModel)]=\"items\"\n                          [validators]=\"validators\"\n                          [transform]=\"addPrefix\">\n                         </tag-input>"
    })
], TagInputComponentWithTransformer);
exports.TagInputComponentWithTransformer = TagInputComponentWithTransformer;
var TagInputComponentWithPlaceholder = (function () {
    function TagInputComponentWithPlaceholder() {
        this.items = getItems();
    }
    return TagInputComponentWithPlaceholder;
}());
TagInputComponentWithPlaceholder = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input [(ngModel)]=\"items\" [placeholder]=\"'New Tag'\"></tag-input>"
    })
], TagInputComponentWithPlaceholder);
exports.TagInputComponentWithPlaceholder = TagInputComponentWithPlaceholder;
var TagInputComponentWithMaxItems = (function () {
    function TagInputComponentWithMaxItems() {
        this.items = getItems();
    }
    return TagInputComponentWithMaxItems;
}());
TagInputComponentWithMaxItems = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input [(ngModel)]=\"items\" [maxItems]=\"2\"></tag-input>"
    })
], TagInputComponentWithMaxItems);
exports.TagInputComponentWithMaxItems = TagInputComponentWithMaxItems;
var TagInputComponentWithAutocomplete = (function () {
    function TagInputComponentWithAutocomplete() {
        this.items = getItems();
    }
    return TagInputComponentWithAutocomplete;
}());
TagInputComponentWithAutocomplete = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input [(ngModel)]=\"items\">\n                    <tag-input-dropdown [autocompleteItems]=\"['item1', 'item2', 'itam3']\"></tag-input-dropdown>         \n               </tag-input>"
    })
], TagInputComponentWithAutocomplete);
exports.TagInputComponentWithAutocomplete = TagInputComponentWithAutocomplete;
var TagInputComponentWithTemplate = (function () {
    function TagInputComponentWithTemplate() {
        this.items = getItems();
    }
    return TagInputComponentWithTemplate;
}());
TagInputComponentWithTemplate = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input [(ngModel)]=\"items\">\n                    <template let-item=\"item\">\n                        <span class=\"custom-class\">\n                            item: {{ item }}\n                        </span>\n    \n                        <span (click)=\"input.removeItem(item)\" class=\"ng2-tag__remove-button\">\n                            x\n                        </span>\n                    </template>\n                </tag-input>"
    })
], TagInputComponentWithTemplate);
exports.TagInputComponentWithTemplate = TagInputComponentWithTemplate;
var TagInputComponentWithOnlyAutocomplete = (function () {
    function TagInputComponentWithOnlyAutocomplete() {
        this.items = getItems();
    }
    return TagInputComponentWithOnlyAutocomplete;
}());
TagInputComponentWithOnlyAutocomplete = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input [(ngModel)]=\"items\"\n                           [onlyFromAutocomplete]=\"true\">\n                   <tag-input-dropdown [autocompleteItems]=\"['item1', 'item2', 'itam3']\"></tag-input-dropdown>\n               </tag-input>"
    })
], TagInputComponentWithOnlyAutocomplete);
exports.TagInputComponentWithOnlyAutocomplete = TagInputComponentWithOnlyAutocomplete;
var TagInputComponentWithModelAsStrings = (function () {
    function TagInputComponentWithModelAsStrings() {
        this.items = getItems();
    }
    return TagInputComponentWithModelAsStrings;
}());
TagInputComponentWithModelAsStrings = __decorate([
    core_1.Component({
        selector: 'test-app',
        template: "<tag-input [(ngModel)]=\"items\" [modelAsStrings]=\"true\"></tag-input>"
    })
], TagInputComponentWithModelAsStrings);
exports.TagInputComponentWithModelAsStrings = TagInputComponentWithModelAsStrings;
var COMPONENTS = [
    BasicTagInputComponent,
    TagInputComponentWithPlaceholder,
    TagInputComponentWithOutputs,
    TagInputComponentWithTransformer,
    TagInputComponentWithValidation,
    TagInputComponentWithMaxItems,
    TagInputComponentWithTemplate,
    TagInputComponentWithAutocomplete,
    TagInputComponentWithOnlyAutocomplete,
    TagInputComponentTagsAsObjects,
    TagInputComponentCustomTagsAsObjects,
    TagInputComponentWithModelAsStrings
];
var TestModule = (function () {
    function TestModule() {
    }
    return TestModule;
}());
TestModule = __decorate([
    core_2.NgModule({
        imports: [common_1.CommonModule, forms_2.FormsModule, ng2_tag_input_module_1.TagInputModule],
        declarations: COMPONENTS.slice(),
        exports: COMPONENTS.slice()
    })
], TestModule);
exports.TestModule = TestModule;
//# sourceMappingURL=/Users/izabela/Desktop/Proyectos/ng2-tag-input/modules/components/tests/testing-helpers.js.map