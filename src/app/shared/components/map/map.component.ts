import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapEmbedComponent {
  @Input() iframeUrl!: string;
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl);
  }
}
