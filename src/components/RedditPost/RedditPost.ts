import { Component, Input } from '@angular/core';

@Component({
    selector: 'reddit-post',
    template: `<div>{{post.data.title}}</div>`,
    directives: []
})

class RedditPost {
    @Input() post: any;
}



export default RedditPost;
