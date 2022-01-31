function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.478518, lng: -101.215245 },
        zoom: 14,
        mapId: '2a0deb37c9e52f63',
        mapTypeControl: false,
        fullScreenControl: false,
        streetViewControl: false
      });
      const contentString1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Cueva Longa, El Cubo</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://www.youtube.com/watch?v=D5bStJhk3wU"><img src="image/c-l-1.png" width="150" height="150"></a></div>' +
    "<p><b>Cueva Longa</b>, se encuentra en el municipio de <b>San Felipe, Guanajuato</b>, exactamente en la Sierra del Cubo. " +
    "Este lugar no es muy conocido,  " +
    "pero es bastante popular para los amantes de la aventura y la emoción. " +
    "La Cueva Longa es ideal para aquellos que aman vivir al máximo la aventura," +
    "pues a sus alrededores puedes acampar," +
    "practicar senderismo ,trekking, cañonismo, " +
    "campismo y un sin fin de actividades relacionadas " +
    "con el ecoturismo y los deportes extremos. </p>" +
    '<p>Sigue el enlace para mas informacion: Cueva Longa del Cubo, <a href="https://www.youtube.com/watch?v=D5bStJhk3wU">' +
    "https://www.youtube.com/watch?v=D5bStJhk3wU</a> " +
    "(last visited June 22, 2021).</p>" +
    "</div>" +
    
    "</div>";
    //casa hidalgo
    const contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Museo Histórico Casa de Hidalgo</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://www.youtube.com/watch?v=htKcyA0139E"><img src="image/casa-hidalgo1.png" width="150" height="150"></a></div>' +
    "<p><b>Museo Histórico Casa de Hidalgo</b>, o tambien llamada <b>La Francia Chiquita</b>, es un recinto " +
    "museográfico ubicado en San Felipe, Guanajuato. " +
    "Perteneciente a la arquitectura civil del siglo XVIII." +
    "Hoy en día el recinto está dividido de la calle a la huerta" +
    "por lo que es tanto parte particular como museo (público) y actualmente " +
    "esta edificación forma parte de la Ruta de la Independencia"+
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Todos los pertecencientes a ésta, fueron renovados por" +
    "el Instituto Nacional de Antropología e Historia " +
    "para celebrar el Bicentenario del inicio de la lucha de 1810.</p>" +
    '<p>Attribution: Casa Hidalgo, <a href="https://www.youtube.com/watch?v=htKcyA0139E">' +
    "https://www.youtube.com/watch?v=htKcyA0139E</a> " +
    "(last visited June 22, 2021).</p>" +
    "</div>" +
    
    "</div>";
    //parque de las mariposas
    const contentString3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Parque de las Mariposas</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://www.youtube.com/watch?v=6bKMq1FGk7k"><img src="image/mariposas.png" width="150" height="150"></a></div>' +
    "<p><b>Parque de las Mariposas</b>, Date un respiro y visita el parque ecológico <b>Las Mariposas</b>, Un encuentro con la naturaleza" +
    "es que lo que nos ofrece en esta ocasión el municipio de San Felipe" +
    "al norte del estado de Guanajuato. " +
    "Pues pone en contacto con nosotros un lugar reservado para el descanso, " +
    "la relajación, y la armonía de la naturaleza;" +
    "pero para aquellos más inquietos tiene reservada una dosis de aventura." +
    "Se trata del parque ecológico: “Las Mariposas”." +
    "Los encargados del lugar ofrecen comida típica,deliciosamente hecha en casa para ofrecer a los visitantes. " +
    "Diferentes guisados, elotes asados y aguas frescas dispuestas a deleitar el paladar.</p>" +
    '<p>Mas informacion: Turismo, <a href="https://www.youtube.com/watch?v=6bKMq1FGk7k">' +
    "https://www.youtube.com/watch?v=6bKMq1FGk7k</a> " +
    "(last visited June 22, 2021).</p>" +
    "</div>" +
    
    "</div>";
    //jaral
    const contentString4 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Hacienda de Jaral de Berrios</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://www.youtube.com/watch?v=9u4zTfVlq-I"><img src="image/jaralb.jpg" width="150" height="150"></a></div>' +
    "<p><b>Hacienda de Jaral de Berrios</b>, La famosa hacienda de <b>Jaral de Berrios</b>, en San Felipe Torres Mochas " +
    "Jaral de Berrios es una comunidad en el municipio de San Felipe Torres Mochas" +
    "en el estado de Guanajuato, en este maravilloso lugar vas a poder" +
    "encontrar una de las estructuras más importantes de la historia en todo el estado;" +
    'la famosa hacienda "San Diego de Jaral de Berrio"'+
    "Pero si te encantan las historias de terror y sentir un poco de adrenalina, " +
    "una visita de noche a este lugar te puede encantar," +
    "si escuchar y presenciar seres de otro plano es algo que te fascina, ESTO ES PARA TI.</p>" +
    '<p>Más Informacion: Turismo, <a href="https://www.youtube.com/watch?v=9u4zTfVlq-I">' +
    "https://www.youtube.com/watch?v=9u4zTfVlq-I</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    
    "</div>";
    //El Coporo
    const contentString5 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">El Coporo</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://www.youtube.com/watch?v=Npq4QdbUvQY"><img src="image/coporo.jpg" width="150" height="150"></a></div>' +
    '<p><b>El Coporo</b>,palabra de origen tarasco que significa <b> “sobre el gran camino o el camino grande.” </b>,' +
    "El Cóporo es un asentamiento con vestigios de una antigua ciudad mesoamericana " +
    "ya que estuvo conformado por una serie de aldeas alrededor del cerro," +
    "cuyos habitantes cultivaban maíz, calabaza, amaranto, tomatillo, frijol y chile," +
    "que formaba parte de su dieta básica, y cerca existían manantiales y arroyos que fueron venerados en la época prehispánica. " +
    "Además su ubicación al noroeste del Estado de Guanajuato,  " +
    "entre el valle y la zona de bosque, fue estratégica ya que le otorgó protección, " +
    "así como acceso a diferentes recursos.</p>" +
    '<p>Más Informacion: Turismo, <a href="https://www.youtube.com/watch?v=Npq4QdbUvQY">' +
    "https://www.youtube.com/watch?v=Npq4QdbUvQY</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    
    "</div>";
    //San Miguel Arcangel
    const contentString6 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">San Miguel Arcangel</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="https://en.wikipedia.org/w/index.php?title=Uluru"><img src="image/casa-hidalgo1.png" width="150" height="150"></a></div>' +
    "<p><b>San Miguel Arcangel</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Turismo, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
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
          "Cueva Longa El Cubo",
          21.471709,
          -101.091004,
          "svg/Cueva Longa.svg",
          100,
          95,
          contentString1
        ],
        [
          "Casa Hidalgo Museo",
          21.478434,
          -101.216849,
          "svg/Hidalgo-1.svg",
          50,
          47,
          contentString2
        ],
        [
          "Parque de las mariposas",
          21.3905003,
          -101.2725544,
          "svg/marip2.svg",
          50,
          47,
          contentString3
        ],
        [
          "Hacienda de Jaral de Berrios",
          21.6823201,
          -101.0177114,
          "svg/jaral1.svg",
          50,
          47,
          contentString4
        ],
        [
          "El Coporo",
          21.4780631,
          -101.5289762,
          "svg/coporo1.svg",
          50,
          47,
          contentString5
        ],
        [
          "San Miguelito",
          21.489169, 
          -101.220577,
          "svg/smk1.svg",
          50,
          47,
          contentString6
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