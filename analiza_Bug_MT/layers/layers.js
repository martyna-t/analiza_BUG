var wms_layers = [];


        var lyr_OSMwhite_0 = new ol.layer.Tile({
            'title': 'OSM white',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });


        var lyr_wody_pow = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
              url: "https://wody.isok.gov.pl/gpservices/KZGW/MZP20_Predkosc_WysokiePrawdopodPowodzi/MapServer/WMSServer",
              attributions: 'Gugik',
              params: {
                "LAYERS": "5",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: 'wody powierzchniowe',
            opacity: 1.000000,

          });
wms_layers.push([lyr_zagrożenie_pow, 0]);

var lyr_zagrożenie_pow = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
      url: "https://wody.isok.gov.pl/gpservices/KZGW/MZP20_Predkosc_WysokiePrawdopodPowodzi/MapServer/WMSServer",
      attributions: 'Gugik',
      params: {
        "LAYERS": "2",
        "TILED": "true",
        "VERSION": "1.3.0"},
    })),
    title: 'zagrożenie powodziowe',
    opacity: 1.000000,

  });
wms_layers.push([lyr_zagrożenie_pow, 0]);


var format_AnalizaVMAPSentinel_2 = new ol.format.GeoJSON();
var features_AnalizaVMAPSentinel_2 = format_AnalizaVMAPSentinel_2.readFeatures(json_AnalizaVMAPSentinel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalizaVMAPSentinel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalizaVMAPSentinel_2.addFeatures(features_AnalizaVMAPSentinel_2);
var lyr_AnalizaVMAPSentinel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalizaVMAPSentinel_2, 
                style: style_AnalizaVMAPSentinel_2,
                popuplayertitle: 'Analiza VMAP-Sentinel',
                interactive: false,
    title: 'Analiza VMAP-Sentinel<br />\
    <img src="styles/legend/AnalizaVMAPSentinel_2_0.png" /> -100 - -80<br />\
    <img src="styles/legend/AnalizaVMAPSentinel_2_1.png" /> -80 - -60<br />\
    <img src="styles/legend/AnalizaVMAPSentinel_2_2.png" /> -60 - -40<br />\
    <img src="styles/legend/AnalizaVMAPSentinel_2_3.png" /> -40 - -20<br />\
    <img src="styles/legend/AnalizaVMAPSentinel_2_4.png" /> -20 - 0<br />'
        });
var format_AnalizahistorycznaVMAP_3 = new ol.format.GeoJSON();
var features_AnalizahistorycznaVMAP_3 = format_AnalizahistorycznaVMAP_3.readFeatures(json_AnalizahistorycznaVMAP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalizahistorycznaVMAP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalizahistorycznaVMAP_3.addFeatures(features_AnalizahistorycznaVMAP_3);
var lyr_AnalizahistorycznaVMAP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalizahistorycznaVMAP_3, 
                style: style_AnalizahistorycznaVMAP_3,
                popuplayertitle: 'Analiza historyczna-VMAP',
                interactive: false,
    title: 'Analiza historyczna-VMAP<br />\
    <img src="styles/legend/AnalizahistorycznaVMAP_3_0.png" /> 0 - 20<br />\
    <img src="styles/legend/AnalizahistorycznaVMAP_3_1.png" /> 20 - 40<br />\
    <img src="styles/legend/AnalizahistorycznaVMAP_3_2.png" /> 40 - 60<br />\
    <img src="styles/legend/AnalizahistorycznaVMAP_3_3.png" /> 60 - 80<br />\
    <img src="styles/legend/AnalizahistorycznaVMAP_3_4.png" /> 80 - 100<br />'
        });
var format_VMAP2002_4 = new ol.format.GeoJSON();
var features_VMAP2002_4 = format_VMAP2002_4.readFeatures(json_VMAP2002_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMAP2002_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMAP2002_4.addFeatures(features_VMAP2002_4);
var lyr_VMAP2002_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMAP2002_4, 
                style: style_VMAP2002_4,
                popuplayertitle: 'VMAP 2002',
                interactive: false,
                title: '<img src="styles/legend/VMAP2002_4.png" /> VMAP 2002'
            });
var format_Sentinel2024_5 = new ol.format.GeoJSON();
var features_Sentinel2024_5 = format_Sentinel2024_5.readFeatures(json_Sentinel2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel2024_5.addFeatures(features_Sentinel2024_5);
var lyr_Sentinel2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel2024_5, 
                style: style_Sentinel2024_5,
                popuplayertitle: 'Sentinel 2024',
                interactive: false,
                title: '<img src="styles/legend/Sentinel2024_5.png" /> Sentinel 2024'
            });
var format_Historycznatopograficzna1940_6 = new ol.format.GeoJSON();
var features_Historycznatopograficzna1940_6 = format_Historycznatopograficzna1940_6.readFeatures(json_Historycznatopograficzna1940_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Historycznatopograficzna1940_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Historycznatopograficzna1940_6.addFeatures(features_Historycznatopograficzna1940_6);
var lyr_Historycznatopograficzna1940_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Historycznatopograficzna1940_6, 
                style: style_Historycznatopograficzna1940_6,
                popuplayertitle: 'Historyczna topograficzna 1940',
                interactive: false,
                title: '<img src="styles/legend/Historycznatopograficzna1940_6.png" /> Historyczna topograficzna 1940'
            });

lyr_OSMwhite_0.setVisible(false);
lyr_GoogleSatellite_1.setVisible(true);
lyr_AnalizaVMAPSentinel_2.setVisible(false);
lyr_AnalizahistorycznaVMAP_3.setVisible(false);
lyr_VMAP2002_4.setVisible(true);
lyr_Sentinel2024_5.setVisible(true);
lyr_Historycznatopograficzna1940_6.setVisible(true);
lyr_wody_pow.setVisible(true);
lyr_zagrożenie_pow.setVisible(true);

var layersList = [
    lyr_OSMwhite_0,
    lyr_GoogleSatellite_1,
    lyr_wody_pow,
    lyr_zagrożenie_pow,
    lyr_AnalizaVMAPSentinel_2,
    lyr_AnalizahistorycznaVMAP_3,
    lyr_VMAP2002_4,
    lyr_Sentinel2024_5,
    lyr_Historycznatopograficzna1940_6];

lyr_AnalizaVMAPSentinel_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'procent_hi': 'procent_hi', 'procent_vm': 'procent_vm', 'procent_se': 'procent_se', 'hist_vmap': 'hist_vmap', 'vmap_senti': 'vmap_senti', 'hist_senti': 'hist_senti', });
lyr_AnalizahistorycznaVMAP_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'procent_hi': 'procent_hi', 'procent_vm': 'procent_vm', 'procent_se': 'procent_se', 'hist_vmap': 'hist_vmap', 'vmap_senti': 'vmap_senti', 'hist_senti': 'hist_senti', });
lyr_VMAP2002_4.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obw': 'obw', 'wsp_zw': 'wsp_zw', });
lyr_Sentinel2024_5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', });
lyr_Historycznatopograficzna1940_6.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obw': 'obw', 'wsp_zw': 'wsp_zw', });
lyr_AnalizaVMAPSentinel_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'procent_hi': 'TextEdit', 'procent_vm': 'TextEdit', 'procent_se': 'TextEdit', 'hist_vmap': 'TextEdit', 'vmap_senti': 'TextEdit', 'hist_senti': 'TextEdit', });
lyr_AnalizahistorycznaVMAP_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'procent_hi': 'TextEdit', 'procent_vm': 'TextEdit', 'procent_se': 'TextEdit', 'hist_vmap': 'TextEdit', 'vmap_senti': 'TextEdit', 'hist_senti': 'TextEdit', });
lyr_VMAP2002_4.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_Sentinel2024_5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'TextEdit', });
lyr_Historycznatopograficzna1940_6.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_AnalizaVMAPSentinel_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'procent_hi': 'no label', 'procent_vm': 'no label', 'procent_se': 'no label', 'hist_vmap': 'no label', 'vmap_senti': 'no label', 'hist_senti': 'no label', });
lyr_AnalizahistorycznaVMAP_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'procent_hi': 'no label', 'procent_vm': 'no label', 'procent_se': 'no label', 'hist_vmap': 'no label', 'vmap_senti': 'no label', 'hist_senti': 'no label', });
lyr_VMAP2002_4.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obw': 'no label', 'wsp_zw': 'no label', });
lyr_Sentinel2024_5.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'InPoly_FID': 'no label', });
lyr_Historycznatopograficzna1940_6.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obw': 'no label', 'wsp_zw': 'no label', });
lyr_Historycznatopograficzna1940_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});