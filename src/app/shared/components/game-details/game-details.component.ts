import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { HttpService } from './../../../core/services/http.service';
import { Game } from 'src/app/core/models/game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  routeSub: Subscription;
  gameSub: Subscription;
  gameRating = 0;
  gameId: string;
  game: Game;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params
      .subscribe((params: Params)=> {
        this.gameId = params['id'];
        this.getGameDetails(this.gameId);
      });
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }

  getGameDetails(id: string): void {
    this.gameSub = this.http
      .getGameDetails(id)
      .subscribe((res: Game)=> {
        this.game = res;

        setTimeout(() => {
          this.gameRating = this.game.metacritic;
        }, 1000);
      });
  }
}


