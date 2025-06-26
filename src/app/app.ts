import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from "./components/search-bar/search-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'video-game-db';
}
