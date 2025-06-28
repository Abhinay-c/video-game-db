import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{

    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler   
    ): Observable<HttpEvent <any>>   {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'c00d86fa72mshc360c4729b0535bp1f19c5jsn5b2b51ce2579',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: '1383eeae2bc44132b13d523d5488c80f'
            }
        });
        return next.handle(req);
    }

}