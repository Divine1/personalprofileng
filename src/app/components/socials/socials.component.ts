import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  socialItems:any = [
    {
      title : "stackoverflow",
      url:"https://stackoverflow.com/users/3673073/divine",
      filepath: "assets/socials/logo-stackoverflow.svg"
    },
    {
      title : "github",
      url:"https://github.com/Divine1",
      filepath: "assets/socials/GitHub-Mark-120px-plus.png"
    },
    {
      title : "linkedin",
      url:"https://www.linkedin.com/in/divine6/",
      filepath: "assets/socials/LI-In-Bug.png"
    },
    {
      title : "twitter",
      url:"https://twitter.com/divine_rw",
      filepath: "assets/socials/2021Twitterlogo-blue.png"
    },
    {
      title : "youtube",
      url:"https://www.youtube.com/channel/UC8yRCp-SQLFxtCbkOvWahcA",
      filepath: "assets/socials/yt_logo_rgb_dark.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
