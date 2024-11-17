ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3349").setExtent([-8056751.165968, -9526733.009856, 22551941.561435, 12936934.703645]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_volcanoes_1 = new ol.format.GeoJSON();
var features_volcanoes_1 = format_volcanoes_1.readFeatures(json_volcanoes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3349'});
var jsonSource_volcanoes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_volcanoes_1.addFeatures(features_volcanoes_1);
var lyr_volcanoes_1 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_volcanoes_1, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'volcanoes'
            });
var format_volcanoescopy_2 = new ol.format.GeoJSON();
var features_volcanoescopy_2 = format_volcanoescopy_2.readFeatures(json_volcanoescopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3349'});
var jsonSource_volcanoescopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_volcanoescopy_2.addFeatures(features_volcanoescopy_2);
var lyr_volcanoescopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_volcanoescopy_2, 
                style: style_volcanoescopy_2,
                popuplayertitle: "volcanoes copy",
                interactive: true,
                title: '<img src="styles/legend/volcanoescopy_2.png" /> volcanoes copy'
            });

lyr_OSMStandard_0.setVisible(true);lyr_volcanoes_1.setVisible(true);lyr_volcanoescopy_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_volcanoes_1,lyr_volcanoescopy_2];
lyr_volcanoescopy_2.set('fieldAliases', {'fid': 'fid', 'Volcano_Number': 'Volcano_Number', 'Volcano_Name': 'Volcano_Name', 'Primary_Volcano_Type': 'Primary_Volcano_Type', 'Last_Eruption_Year': 'Last_Eruption_Year', 'Country': 'Country', 'Geological_Summary': 'Geological_Summary', 'Region': 'Region', 'Subregion': 'Subregion', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Elevation': 'Elevation', 'Tectonic_Setting': 'Tectonic_Setting', 'Geologic_Epoch': 'Geologic_Epoch', 'Evidence_Category': 'Evidence_Category', 'Primary_Photo_Link': 'Primary_Photo_Link', 'Primary_Photo_Caption': 'Primary_Photo_Caption', 'Primary_Photo_Credit': 'Primary_Photo_Credit', 'Major_Rock_Type': 'Major_Rock_Type', });
lyr_volcanoescopy_2.set('fieldImages', {'fid': '', 'Volcano_Number': '', 'Volcano_Name': '', 'Primary_Volcano_Type': '', 'Last_Eruption_Year': '', 'Country': '', 'Geological_Summary': '', 'Region': '', 'Subregion': '', 'Latitude': '', 'Longitude': '', 'Elevation': '', 'Tectonic_Setting': '', 'Geologic_Epoch': '', 'Evidence_Category': '', 'Primary_Photo_Link': '', 'Primary_Photo_Caption': '', 'Primary_Photo_Credit': '', 'Major_Rock_Type': '', });
lyr_volcanoescopy_2.set('fieldLabels', {'fid': 'no label', 'Volcano_Number': 'no label', 'Volcano_Name': 'no label', 'Primary_Volcano_Type': 'no label', 'Last_Eruption_Year': 'no label', 'Country': 'no label', 'Geological_Summary': 'no label', 'Region': 'no label', 'Subregion': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Elevation': 'no label', 'Tectonic_Setting': 'no label', 'Geologic_Epoch': 'no label', 'Evidence_Category': 'no label', 'Primary_Photo_Link': 'no label', 'Primary_Photo_Caption': 'no label', 'Primary_Photo_Credit': 'no label', 'Major_Rock_Type': 'no label', });
lyr_volcanoescopy_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});