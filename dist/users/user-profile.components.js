"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    core_1.Component({
        selector: 'user-profile',
        template: "\n\t  <div class=\"jumbotron\" *ngIf=\"activeUser\">\n      <h2> {{ activeUser.name }} <small> {{ activeUser.username }} </small> </h2>\n      <input class=\"form-control\" [(ngModel)]=\"activeUser.name\">\n    </div>\n\t"
    })
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.components.js.map