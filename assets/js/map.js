// import 'ol/ol.css';
// import 'ol-layerswitcher/dist/ol-layerswitcher.css';
// import { Map, View, Overlay } from 'ol';
// import { Tile, Image, Group, Vector } from 'ol/layer';
// import { OSM, ImageWMS, BingMaps, StadiaMaps } from 'ol/source';
// import VectorSource from 'ol/source/Vector';
// import { GeoJSON } from 'ol/format';
// import { fromLonLat } from 'ol/proj';
// import { ScaleLine, FullScreen, MousePosition, ZoomSlider } from 'ol/control';
// import LayerSwitcher from 'ol-layerswitcher';
// import { createStringXY } from 'ol/coordinate';
// import { Style, Stroke } from 'ol/style';
//
// let osm = new Tile({
//     type:"base",
//     title: "openStreetMap",
//     visible: true,
//     source: new OSM()
// });
//
// let areaOfIntrest = new Image({
//
//     title: "AreaOfIntrest",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:Group_18', 'STYLES': 'polygon' }
//     }),
//     visible: false
// });
//
// let dtm = new Image({
//
//     title: "DTM",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:dtm'}
//     }),
//     visible: false
// });
//
// let ndvi = new Image({
//
//     title: "NDVI",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:ndvi', 'STYLES': 'ndvi' }
//     }),
//     visible: false
// });
//
// let aspect = new Image({
//
//     title: "Aspect",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:aspect', 'STYLES': 'aspect' }
//     }),
//     visible: false
// });
//
// let dusaf = new Image({
//
//     title: "DUSAF",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:dusaf', 'STYLES': 'dusaf' }
//     }),
//     visible: false
// });
//
// var faults = new Image({
//
//     title: "Faults",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:faults', 'STYLES': 'gisgeoserver_17:faults' }
//     }),
//     visible: false
// });
//
// let plan = new Image({
//
//     title: "Plan",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:plan', 'STYLES': 'plan' }
//     }),
//     visible: false
// });
//
// let profile = new Image({
//
//     title: "Profile",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:profile', 'STYLES': 'profile' }
//     }),
//     visible: false
// });
//
// var rivers = new Image({
//
//     title: "Rivers",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:rivers', STYLES: 'gisgeoserver_17:rivers' }
//     }),
// });
//
// var roads = new Image({
//
//     title: "Roads",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:roads', 'STYLES': 'gisgeoserver_17:roads' }
//     }),
//     visible: false
// });
//
// let slope = new Image({
//
//     title: "Slope",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:slope', 'STYLES': 'slope' }
//     }),
//     visible: false
// });
//
// var nolandSlideZone = new Image({
//
//     title: "NoLandslideZone",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:LZ_NLZ', 'STYLES': 'gisgeoserver_17:NLZ' }
//     }),
//     opacity: 1,
//     visible: false
// });
//
// var confidence = new Image({
//
//     title: "Confidence",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:confidence', 'STYLES': 'gisgeoserver_17:confidence' }
//     }),
//     visible: false
// });
//
// var landslideSusceptibilityMap = new Image({
//
//     title: "LandslideSusceptibilityMap",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:LandslideSusceptibilityMap', 'STYLES': 'gisgeoserver_17:LandslideSusceptibilityMap' }
//     }),
//     visible: true
// });
// var population = new Image({
//
//     title: "Population",
//     source: new ImageWMS({
//         url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
//         params: { 'LAYERS': 'gisgeoserver_17:population', STYLES: 'gisgeoserver_17:population' }
//     }),
//     visible: false
// });
//
//
// //Create the layer groups and add the layers to them
// let basemapLayers = new Group (
//     {
//         title: "Base Map",
//         layers: [osm
//         ] }
// )
// let overlayLayers = new Group (
//     {
//         title: "Overlay Layers",
//         layers: [areaOfIntrest
//         ] }
// )
//
// let processingLayers = new Group (
//     {
//         title: "Processing layers",
//         layers: [
//             dtm,
//             ndvi,
//             aspect,
//             dusaf,
//             faults,
//             plan,
//             profile,
//             rivers,
//             roads,
//             slope
//         ] }
// )
//
// let results = new Group (
//     {
//         title: "Results",
//         layers: [nolandSlideZone,
//             confidence,
//             landslideSusceptibilityMap,
//             population
//         ] }
// )
//
// // Map Initialization
// let map = new Map({
//     target: document.getElementById('map'),
//     layers: [basemapLayers, overlayLayers, processingLayers, results],
//     view: new View({
//         center: fromLonLat([9.787255, 45.755654]),
//         zoom: 11.5
//     })
// });
// // 45.7556546134453, 9.7872553042986
// // Add the map controls:
// map.addControl(new ScaleLine()); //Controls can be added using the addControl() map function
// map.addControl(new FullScreen());
// map.addControl(new ZoomSlider);
// map.addControl(
//     new MousePosition({
//         coordinateFormat: createStringXY(4),
//         projection: 'EPSG:4326',
//         className: 'custom-control',
//         placeholder: '0.0000, 0.0000'
//     })
//
// );
//
// // Add the Layer Switcher control
// var layerSwitcher = new LayerSwitcher({
//     activationMode: 'click',
//     startActive: false,
//     tipLabel: 'Legend', // Optional label for button
//     collapseTipLabel: 'Collapse legend', // Optional label for button
//     target: document.getElementById('layer-switcher')
// });
// map.addControl(layerSwitcher);
// // document.querySelector('.ol-layerswitcher').classList.add('custom-layer-switcher');
//
// //OPTIONAL
// //Add the Bing Maps layers
// var BING_MAPS_KEY = "AqbDxABFot3cmpxfshRqLmg8UTuPv_bg69Ej3d5AkGmjaJy_w5eFSSbOzoHeN2_H";
// var bingRoads = new Tile({
//     title: 'Bing Maps—Roads',
//     type: 'base',
//     visible: false,
//     source: new BingMaps({
//         key: BING_MAPS_KEY,
//         imagerySet: 'Road'
//     })
// });
// var bingAerial = new Tile({
//     title: 'Bing Maps—Aerial',
//     type: 'base',
//     visible: false,
//     source: new BingMaps({
//         key: BING_MAPS_KEY,
//         imagerySet: 'Aerial'
//     })
// });
// basemapLayers.getLayers().extend([bingRoads, bingAerial]);
//
//
// //Add the Stadia Maps layers
// var stadiaWatercolor = new Tile({
//     title: "Stadia Watercolor",
//     type: "base",
//     visible: false,
//     source: new StadiaMaps({
//         layer: 'stamen_watercolor'
//     })
// })
//
// var stadiaToner = new Tile({
//     title: "Stadia Toner",
//     type: "base",
//     visible: false,
//     source: new StadiaMaps({
//         layer: 'stamen_toner'
//     })
// })
// basemapLayers.getLayers().extend([stadiaWatercolor, stadiaToner]);
//
//
// // // Opacity Control
// // document.getElementById('opacity').addEventListener('input', function () {
// //     let opacity = parseFloat(this.value);
// //     NolandSlideZone.setOpacity(opacity);
// // });
//
// //Add the WFS layer
// let vectorSource = new VectorSource({});
// const vectorLayer = new Vector({
//     title: "Population",
//     source: vectorSource,
//     zIndex: 10
// });
//
// overlayLayers.getLayers().extend([vectorLayer]);
//
// // This allows to use the function in a callback!
// function loadFeatures(response) {
//     vectorSource.addFeatures(new GeoJSON().readFeatures(response))
// }
// // This is not a good practice, but works for the jsonp.
// window.loadFeatures = loadFeatures;
//
// var base_url = "https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_17/ows?";
// var wfs_url = base_url;
// wfs_url += "service=WFS&"
// wfs_url += "version=2.0.0&"
// wfs_url += "request=GetFeature&"
// wfs_url += "typeName=gisgeoserver%5F17%3Apopulation&"
// wfs_url += "outputFormat=text%2Fjavascript&"
// wfs_url += "srsname=EPSG:3857&"
// wfs_url += "format_options=callback:loadFeatures"
//
// // This will request the WFS layer once the map is rendered.
// // Uses the map event 'postrender': https://openlayers.org/en/v8.2.0/apidoc/module-ol_MapEvent-MapEvent.html#event:postrender
// map.once('postrender', (event) => {
//     // Load the WFS layer
//     $.ajax({ url: wfs_url, dataType: 'jsonp' });
// });
//
// //Add the code for the Pop-up
// var container = document.getElementById('popup');
// var content = document.getElementById('popup-content');
// var closer = document.getElementById('popup-closer');
//
// var popup = new Overlay({
//     element: container
// });
// map.addOverlay(popup);
//
// // This ensures that JQuery ($) is already available in the page.
// $(document).ready(function () {
//     map.on('singleclick', function (event) {
//         //This iterates over all the features that are located on the pixel of the click (can be many)
//         var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
//             return feature;
//         });
//
//         //If there is a feature, open the popup by setting a position to it and put the data from the feature
//         if (feature != null) {
//             var pixel = event.pixel;
//             var coord = map.getCoordinateFromPixel(pixel);
//             popup.setPosition(coord);
//             content.innerHTML =
//                 '<h5>Colombia Water Areas</h5><br><b>Name: </b>' +
//                 feature.get('NAME') +
//                 '</br><b>Description: </b>' +
//                 feature.get('HYC_DESCRI');
//         } else {
//             //Only if the colombiaRoads layer is visible, do the GetFeatureInfo request
//             if (colombiaRoads.getVisible()) {
//                 var viewResolution = (map.getView().getResolution());
//                 var url = colombiaRoads.getSource().getFeatureInfoUrl(event.coordinate, viewResolution, 'EPSG:3857', { 'INFO_FORMAT': 'text/html' });
//
//                 if (url) {
//                     var pixel = event.pixel;
//                     var coord = map.getCoordinateFromPixel(pixel);
//                     popup.setPosition(coord);
//                     //We do again the AJAX request to get the data from the GetFeatureInfo request
//                     $.ajax({ url: url })
//                         .done((data) => {
//                             //Put the data of the GetFeatureInfo response inside the pop-up
//                             //The data that arrives is in HTML
//                             content.innerHTML = data;
//                         });
//                 }
//             }
//         }
//     });
// });
//
//
//
//
//
// // The click event handler for closing the popup.
// closer.onclick = function () {
//     popup.setPosition(undefined);
//     closer.blur();
//     return false;
// };
//
//
// // Adding map event for pointermove
// map.on('pointermove', function (event) {
//     var pixel = map.getEventPixel(event.originalEvent);
//     var hit = map.hasFeatureAtPixel(pixel);
//     map.getTarget().style.cursor = hit ? 'pointer' : '';
// });


import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import { Map, View, Overlay } from 'ol';
import { Tile, Image, Group, Vector } from 'ol/layer';
import { OSM, ImageWMS, BingMaps, StadiaMaps } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import { GeoJSON } from 'ol/format';
import { fromLonLat } from 'ol/proj';
import { ScaleLine, FullScreen, MousePosition, ZoomSlider } from 'ol/control';
import LayerSwitcher from 'ol-layerswitcher';
import { createStringXY } from 'ol/coordinate';
import { Style, Stroke } from 'ol/style';

// Define base map and other layers
let osm = new Tile({
    type: "base",
    title: "OpenStreetMap",
    visible: true,
    source: new OSM()
});

let areaOfIntrest = new Image({
    title: "AreaOfIntrest",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:Group_18', 'STYLES': 'polygon' }
    }),
    visible: false
});

let dtm = new Image({
    title: "DTM",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:dtm' }
    }),
    visible: false
});

let ndvi = new Image({
    title: "NDVI",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:ndvi', 'STYLES': 'ndvi' }
    }),
    visible: false
});

let aspect = new Image({
    title: "Aspect",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:aspect', 'STYLES': 'aspect' }
    }),
    visible: false
});

let dusaf = new Image({
    title: "DUSAF",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:dusaf', 'STYLES': 'dusaf' }
    }),
    visible: false
});

var faults = new Image({
    title: "Faults",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:faults', 'STYLES': 'gisgeoserver_17:faults' }
    }),
    visible: false
});

let plan = new Image({
    title: "Plan",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:plan', 'STYLES': 'plan' }
    }),
    visible: false
});

let profile = new Image({
    title: "Profile",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:profile', 'STYLES': 'profile' }
    }),
    visible: false
});

var rivers = new Image({
    title: "Rivers",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:rivers', 'STYLES': 'gisgeoserver_17:rivers' }
    }),
    visible: false
});

var roads = new Image({
    title: "Roads",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:roads', 'STYLES': 'gisgeoserver_17:roads' }
    }),
    visible: false
});

let slope = new Image({
    title: "Slope",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:slope', 'STYLES': 'slope' }
    }),
    visible: false
});

var nolandSlideZone = new Image({
    title: "NoLandslideZone",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:LZ_NLZ', 'STYLES': 'gisgeoserver_17:NLZ' }
    }),
    visible: false
});

var confidence = new Image({
    title: "Confidence",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:confidence', 'STYLES': 'gisgeoserver_17:confidence' }
    }),
    visible: false
});

var landslideSusceptibilityMap = new Image({
    title: "LandslideSusceptibilityMap",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:LandslideSusceptibilityMap', 'STYLES': 'gisgeoserver_17:LandslideSusceptibilityMap' }
    }),
    visible: true
});

var population = new Image({
    title: "Population",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:population', 'STYLES': 'gisgeoserver_17:population' }
    }),
    visible: false
});

// Create the layer groups and add the layers to them
let basemapLayers = new Group({
    title: "Base Map",
    layers: [osm]
});

let overlayLayers = new Group({
    title: "Overlay Layers",
    layers: [areaOfIntrest]
});

let processingLayers = new Group({
    title: "Processing layers",
    layers: [
        dtm,
        ndvi,
        aspect,
        dusaf,
        faults,
        plan,
        profile,
        rivers,
        roads,
        slope
    ]
});

let results = new Group({
    title: "Results",
    layers: [
        nolandSlideZone,
        confidence,
        landslideSusceptibilityMap,
        population
    ]
});

// Map Initialization
let map = new Map({
    target: 'map',
    layers: [basemapLayers, overlayLayers, processingLayers, results],
    view: new View({
        center: fromLonLat([9.787255, 45.755654]),
        zoom: 11.5
    })
});

// Add the map controls
map.addControl(new ScaleLine());
map.addControl(new FullScreen());
map.addControl(new ZoomSlider());
map.addControl(new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-control',
    placeholder: '0.0000, 0.0000'
}));

// Add the Layer Switcher control
var layerSwitcher = new LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    tipLabel: 'Legend', // Optional label for button
    collapseTipLabel: 'Collapse legend', // Optional label for button
    target: document.getElementById('layer-switcher')
});
map.addControl(layerSwitcher);

// OPTIONAL: Add the Bing Maps layers
var BING_MAPS_KEY = "AqbDxABFot3cmpxfshRqLmg8UTuPv_bg69Ej3d5AkGmjaJy_w5eFSSbOzoHeN2_H";
var bingRoads = new Tile({
    title: 'Bing Maps—Roads',
    type: 'base',
    visible: false,
    source: new BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Road'
    })
});
var bingAerial = new Tile({
    title: 'Bing Maps—Aerial',
    type: 'base',
    visible: false,
    source: new BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Aerial'
    })
});
basemapLayers.getLayers().extend([bingRoads, bingAerial]);

// Add the Stadia Maps layers
var stadiaWatercolor = new Tile({
    title: "Stadia Watercolor",
    type: "base",
    visible: false,
    source: new StadiaMaps({
        layer: 'stamen_watercolor'
    })
});

var stadiaToner = new Tile({
    title: "Stadia Toner",
    type: "base",
    visible: false,
    source: new StadiaMaps({
        layer: 'stamen_toner'
    })
});
basemapLayers.getLayers().extend([stadiaWatercolor, stadiaToner]);

// Opacity Control (optional)
// document.getElementById('opacity').addEventListener('input', function () {
//     let opacity = parseFloat(this.value);
//     nolandSlideZone.setOpacity(opacity);
// });

// Add the WFS layer
let vectorSource = new VectorSource({});
const vectorLayer = new Vector({
    title: "Population",
    source: vectorSource,
    zIndex: 10
});
overlayLayers.getLayers().extend([vectorLayer]);

// This allows the function to be used in a callback
function loadFeatures(response) {
    vectorSource.addFeatures(new GeoJSON().readFeatures(response));
}

// This is not a good practice, but it works for the jsonp.
window.loadFeatures = loadFeatures;

var base_url = "https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_17/ows?";
var wfs_url = base_url +
    "service=WFS&" +
    "version=2.0.0&" +
    "request=GetFeature&" +
    "typeName=gisgeoserver_17:population&" +
    "outputFormat=text/javascript&" +
    "srsname=EPSG:3857&" +
    "format_options=callback:loadFeatures";

// This will request the WFS layer once the map is rendered
map.once('postrender', function (event) {
    // Load the WFS layer
    $.ajax({ url: wfs_url, dataType: 'jsonp' });
});

// Add the code for the Pop-up
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new Overlay({
    element: container
});
map.addOverlay(popup);

// Ensure that jQuery ($) is already available in the page
$(document).ready(function () {
    map.on('singleclick', function (event) {
        // This iterates over all the features that are located on the pixel of the click (can be many)
        var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
            return feature;
        });

        // If there is a feature, open the popup by setting a position to it and put the data from the feature
        if (feature != null) {
            var pixel = event.pixel;
            var coord = map.getCoordinateFromPixel(pixel);
            popup.setPosition(coord);
            content.innerHTML =
                '<h5>Feature Information</h5><br><b>Name: </b>' +
                feature.get('NAME') +
                '<br><b>Description: </b>' +
                feature.get('HYC_DESCRI');
        } else {
            // Only if the roads layer is visible, do the GetFeatureInfo request
            if (roads.getVisible()) {
                var viewResolution = map.getView().getResolution();
                var url = roads.getSource().getFeatureInfoUrl(
                    event.coordinate,
                    viewResolution,
                    'EPSG:3857',
                    { 'INFO_FORMAT': 'text/html' }
                );

                if (url) {
                    var pixel = event.pixel;
                    var coord = map.getCoordinateFromPixel(pixel);
                    popup.setPosition(coord);
                    // We do again the AJAX request to get the data from the GetFeatureInfo request
                    $.ajax({ url: url }).done(function (data) {
                        // Put the data of the GetFeatureInfo response inside the pop-up
                        content.innerHTML = data;
                    });
                }
            }
        }
    });
});

// The click event handler for closing the popup
closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};

// Adding map event for pointermove
map.on('pointermove', function (event) {
    var pixel = map.getEventPixel(event.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
});
