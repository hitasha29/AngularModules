import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchResults: any[] = [];

  performSearch(query: string) {
    // Simulate searching logic or fetch data from a service
    // and update this.searchResults accordingly
    
    this.searchResults = [
      // Sample search results
      { title: 'Result 1', content: query }
    ];
  }
}
