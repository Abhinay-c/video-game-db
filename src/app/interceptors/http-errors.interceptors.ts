import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, throwError, Observable } from "rxjs";
/*
 * HttpErrorsInterceptor is an Angular HTTP interceptor that catches HTTP errors
 * and logs them to the console. It implements the HttpInterceptor interface.
 */
@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err) => {
                console.log(err);
                return throwError(()=> err);
            })
        );
    }
}