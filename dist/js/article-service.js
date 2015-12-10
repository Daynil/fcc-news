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
        this.initialGet();
    }
    ArticleService.prototype.getArticles = function () {
        var result = this.http.get(this.apiEndpoint);
        console.log(result);
        return result.map(function (res) { return res.json(); });
    };
    ArticleService.prototype.initialGet = function () {
        var _this = this;
        this.getArticles()
            .subscribe(function (resultObj) {
            var results = resultObj[0];
            results.map(function (resArticle) {
                var article = new Article(resArticle.headline, resArticle.timePosted, resArticle.link);
                article.description = resArticle.metaDescription;
                article.upvotes = resArticle.rank;
                if (resArticle.image)
                    article.storyImageUrl = resArticle.image;
                article.author = { userName: resArticle.author.username, userImage: resArticle.author.picture };
                _this.articles.push(article);
            });
        });
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
})();
exports.ArticleService = ArticleService;

//# sourceMappingURL=article-service.js.map
