import { Component, Input,OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
@Component({
  selector: 'app-page',
  imports: [FormsModule, AutoCompleteModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent implements OnInit,OnChanges {
  title = 'Learn Angular';
  selectedOption: string = '';
  options = [];
  items: string[] = [];
  value: any;
  search(event: any): void {
    const query = event.query.toLowerCase();
    this.items = this.options;
  }
  @Input() page: string = '';

  ngOnInit() {
    console.log('PageComponet');
  }
  ngOnChanges(changes:any){
    console.log(changes);
  }
}
