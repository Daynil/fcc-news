var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var core_1 = require('angular2/core');
var Article = (function () {
    function Article(headline, timePosted, link) {
        this.headline = headline;
        this.timePosted = timePosted;
        this.link = link;
    }
    return Article;
})();
exports.Article = Article;
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.apiEndpoint = 'http://www.freecodecamp.com/news/hot';
        this.articles = [];
        this.MAX_IMAGE_WID = 240;
        this.MIN_IMAGE_WID = 200;
        this.initialGet();
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get(this.apiEndpoint).map(function (res) { return res.json(); });
    };
    ArticleService.prototype.initialGet = function () {
        var _this = this;
        this.getArticles()
            .subscribe(function (resultArr) {
            resultArr.map(function (resArticle) {
                var article = new Article(resArticle.headline, resArticle.timePosted, resArticle.link);
                article.description = resArticle.metaDescription;
                article.upvotes = resArticle.rank;
                article.author = { userName: resArticle.author.username, userImage: resArticle.author.picture };
                if (resArticle.image && resArticle.image != 'https://s0.wp.com/i/blank.jpg') {
                    article.storyImageUrl = resArticle.image;
                }
                else
                    article.storyImageUrl = article.author.userImage;
                _this.getWidth(article.storyImageUrl)
                    .subscribe(function (width) {
                    if (width > _this.MAX_IMAGE_WID)
                        article.width = _this.MAX_IMAGE_WID;
                    else if (width < _this.MIN_IMAGE_WID)
                        article.width = _this.MIN_IMAGE_WID;
                    else
                        article.width = width;
                    _this.articles.push(article);
                });
            });
        });
    };
    ArticleService.prototype.getWidth = function (url) {
        return new Observable_1.Observable(function (observer) {
            var img = new Image();
            img.src = url;
            img.onload = function () {
                observer.next(img.width);
            };
        });
    };
    ArticleService.prototype.sortNews = function (sortby) {
        switch (sortby) {
            case 'date':
                this.articles.sort(this.sortByDate);
                break;
            case 'upvotes':
                this.articles.sort(this.sortByUpvotes);
                break;
            case 'poster':
                this.articles.sort(this.sortByPoster);
                break;
            default:
                break;
        }
    };
    ArticleService.prototype.sortByDate = function (a, b) {
        return b.timePosted - a.timePosted;
    };
    ArticleService.prototype.sortByUpvotes = function (a, b) {
        return b.upvotes - a.upvotes;
    };
    ArticleService.prototype.sortByPoster = function (a, b) {
        var aPoster = a.author.userName;
        var bPoster = b.author.userName;
        if (aPoster < bPoster)
            return -1;
        if (aPoster > bPoster)
            return 1;
        return 0;
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
})();
exports.ArticleService = ArticleService;

//# sourceMappingURL=article-service.js.map
