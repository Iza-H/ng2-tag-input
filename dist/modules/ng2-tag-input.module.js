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
var common_1 = require("@angular/common");
var ng2_material_dropdown_1 = require("ng2-material-dropdown");
var icon_1 = require("./components/icon");
exports.DeleteIconComponent = icon_1.DeleteIconComponent;
var tag_input_form_1 = require("./components/tag-input-form");
exports.TagInputForm = tag_input_form_1.TagInputForm;
var components_1 = require("./components");
exports.TagInputComponent = components_1.TagInputComponent;
var tag_input_dropdown_component_1 = require("./components/dropdown/tag-input-dropdown.component");
exports.TagInputDropdown = tag_input_dropdown_component_1.TagInputDropdown;
var highlight_pipe_1 = require("./components/pipes/highlight.pipe");
var tag_component_1 = require("./components/tag/tag.component");
exports.TagComponent = tag_component_1.TagComponent;
var tag_ripple_component_1 = require("./components/tag/tag-ripple.component");
exports.TagRipple = tag_ripple_component_1.TagRipple;
var TagInputModule = (function () {
    function TagInputModule() {
    }
    return TagInputModule;
}());
TagInputModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            ng2_material_dropdown_1.Ng2DropdownModule
        ],
        declarations: [
            components_1.TagInputComponent,
            icon_1.DeleteIconComponent,
            tag_input_form_1.TagInputForm,
            tag_component_1.TagComponent,
            highlight_pipe_1.HighlightPipe,
            tag_input_dropdown_component_1.TagInputDropdown,
            tag_ripple_component_1.TagRipple
        ],
        exports: [
            components_1.TagInputComponent,
            icon_1.DeleteIconComponent,
            tag_input_form_1.TagInputForm,
            tag_component_1.TagComponent,
            highlight_pipe_1.HighlightPipe,
            tag_input_dropdown_component_1.TagInputDropdown,
            tag_ripple_component_1.TagRipple
        ]
    })
], TagInputModule);
exports.TagInputModule = TagInputModule;
//# sourceMappingURL=/Users/izabela/Desktop/Proyectos/ng2-tag-input/modules/ng2-tag-input.module.js.map