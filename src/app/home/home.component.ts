import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  cardsData=[
    {
      title:"HTML",
      image:"https://repository-images.githubusercontent.com/134285701/635de980-586d-11ea-9220-1a3211239c30",
      description:"It is used to create web pages"
    },
    {
      title:'CSS',
      image:'https://sabe.io/classes/css/hero.png',
      description:'It is sued to style HTML elements'
    },
    {
      title:'JavaScript',
      image:'https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
      description:'It makes web pages alive'
    },
    {
      title:"HTML",
      image:"https://repository-images.githubusercontent.com/134285701/635de980-586d-11ea-9220-1a3211239c30",
      description:"It is used to create web pages"
    },
    {
      title:'CSS',
      image:'https://sabe.io/classes/css/hero.png',
      description:'It is sued to style HTML elements'
    },
    {
      title:'JavaScript',
      image:'https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
      description:'It makes web pages alive'
    },
    {
      title:"HTML",
      image:"https://repository-images.githubusercontent.com/134285701/635de980-586d-11ea-9220-1a3211239c30",
      description:"It is used to create web pages"
    },
    {
      title:'CSS',
      image:'https://sabe.io/classes/css/hero.png',
      description:'It is sued to style HTML elements'
    },
    {
      title:'JavaScript',
      image:'https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
      description:'It makes web pages alive'
    }
  ]


  itemsCount:number=0;
  receivedItem(){
    this.itemsCount++;
  }

}
