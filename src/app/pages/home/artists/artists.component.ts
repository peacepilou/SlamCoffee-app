import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/shared/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  type: string;
  artists: any[] = [];

  constructor(private artistService: ArtistService ) { }

  ngOnInit(): void {
    this.artistService.getAll().subscribe(datas => {
      this.artists = datas;
      console.log(this.artists);

    });
  }

}
