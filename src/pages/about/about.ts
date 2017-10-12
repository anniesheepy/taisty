import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import firebase from 'firebase';

declare var google;
 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation, public platform: Platform) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 

        
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
          let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: latLng
  });
    let content = "<h4>You are here!</h4>";         
 
    this.addInfoWindow(marker, content);
 
    }, (err) => {
      console.log(err);
    });
    
    

  
  }
  

  
  addMarker(){

  
    function success(position) {
         var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
            }
         var restomap = new google.maps.Map(document.getElementById("map"), mapOptions);
  
  
        var taiwanrest = firebase.database().ref('restos');
        taiwanrest.on("child_added", function(snapshot){
        var child = snapshot.val();
        console.log(child.lat);
        var restoLat = child.lat; 
        var restoLon = child.lon; 
        var restoPosition = new google.maps.LatLng(restoLat, restoLon);
        var restoName = child.name + "<br/>" + child.address+ "<br/>" + child.number;
        var infowindow = new google.maps.InfoWindow({
          content: restoName
        }); 
        var marker = new google.maps.Marker({
                position: restoPosition,
                map: restomap,
                animation: google.maps.Animation.DROP, 
        });
        marker.addListener('click', function() {
          infowindow.open(restomap, marker);
        });
    });
    }
    function error() {
        alert("Unable to retrieve your location");
    };
  
    navigator.geolocation.getCurrentPosition(success, error);
      
}
addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}
 
 
 
 
};



