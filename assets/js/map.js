import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import { Map, View, Overlay } from 'ol';
import { Tile, Image, Group, Vector } from 'ol/layer';
import { OSM, ImageWMS, BingMaps, StadiaMaps } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { ScaleLine, FullScreen, MousePosition, ZoomSlider } from 'ol/control';
import LayerSwitcher from 'ol-layerswitcher';
import { createStringXY } from 'ol/coordinate';


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
    opacity: 0.3,
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
        params: { 'LAYERS': 'gisgeoserver_17:ndvi', 'STYLES': 'gisgeoserver_17:ndvi' }
    }),
    visible: false
});

let aspect = new Image({
    title: "Aspect",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:aspect', 'STYLES': 'gisgeoserver_17:aspect' }
    }),
    visible: false
});

let dusaf = new Image({
    title: "DUSAF",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:dusaf', 'STYLES': 'gisgeoserver_17:dusaf' }
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
        params: { 'LAYERS': 'gisgeoserver_17:plan', 'STYLES': 'gisgeoserver_17:plan' }
    }),
    visible: false
});

let profile = new Image({
    title: "Profile",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_17:profile', 'STYLES': 'gisgeoserver_17:profile' }
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
        params: { 'LAYERS': 'gisgeoserver_17:slope', 'STYLES': 'gisgeoserver_17:slope' }
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
        params: { 'LAYERS': 'gisgeoserver_17:population' }
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

// Adding map event for pointermove
map.on('pointermove', function (event) {
    var pixel = map.getEventPixel(event.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
});
