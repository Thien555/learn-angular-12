import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent {

  constructor(private httpServerService: HttpServerService) {

  }

  ngOnInit(): void {
    this.httpServerService.getComments().subscribe(data => {
      console.log('data', data)
    })
  }

  postData() {
    const payload = { body: "some comment", "postId": 1 }

    this.httpServerService.postComments(payload).subscribe(data => {
      console.log('data', data)
    })
  }

}
