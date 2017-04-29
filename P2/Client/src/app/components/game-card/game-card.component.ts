import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { GameServiceService } from "../../services/game-service.service"
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import {AuthService} from "../../services/auth.service"
@Component({
  selector: 'game-cards',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
  providers: [GameServiceService]
})
export class GameCardComponent implements OnInit {

  view_name = "ALL GAMES";
  games = [];
  id :  any ;

  constructor(private http: Http, private gameServiceService: GameServiceService, private router: Router, private aRouter: ActivatedRoute , public auth:AuthService) {

  }



  ngOnInit() {

    let id = this.aRouter.snapshot.params['id'];
    this.id = id;

    if (id) {
      this.gameServiceService.getGame(id).subscribe(
        (res) => {
        this.games=res;
        
      });

    }

    else {
      
      this.gameServiceService.getGames().subscribe(games => {
      this.games = games
        this.games.forEach(game => {
          game.img = "./assets/gamification-760.jpg"
          if(game.category == "Programming")
            game.icon = "memory";
          else if (game.category == "Math")
            game.icon = "widgets"
          else if (game.category == "Science")
            game.icon = "opacity"
          else game.icon = "translate"
        })
      }
      );



    }

  }


  viewGame(id) {
    this.router.navigate(['/game', id]);
  }


addButton(){
  if( String(this.auth.getType()) == 'Teacher' && this.id != undefined )
  return true;
  else
  return false;
}

}
