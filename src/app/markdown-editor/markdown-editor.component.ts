import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-editor',
  standalone: true,
  imports: [FormsModule, MarkdownModule],
  templateUrl: './markdown-editor.component.html',
  styleUrl: './markdown-editor.component.css',
})
export class MarkdownEditorComponent {
  @Input() markdown = '';
  @Output() markdownChange = new EventEmitter<string>();

  @ViewChild('markdownTextarea') textarea!: ElementRef;

  selectedTab = 'editor';

  addFormat(formatType: string) {
    const textarea = this.textarea.nativeElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = this.markdown.substring(start, end);

    let formattedText = '';
    let cursorOffset = 2;
    switch (formatType) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `_${selectedText}_`;
        cursorOffset = 1; // For italic, we only have one underscore
        break;
      // Add more cases as needed
    }

    this.markdown =
      this.markdown.substring(0, start) +
      formattedText +
      this.markdown.substring(end);

    // If no text is selected, place the cursor in the same position
    const cursorPosition = selectedText.length
      ? start + cursorOffset + selectedText.length
      : start + cursorOffset;

    setTimeout(() => {
      textarea.setSelectionRange(cursorPosition, cursorPosition);
      textarea.focus();
    }, 0);
  }
}
