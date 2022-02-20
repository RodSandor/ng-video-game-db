import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { APIResponse } from './../../../core/models/api-response';
import { HttpService } from 'src/app/core/services/http.service';
import { Game } from 'src/app/core/models/Game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games: Array<Game>;
  sort: string;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string, search?: string) {
    this.http.getGameList(sort, search)
      .subscribe((list: APIResponse<Game>)=> {
        this.games = list.results;

        console.log(list);

      });
  }
}
