import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
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