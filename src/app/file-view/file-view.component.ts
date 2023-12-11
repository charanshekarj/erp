import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss']
})
export class FileViewComponent implements OnInit {
  fileName: string;
  fileContent: Blob;

  constructor(private fileService: FileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const folder = params['folder'];
      const fileName = params['fileName'];

      this.fileName = fileName;
      console.log(folder);

      this.fileService.downloadFile(fileName, folder)
        .subscribe(
          (blob: any) => {
            this.fileContent = blob.body;
            this.downloadFile(blob.body);
          },
          (error) => {
            // Handle error if download fails
            console.error('Download error:', error);
          }
        );
    });
  }

  private downloadFile(blob: Blob): void {
    if (blob instanceof Blob) {
      console.log('Received Blob:', blob);

      const blobUrl = window.URL.createObjectURL(blob);

      if (blobUrl) {
        const downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;
        downloadLink.download = this.fileName;

        // Simulate a click on the invisible download link
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } else {
        console.error('Failed to create object URL from Blob.');
      }
    } else {
      console.error('Received data is not a Blob:', blob);
    }
  }
}
