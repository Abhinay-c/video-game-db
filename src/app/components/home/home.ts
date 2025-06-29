import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { APIResponse, Game } from '../../models';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http } from '../../services/http';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, OnDestroy {
  public sort: string = '';
  public games: Array<Game> = [];
  private routeSub: Subscription = new Subscription();
  private gameSub: Subscription = new Subscription();

  constructor(
    private httpService : Http,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
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
    this.gameSub = this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
  }
}
