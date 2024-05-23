import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarkdownEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'markdown-editor';
}
