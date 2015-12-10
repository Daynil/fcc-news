import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'angular2/angular2';
import { Injectable } from 'angular2/core';

export class Article {
	description: string;
	upvotes: number;
	storyImageUrl: string;
	author: { userName: string, userImage: string };
	
	constructor( public headline: string, public timePosted: string, public link: string ) { }
}

@Injectable()
export class ArticleService {
	apiEndpoint: string = 'http://www.freecodecamp.com/news/hot';
	articles: Article[];
	
	constructor( public http: Http ) {
		this.initialGet();
	}
	
	getArticles(): Observable<any> {
		let result = this.http.get( this.apiEndpoint );
		console.log(result);
		return result.map(res => res.json());

	}
	
	initialGet() {
		this.getArticles()
			.subscribe(
				resultObj => {
					let results = resultObj[0];
					results.map(
						resArticle => {
							let article = new Article(resArticle.headline, resArticle.timePosted, resArticle.link);
							article.description = resArticle.metaDescription;
							article.upvotes = resArticle.rank;
							if (resArticle.image) article.storyImageUrl = resArticle.image;
							article.author = { userName : resArticle.author.username, userImage : resArticle.author.picture };
							this.articles.push(article);
						}
					);

				}
			);
	}
	
}