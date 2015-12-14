var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var http_1 = require('angular2/http');
var fcc_article_1 = require('./fcc-article');
var article_service_1 = require('./article-service');
// Annotation section
var BaseComponent = (function () {
    function BaseComponent(articleService) {
        this.articleService = articleService;
    }
    BaseComponent.prototype.sortNews = function (sortby) {
        this.articleService.sortNews(sortby.value);
    };
    BaseComponent = __decorate([
        core_1.Component({
            selector: 'fcc-news',
            viewBindings: [article_service_1.ArticleService]
        }),
        core_1.View({
            templateUrl: '../html/fcc-news.html',
            styleUrls: ['../css/fcc-news.css'],
            directives: [common_1.CORE_DIRECTIVES, fcc_article_1.ArticleComp]
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService])
    ], BaseComponent);
    return BaseComponent;
})();
browser_1.bootstrap(BaseComponent, [http_1.HTTP_PROVIDERS])
    .then(function (success) { return console.log("bootstrapping success: ", success); }, function (error) { return console.log("bootstrapping error: ", error); });

//# sourceMappingURL=app.js.map
