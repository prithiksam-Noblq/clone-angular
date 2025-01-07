import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AutoCompleteModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-clone';
  selectedOption: string = ''; 
  options = [];
 items: string[] = []; 
value: any;

  // Filter method for p-autocomplete
  search(event: any): void {
    const query = event.query.toLowerCase();
    this.items = this.options
  
  }
}
