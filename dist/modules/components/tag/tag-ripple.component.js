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
var TagRipple = (function () {
    function TagRipple() {
        this.state = 'none';
    }
    return TagRipple;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagRipple.prototype, "state", void 0);
TagRipple = __decorate([
    core_1.Component({
        selector: 'tag-ripple',
        styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "],
        template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
        animations: [
            core_1.trigger('ink', [
                core_1.state('none', core_1.style({ width: 0, opacity: 0 })),
                core_1.transition('none => clicked', [
                    core_1.animate(300, core_1.keyframes([
                        core_1.style({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                        core_1.style({ opacity: 1, offset: 0.5, width: '50%' }),
                        core_1.style({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                    ]))
                ])
            ])
        ]
    })
], TagRipple);
exports.TagRipple = TagRipple;
//# sourceMappingURL=/Users/izabela/Desktop/Proyectos/ng2-tag-input/modules/components/tag/tag-ripple.component.js.map