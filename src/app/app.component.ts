import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  searchText: string = '';
  text: string = '<h1>this is a grid search </h1> <h1>grid</h1> assement dont by Ali kandil <h1>grid</h1> adipiscing elit. <h1>Duis</h1> grid varius vehicula felis, at varius enim tristique eget.'; 
  highlightedCount: number = 0;

  highlightText(text: string): string {
    if (!this.searchText.trim()) {
      this.highlightedCount = 0;
      return text;
    }
    const regex = new RegExp(this.searchText, 'gi');
    const matches = text.match(regex);
    this.highlightedCount = matches ? matches.length : 0;
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }
}