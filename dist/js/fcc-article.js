var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var ArticleComp = (function () {
    function ArticleComp() {
        this.image = 'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1446102038/GpamtF4_x17rnq.png';
        this.title = 'Article Title Goes Here and Describes Article';
        this.setWidth(this.image);
    }
    ArticleComp.prototype.setWidth = function (url) {
        var _this = this;
        var width;
        var img = new Image();
        img.src = url;
        img.onload = function () { return _this.width = img.width; };
    };
    ArticleComp = __decorate([
        angular2_1.Component({
            selector: 'fcc-article'
        }),
        angular2_1.View({
            templateUrl: '../html/fcc-article.html',
            styleUrls: ['../css/fcc-article.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComp);
    return ArticleComp;
})();
exports.ArticleComp = ArticleComp;

//# sourceMappingURL=fcc-article.js.map
