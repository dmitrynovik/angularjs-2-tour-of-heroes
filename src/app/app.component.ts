import { Component } from '@angular/core';
import { Hero }

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
})
export class AppComponent  { 
  name = 'Angular'; 
  title = "Tour of heroes";
  hero:Hero = { id: 1, name: "windstorm" };
}
