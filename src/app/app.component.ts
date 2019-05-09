import { Component , OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	
    title = 'kofluence';
    items = [
        {
            "display" : "#sandals" ,
            "value" : "#sandals" 
        },
        {
            "display" : "#shoes" ,
            "value" : "#shoes" 
        }
    ];

    searchSuggestions : any[] = [
        {
            "hashtag" : "flatshoes",
            "posts" : "16k"
        },
        {
            "hashtag" : "heels",
            "posts" : "5k"
        },
        {
            "hashtag" : "redshoes",
            "posts" : "6k"
        },
        {
            "hashtag" : "sportshoes",
            "posts" : "1k"
        }
    ];

    posts : any[] = [];

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.getPostsData();
	}


	getPostsData(){
		this.http.get<any>(`http://localhost:4200/assets/data.json` , {responseType: 'json'})
        .pipe(map(res => {
        return res;
      	}))
      	.subscribe(
      		(res)=>{
                this.posts = res.content ;
                  console.log(this.posts);
      			console.log(res);
      		}
  		);
	}

    onNewSearch(e){
        console.log(e);
    }
}
