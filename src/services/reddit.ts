import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Reddit {
    constructor(private http: Http) { }

    getSubReddit(sub: string) {
        return this.makeRequest(sub);
    }

    private makeRequest(sub: string) {
        let url = `https://www.reddit.com/r/${sub}.json`;
        return this.http.get(url)
            .map((res) => res.json());
    }
}