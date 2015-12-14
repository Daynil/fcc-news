import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from 'angular2/core';

export class Article {
	description: string;
	upvotes: number;
	storyImageUrl: string;
	width: number;
	author: { userName: string, userImage: string };
	
	constructor( public headline: string, public timePosted: number, public link: string ) { }
}

@Injectable()
export class ArticleService {
	apiEndpoint = 'http://www.freecodecamp.com/news/hot';
	articles: Article[] = [];
	
	MAX_IMAGE_WID = 240;
	MIN_IMAGE_WID = 200;
	
	constructor( public http: Http ) {
		this.initialGet();
	}
	
	getArticles(): Observable<any> {
		return this.http.get(this.apiEndpoint).map(res => res.json());
	}
	
	initialGet() {
		this.getArticles()
			.subscribe(
				resultArr => {
					resultArr.map(
						resArticle => {
							let article = new Article(resArticle.headline, resArticle.timePosted, resArticle.link);
							article.description = resArticle.metaDescription;
							article.upvotes = resArticle.rank;
							article.author = { userName : resArticle.author.username, userImage : resArticle.author.picture };
							if (resArticle.image && resArticle.image != 'https://s0.wp.com/i/blank.jpg') {
								article.storyImageUrl = resArticle.image;	
							}
							else article.storyImageUrl = article.author.userImage;
							this.getWidth(article.storyImageUrl)
								.subscribe( width => {
									if (width > this.MAX_IMAGE_WID) article.width = this.MAX_IMAGE_WID;
									else if (width < this.MIN_IMAGE_WID) article.width = this.MIN_IMAGE_WID;
									else article.width = width;
									this.articles.push(article);
								});
						}
					);

				}
			);
	}
	
	getWidth(url: string): Observable<number> {
		return new Observable(observer => {
			let img = new Image();
			img.src = url;
			img.onload = () => {
				observer.next(img.width);
			};
		});
	}
	
	sortNews(sortby: string) {
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
	}
	
	sortByDate(a: Article, b: Article) {
		return b.timePosted - a.timePosted;
	}
	
	sortByUpvotes(a: Article, b: Article) {
		return b.upvotes - a.upvotes;
	}
	
	sortByPoster(a: Article, b: Article) {
		let aPoster = a.author.userName;
		let bPoster = b.author.userName;
		if (aPoster < bPoster) return -1;
		if (aPoster > bPoster) return 1;
		return 0;
	}
	
}