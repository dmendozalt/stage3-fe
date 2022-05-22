import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.scss'],
})
export class DashboardFormComponent implements OnInit {
  movieTypes: string[] = ['movies', 'series', 'episodes'];
  movieForm!: FormGroup;
  @Output() searchMovieEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      type: ['', Validators.required],
      searchName: ['', Validators.required],
      year: [''],
    });

    this.movieForm.get('type')?.valueChanges.subscribe((selectedValue) => {
      this.validateType(selectedValue);
    });
  }

  validateType(selectedOption: string) {
    if (selectedOption == 'series') {
      this.movieForm.get('year')?.addValidators(Validators.required);
    } else {
      this.movieForm.get('year')?.removeValidators(Validators.required);
    }
  }

  searchMovie() {
    const searchName = this.movieForm.get('searchName')?.value;
    const type = this.movieForm.get('type')?.value;
    const year = this.movieForm.get('year')?.value;
    let query = `${searchName}&t=${type}`;
    if (type === 'series') query += `&y=${year}`;
    this.searchMovieEvent.emit(query);
  }
}
