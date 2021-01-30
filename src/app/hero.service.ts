import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

/* This marks the class as one that participates in the dependency injection
system. */
@Injectable({
  providedIn: 'root'
})

/*When you provide the service at the root level, Angular creates a single,
  shared instance of HeroService and injects into any class that asks for it.
  Registering the provider in the @Injectable metadata also allows Angular to optimize an app by
  removing the service if it turns out not to be used after all.*/

export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  /* of(HEROES) returns an Observable<Hero[]> that emits a single value,
  the array of mock heroes.*/

  constructor(private messageService: MessageService) { }
}
