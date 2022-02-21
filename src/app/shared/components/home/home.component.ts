import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { APIResponse } from './../../../core/models/api-response';
import { HttpService } from 'src/app/core/services/http.service';
import { Game } from 'src/app/core/models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  private gameSub: Subscription;
  games: Array<Game>;
  sort: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params)=> {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string, search?: string) {
    this.gameSub = this.http
      .getGameList(sort, search)
      .subscribe((list: APIResponse<Game>)=> {
        this.games = list.results;

        console.log(list);
      });
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
      if (this.gameSub) {
        this.gameSub.unsubscribe();
      }

      if (this.routeSub) {
        this.routeSub.unsubscribe();
      }
  }
}
