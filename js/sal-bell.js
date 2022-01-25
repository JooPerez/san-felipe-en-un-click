function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.478518, lng: -101.215245 },
        zoom: 16,
        mapId: '81b8af1966da2c93',
        mapTypeControl: false,
        fullScreenControl: false,
        streetViewControl: false
      });
      const contentString1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Clinica Dental</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://en.wikipedia.org/w/index.php?title=Uluru"><img src="img/android-chrome-512x512.png" width="150" height="150"></a></div>' +
    "<p><b>Clinica Sánchez Sólis</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Clinica Dental, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    
    "</div>";
      //Name
      //Latitude, Longitude
      //image Url
      //scaleSize width, height
      //Contenido

      const markers = [
        [
          "Clinica Sanchez Solis",
          21.476601682612447,
          -101.21584176485672,
          "img/DJPSS.svg",
          100,
          95,
          contentString1
        ],
        [
          "Clinica Sanchez Solis",
          21.476601682612448,
          -101.21584176485673,
          "img/DJPSS.svg",
          50,
          47,
          contentString1
        ],

      ];

      for(let i = 0 ; i<markers.length; i++){
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
          position: { lat:currMarker[1], lng:currMarker[2]},
          map,
          title: currMarker[0],
          icon: {
              url: currMarker[3],
              scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
          },
          animation: google.maps.Animation.DROP 
      });
      const infowindow = new google.maps.InfoWindow({
        content: currMarker[6],
      });
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
      
      }

     

    
      

}