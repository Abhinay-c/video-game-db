import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from "./components/search-bar/search-bar";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { H } from '@angular/cdk/keycodes';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptors';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptors';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true
    }
  ]
})
export class App {
  protected title = 'video-game-db';
}
