import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor , HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class MainInterceptor implements HttpInterceptor {

    constructor(){
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const headersConfig = {
        //   'Accept': 'application/json' 
        // };
        // headersConfig["Content-Type"] = `application/json` ;

        // // console.log(request);
        // request = request.clone({
        //         setHeaders: headersConfig
        // });

        return next.handle(request);
    }
}