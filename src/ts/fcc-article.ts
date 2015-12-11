import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { Article } from './article-service';

@Component({
	selector: 'fcc-article',
	inputs: ['article']
})
@View({
	templateUrl: '../html/fcc-article.html',
	styleUrls: ['../css/fcc-article.css']
})
export class ArticleComp {
	article: Article;
	
	constructor() { }
	
	getAuthorLink(): string {
		return `http://www.freecodecamp.com/${this.article.author.userName}`
	}
}