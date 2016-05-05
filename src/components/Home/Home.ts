import { Component } from '@angular/core';
import { Reddit } from '../../services/reddit';
import {Observable} from 'rxjs/Observable';
import RedditPost  from '../RedditPost/RedditPost';

@Component({
    selector: 'home',
    templateUrl: './components/Home/Home.html',
    directives: [RedditPost]
})

class Home {
    title: string = 'Home';
    posts: Observable<any>;

    constructor(private reddit: Reddit) {
        this.getSub();
    }

    getSub() {
        this.reddit.getSubReddit('bitcoin').subscribe(({ data }) => {
            this.posts = data.children;
        });
    }
}

export default Home;
