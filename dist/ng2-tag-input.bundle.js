(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("rxjs/add/operator/debounceTime"), require("rxjs/add/operator/filter"), require("rxjs/add/operator/map"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common", "rxjs/add/operator/debounceTime", "rxjs/add/operator/filter", "rxjs/add/operator/map"], factory);
	else if(typeof exports === 'object')
		exports["ng2-tag-input"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("rxjs/add/operator/debounceTime"), require("rxjs/add/operator/filter"), require("rxjs/add/operator/map"));
	else
		root["ng2-tag-input"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"], root["rxjs/add/operator/debounceTime"], root["rxjs/add/operator/filter"], root["rxjs/add/operator/map"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var tag_input_1 = __webpack_require__(12);
var ng2_material_dropdown_1 = __webpack_require__(10);
__webpack_require__(6);
__webpack_require__(5);
var TagInputDropdown = (function () {
    function TagInputDropdown(tagInput) {
        var _this = this;
        this.tagInput = tagInput;
        this.offset = '50 0';
        this.focusFirstElement = false;
        this.showDropdownIfEmpty = false;
        this.minimumTextLength = 1;
        this.displayBy = 'display';
        this.identifyBy = 'value';
        this.matchingFn = function (value, target) {
            var targetValue = target[_this.displayBy].toString();
            return targetValue && targetValue
                .toLowerCase()
                .indexOf(value.toLowerCase()) >= 0;
        };
        this.appendToBody = true;
        this.items = [];
        this._autocompleteItems = [];
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        get: function () {
            var _this = this;
            return this._autocompleteItems ? this._autocompleteItems.map(function (item) {
                return typeof item !== 'string' ? item : (_a = {}, _a[_this.displayBy] = item, _a[_this.identifyBy] = item, _a);
                var _a;
            }) : [];
        },
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.ngOnInit = function () {
        this.onItemClicked()
            .subscribe(this.addNewItem.bind(this));
        this.onHide()
            .subscribe(this.resetItems.bind(this));
        this.tagInput.inputForm.onKeyup
            .subscribe(this.show.bind(this));
        if (this.autocompleteObservable) {
            this.tagInput
                .onTextChange
                .filter(function (text) { return !!text.trim().length; })
                .subscribe(this.getItemsFromObservable.bind(this));
        }
    };
    TagInputDropdown.prototype.updatePosition = function () {
        this.dropdown.menu.updatePosition(this.tagInput.inputForm.getElementPosition());
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.addNewItem = function (item) {
        if (!item) {
            return;
        }
        if (this.tagInput.isTagValid(item.value, true)) {
            var tag = this.tagInput.createTag(item.value[this.displayBy], item.value[this.identifyBy]);
            this.tagInput.appendNewTag(tag);
        }
        this.tagInput.setInputValue('');
        this.dropdown.hide();
        this.tagInput.focus(true, false);
    };
    TagInputDropdown.prototype.show = function () {
        var _this = this;
        var value = this.tagInput.inputForm.value.value.trim();
        var position = this.tagInput.inputForm.getElementPosition();
        var items = this.getMatchingItems(value);
        var hasItems = items.length > 0;
        var showDropdownIfEmpty = this.showDropdownIfEmpty && hasItems && !value;
        var hasMinimumText = value.length >= this.minimumTextLength;
        var assertions = [
            hasItems,
            this.isVisible === false,
            hasMinimumText
        ];
        var showDropdown = (assertions.filter(function (item) { return item; }).length === assertions.length) ||
            showDropdownIfEmpty;
        var hideDropdown = this.isVisible && (!hasItems || !hasMinimumText);
        this.setItems(items);
        if (showDropdown && !this.isVisible) {
            this.dropdown.show(position);
        }
        else if (hideDropdown) {
            this.dropdown.hide();
        }
        if (this.isVisible) {
            setTimeout(function () {
                _this.updatePosition();
            }, 0);
        }
    };
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible) {
            return;
        }
        this.updatePosition();
    };
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        return this.autocompleteItems.filter(function (item) {
            var hasValue = _this.tagInput.tags.filter(function (tag) {
                return tag.model[_this.tagInput.displayBy] === item[_this.displayBy];
            }).length > 0;
            return _this.matchingFn(value, item) && hasValue === false;
        });
    };
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    TagInputDropdown.prototype.resetItems = function () {
        this.items = [];
    };
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_a = {}, _a[_this.displayBy] = item, _a[_this.identifyBy] = item, _a) : item;
            var _a;
        });
    };
    TagInputDropdown.prototype.getItemsFromObservable = function (text) {
        var _this = this;
        this.tagInput.isLoading = true;
        this.autocompleteObservable(text)
            .subscribe(function (data) {
            _this.tagInput.isLoading = false;
            _this.populateItems(data);
            _this.show();
        }, function () {
            _this.tagInput.isLoading = false;
        });
    };
    return TagInputDropdown;
}());
__decorate([
    core_1.ViewChild(ng2_material_dropdown_1.Ng2Dropdown),
    __metadata("design:type", ng2_material_dropdown_1.Ng2Dropdown)
], TagInputDropdown.prototype, "dropdown", void 0);
__decorate([
    core_1.ContentChildren(core_1.TemplateRef),
    __metadata("design:type", core_1.QueryList)
], TagInputDropdown.prototype, "templates", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "offset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "focusFirstElement", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "showDropdownIfEmpty", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TagInputDropdown.prototype, "autocompleteObservable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "minimumTextLength", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TagInputDropdown.prototype, "limitItemsTo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "displayBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "identifyBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TagInputDropdown.prototype, "matchingFn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "appendToBody", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TagInputDropdown.prototype, "autocompleteItems", null);
__decorate([
    core_1.HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagInputDropdown.prototype, "scrollListener", null);
TagInputDropdown = __decorate([
    core_1.Component({
        selector: 'tag-input-dropdown',
        template: __webpack_require__(25)
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return tag_input_1.TagInputComponent; }))),
    __metadata("design:paramtypes", [tag_input_1.TagInputComponent])
], TagInputDropdown);
exports.TagInputDropdown = TagInputDropdown;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
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
var core_1 = __webpack_require__(0);
var KeyboardEvent = global.KeyboardEvent;
var tag_ripple_component_1 = __webpack_require__(8);
var TagComponent = (function () {
    function TagComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onSelect = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onKeyDown = new core_1.EventEmitter();
        this.onTagEdited = new core_1.EventEmitter();
        this.editModeActivated = false;
        this.rippleState = 'none';
    }
    TagComponent.prototype.select = function ($event) {
        if (this.readonly) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    TagComponent.prototype.remove = function () {
        this.onRemove.emit(this);
    };
    TagComponent.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.element.nativeElement, 'focus');
    };
    TagComponent.prototype.keydown = function (event) {
        if (this.editModeActivated) {
            event.keyCode === 13 ? this.disableEditMode(event) : this.storeNewValue();
            return;
        }
        this.onKeyDown.emit({ event: event, model: this.model });
    };
    TagComponent.prototype.blink = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(function () { return classList.remove('blink'); }, 50);
    };
    TagComponent.prototype.toggleEditMode = function (event) {
        if (this.editModeActivated) {
            this.storeNewValue();
        }
        else {
            this.element.nativeElement.querySelector('[contenteditable]').focus();
        }
        this.editModeActivated = !this.editModeActivated;
        this.renderer.setElementClass(this.element.nativeElement, 'tag--editing', this.editModeActivated);
    };
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    };
    TagComponent.prototype.getContentEditableText = function () {
        return this.element.nativeElement.querySelector('[contenteditable]').innerText.trim();
    };
    TagComponent.prototype.disableEditMode = function ($event) {
        this.editModeActivated = false;
        $event.preventDefault();
    };
    TagComponent.prototype.storeNewValue = function () {
        var _this = this;
        var input = this.getContentEditableText();
        var exists = function (model) {
            return typeof model === 'string' ?
                model === input :
                model[_this.identifyBy] === input;
        };
        if (exists(this.model)) {
            var itemValue = this.model[this.identifyBy];
            this.model = typeof this.model === 'string' ? input : (_a = {}, _a[this.identifyBy] = itemValue, _a[this.displayBy] = itemValue, _a);
            this.onTagEdited.emit(this.model);
        }
        var _a;
    };
    TagComponent.prototype.isDeleteIconVisible = function () {
        return !this.readonly && this.removable && !this.editModeActivated;
    };
    TagComponent.prototype.isRippleVisible = function () {
        return !this.readonly && !this.editModeActivated;
    };
    return TagComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagComponent.prototype, "model", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "removable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "editable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], TagComponent.prototype, "template", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagComponent.prototype, "displayBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagComponent.prototype, "identifyBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TagComponent.prototype, "index", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagComponent.prototype, "onSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagComponent.prototype, "onRemove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagComponent.prototype, "onBlur", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagComponent.prototype, "onKeyDown", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TagComponent.prototype, "onTagEdited", void 0);
__decorate([
    core_1.ViewChild(tag_ripple_component_1.TagRipple),
    __metadata("design:type", tag_ripple_component_1.TagRipple)
], TagComponent.prototype, "ripple", void 0);
__decorate([
    core_1.HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TagComponent.prototype, "keydown", null);
TagComponent = __decorate([
    core_1.Component({
        selector: 'tag',
        template: __webpack_require__(29),
        styles: [__webpack_require__(33)]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], TagComponent);
exports.TagComponent = TagComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(2));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2-dropdown"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ng2-dropdown"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var ng2_dropdown_1 = __webpack_require__(1);
	exports.Ng2Dropdown = ng2_dropdown_1.Ng2Dropdown;
	var ng2_dropdown_menu_1 = __webpack_require__(6);
	exports.Ng2DropdownMenu = ng2_dropdown_menu_1.Ng2DropdownMenu;
	var ng2_dropdown_button_1 = __webpack_require__(3);
	exports.Ng2DropdownButton = ng2_dropdown_button_1.Ng2DropdownButton;
	var ng2_menu_item_1 = __webpack_require__(8);
	exports.Ng2MenuItem = ng2_menu_item_1.Ng2MenuItem;
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(16);
	var dropdown_state_service_1 = __webpack_require__(9);
	exports.DropdownStateService = dropdown_state_service_1.DropdownStateService;
	var Ng2DropdownModule = (function () {
	    function Ng2DropdownModule() {
	    }
	    return Ng2DropdownModule;
	}());
	Ng2DropdownModule = __decorate([
	    core_1.NgModule({
	        exports: [
	            ng2_menu_item_1.Ng2MenuItem,
	            ng2_dropdown_button_1.Ng2DropdownButton,
	            ng2_dropdown_menu_1.Ng2DropdownMenu,
	            ng2_dropdown_1.Ng2Dropdown
	        ],
	        declarations: [
	            ng2_dropdown_1.Ng2Dropdown,
	            ng2_menu_item_1.Ng2MenuItem,
	            ng2_dropdown_button_1.Ng2DropdownButton,
	            ng2_dropdown_menu_1.Ng2DropdownMenu,
	        ],
	        imports: [common_1.CommonModule]
	    })
	], Ng2DropdownModule);
	exports.Ng2DropdownModule = Ng2DropdownModule;
	

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var ng2_dropdown_button_1 = __webpack_require__(3);
	var ng2_dropdown_menu_1 = __webpack_require__(6);
	var dropdown_state_service_1 = __webpack_require__(9);
	var Ng2Dropdown = (function () {
	    function Ng2Dropdown(state) {
	        this.state = state;
	        this.dynamicUpdate = true;
	        this.onItemClicked = new core_1.EventEmitter();
	        this.onItemSelected = new core_1.EventEmitter();
	        this.onShow = new core_1.EventEmitter();
	        this.onHide = new core_1.EventEmitter();
	    }
	    Ng2Dropdown.prototype.toggleMenu = function (position) {
	        if (position === void 0) { position = this.button.getPosition(); }
	        this.state.menuState.isVisible ? this.hide() : this.show(position);
	    };
	    Ng2Dropdown.prototype.hide = function () {
	        this.menu.hide();
	        this.onHide.emit(this);
	    };
	    Ng2Dropdown.prototype.show = function (position) {
	        if (position === void 0) { position = this.button.getPosition(); }
	        this.menu.show();
	        this.menu.updatePosition(position);
	        this.onShow.emit(this);
	    };
	    Ng2Dropdown.prototype.scrollListener = function () {
	        if (this.state.menuState.isVisible && this.button && this.dynamicUpdate) {
	            this.menu.updatePosition(this.button.getPosition());
	        }
	    };
	    Ng2Dropdown.prototype.ngOnInit = function () {
	        var _this = this;
	        this.state.dropdownState.onItemClicked.subscribe(function (item) {
	            _this.onItemClicked.emit(item);
	            if (item.preventClose) {
	                return;
	            }
	            _this.hide.call(_this);
	        });
	        if (this.button) {
	            this.button.onMenuToggled.subscribe(function () {
	                _this.toggleMenu();
	            });
	        }
	        this.state.dropdownState.onItemSelected.subscribe(function (item) { return _this.onItemSelected.emit(item); });
	    };
	    return Ng2Dropdown;
	}());
	__decorate([
	    core_1.ContentChild(ng2_dropdown_button_1.Ng2DropdownButton),
	    __metadata("design:type", ng2_dropdown_button_1.Ng2DropdownButton)
	], Ng2Dropdown.prototype, "button", void 0);
	__decorate([
	    core_1.ContentChild(ng2_dropdown_menu_1.Ng2DropdownMenu),
	    __metadata("design:type", ng2_dropdown_menu_1.Ng2DropdownMenu)
	], Ng2Dropdown.prototype, "menu", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2Dropdown.prototype, "dynamicUpdate", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onItemClicked", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onItemSelected", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onShow", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onHide", void 0);
	__decorate([
	    core_1.HostListener('window:scroll'),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], Ng2Dropdown.prototype, "scrollListener", null);
	Ng2Dropdown = __decorate([
	    core_1.Component({
	        selector: 'ng2-dropdown',
	        template: __webpack_require__(15),
	        providers: [dropdown_state_service_1.DropdownStateService]
	    }),
	    __metadata("design:paramtypes", [dropdown_state_service_1.DropdownStateService])
	], Ng2Dropdown);
	exports.Ng2Dropdown = Ng2Dropdown;
	

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var Ng2DropdownButton = (function () {
	    function Ng2DropdownButton(element) {
	        this.element = element;
	        this.onMenuToggled = new core_1.EventEmitter();
	        this.showCaret = true;
	    }
	    Ng2DropdownButton.prototype.toggleMenu = function () {
	        this.onMenuToggled.emit(true);
	    };
	    Ng2DropdownButton.prototype.getPosition = function () {
	        return this.element.nativeElement.getBoundingClientRect();
	    };
	    return Ng2DropdownButton;
	}());
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2DropdownButton.prototype, "onMenuToggled", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2DropdownButton.prototype, "showCaret", void 0);
	Ng2DropdownButton = __decorate([
	    core_1.Component({
	        selector: 'ng2-dropdown-button',
	        styles: [__webpack_require__(4)],
	        template: __webpack_require__(5)
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], Ng2DropdownButton);
	exports.Ng2DropdownButton = Ng2DropdownButton;
	

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ".ng2-dropdown-button {\n  font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n  background: #fff;\n  padding: 0.45rem 0.25rem;\n  font-size: 14px;\n  letter-spacing: 0.08rem;\n  color: #444;\n  outline: 0;\n  cursor: pointer;\n  font-weight: 400;\n  border: none;\n  border-bottom: 1px solid #efefef;\n  text-align: left;\n  min-width: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  max-width: 150px; }\n\n.ng2-dropdown-button:hover {\n  color: #222; }\n\n.ng2-dropdown-button:active, .ng2-dropdown-button:focus {\n  color: #222;\n  border-bottom: 2px solid #2196F3; }\n\n.ng2-dropdown-button__label {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 95%;\n          flex: 1 1 95%; }\n\n.ng2-dropdown-button__caret {\n  width: 12px;\n  height: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 6%;\n          flex: 1 1 6%; }\n\n:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button {\n  border: none;\n  min-width: 40px;\n  width: 40px;\n  border-radius: 100%;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  text-align: center;\n  height: 40px;\n  padding: 0.5em; }\n\n:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active {\n  background: rgba(0, 0, 0, 0.2); }\n"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"Слой_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var actions_1 = __webpack_require__(7);
	var ng2_menu_item_1 = __webpack_require__(8);
	var dropdown_state_service_1 = __webpack_require__(9);
	var Ng2DropdownMenu = (function () {
	    function Ng2DropdownMenu(state, element, renderer) {
	        this.state = state;
	        this.element = element;
	        this.renderer = renderer;
	        this.width = 4;
	        this.focusFirstElement = true;
	        this.appendToBody = true;
	        this.listeners = {
	            arrowHandler: undefined,
	            handleKeypress: undefined
	        };
	    }
	    Ng2DropdownMenu.prototype.show = function () {
	        this.state.menuState.isVisible = true;
	        this.listeners.handleKeypress = this.renderer.listen(document.body, 'keydown', this.handleKeypress.bind(this));
	        this.listeners.arrowHandler = this.renderer.listen(window, 'keydown', actions_1.arrowKeysHandler);
	    };
	    Ng2DropdownMenu.prototype.hide = function () {
	        this.state.menuState.isVisible = false;
	        this.state.dropdownState.unselect();
	        this.listeners.arrowHandler();
	        this.listeners.handleKeypress();
	    };
	    Ng2DropdownMenu.prototype.updatePosition = function (position) {
	        this.position = position;
	        this.ngDoCheck();
	    };
	    Ng2DropdownMenu.prototype.handleKeypress = function ($event) {
	        var key = $event.keyCode;
	        var items = this.items.toArray();
	        var index = items.indexOf(this.state.dropdownState.selectedItem);
	        if (!actions_1.ACTIONS.hasOwnProperty(key)) {
	            return;
	        }
	        actions_1.ACTIONS[key].call(this, index, items, this.state.dropdownState);
	        $event.preventDefault();
	        $event.stopPropagation();
	    };
	    Ng2DropdownMenu.prototype.getMenuElement = function () {
	        return this.element.nativeElement.children[0];
	    };
	    Ng2DropdownMenu.prototype.calcPositionOffset = function (position) {
	        if (!position) {
	            return;
	        }
	        var element = this.getMenuElement();
	        var supportPageOffset = window.pageXOffset !== undefined;
	        var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
	        var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ?
	            document.documentElement.scrollLeft : document.body.scrollLeft;
	        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ?
	            document.documentElement.scrollTop : document.body.scrollTop;
	        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
	        var clientWidth = element.clientWidth;
	        var clientHeight = element.clientHeight;
	        var marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
	        var marginFromRight = parseInt(left) + clientWidth;
	        var windowScrollHeight = window.innerHeight + window.scrollY;
	        var windowScrollWidth = window.innerWidth + window.scrollX;
	        if (marginFromBottom >= windowScrollHeight) {
	            top = parseInt(top.replace('px', '')) - clientHeight + "px";
	        }
	        if (marginFromRight >= windowScrollWidth) {
	            var marginRight = marginFromRight - windowScrollWidth + 30;
	            left = parseInt(left.replace('px', '')) - marginRight + "px";
	        }
	        return { top: top, left: left };
	    };
	    Ng2DropdownMenu.prototype.applyOffset = function (top, left) {
	        if (!this.offset) {
	            return { top: top, left: left };
	        }
	        var offset = this.offset.split(' ');
	        if (!offset[1]) {
	            offset[1] = '0';
	        }
	        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
	        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
	        return { top: top, left: left };
	    };
	    Ng2DropdownMenu.prototype.ngOnInit = function () {
	        if (this.appendToBody) {
	            document.body.appendChild(this.element.nativeElement);
	        }
	    };
	    Ng2DropdownMenu.prototype.ngDoCheck = function () {
	        if (!(this.state.menuState.isVisible && this.position)) {
	            return;
	        }
	        var element = this.getMenuElement();
	        var position = this.calcPositionOffset(this.position);
	        if (position) {
	            this.renderer.setElementStyle(element, 'top', position.top);
	            this.renderer.setElementStyle(element, 'left', position.left);
	        }
	        if (this.focusFirstElement &&
	            this.items.first &&
	            !this.state.dropdownState.selectedItem) {
	            this.state.dropdownState.select(this.items.first, false);
	        }
	    };
	    Ng2DropdownMenu.prototype.ngOnDestroy = function () {
	        var elem = this.element.nativeElement;
	        elem.parentNode.removeChild(elem);
	        if (this.listeners.handleKeypress) {
	            this.listeners.handleKeypress();
	        }
	    };
	    return Ng2DropdownMenu;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], Ng2DropdownMenu.prototype, "width", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2DropdownMenu.prototype, "focusFirstElement", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], Ng2DropdownMenu.prototype, "offset", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2DropdownMenu.prototype, "appendToBody", void 0);
	__decorate([
	    core_1.ContentChildren(ng2_menu_item_1.Ng2MenuItem),
	    __metadata("design:type", core_1.QueryList)
	], Ng2DropdownMenu.prototype, "items", void 0);
	Ng2DropdownMenu = __decorate([
	    core_1.Component({
	        selector: 'ng2-dropdown-menu',
	        styles: [__webpack_require__(13)],
	        template: __webpack_require__(14),
	        animations: [
	            core_1.trigger('fade', [
	                core_1.state('visible', core_1.style({ display: 'block', overflow: '*' })),
	                core_1.state('hidden', core_1.style({ display: 'none', overflow: 'hidden', width: '0' })),
	                core_1.transition('hidden => visible', [
	                    core_1.animate(150, core_1.keyframes([
	                        core_1.style({ opacity: 0, offset: 0, height: '0', width: '0' }),
	                        core_1.style({ opacity: 1, offset: 1, height: '*', width: '*' }),
	                    ]))
	                ]),
	                core_1.transition('visible => hidden', [
	                    core_1.animate(250, core_1.keyframes([
	                        core_1.style({ opacity: 1, offset: 0, height: '*', width: '*' }),
	                        core_1.style({ opacity: 0, offset: 1, height: '0', width: '0' }),
	                    ]))
	                ])
	            ]),
	            core_1.trigger('opacity', [
	                core_1.transition('hidden => visible', [
	                    core_1.animate(450, core_1.keyframes([
	                        core_1.style({ opacity: 0, offset: 0 }),
	                        core_1.style({ opacity: 1, offset: 1 }),
	                    ]))
	                ]),
	                core_1.transition('visible => hidden', [
	                    core_1.animate(200, core_1.keyframes([
	                        core_1.style({ opacity: 1, offset: 0 }),
	                        core_1.style({ opacity: 0.5, offset: 0.3 }),
	                        core_1.style({ opacity: 0, offset: 1 }),
	                    ]))
	                ])
	            ])
	        ]
	    }),
	    __metadata("design:paramtypes", [dropdown_state_service_1.DropdownStateService,
	        core_1.ElementRef,
	        core_1.Renderer])
	], Ng2DropdownMenu);
	exports.Ng2DropdownMenu = Ng2DropdownMenu;
	

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var KEYS = {
	    BACKSPACE: 9,
	    PREV: 38,
	    NEXT: 40,
	    ENTER: 13
	};
	var onSwitchNext = function (index, items, state) {
	    if (index < items.length - 1) {
	        state.select(items[index + 1], true);
	    }
	};
	var onSwitchPrev = function (index, items, state) {
	    if (index > 0) {
	        state.select(items[index - 1], true);
	    }
	};
	var onBackspace = function (index, items, state) {
	    if (index < items.length - 1) {
	        state.select(items[index + 1], true);
	    }
	    else {
	        state.select(items[0], true);
	    }
	};
	var onItemClicked = function (index, items, state) {
	    return state.selectedItem ? state.selectedItem.click() : undefined;
	};
	exports.ACTIONS = (_a = {},
	    _a[KEYS.BACKSPACE] = onBackspace,
	    _a[KEYS.PREV] = onSwitchPrev,
	    _a[KEYS.NEXT] = onSwitchNext,
	    _a[KEYS.ENTER] = onItemClicked,
	    _a);
	function arrowKeysHandler(event) {
	    if ([38, 40].indexOf(event.keyCode) > -1) {
	        event.preventDefault();
	    }
	}
	exports.arrowKeysHandler = arrowKeysHandler;
	var _a;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var dropdown_state_service_1 = __webpack_require__(9);
	var Ng2MenuItem = (function () {
	    function Ng2MenuItem(state, element, renderer) {
	        this.state = state;
	        this.element = element;
	        this.renderer = renderer;
	        this.preventClose = false;
	    }
	    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
	        get: function () {
	            return this === this.state.dropdownState.selectedItem;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Ng2MenuItem.prototype.select = function ($event) {
	        this.state.dropdownState.select(this, true);
	        if ($event) {
	            $event.stopPropagation();
	            $event.preventDefault();
	        }
	    };
	    Ng2MenuItem.prototype.click = function () {
	        this.state.dropdownState.onItemClicked.emit(this);
	    };
	    Ng2MenuItem.prototype.focus = function () {
	        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
	    };
	    return Ng2MenuItem;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2MenuItem.prototype, "preventClose", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], Ng2MenuItem.prototype, "value", void 0);
	Ng2MenuItem = __decorate([
	    core_1.Component({
	        selector: 'ng2-menu-item',
	        styles: [__webpack_require__(11)],
	        template: __webpack_require__(12)
	    }),
	    __metadata("design:paramtypes", [dropdown_state_service_1.DropdownStateService,
	        core_1.ElementRef,
	        core_1.Renderer])
	], Ng2MenuItem);
	exports.Ng2MenuItem = Ng2MenuItem;
	

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(2);
	var ng2_dropdown_state_1 = __webpack_require__(10);
	var DropdownStateService = (function () {
	    function DropdownStateService() {
	        this.menuState = {
	            isVisible: false,
	            toString: function () {
	                return this.isVisible === true ? 'visible' : 'hidden';
	            }
	        };
	        this.dropdownState = new ng2_dropdown_state_1.Ng2DropdownState();
	    }
	    return DropdownStateService;
	}());
	DropdownStateService = __decorate([
	    core_1.Injectable()
	], DropdownStateService);
	exports.DropdownStateService = DropdownStateService;
	

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var Ng2DropdownState = (function () {
	    function Ng2DropdownState() {
	        this.onItemSelected = new core_1.EventEmitter();
	        this.onItemClicked = new core_1.EventEmitter();
	    }
	    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
	        get: function () {
	            return this._selectedItem;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Ng2DropdownState.prototype.select = function (item, dispatchEvent) {
	        if (dispatchEvent === void 0) { dispatchEvent = true; }
	        this._selectedItem = item;
	        if (!dispatchEvent) {
	            return;
	        }
	        item.focus();
	        this.onItemSelected.emit(item);
	    };
	    Ng2DropdownState.prototype.unselect = function () {
	        this._selectedItem = undefined;
	    };
	    return Ng2DropdownState;
	}());
	exports.Ng2DropdownState = Ng2DropdownState;
	

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = ".ng2-menu-item {\n  font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  font-size: 0.9em;\n  text-transform: none;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  height: 48px;\n  line-height: 48px;\n  padding: 0.3em 1.25rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-transition: background 0.25s;\n  transition: background 0.25s; }\n\n.ng2-menu-item--selected {\n  background: rgba(158, 158, 158, 0.2);\n  outline: 0; }\n\n.ng2-menu-item:focus {\n  outline: 0; }\n\n.ng2-menu-item:active {\n  background: rgba(158, 158, 158, 0.4); }\n\n:host(ng2-menu-item) /deep/ [ng2-menu-item-icon] {\n  vertical-align: middle;\n  font-size: 28px;\n  width: 1.5em;\n  height: 30px;\n  color: rgba(0, 0, 0, 0.44); }\n"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class='ng2-menu-item'\n     role=\"button\"\n     tabindex=\"0\"\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     (keydown.enter)=\"click()\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n";

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = ".ng2-dropdown-menu {\n  z-index: 100;\n  overflow-y: auto;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n  position: absolute;\n  padding: 0.5em 0;\n  background: #fff;\n  border-radius: 1px;\n  max-height: 400px;\n  width: 260px;\n  display: block; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--inside-element {\n  position: fixed; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--width--2 {\n  width: 200px; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--width--4 {\n  width: 260px; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--width--6 {\n  width: 320px; }\n\n.ng2-dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  overflow: hidden; }\n\n:host /deep/ .ng2-menu-divider {\n  height: 1px;\n  min-height: 1px;\n  max-height: 1px;\n  width: 100%;\n  display: block;\n  background: #f9f9f9; }\n"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<!-- MENU -->\n<div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n     [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n     [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n     [@fade]=\"state.menuState.toString()\">\n        <div class=\"ng2-dropdown-menu__options-container\"\n             [@opacity]=\"state.menuState.toString()\">\n            <ng-content></ng-content>\n        </div>\n</div>\n\n<!-- BACKDROP -->\n<div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n";

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ng2-dropdown-container\">\n    <ng-content select=\"ng2-dropdown-button\"></ng-content>\n    <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-dropdown.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
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
        styles: [__webpack_require__(31)],
        template: __webpack_require__(27)
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], TagInputForm);
exports.TagInputForm = TagInputForm;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var constants = __webpack_require__(18);
var listen_1 = __webpack_require__(19);
var accessor_1 = __webpack_require__(17);
var tag_input_form_component_1 = __webpack_require__(11);
var tag_input_dropdown_component_1 = __webpack_require__(7);
var tag_component_1 = __webpack_require__(9);
__webpack_require__(4);
var TagInputComponent = TagInputComponent_1 = (function (_super) {
    __extends(TagInputComponent, _super);
    function TagInputComponent(renderer) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.separatorKeys = [];
        _this.placeholder = constants.PLACEHOLDER;
        _this.secondaryPlaceholder = constants.SECONDARY_PLACEHOLDER;
        _this.transform = function (item) { return item; };
        _this.validators = [];
        _this.onlyFromAutocomplete = false;
        _this.errorMessages = {};
        _this.theme = 'default';
        _this.onTextChangeDebounce = 250;
        _this.pasteSplitPattern = ',';
        _this.blinkIfDupe = true;
        _this.removable = true;
        _this.editable = false;
        _this.allowDupes = false;
        _this.modelAsStrings = false;
        _this.trimTags = true;
        _this.onAdd = new core_1.EventEmitter();
        _this.onRemove = new core_1.EventEmitter();
        _this.onSelect = new core_1.EventEmitter();
        _this.onFocus = new core_1.EventEmitter();
        _this.onBlur = new core_1.EventEmitter();
        _this.onTextChange = new core_1.EventEmitter();
        _this.onPaste = new core_1.EventEmitter();
        _this.onValidationError = new core_1.EventEmitter();
        _this.onTagEdited = new core_1.EventEmitter();
        _this.listeners = (_a = {},
            _a[constants.KEYDOWN] = [],
            _a[constants.KEYUP] = [],
            _a.change = [],
            _a);
        _this.isLoading = false;
        return _this;
        var _a;
    }
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        if (this.selectedTag === tag) {
            this.selectedTag = undefined;
        }
        this.focus(true, false);
        this.onRemove.emit(tag);
    };
    TagInputComponent.prototype.addItem = function (isFromAutocomplete) {
        if (isFromAutocomplete === void 0) { isFromAutocomplete = false; }
        var inputValue = this.setInputValue(this.inputForm.value.value);
        var tag = this.createTag(inputValue, inputValue);
        if (!this.inputForm.form.valid || !inputValue) {
            return;
        }
        var isValid = this.isTagValid(tag, isFromAutocomplete);
        isValid ? this.appendNewTag(tag) : this.onValidationError.emit(tag);
        this.setInputValue('');
        this.focus(true, false);
    };
    TagInputComponent.prototype.isTagValid = function (tag, isFromAutocomplete) {
        var _this = this;
        if (isFromAutocomplete === void 0) { isFromAutocomplete = false; }
        var selectedItem = this.dropdown ? this.dropdown.selectedItem : undefined;
        if (selectedItem && !isFromAutocomplete) {
            return;
        }
        var dupe = this.items.find(function (item) {
            var identifyBy = isFromAutocomplete ? _this.dropdown.identifyBy : _this.identifyBy;
            var displayBy = isFromAutocomplete ? _this.dropdown.displayBy : _this.displayBy;
            return _this.getItemValue(item) === tag[identifyBy] ||
                item[_this.identifyBy] === tag[identifyBy] ||
                item[_this.displayBy] === tag[displayBy];
        });
        var hasDupe = !!dupe && dupe !== undefined;
        if (!this.allowDupes && hasDupe && this.blinkIfDupe) {
            var item = this.tags.find(function (_tag) {
                return _this.getItemValue(_tag.model) === _this.getItemValue(dupe);
            });
            if (item) {
                item.blink();
            }
        }
        var fromAutocomplete = isFromAutocomplete && this.onlyFromAutocomplete;
        var assertions = [
            !hasDupe || this.allowDupes === true,
            this.maxItemsReached === false,
            ((fromAutocomplete) || this.onlyFromAutocomplete === false)
        ];
        return assertions.filter(function (item) { return item; }).length === assertions.length;
    };
    TagInputComponent.prototype.appendNewTag = function (tag) {
        var newTag = this.modelAsStrings ? tag[this.identifyBy] : tag;
        this.items = this.items.concat([newTag]);
        this.onAdd.emit(tag);
    };
    TagInputComponent.prototype.createTag = function (display, value) {
        var trim = function (val) { return typeof val === 'string' ? val.trim() : val; };
        return _a = {},
            _a[this.displayBy] = this.trimTags ? trim(display) : display,
            _a[this.identifyBy] = this.trimTags ? trim(value) : value,
            _a;
        var _a;
    };
    TagInputComponent.prototype.selectItem = function (item) {
        if (this.readonly || !item) {
            return;
        }
        this.selectedTag = item;
        this.onSelect.emit(item);
    };
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        switch (constants.KEY_PRESS_ACTIONS[key]) {
            case constants.ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    this.removeItem(this.selectedTag, this.items.indexOf(this.selectedTag));
                }
                break;
            case constants.ACTIONS_KEYS.SWITCH_PREV:
                this.switchPrev(data.model);
                break;
            case constants.ACTIONS_KEYS.SWITCH_NEXT:
                this.switchNext(data.model);
                break;
            case constants.ACTIONS_KEYS.TAB:
                this.switchNext(data.model);
                break;
            default:
                return;
        }
        event.preventDefault();
    };
    TagInputComponent.prototype.setInputValue = function (value) {
        var item = value ? this.transform(value) : '';
        var control = this.getControl();
        control.setValue(item);
        return item;
    };
    TagInputComponent.prototype.getControl = function () {
        return this.inputForm.value;
    };
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.readonly) {
            return;
        }
        var value = this.inputForm.value.value;
        this.selectedTag = undefined;
        if (applyFocus) {
            this.inputForm.focus();
        }
        if (displayAutocomplete && this.dropdown) {
            this.dropdown.show();
        }
        this.onFocus.emit(value);
    };
    TagInputComponent.prototype.blur = function () {
        this.onBlur.emit(this.inputForm.value.value);
    };
    TagInputComponent.prototype.hasErrors = function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    TagInputComponent.prototype.isInputFocused = function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ? this.dropdown.templates.first : undefined;
        return template && template !== menuTemplate;
    };
    TagInputComponent.prototype.switchNext = function (item) {
        if (this.tags.last.model === item) {
            this.focus(true);
            return;
        }
        var tags = this.tags.toArray();
        var tagIndex = tags.findIndex(function (tag) { return tag.model === item; });
        var tag = tags[tagIndex + 1];
        tag.select.call(tag);
    };
    TagInputComponent.prototype.switchPrev = function (item) {
        if (this.tags.first.model !== item) {
            var tags = this.tags.toArray();
            var tagIndex = tags.findIndex(function (tag) { return tag.model === item; });
            var tag = tags[tagIndex - 1];
            tag.select.call(tag);
        }
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        get: function () {
            return this.maxItems !== undefined && this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.trackBy = function (item) {
        return item[this.identifyBy];
    };
    TagInputComponent.prototype.onPasteCallback = function (data) {
        var _this = this;
        var text = data.clipboardData.getData('text/plain');
        text.split(this.pasteSplitPattern)
            .map(function (item) { return _this.createTag(item, item); })
            .forEach(function (item) {
            var display = _this.transform(item[_this.displayBy]);
            var tag = _this.createTag(display, display);
            if (_this.isTagValid(tag)) {
                _this.appendNewTag(tag);
            }
        });
        this.onPaste.emit(text);
        setTimeout(function () { return _this.setInputValue(''); }, 0);
    };
    TagInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        listen_1.default.call(this, constants.KEYDOWN, function ($event) {
            var itemsLength = _this.items.length, inputValue = _this.inputForm.value.value, isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey && !inputValue && itemsLength) {
                _this.tags.last.select.call(_this.tags.last);
            }
        });
        listen_1.default.call(this, constants.KEYDOWN, function ($event) {
            if (_this.separatorKeys.indexOf($event.keyCode) >= 0) {
                $event.preventDefault();
                _this.addItem();
            }
        }, this.separatorKeys.length > 0);
        var maxItemsReached = this.maxItems !== undefined && this.items && this.items.length > this.maxItems;
        if (maxItemsReached) {
            this.maxItems = this.items.length;
            console.warn(constants.MAX_ITEMS_WARNING);
        }
    };
    TagInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
        });
        if (this.onTextChange.observers.length) {
            this.inputForm.form.valueChanges
                .debounceTime(this.onTextChangeDebounce)
                .subscribe(function () {
                var value = _this.inputForm.value.value;
                _this.onTextChange.emit(value);
            });
        }
        if (this.clearOnBlur || this.addOnBlur) {
            this.inputForm
                .onBlur
                .subscribe(function () {
                if (_this.addOnBlur) {
                    _this.addItem();
                }
                _this.setInputValue('');
            });
        }
        if (this.addOnPaste) {
            var input = this.inputForm.input.nativeElement;
            this.renderer.listen(input, 'paste', this.onPasteCallback.bind(this));
        }
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    return TagInputComponent;
}(accessor_1.TagInputAccessor));
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TagInputComponent.prototype, "separatorKeys", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "secondaryPlaceholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TagInputComponent.prototype, "maxItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TagInputComponent.prototype, "transform", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "validators", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onlyFromAutocomplete", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "errorMessages", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "theme", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onTextChangeDebounce", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "inputId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "inputClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clearOnBlur", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "hideForm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "addOnBlur", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "addOnPaste", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "pasteSplitPattern", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "blinkIfDupe", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "removable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "editable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "allowDupes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "modelAsStrings", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "trimTags", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onAdd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onRemove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onFocus", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onBlur", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onTextChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onPaste", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onValidationError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onTagEdited", void 0);
__decorate([
    core_1.ContentChild(tag_input_dropdown_component_1.TagInputDropdown),
    __metadata("design:type", tag_input_dropdown_component_1.TagInputDropdown)
], TagInputComponent.prototype, "dropdown", void 0);
__decorate([
    core_1.ContentChildren(core_1.TemplateRef, { descendants: false }),
    __metadata("design:type", core_1.QueryList)
], TagInputComponent.prototype, "templates", void 0);
__decorate([
    core_1.ViewChild(tag_input_form_component_1.TagInputForm),
    __metadata("design:type", tag_input_form_component_1.TagInputForm)
], TagInputComponent.prototype, "inputForm", void 0);
__decorate([
    core_1.ViewChildren(tag_component_1.TagComponent),
    __metadata("design:type", core_1.QueryList)
], TagInputComponent.prototype, "tags", void 0);
TagInputComponent = TagInputComponent_1 = __decorate([
    core_1.Component({
        selector: 'tag-input',
        providers: [{
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return TagInputComponent_1; }),
                multi: true
            }],
        styles: [__webpack_require__(32)],
        template: __webpack_require__(28),
        animations: [
            core_1.trigger('flyInOut', [
                core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                core_1.transition(':enter', [
                    core_1.animate(250, core_1.keyframes([
                        core_1.style({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                        core_1.style({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                        core_1.style({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                        core_1.style({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                        core_1.style({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
                    ]))
                ]),
                core_1.transition(':leave', [
                    core_1.animate(150, core_1.keyframes([
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                        core_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                    ]))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], TagInputComponent);
exports.TagInputComponent = TagInputComponent;
var TagInputComponent_1;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(20));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(12));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    return HighlightPipe;
}());
HighlightPipe = __decorate([
    core_1.Pipe({
        name: 'highlight'
    })
], HighlightPipe);
exports.HighlightPipe = HighlightPipe;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(11));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
function isObject(obj) {
    return obj === Object(obj);
}
exports.isObject = isObject;
var TagInputAccessor = (function () {
    function TagInputAccessor() {
        this._items = [];
        this.displayBy = 'display';
        this.identifyBy = 'value';
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    ;
    TagInputAccessor.prototype.onTouched = function (items) {
        this._onTouchedCallback(items);
    };
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    TagInputAccessor.prototype.getItemValue = function (item) {
        return isObject(item) ? item[this.identifyBy] : item;
    };
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    return TagInputAccessor;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputAccessor.prototype, "displayBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagInputAccessor.prototype, "identifyBy", void 0);
exports.TagInputAccessor = TagInputAccessor;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PLACEHOLDER = '+ Tag';
exports.SECONDARY_PLACEHOLDER = 'Enter a new tag';
exports.KEYDOWN = 'keydown';
exports.KEYUP = 'keyup';
exports.FOCUS = 'focus';
exports.MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
exports.ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
exports.KEY_PRESS_ACTIONS = {
    8: exports.ACTIONS_KEYS.DELETE,
    37: exports.ACTIONS_KEYS.SWITCH_PREV,
    39: exports.ACTIONS_KEYS.SWITCH_NEXT,
    9: exports.ACTIONS_KEYS.TAB
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    if (!condition) {
        return;
    }
    this.listeners[listenerType].push(action);
}
exports.default = listen;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var DeleteIconComponent = (function () {
    function DeleteIconComponent() {
    }
    return DeleteIconComponent;
}());
DeleteIconComponent = __decorate([
    core_1.Component({
        selector: 'delete-icon',
        template: __webpack_require__(26),
        styles: [__webpack_require__(30)]
    })
], DeleteIconComponent);
exports.DeleteIconComponent = DeleteIconComponent;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ":host(delete-icon) {\n  width: 16px;\n  height: 26px;\n  transition: all 0.15s;\n  display: inline-block; }\n\n:host(delete-icon):hover {\n  transform: scale(1.3); }\n\n:host(delete-icon) svg {\n  vertical-align: bottom;\n  height: 20px; }\n\n:host-context(.default) path {\n  fill: #444; }\n\n:host-context(.dark) path {\n  fill: #fff; }\n\n:host-context(.minimal) path {\n  fill: #444; }\n\n:host-context(.bootstrap) path {\n  fill: #fff; }\n\n:host-context(.default tag:focus) path,\n:host-context(.default tag:active) path {\n  fill: #fff; }\n\n:host-context(.dark tag:focus) path,\n:host-context(.dark tag:active) path {\n  fill: #000; }\n\n:host-context(.minimal tag:focus) path,\n:host-context(.minimal tag:active) path {\n  fill: #000; }\n\n:host-context(.bootstrap tag:focus) path,\n:host-context(.bootstrap tag:active) path {\n  fill: #fff; }\n", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.ng2-tag-input__text-input {\n  border: none;\n  padding-left: 5px;\n  vertical-align: middle;\n  color:   #757372;\n  font-size: 14px;\n  height: 28px;\n  font-family: \"Quicksand\", \"Helvetica Neue\", sans-serif;\n  background-color: transparent;\n  margin: 0.1rem 0rem;\n  font-size: 14px;\n  width: 344px; }\n\n.ng2-tag-input__text-input:focus {\n  outline: 0; }\n\n.ng2-tag-input__text-input:focus::-webkit-input-placeholder {\n  color: #ff0089;\n  font-size: 14px; }\n\n.ng2-tag-input__text-input:focus::-moz-placeholder {\n  color: #ff0089;\n  font-size: 14px; }\n\n.ng2-tag-input__text-input:focus:-ms-input-placeholder {\n  color: #ff0089;\n  font-size: 14px; }\n\n.ng2-tag-input__text-input:focus:-moz-placeholder {\n  color: #ff0089;\n  font-size: 14px; }\n\n.ng2-tag-input__text-input::-webkit-input-placeholder {\n  color: #757372;\n  font-size: 14px; }\n\n.ng2-tag-input__text-input::-moz-placeholder {\n  color: #757372;\n  font-size: 14px; }\n\n.ng2-tag-input__text-input:-ms-input-placeholder {\n  color: #757372;\n  font-size: 14px; }\n\n.ng2-tag-input__text-input:-moz-placeholder {\n  color: #757372;\n  font-size: 14px; }\n\n.ng2-tag-input__text-input:focus + .underline {\n  transform: scale(1); }\n\n.underline {\n  display: inline-block;\n  height: 3px;\n  left: 0px;\n  margin-top: -4px;\n  position: absolute;\n  bottom: -3px;\n  width: 100%;\n  -webkit-transform: scale(0, 1);\n  transform: scale(0, 1);\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear; }\n\n.empty-top {\n  background-color: rgba(149, 150, 147, 0.2);\n  display: inline-block;\n  height: 1px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.empty-bottom {\n  background-color: #ff0089;\n  display: inline-block;\n  height: 2px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 1; }\n", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".progress-bar, .progress-bar:before {\n  height: 2px;\n  width: 100%;\n  margin: 0; }\n\n.progress-bar {\n  background-color: #dddddd;\n  display: flex;\n  position: absolute;\n  bottom: 0; }\n\n.progress-bar:before {\n  background-color: white;\n  content: '';\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }\n\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%; }\n  50% {\n    margin-left: 25%;\n    margin-right: 0; }\n  100% {\n    margin-left: 100%;\n    margin-right: 0; } }\n\n@keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%; }\n  50% {\n    margin-left: 25%;\n    margin-right: 0; }\n  100% {\n    margin-left: 100%;\n    margin-right: 0; } }\n\n.ng2-tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  transition: all 0.15s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  position: relative;\n  background-color: rgba(149, 150, 147, 0.2);\n  width: 350px; }\n\n.ng2-tag-input:focus {\n  outline: 0; }\n\n.ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n  align-items: center; }\n\n.ng2-tag-input form {\n  margin: 0.1em 0; }\n\n.ng2-tag-input__error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0; }\n\n/*.default.ng2-tag-input.ng2-tag-input--invalid,\n.minimal.ng2-tag-input.ng2-tag-input--invalid,\n.dark.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid map-get($color-error, 'default');\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid map-get($color-error, 'bootstrap');\n}*/\n.default.ng2-tag-input.ng2-tag-input--loading,\n.dark.ng2-tag-input.ng2-tag-input--loading,\n.minimal.ng2-tag-input.ng2-tag-input--loading,\n.bootstrap.ng2-tag-input.ng2-tag-input--loading {\n  border: none; }\n\n.ng2-tag-input.default {\n  border: none; }\n\n.default.ng2-tag-input--focused {\n  border: none; }\n\n.ng2-tag-input.minimal {\n  border-bottom: 1px solid transparent; }\n\n.ng2-tag-input.dark {\n  border-bottom: 2px solid #212121; }\n\n.ng2-tag-input.bootstrap {\n  border-bottom: 2px solid #ff0089; }\n\n.bootstrap.ng2-tag-input--focused {\n  border-bottom: 2px solid #0275d8; }\n\ntag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: \"Quicksand\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0;\n  outline: 0;\n  color: #444;\n  cursor: pointer;\n  border-radius: 0px;\n  transition: all 0.25s;\n  margin: 0.1rem 0.2rem;\n  padding: 0.08rem 0.3rem;\n  height: 20px;\n  line-height: 20px;\n  user-select: none;\n  overflow: hidden; }\n\ntag.readonly {\n  cursor: default; }\n\ntag.readonly:focus {\n  outline: 0; }\n\n.default tag.tag--editing,\n.dark tag.tag--editing,\n.minimal tag.tag--editing,\n.bootstrap tag.tag--editing {\n  background-color: #fff;\n  cursor: text; }\n\ntag:focus {\n  outline: 0; }\n\n.default tag:not(.tag--editing) {\n  background: #ff0089; }\n\n.default tag:not(.readonly):not(.tag--editing):focus {\n  background: #dddddd;\n  color: #fff; }\n\n.default tag:not(.readonly):not(.tag--editing):active {\n  background: #d0d0d0;\n  color: #fff; }\n\n.default tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #e6007b; }\n\n.minimal tag {\n  background: #f9f9f9;\n  border-radius: 0; }\n\n.minimal tag:not(.readonly):focus,\n.minimal tag:not(.readonly):active {\n  background: #dddddd; }\n\n.minimal tag:not(:focus):not(.readonly):hover {\n  background: #ececec; }\n\n.minimal tag:not(:focus):not(.readonly):hover {\n  background: #ececec; }\n\n.dark tag {\n  background: #212121;\n  color: #f9f9f9; }\n\n.dark tag:not(.readonly):focus,\n.dark tag:not(.readonly):active {\n  background: #999999;\n  color: #212121; }\n\n.bootstrap tag {\n  background: #0275d8;\n  color: #f9f9f9;\n  border-radius: 0.25rem; }\n\n.bootstrap tag:not(.readonly):focus,\n.bootstrap tag:not(.readonly):active {\n  background: #025aa5; }\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ":host,\n:host > div,\n:host > div:focus {\n  outline: 0;\n  overflow: hidden;\n  transition: opacity 1s;\n  z-index: 1; }\n\n:host.blink {\n  -webkit-animation: blink 0.3s normal forwards ease-in-out;\n  animation: blink 0.3s normal forwards ease-in-out; }\n\n@keyframes blink {\n  0% {\n    opacity: 0.3; } }\n\n:host [contenteditable='true'] {\n  outline: 0;\n  user-select: none; }\n", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<ng2-dropdown>\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngOutletContext]=\"{ item: item, index: index, last: last }\">\n            </template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<span>\n    <svg enable-background=\"new 0 0 32 32\" height=\"16px\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\" fill=\"#121313\" /><g/><g/><g/><g/><g/><g/></svg>\n</span>\n";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<!-- form -->\n<form (submit)=\"onSubmit.emit()\" [formGroup]=\"form\">\n    <input #input\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           formControlName=\"item\"\n           tabindex=\"0\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyup.emit($event)\"\n    />\n    <span class=\"underline\">\n        <span class=\"empty-top\"></span>\n        <span class=\"empty-bottom\"></span>\n    </span>\n</form>\n";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<!-- CONTAINER -->\n<div ngClass=\"ng2-tag-input {{ theme }}\"\n     (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index\"\n             [@flyInOut]=\"'in'\"\n             (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"removeItem(item, i)\"\n             (onKeyDown)=\"handleKeydown($event, item)\"\n             (onTagEdited)=\"onTagEdited.emit(item)\"\n             [index]=\"i\"\n             [attr.tabindex]=\"readonly ? -1 : 0\"\n             [class.readonly]=\"readonly\"\n             [readonly]=\"readonly\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [model]=\"item\">\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"addItem()\"\n            (onBlur)=\"blur()\"\n            (onFocus)=\"focus(false, true)\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n            [validators]=\"validators\"\n            [hidden]=\"readonly || maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isLoading\"></div>\n</div>\n\n<!-- ERRORS -->\n<div class=\"ng2-tag-input__errors-container\" *ngIf=\"hasErrors()\">\n    <p *ngFor=\"let error of inputForm.getErrorMessages(errorMessages)\" class=\"ng2-tag-input__error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"select($event)\"\n     (dblclick)=\"editable ? toggleEditMode($event) : undefined\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editModeActivated\">\n        <!-- CUSTOM TEMPLATE -->\n        <template\n            [ngOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </template>\n    </div>\n\n    <div *ngSwitchCase=\"false\">\n        <!-- TAG NAME -->\n        <span [attr.contenteditable]=\"editModeActivated\"\n              spellcheck=\"false\"\n              (keydown.enter)=\"disableEditMode($event)\"\n              (keydown.escape)=\"disableEditMode($event)\"\n              (click)=\"editModeActivated ? $event.stopPropagation() : undefined\"\n              (blur)=\"toggleEditMode()\">\n            {{ getDisplayValue(model) }}\n        </span>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove()\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\" *ngIf=\"isRippleVisible()\"></tag-ripple>\n";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(21);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(22);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(23);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(24);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(1);
var common_1 = __webpack_require__(2);
var ng2_material_dropdown_1 = __webpack_require__(10);
var icon_1 = __webpack_require__(13);
exports.DeleteIconComponent = icon_1.DeleteIconComponent;
var tag_input_form_1 = __webpack_require__(16);
exports.TagInputForm = tag_input_form_1.TagInputForm;
var components_1 = __webpack_require__(14);
exports.TagInputComponent = components_1.TagInputComponent;
var tag_input_dropdown_component_1 = __webpack_require__(7);
exports.TagInputDropdown = tag_input_dropdown_component_1.TagInputDropdown;
var highlight_pipe_1 = __webpack_require__(15);
var tag_component_1 = __webpack_require__(9);
exports.TagComponent = tag_component_1.TagComponent;
var tag_ripple_component_1 = __webpack_require__(8);
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


/***/ })
/******/ ]);
});
//# sourceMappingURL=ng2-tag-input.map