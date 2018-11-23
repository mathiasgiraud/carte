function setup() {
  createCanvas(map);

var stores = {"type":"FeatureCollection","features":[

    {"type":"Feature","properties":{"image":"","marker-color":"#7e7e7e","marker-size":"medium","icon":"building","Layer":"ZONE","Text":"BUTOR"},"geometry":{"type":"Point","coordinates":[55.47137210285182,-20.886054773332628,0]}},
  {"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"building","Layer":"TER-00-BASE-TXT-EXISTANT","Text":"PELAGOS"},"geometry":{"type":"Point","coordinates":[55.45905291711362,-20.879907948163716,0]}},
  {"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"building","Layer":"TER-00-BASE-TXT-EXISTANT","Text":"BLEU MASCARIN"},"geometry":{"type":"Point","coordinates":[55.460660390484506,-20.88135241845903,0]}},{"type":"Feature","properties":{"image":"images/espace_ocean.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"city","Layer":"TER-00-BASE-TXT-EXISTANT","Text":"ESPACE OCEAN"},"geometry":{"type":"Point","coordinates":[55.456986374201136,-20.879149685371654,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"building","Layer":"TER-00-BASE-TXT-1_2000-T1","Text":" Tadar T1 954m2 collectifs 14 LG "},"geometry":{"type":"Point","coordinates":[55.46187456263204,-20.882204875690746,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"building","Layer":"TER-00-BASE-TXT-1_2000-T1","Text":" Voltaire T1 2651m2 collectifs  32 LG "},"geometry":{"type":"Point","coordinates":[55.46200270245649,-20.883130955595508,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T1","Text":" St Jacques 2 4310m2 espaces publics "},"geometry":{"type":"Point","coordinates":[55.459756350653365,-20.882380226491904,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T2","Text":" Butor 6- T2 707m2 intermédiaire 7 LG "},"geometry":{"type":"Point","coordinates":[55.470265164898414,-20.885944170083427,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","Layer":"TER-00-BASE-TXT-1_2000-T1","Text":" Butor 1 - T1 1890m2 collectif 23 LG ","icon":"commercial","marker-size":"medium","marker-color":"#7e7e7e"},"geometry":{"type":"Point","coordinates":[55.47163455283992,-20.886894111943164,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T2","Text":" Butor 4 -T2 2140m2 collectif 26 LG activité:3631m2 "},"geometry":{"type":"Point","coordinates":[55.472121044564865,-20.886257242376413,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T1","Text":" Vauban 1-T1 2570m2 collectif 31 LG "},"geometry":{"type":"Point","coordinates":[55.46198775351183,-20.889189504283227,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"building","Layer":"TER-00-BASE-TXT-1_2000-T2","Text":" Tadar T2-a 1059m2 collectifs 16 LG "},"geometry":{"type":"Point","coordinates":[55.46208296590594,-20.882302366914608,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T2","Text":" Ah-Soun 1-T1 SDO équipement : 2398m2 équipement polyvalent "},"geometry":{"type":"Point","coordinates":[55.45849398491363,-20.879198164009054,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"building","Layer":"TER-00-BASE-TXT-1_2000-T2","Text":" Tadar T2-b 579m2 activité: 1228m2 9LG "},"geometry":{"type":"Point","coordinates":[55.462034389290864,-20.881940351166236,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T1","Text":" Butor 3 1825m2 T1-urbanisme transitoire T2-activité: 3876m2"},"geometry":{"type":"Point","coordinates":[55.47091251800293,-20.88571823759186,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","Layer":"TER-00-BASE-TXT-1_2000-T1","Text":" Butor 2 -T1 parcelle : 3450m2 équipement : 310m2 bE¢timent principal 230m2 locaux techniques","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial"},"geometry":{"type":"Point","coordinates":[55.47217176804408,-20.886838815523607,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T2","Text":" Butor 5 -T2 1260m2 activité: 1874m2 "},"geometry":{"type":"Point","coordinates":[55.47201966588459,-20.885828581051605,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T2","Text":" Butor 7- T2 1374m2 activité-hotellerie "},"geometry":{"type":"Point","coordinates":[55.46986891344665,-20.886062770018167,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T2","Text":" Butor 7- T2 608m2 activité "},"geometry":{"type":"Point","coordinates":[55.470257573615676,-20.885686607825075,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T1","Text":" Turpin Maréchal Leclerc- T1 parcelle : 1140m2 équipement maison de la fraternité : 705m2 "},"geometry":{"type":"Point","coordinates":[55.464840086656224,-20.884450039447977,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"commercial","Layer":"TER-00-BASE-TXT-1_2000-T1","Text":" Vauban 2-T1 3025m2 activité : 5407m2 "},"geometry":{"type":"Point","coordinates":[55.46198166911822,-20.889490980018454,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"building","Layer":"TER-00-BASE-TXT-1_2000-T2","Text":" Ah-Soun 2-T2 logements "},"geometry":{"type":"Point","coordinates":[55.458127385953446,-20.879678330519443,0]}},{"type":"Feature","properties":{"image":"images/recueillement.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"cemetery","Layer":"TER-00-BASE-TXT-1_2000","Text":"parvis du  recueillement"},"geometry":{"type":"Point","coordinates":[55.46496287623533,-20.881955212456713,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"star","Layer":"TER-00-BASE-TXT-1_2000","Text":"le nouvel acces au littoral"},"geometry":{"type":"Point","coordinates":[55.46012507534952,-20.878977627737747,0]}},{"type":"Feature","properties":{"image":"images/tcsp.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"bus","Layer":"TER-00-BASE-TXT-1_2000","Text":"TCSP"},"geometry":{"type":"Point","coordinates":[55.456514975006414,-20.87995646190827,0]}},{"type":"Feature","properties":{"image":"images/tcsp.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"bus","Layer":"TER-00-BASE-TXT-1_2000","Text":"arret TCSP"},"geometry":{"type":"Point","coordinates":[55.460448238132564,-20.881873986990822,0]}},{"type":"Feature","properties":{"image":"images/sport.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"basketball","Layer":"TER-00-BASE-TXT-1_2000","Text":"terrain de sport urbain existant"},"geometry":{"type":"Point","coordinates":[55.47048908785838,-20.887140883325785,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"pitch","Layer":"TER-00-BASE-TXT-1_2000","Text":"mail des  cantines"},"geometry":{"type":"Point","coordinates":[55.469690230310356,-20.88650462253244,0]}},{"type":"Feature","properties":{"image":"images/promenadepergola.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"park2","Layer":"TER-00-BASE-TXT-1_2000","Text":"la promenade de  la pergola du littoral"},"geometry":{"type":"Point","coordinates":[55.46589202510715,-20.882562695469638,0]}},{"type":"Feature","properties":{"image":"images/pieton.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"triangle-stroked","Layer":"TER-00-BASE-TXT-1_2000","Text":"passage sous RN2 élargissement du passage piéton éclairage sécurisant"},"geometry":{"type":"Point","coordinates":[55.46594170822658,-20.88374852029609,0]}},{"type":"Feature","properties":{"image":"images/pieton.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"square-stroked","Layer":"TER-00-BASE-TXT-1_2000","Text":"passage piéton E  niveau"},"geometry":{"type":"Point","coordinates":[55.47323474307289,-20.88535649877757,0]}},{"type":"Feature","properties":{"image":"images/pocket.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"park2","Layer":"TER-00-BASE-TXT-1_2000","Text":"Pocket place promenade Vauban bancs-arbres"},"geometry":{"type":"Point","coordinates":[55.46409010894083,-20.88604197973357,0]}},{"type":"Feature","properties":{"image":"images/jeux.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"playground","Layer":"TER-00-BASE-TXT-1_2000","Text":"plateformes béton jeux-sport"},"geometry":{"type":"Point","coordinates":[55.46772459644075,-20.883958330479555,0]}},{"type":"Feature","properties":{"image":"images/podium.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"star-stroked","Layer":"TER-00-BASE-TXT-1_2000","Text":"podium couvert-pergola"},"geometry":{"type":"Point","coordinates":[55.46840606958835,-20.88395274498942,0]}},{"type":"Feature","properties":{"image":"images/sport.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"playground","Layer":"TER-00-BASE-TXT-1_2000","Text":"terrain sport"},"geometry":{"type":"Point","coordinates":[55.473720676102495,-20.885028597879597,0]}},{"type":"Feature","properties":{"image":"images/course.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"warehouse","Layer":"TER-00-BASE-TXT-1_2000","Text":"piste de course"},"geometry":{"type":"Point","coordinates":[55.4713007664086,-20.88482542825571,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"park","Layer":"TER-00-BASE-TXT-1_2000","Text":"boisements formations  paysageres existantes"},"geometry":{"type":"Point","coordinates":[55.47137500714707,-20.88465433774976,0]}},{"type":"Feature","properties":{"image":"images/promenadebutor.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"pitch","Layer":"TER-00-BASE-TXT-1_2000","Text":"promenade de la ravine"},"geometry":{"type":"Point","coordinates":[55.46542355033067,-20.885690879282627,0]}},{"type":"Feature","properties":{"image":"images/pocket.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"park2","Layer":"TER-00-BASE-TXT-1_2000","Text":"Pocket place  bancs-arbres"},"geometry":{"type":"Point","coordinates":[55.46369888140051,-20.883219566045103,0]}},{"type":"Feature","properties":{"image":"images/pocket.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"park2","Layer":"TER-00-BASE-TXT-1_2000","Text":"pocket place arbre-banc-WC publics"},"geometry":{"type":"Point","coordinates":[55.45887393514008,-20.881436071431516,0]}},{"type":"Feature","properties":{"image":"images/skate.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"square","Layer":"TER-00-BASE-TXT-1_2000","Text":"square urbain Butor skate-urbanfoot arbres-bancs"},"geometry":{"type":"Point","coordinates":[55.46549106377055,-20.88391517215067,0]}},{"type":"Feature","properties":{"image":"images/passerellebutor.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"rocket","Layer":"TER-00-BASE-TXT-1_2000","Text":"passerelle légere acier"},"geometry":{"type":"Point","coordinates":[55.46555398825986,-20.884844412889592,0]}},{"type":"Feature","properties":{"image":"images/petanque.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"park2","Layer":"TER-00-BASE-TXT-1_2000","Text":"Pocket place Tadar pétanque-arbres"},"geometry":{"type":"Point","coordinates":[55.46123347085297,-20.88206126633008,0]}},{"type":"Feature","properties":{"image":"images/sporturbain.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"playground","Layer":"TER-00-BASE-TXT-1_2000","Text":"aire de sport urbain"},"geometry":{"type":"Point","coordinates":[55.464134523518744,-20.889467041893052,0]}},{"type":"Feature","properties":{"image":"images/jeuxsquare.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"park2","Layer":"TER-00-BASE-TXT-1_2000","Text":"square Marcadet jeux-fontaine"},"geometry":{"type":"Point","coordinates":[55.46409370964978,-20.88516838654938,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"triangle-stroked","Layer":"TER-00-BASE-TXT-1_2000","Text":"passage sous RN2 élargissement du passage piéton éclairage sécurisant"},"geometry":{"type":"Point","coordinates":[55.4603865875634,-20.88007330516707,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"triangle-stroked","Layer":"TER-00-BASE-TXT-1_2000","Text":"passage sous RN2 élargissement du passage piéton éclairage sécurisant"},"geometry":{"type":"Point","coordinates":[55.45826484599585,-20.87867244467209,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"parking","Layer":"TER-00-BASE-TXT-1_2000","Text":"acces pk"},"geometry":{"type":"Point","coordinates":[55.458048085283636,-20.879259445012032,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"star","Layer":"TER-00-BASE-TXT-1_2000","Text":"place de la cité scolaire"},"geometry":{"type":"Point","coordinates":[55.470101684113956,-20.886705573316267,0]}},{"type":"Feature","properties":{"image":"images/jeuxsquare.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"park2","Layer":"TER-00-BASE-TXT-1_2000","Text":"square Bleu Mascarin arbres-ombre-jeux enfants-bancs"},"geometry":{"type":"Point","coordinates":[55.46045631266016,-20.881658580224588,0]}},{"type":"Feature","properties":{"image":"images/pieton.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"square-stroked","Layer":"TER-00-BASE-TXT-1_2000","Text":"passage piéton E  niveau acces au coeur vert familial"},"geometry":{"type":"Point","coordinates":[55.473075992917735,-20.885710972266587,0]}},{"type":"Feature","properties":{"image":"images/pieton.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"square-stroked","Layer":"TER-00-BASE-TXT-1_2000","Text":"passage piéton E  niveau"},"geometry":{"type":"Point","coordinates":[55.472601471076345,-20.88526820267148,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"park2","Layer":"TER-00-BASE-TXT-1_2000","Text":"placette Vauban-ML arbres-banc"},"geometry":{"type":"Point","coordinates":[55.46491368500854,-20.8842421820008,0]}},{"type":"Feature","properties":{"image":"images/cirqueburen.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"theatre","Layer":"TER-00-BASE-TXT-1_2000","Text":"urbanisme  transitoire"},"geometry":{"type":"Point","coordinates":[55.47087119309918,-20.885706555534057,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"building","Layer":"TER-00-BASE-TXT","Text":" Butor 1 - T1 1890m2 collectif 23 LG "},"geometry":{"type":"Point","coordinates":[55.47163455283992,-20.886894111943164,0]}},{"type":"Feature","properties":{"image":"images/chantier.jpg","marker-color":"#7e7e7e","marker-size":"medium","icon":"building","Layer":"TER-00-BASE-TXT","Text":" Butor 2 -T1 parcelle : 3450m2 -équipement vestiaires : 310m2 -locaux techniques : 230m2 "},"geometry":{"type":"Point","coordinates":[55.47217176804408,-20.886838815523607,0]}}]}

// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
Element.prototype.remove = function() {
 if (this.parentNode) {
     this.parentNode.removeChild(this);
 }
};
}
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
    style: 'mapbox://styles/mapbox/streets-v8', //dark-v8
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

var slider = document.getElementById('slider');
var sliderValue = document.getElementById('slider-value');

map.on('load', function() {
  var layers = map.getStyle().layers;
  // Find the index of the first symbol layer in the map style
  var firstSymbolId;
  for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol') {
          firstSymbolId2 = layers[i].id;
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
    map.setPaintProperty('radar-layer', 'raster-opacity', 0.4);

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


map.on('load', function () {
    var layers = map.getStyle().layers;
    // Find the index of the first symbol layer in the map style
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
           //break; 
           // A voir comment on peut choisir les layers en dessous
        }
   }
 
//    var width = 16; // The image will be 64 pixels square
//     var bytesPerPixel = 4; // Each pixel is represented by 4 bytes: red, green, blue, and alpha.
//  var data = new Uint8Array(width * width * bytesPerPixel);
//  var data = rect(width,width,16);
//  const images =[
//   {imageUrl: '360.png', id: 'image_1'},
//   {imageUrl: '360.png', id: 'image_2'},
//   map.loadImage(img.url, function(error, res) {
//     map.addImage(img.id, res)
//   }
// ]

    // for (var x = 0; x < width; x++) {
    //     for (var y = 0; y < width; y++) {
    //         var offset = (y * width + x) * bytesPerPixel;
    //         data[offset + 0] = y / width * 255; // red
    //         data[offset + 1] = x / width * 255; // green
    //         data[offset + 2] = 128;             // blue
    //         data[offset + 3] = 100;             // alpha
    //     }
    // }

    map.addSource("plan-butor", {
      type: "image",
      url: "plan_butor.png",
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
          
      }
      
  }, firstSymbolId);
 // map.setPaintProperty('img-butor', 'raster-opacity', 0.8);

  

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
        'id': 'textes',
        'type': 'symbol',

        'source': {
            'type': 'geojson',
            'data': 'json/prunel_text6.geojson'

        },
        "layout": {
           "icon-image": "{icon}-15",
            "text-field": ['format',
                ['upcase', ['get', 'Text']], { 'font-scale': .6 },
                '\n', {},
                ['downcase', ['get', 'Layer']], { 'font-scale': .4 }],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
    
 

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
           "icon-size": .5
            // "icon-image": "park-15"
          },
  
     
      }, firstSymbolId2);
  
      
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
              "line-opacity": 0.75,
              "line-width": 5
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
          } else {
              window.clearInterval(timer);
           
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
      // var details = listing.appendChild(document.createElement('div'));
      // details.innerHTML = prop.Layer;
      // if (prop. phone) {
      //   details.innerHTML += ' &middot; ' + prop.phoneFormatted;
      // }



      link.addEventListener('click', function(e){
        // Update the currentFeature to the store associated with the clicked link
        var clickedListing = data.features[this.dataPosition];

        // 1. Fly to the point
        flyToStore(clickedListing);

        // 2. Close all other popups and display popup for clicked store
        createPopUp(clickedListing);

        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');

        if (activeItem[0]) {
           activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');

      });
    }
  }

  console.log("draw");
}

// var mapimg;

// var clat = -20.8856698;//-21.390078462744334;55.4420644,-20.8786698
// var clon = 55.4620644;//55.0300146124629;

// var ww = 1024;
// var hh = 800;

// var zoom = 15;
// var data,birds;

// function preload() {
//   // The clon and clat in this url are edited to be in the correct order.
//   mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
//     clon + ',' + clat + ',' + zoom + '/' +
//     ww + 'x' + hh +
//     '?access_token=pk.eyJ1IjoiY29kaW5ndHJhaW4iLCJhIjoiY2l6MGl4bXhsMDRpNzJxcDh0a2NhNDExbCJ9.awIfnl6ngyHoB3Xztkzarw');
//   // earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv');
//   data = loadJSON("pci-97411-batiment.json");
// }

// function mercX(lon) {
//   lon = radians(lon);
//   var a = (256 / PI) * pow(2, zoom);
//   var b = lon + PI;
//   return a * b;
// }

// function mercY(lat) {
//   lat = radians(lat);
//   var a = (256 / PI) * pow(2, zoom);
//   var b = tan(PI / 4 + lat / 2);
//   var c = PI - log(b);
//   return a * c;
// }


// function setup() {
//   createCanvas(ww, hh);
//   translate(width / 2, height / 2);
//   imageMode(CENTER);
//   image(mapimg, 0, 0);
//   birds = data["features"];
//   const nb = data["features"].length;


//   var cx = mercX(clon);
//   var cy = mercY(clat);

//   for (var i = 6000; i <14000; i=i+1) {
//     var pos=birds[i];
  
//   var type=pos.properties.type;

//   var posi=pos.geometry.coordinates[0][0];
//    for (var j = 0; j < posi.length-1; j++) {
 
//   var annee=pos.properties.DATE_OBS;
//   var pp=posi[j];
//   var ppn=posi[j+1];
//   // log de l'objet position
//   //pp.forEach(funky);
//   // console.log(posi.length);
  

  
//   var splits = annee.split("-", 1);
//   var ann=parseFloat(splits);
//   //console.log(i);
//   var ann2=map(ann,2003,2019,70,255);
  
//   var lon=pp[0];
//   var lat=pp[1];
  
//   var lonn=ppn[0];
//   var latn=ppn[1];
//   var mag = 5;
//   var x = mercX(lon) - cx;
//   var y = mercY(lat) - cy;
//   var xn = mercX(lonn) - cx;
//   var yn = mercY(latn) - cy;
//   // This addition fixes the case where the longitude is non-zero and
//   // points can go off the screen.
// //   if(x < - width/2) {
// //     x += width;
// //   } else if(x > width / 2) {
// //     x -= width;
  
// // }
// // if(xn < - width/2) {
// //   xn += width;
// // } else if(xn > width / 2) {
// //   xn -= width;

// // }
//     // mag = pow(10, mag);
//     // mag = sqrt(mag);
//     // var magmax = sqrt(pow(10, 10));
//     // var d = map(mag, 0, magmax, 0, 180);
//     stroke(ann2, ann2,0);
//     fill(random(125), random(125), 255, 200);
//     //ellipse(x, y, 2, 2);
//     strokeWeight(1);
//    line(x,y,xn,yn);
//    rect()
//   }
//   }
// }
