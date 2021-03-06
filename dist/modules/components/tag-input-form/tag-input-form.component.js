"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var TagInputForm = (function () {
    function TagInputForm(renderer) {
        this.renderer = renderer;
        this.onSubmit = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onKeyup = new core_1.EventEmitter();
        this.onKeydown = new core_1.EventEmitter();
        this.validators = [];
    }
    TagInputForm.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            item: new forms_1.FormControl('', forms_1.Validators.compose(this.validators))
        });
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        get: function () {
            return this.form.get('item');
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.isInputFocused = function () {
        return document.activeElement === this.input.nativeElement;
    };
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var _this = this;
        return Object.keys(messages)
            .filter(function (err) { return _this.value.hasError(err); })
            .map(function (err) { return messages[err]; });
    };
    TagInputForm.prototype.hasErrors = function () {
        return this.form.dirty && this.form.value.item && this.form.invalid;
    };
    TagInputForm.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    };
    TagInputForm.prototype.blur = function () {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'blur');
    };
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    TagInputForm.prototype.destroy = function () {
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    TagInputForm.prototype.onKeyDown = function ($event) {
        return this.onKeydown.emit($event);
    };
    return TagInputForm;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "onSubmit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "onBlur", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "onFocus", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "onKeyup", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagInputForm.prototype, "onKeydown", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TagInputForm.prototype, "validators", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "inputId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "inputClass", void 0);
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", Object)
], TagInputForm.prototype, "input", void 0);
TagInputForm = __decorate([
    core_1.Component({
        selector: 'tag-input-form',
        styleUrls: ['./tag-input-form.style.scss'],
        templateUrl: './tag-input-form.template.html'
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], TagInputForm);
exports.TagInputForm = TagInputForm;
//# sourceMappingURL=/Users/izabela/Desktop/Proyectos/ng2-tag-input/modules/components/tag-input-form/tag-input-form.component.js.map