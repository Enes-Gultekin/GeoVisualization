var wms_layers = [];


        var lyr_DarkMatter_0 = new ol.layer.Tile({
            'title': 'Dark Matter',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_meandailytraffic_1 = new ol.format.GeoJSON();
var features_meandailytraffic_1 = format_meandailytraffic_1.readFeatures(json_meandailytraffic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meandailytraffic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meandailytraffic_1.addFeatures(features_meandailytraffic_1);
var lyr_meandailytraffic_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_meandailytraffic_1, 
                style: style_meandailytraffic_1,
                popuplayertitle: "mean daily traffic",
                interactive: true,
    title: 'mean daily traffic<br />\
    <img src="styles/legend/meandailytraffic_1_0.png" /> 0.2<br />\
    <img src="styles/legend/meandailytraffic_1_1.png" /> 2.2<br />\
    <img src="styles/legend/meandailytraffic_1_2.png" /> 4.2<br />'
        });

lyr_DarkMatter_0.setVisible(true);lyr_meandailytraffic_1.setVisible(true);
var layersList = [lyr_DarkMatter_0,lyr_meandailytraffic_1];
lyr_meandailytraffic_1.set('fieldAliases', {'fid': 'fid', 'STRBEZ': 'Road Name', 'STRNR': 'Road Number', 'ABSNR': 'Section Number', 'ANZFAHRSTR': 'Number of Lanes', 'DTVKFZA': 'Traffic Amount', });
lyr_meandailytraffic_1.set('fieldImages', {'fid': 'TextEdit', 'STRBEZ': 'TextEdit', 'STRNR': 'Range', 'ABSNR': 'TextEdit', 'ANZFAHRSTR': 'TextEdit', 'DTVKFZA': 'TextEdit', });
lyr_meandailytraffic_1.set('fieldLabels', {'fid': 'inline label - always visible', 'STRBEZ': 'inline label - always visible', 'STRNR': 'inline label - always visible', 'ABSNR': 'inline label - always visible', 'ANZFAHRSTR': 'inline label - always visible', 'DTVKFZA': 'inline label - always visible', });
lyr_meandailytraffic_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});