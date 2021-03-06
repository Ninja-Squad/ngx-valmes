import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'demo-consistency',
  templateUrl: './consistency.component.html',
  styleUrls: ['./consistency.component.scss']
})
export class ConsistencyComponent {
  form: FormGroup;
  appSnippet = require('!raw-loader!./consistency.app.snippet.html').default;
  snippet = require('!raw-loader!./consistency.snippet.html').default;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(18)]]
    });
  }

  submit(): void {}

  reset(f: FormGroupDirective): void {
    f.resetForm({ email: '', age: null });
  }
}
