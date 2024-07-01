import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private store: Store<any>) { }
  count$=this.store.select(State=>State.counter.count)

  onIncrement(){
    this.store.dispatch({type:'Increment'})
  }
  onDecrement(){
    this.store.dispatch({type:'Decrement'})
  }

}
