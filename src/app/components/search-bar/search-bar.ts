import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar  implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    // Initialization logic if needed
  }
  onSearch(form: NgForm): void {
    this.router.navigate(['search', form.value.search]);
  }

}
