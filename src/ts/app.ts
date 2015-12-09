import {Component, View, bootstrap} from 'angular2/angular2';
import {ArticleComp} from './fcc-article'

// Annotation section
@Component({
	selector: 'fcc-news'
})
@View({
	templateUrl: '../html/fcc-news.html',
	styleUrls: ['../css/fcc-news.css'],
	directives: [ArticleComp]
})
// Component controller
class BaseComponent {
	
	constructor() {
		
	}
}

bootstrap(BaseComponent);
