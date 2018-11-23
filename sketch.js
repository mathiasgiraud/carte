function setup() {
  createCanvas(map);


// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
Element.prototype.remove = function() {
 if (this.parentNode) {
     this.parentNode.removeChild(this);
 }
};
}


mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aGlhc2ciLCJhIjoiY2ptdGxoazUxMGZ1aDNwbXpudzVjNnVodSJ9.LU31X0Z_I0X83qcdhppwsg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9', //dark-v8
    center: [55.463851105175855,-20.884756416665042],
    // pitch: 45,
    // bearing: -17.6,
    zoom: 15
 

});



//-----------
// CARTE FOND
//-----------

var frameCount = 2;
var currentImage = 0;

function getPath() {
    return "anim_" + currentImage + ".png";
}
//transparence
var slider = document.getElementById('slider');
var sliderValue = document.getElementById('slider-value');

map.on('load', function() {
  var layers = map.getStyle().layers;
  // Find the index of the first symbol layer in the map style
  var firstSymbolId;
  for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol') {
          firstSymbolId2 = layers[i].id;
          console.log(firstSymbolId2);
          break;
      }
  }

    map.addSource("radar", {
        type: "image",
        url: getPath(),
        coordinates: [
            [55.454381280841823, -20.876141836236069],
            [55.479641660797306, -20.876141836236069],
            [55.479641660797306,-20.8933],
            [55.454381280841823,-20.8933]
        ]
    });
    map.addLayer({
        id: "radar-layer",
        "type": "raster",
        "source": "radar",
        "paint": {
            "raster-fade-duration": 0
            
        }
        
    }, firstSymbolId2);
    map.setPaintProperty('radar-layer', 'raster-opacity', 0.0);

  //   slider.addEventListener('input', function(e) {
  //     // Adjust the layers opacity. layer here is arbitrary - this could
  //     // be another layer name found in your style or a custom layer
  //     // added on the fly using `addSource`.
  //     //Valeur opacité dynamique parseInt(e.target.value, 10) / 100)
  //     map.setPaintProperty('radar-layer', 'raster-opacity', 5);

  //     // Value indicator
  //     sliderValue.textContent = e.target.value + '%';
  // });

  //   setInterval(function() {
  //       currentImage = (currentImage + 1) % frameCount;
  //       map.getSource("radar").updateImage({ url: getPath() });
  //   }, 200);
});

map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            // break;
        }
    }

    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
        }
    }, labelLayerId);
});

map.on('load', function () {
    var layers = map.getStyle().layers;
    // Find the index of the first symbol layer in the map style
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            console.log(firstSymbolId);
           //break; 
           // A voir comment on peut choisir les layers en dessous
        }
   }
 


    map.addSource("plan-butor", {
      type: "image",
      url: "plan_butor2.png",
      coordinates: [
          [55.454381280841823, -20.876141836236069],
          [55.479641660797306, -20.876141836236069],
          [55.479641660797306,-20.8933],
          [55.454381280841823,-20.8933]
      ]
  });
  map.addLayer({
      id: "img-butor",
      "type": "raster",
      "source": "plan-butor",
      "paint": {
          // "raster-fade-duration": 0
             "raster-opacity": 0
          
      }
      
  }, firstSymbolId);



        map.addLayer({
        'id': 'bati-T2',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'json/T2_BATI_H.geojson'
        },
        'layout': {},
        'paint': {
            'fill-color': ['get', 'fill'],
            'fill-opacity': 0.4
        }
   
    }, firstSymbolId);

    map.addLayer({
        'id': 'urban-areas-fill',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'json/prunelT12.geojson'
        },
        'layout': {},
        // Remplacement des couleurs en fonction du nom des calques
        'paint': { 'fill-color': ['match', ['get', 'Layer'], // get the property
                     'TER-04-VEG-H-VEGETATION SOL PROJET', '#379000',              // if 'GP' then yellow
                     'TER-02-SOL-H-QUAI TCSP', 'black',               // if 'XX' then black 
                     'TER-02-SOL-H-SOL-COULEE VERTE','green',
                     'TER-02-SOL-H-CACHE ESPACE PUBLICS','blue',
                     'TER-02-SOL-H-SOL-PAVE','red',
                     'TER-04-VEG-H-VEGETATION LITTORAL PRO','green',

                     'white'],                     // white otherwise
     
         'fill-opacity'	: ['match', ['get', 'Layer'], // get the property
                     'TER-04-VEG-H-VEGETATION SOL PROJET', 0.5,              // if 'GP' then yellow
                     'TER-02-SOL-H-QUAI TCSP', 0.2,               // if 'XX' then black 
                     'TER-02-SOL-H-SOL-COULEE VERTE',0.7,
                     'TER-02-SOL-H-CACHE ESPACE PUBLICS',0.12,
                     'TER-02-SOL-H-SOL-PAVE',0.25,
                     'TER-04-VEG-H-VEGETATION LITTORAL PRO',0.8,

                     0.2] 
        },
  
    }, firstSymbolId);
    

    map.addLayer({
      'id': 'labels_butor',
      'type': 'symbol',

      'source': {
          'type': 'geojson',
          'data': 'json/labels_butor.geojson'

      },
      "layout": {
         "icon-image": "{marker-symbol}-15",
          "text-field": ['format',
              ['upcase', ['get', "Numero"]], { 'font-scale': 2 },
              '\n', {},
              ['downcase', ['get', 'Text']], { 'font-scale': .6 }],
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top",
          
      },
      paint: {
        "text-color": "#2f2f6f"
      }
  });
 

// Display the Prunel zones
    map.addLayer({
      'id': 'zones',
      'type': 'fill',
      'source': {
          'type': 'geojson',
          'data': 'json/zones.geojson'
      },
      'layout': {},
      'paint': {
        'fill-color': ['get', 'fill'],
          'fill-opacity': 0.4
      }
 
  }, firstSymbolId);




    map.addLayer({
        'id': 'limites-T1',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'json/T1_BATI_LIMITE.geojson'
        },
        'layout': {},
        'paint': {
            'fill-color': '#000',
            'fill-opacity': 0.8
        }
   
    }, firstSymbolId);

    });
    



  // This adds the data to the map
  map.on('load', function (e) {
    // This is where your '.addLayer()' used to be, instead add only the source without styling a layer
    map.addSource("places", {
      "type": "geojson",
      "data": stores
    });
    // Initialize the list
    buildLocationList(stores);

  });
  // When a click event occurs on a feature in the states layer, open a popup at the
    // location of the click, with description HTML from its properties.
    // .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>' + '<p><img src="'marker.properties.image'" alt="'An Image of marker.properties.title'"></p>'))
    map.on('click', 'bati-areas-fill', function (e) {
      
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.EntityHandle)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'bati-areas-fill', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'definir', function () {
        map.getCanvas().style.cursor = '';
    });


  // This is where your interactions with the symbol layer used to be
  // Now you have interactions with DOM markers instead
  stores.features.forEach(function(marker, i) {
    // Create an img element for the marker
    var el = document.createElement('div');
    el.id = "marker-" + i;
    el.className = 'marker';
    console.log(el.id);
    // Add markers to the map at all points
    new mapboxgl.Marker(el, {offset: [0, -0]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

    el.addEventListener('click', function(e){
        // 1. Fly to the point
        flyToStore(marker);

        // 2. Close all other popups and display popup for clicked store
      
        createPopUp(marker);
        

        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');

        e.stopPropagation();
        if (activeItem[0]) {
           activeItem[0].classList.remove('active');
        }

        var listing = document.getElementById('listing-' + i);
        listing.classList.add('active');

    });
  });

  

  map.on('load', function() {
    var layers = map.getStyle().layers;
    // Find the index of the first symbol layer in the map style
    var firstSymbolId2;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId2 = layers[i].id;
           //break; 
           // A voir comment on peut choisir les layers en dessous
        }
   }
    map.loadImage('arbre2.png', function(error, image) {
    //     if (error) throw error;
        map.addImage('cat', image);
        map.addLayer({
          'id': 'arbres',
          'type': 'symbol',
          'source': {
              'type': 'geojson',
              'data': 'json/arbres.geojson'
          },
          'layout': { 
           // "icon-allow-overlap": true,
           // "icon-size": "large",
           "icon-image": "cat",
           "icon-size": .55
            // "icon-image": "park-15"
          },
  
     
      }, );
  
map.addLayer({
        'id': 'textes',
        'type': 'symbol',

        'source': {
            'type': 'geojson',
            'data': 'json/prunel_text6.geojson'

        },
        "layout": {
           "icon-image": "star-15",
            "text-field": ['format',
                ['upcase', ['get', 'Text']], { 'font-scale': .7 },
                '\n', {},
                ['downcase', ['get', 'Layer']], { 'font-scale': .4 }],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    },);
    
 
      
    });
});


map.on('load', function () {
  // We use D3 to fetch the JSON here so that we can parse and use it separately
  // from GL JS's use in the added source. You can use any request method (library
  // or otherwise) that you want.
  d3.json('json/route.json', function(err, data) {
      if (err) throw err;

      // save full coordinate list for later
      var coordinates = data.features[0].geometry.coordinates;

      // start by showing just the first coordinate
      data.features[0].geometry.coordinates = [coordinates[0]];

      // add it to the map
      map.addSource('trace', { type: 'geojson', data: data });
      map.addLayer({
          "id": "trace",
          "type": "line",
          "source": "trace",
          "paint": {
              "line-color": "yellow",
              "line-opacity": 0.85,
              "line-width": 4
          }
      });
      map.addSource('mob', { type: 'geojson', data: 'json/mob.geojson' });
      map.addLayer({
        "id": "mob",
        "type": "line",
        "source": "mob",
        "paint": { 'line-color': ['match', ['get', 'Layer'], // get the property
            '0', 'white',             

            'white'],                     // white otherwise
            "line-opacity": 0.85,
            "line-width": 1
        }
    });


    //try* // add it to the map
      map.addSource('cadastre', { type: 'geojson', data: 'json/CADASTRE.json' });
      map.addLayer({
          "id": "cadastre",
          "type": "fill",
          "source": "cadastre",
          "paint": {
            //   "line-color": "yellow",
            //   "line-opacity": 0.85,
            //   "line-width": 1
          }
      });

      // setup the viewport
      // map.jumpTo({ 'center': coordinates[0], 'zoom': 14 });
      // map.setPitch(30);

      // on a regular basis, add more coordinates from the saved list and update the map
      var i = 0;
      var timer = window.setInterval(function() {
          if (i < coordinates.length) {
              data.features[0].geometry.coordinates.push(coordinates[i]);
              map.getSource('trace').setData(data);
              //map.panTo(coordinates[i]);
              i++;
            //   if (i+1 == coordinates.length) {
            //       i=0;}
          } else {
             // window.clearInterval(timer);
            //   data.features[0].geometry.coordinates = [];  
            //   map.getSource('trace').setData(data); 
            //   i=0;
            //   console.log(i)      
          }
      }, 100);
  });
});


map.on('mousemove', function (e) {
  document.getElementById('info').innerHTML =  JSON.stringify(e.point) + '////////' +       JSON.stringify(e.lngLat);
      // e.point is the x, y coordinates of the mousemove event relative
      // to the top-left corner of the map
     
      // e.lngLat is the longitude, latitude geographical position of the event

});
//Fonctions pour la table des liens

  function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 16.4
      });
  }

  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();


  
      //  if(stores.features[i].properties.Text=="BUTOR"){
    var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML(
            '<h4>' + currentFeature.properties.Text + '</h4>'  + '<p><img src="'+currentFeature.properties.image+'"></p>')
         
          .addTo(map);
 
}


  function buildLocationList(data) {
    for (i = 0; i < data.features.length; i++) {
      var currentFeature = data.features[i];
      var prop = currentFeature.properties;

      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = "listing-" + i;

      var link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.dataPosition = i;
      link.innerHTML = prop.Text;
      // Pour afficher les détails dans la barre de menus!
      var details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.Layer;
      // if (prop. phone) {
      //   details.innerHTML += ' &middot; ' + prop.phoneFormatted;
      // }



      link.addEventListener('click', function(e){
        // Update the currentFeature to the store associated with the clicked link
        var clickedListing = data.features[this.dataPosition];

        // 1. Fly to the point
        flyToStore(clickedListing);

        // 2. Close all other popups and display popup for clicked store
        // Modification des transparences en fonction des opacités
       if (clickedListing.properties.Layer!="ZONE"){createPopUp(clickedListing);
       map.setPaintProperty('radar-layer', 'raster-opacity', 0.4);
      map.setPaintProperty('img-butor', 'raster-opacity', 0.0);
       } else  {
           map.setPaintProperty('radar-layer', 'raster-opacity', 0.1);
          map.setPaintProperty('img-butor', 'raster-opacity', 0.9);
        }
        console.log(clickedListing.properties.Text);

        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');

        if (activeItem[0]) {
           activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');

      });
    }
  }
  
}
