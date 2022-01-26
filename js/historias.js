function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.478518, lng: -101.215245 },
        zoom: 14,
        mapId: 'c8dacfdc48057c4',
        mapTypeControl: false,
        fullScreenControl: false,
        streetViewControl: false
      });
      //la bruja
      const contentString1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">La Bruja</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://en.wikipedia.org/w/index.php?title=Uluru"><img src="svg/bruja.svg" width="150" height="150"></a></div>' +
    "<p><b>La Bruja</b>, also referred to as <b>Ayers Rock</b>, is a large " +
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
    //la cueva de los ladrones
    const contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">La Cueva de los Ladrones</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://en.wikipedia.org/w/index.php?title=Uluru"><img src="svg/ladron.svg" width="150" height="150"></a></div>' +
    "<p><b>La cueva de los ladrones</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Leyenda, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    
    "</div>";
    //La Historia de San Felipe
    const contentString3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">La Historia de San Felipe</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://en.wikipedia.org/w/index.php?title=Uluru"><img src="svg/escudo-sanfe.svg" width="150" height="150"></a></div>' +
    "<p><b>La Historia de San Felipe</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Historia, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    
    "</div>";
    //El Panteon Municipal
    const contentString4 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">El Panteon Municipal</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://en.wikipedia.org/w/index.php?title=Uluru"><img src="svg/escudo-sanfe.svg" width="150" height="150"></a></div>' +
    "<p><b>El Panteon Municipal</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Historia, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
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
          "La bruja",
          21.479355,
          -101.218197,
          "svg/bruja.svg",
          100,
          95,
          contentString1
        ],
        [
          "Cueva de los Ladrones",
          21.466349,
          -101.092300,
          "svg/ladron.svg",
          50,
          47,
          contentString2
        ],
        [
          "La Historia de San Felipe",
          21.478860,
          -101.215649,
          "svg/escudo-sanfe.svg",
          50,
          47,
          contentString3
        ],
        [
          "El Panteon Municipal",
          21.469247,
          -101.217853,
          "svg/Panteon.svg",
          50,
          47,
          contentString4
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