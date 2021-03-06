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
//# sourceMappingURL=/Users/izabela/Desktop/Proyectos/ng2-tag-input/modules/components/helpers/listen.js.map