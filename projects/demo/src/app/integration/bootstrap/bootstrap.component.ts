import { Component } from '@angular/core';

@Component({
  selector: 'demo-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent {

  cssSnippet = require('!raw-loader!./bootstrap.css.snippet.css').default;
  appSnippet = require('!raw-loader!./bootstrap.app.snippet.ts-like').default;
  formSnippet = require('!raw-loader!./bootstrap.snippet.html').default;
}
