import { Component } from '@angular/core';
import { PageComponent } from './common/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [PageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  ngOnInit() {
    console.log('PageComponet');
  }
  ngOnChanges(changes:any){
    console.log(changes);
}
}
