import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Le temps restant
  public timeLeftInSeconds = 0;
  // la durée de cuisson
  private durationInseconds = 4 * 60;
// le chrono
  public timer = null;


  constructor() {}

    public startTimer(){
      // unique qaund on lance un nouveau chrono
      // et pas quand on reprend le lancement du chrono
      if(this.timeLeftInSeconds == 0){
          // le temps restant et egal a la durée
      this.timeLeftInSeconds = this.durationInseconds;

      }
     
      // a chaque seconde on decremente le temps restant
      this.timer = setInterval(
        ()=>{
          this.timeLeftInSeconds--;
          // ici on arrete le chrono quand le temps restant est egal a zero
          if(this.timeLeftInSeconds == 0){
            clearInterval(this.timer);
            this.timer = null;
          }
        },
        1000
      );
    }

      public dispalayTime(timeInseconds){
        let minutes = Math.floor(timeInseconds/60);
        let seconds = timeInseconds % 60;

             return minutes + ':' + seconds;
      }
      public stopTimer(){
        clearInterval(this.timer);
        this.timeLeftInSeconds = 0;
        this.timer = null
      }

      public pauseTimer(){
        clearInterval(this.timer);
        this.timer = null;
      }

}
