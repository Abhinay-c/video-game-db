import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { APIResponse, Game } from '../../models';
import { ActivatedRoute, Params } from '@angular/router';
import { Http } from '../../services/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  public sort: String = '';
  public games: Array<Game> = [];

  constructor(
    private httpService : Http,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['game-search']) {
        this.searchGames('metacrit',  params['game-search']);
      }
      else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(
    sort: string,
    search?: string
  ) {
    this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }
}
