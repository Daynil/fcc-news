import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'fcc-article'
})
@View({
	templateUrl: '../html/fcc-article.html',
	styleUrls: ['../css/fcc-article.css']
})
export class ArticleComp {
	image: string = 'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1446102038/GpamtF4_x17rnq.png';
	title: string = 'Article Title Goes Here and Describes Article';
	width;
	
	constructor() {
		this.setWidth(this.image);
	}
	
	setWidth(url: string) {
		let width: number;
		let img = new Image();
		img.src = url;
		img.onload = () => this.width = img.width;
	}
}