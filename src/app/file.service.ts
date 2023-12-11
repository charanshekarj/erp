import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  downloadFile(fileName: string, folder?: string): Observable<any> {
    const url = `${this.apiUrl}/download`;
    const body = { folder, fileName };

    return this.http.post(url, body, {
      responseType: 'blob',
      observe: 'response', // Ensure to capture the full response
    });
  }
}
