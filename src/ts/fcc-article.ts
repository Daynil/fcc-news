import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
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
	imageUrl: string;
	width;
	
	constructor() {
		if (this.article.storyImageUrl) this.imageUrl = this.article.storyImageUrl;
		else this.imageUrl = this.article.author.userImage;
		this.setWidth(this.imageUrl);
	}
	
	setWidth(url: string) {
		let width: number;
		let img = new Image();
		img.src = url;
		img.onload = () => this.width = img.width;
	}
}