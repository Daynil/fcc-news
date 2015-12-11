import { Component, View, CORE_DIRECTIVES, bootstrap } from 'angular2/angular2';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ArticleComp } from './fcc-article';
import { Article, ArticleService } from './article-service';

// Annotation section
@Component({
	selector: 'fcc-news',
	viewBindings: [ArticleService]
})
@View({
	templateUrl: '../html/fcc-news.html',
	styleUrls: ['../css/fcc-news.css'],
	directives: [CORE_DIRECTIVES, ArticleComp]
})
// Component controller
class BaseComponent {

	constructor( public articleService: ArticleService ) {

	}
	
	sortNews(sortby) {
		this.articleService.sortNews(sortby.value);
	}
	
	debug(article: Article) {
		console.log(article);
	}
}

bootstrap(BaseComponent, [HTTP_PROVIDERS])
	.then(
		success => console.log("bootstrapping success: ", success),
		error => console.log("bootstrapping error: ",  error)
	);
