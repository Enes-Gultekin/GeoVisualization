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
var format_ver01_l_1 = new ol.format.GeoJSON();
var features_ver01_l_1 = format_ver01_l_1.readFeatures(json_ver01_l_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ver01_l_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ver01_l_1.addFeatures(features_ver01_l_1);
var lyr_ver01_l_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ver01_l_1, 
                style: style_ver01_l_1,
                popuplayertitle: "ver01_l",
                interactive: true,
                title: '<img src="styles/legend/ver01_l_1.png" /> ver01_l'
            });
var format_ikea_utm32_2 = new ol.format.GeoJSON();
var features_ikea_utm32_2 = format_ikea_utm32_2.readFeatures(json_ikea_utm32_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ikea_utm32_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ikea_utm32_2.addFeatures(features_ikea_utm32_2);
var lyr_ikea_utm32_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ikea_utm32_2, 
                style: style_ikea_utm32_2,
                popuplayertitle: "ikea_utm32",
                interactive: true,
                title: '<img src="styles/legend/ikea_utm32_2.png" /> ikea_utm32'
            });
var format_B2022AIN04AI021520240203_3 = new ol.format.GeoJSON();
var features_B2022AIN04AI021520240203_3 = format_B2022AIN04AI021520240203_3.readFeatures(json_B2022AIN04AI021520240203_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B2022AIN04AI021520240203_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B2022AIN04AI021520240203_3.addFeatures(features_B2022AIN04AI021520240203_3);
var lyr_B2022AIN04AI021520240203_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B2022AIN04AI021520240203_3, 
                style: style_B2022AIN04AI021520240203_3,
                popuplayertitle: "B-2022-AI-N-04--AI0215--2024-02-03",
                interactive: true,
                title: '<img src="styles/legend/B2022AIN04AI021520240203_3.png" /> B-2022-AI-N-04--AI0215--2024-02-03'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ver01_l_1.setVisible(true);lyr_ikea_utm32_2.setVisible(true);lyr_B2022AIN04AI021520240203_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ver01_l_1,lyr_ikea_utm32_2,lyr_B2022AIN04AI021520240203_3];
lyr_ver01_l_1.set('fieldAliases', {'LAND': 'LAND', 'MODELLART': 'MODELLART', 'OBJART': 'OBJART', 'OBJART_TXT': 'OBJART_TXT', 'OBJID': 'OBJID', 'HDU_X': 'HDU_X', 'BEGINN': 'BEGINN', 'ENDE': 'ENDE', 'OBJART_Z': 'OBJART_Z', 'OBJID_Z': 'OBJID_Z', 'BEZ': 'BEZ', 'FSZ': 'FSZ', 'FTR': 'FTR', 'IBD': 'IBD', 'WDM': 'WDM', 'ZUS': 'ZUS', 'BEMERKUNG': 'BEMERKUNG', 'SYMBOLNR': 'SYMBOLNR', });
lyr_ikea_utm32_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'ikea_wiki_table2_org_year': 'ikea_wiki_table2_org_year', 'ikea_wiki_table2_org_salesarea': 'ikea_wiki_table2_org_salesarea', });
lyr_B2022AIN04AI021520240203_3.set('fieldAliases', {'id': 'id', 'schluessel': 'schluessel', 'gen': 'gen', 'jahr': 'jahr', 'ai0215': 'ai0215', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ver01_l_1.set('fieldImages', {'LAND': '', 'MODELLART': '', 'OBJART': '', 'OBJART_TXT': '', 'OBJID': '', 'HDU_X': '', 'BEGINN': '', 'ENDE': '', 'OBJART_Z': '', 'OBJID_Z': '', 'BEZ': '', 'FSZ': '', 'FTR': '', 'IBD': '', 'WDM': '', 'ZUS': '', 'BEMERKUNG': '', 'SYMBOLNR': '', });
lyr_ikea_utm32_2.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'ikea_wiki_table2_org_year': '', 'ikea_wiki_table2_org_salesarea': '', });
lyr_B2022AIN04AI021520240203_3.set('fieldImages', {'id': '', 'schluessel': '', 'gen': '', 'jahr': '', 'ai0215': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ver01_l_1.set('fieldLabels', {'LAND': 'no label', 'MODELLART': 'no label', 'OBJART': 'no label', 'OBJART_TXT': 'no label', 'OBJID': 'no label', 'HDU_X': 'no label', 'BEGINN': 'no label', 'ENDE': 'no label', 'OBJART_Z': 'no label', 'OBJID_Z': 'no label', 'BEZ': 'no label', 'FSZ': 'no label', 'FTR': 'no label', 'IBD': 'no label', 'WDM': 'no label', 'ZUS': 'no label', 'BEMERKUNG': 'no label', 'SYMBOLNR': 'no label', });
lyr_ikea_utm32_2.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', 'description': 'no label', 'ikea_wiki_table2_org_year': 'no label', 'ikea_wiki_table2_org_salesarea': 'no label', });
lyr_B2022AIN04AI021520240203_3.set('fieldLabels', {'id': 'no label', 'schluessel': 'no label', 'gen': 'no label', 'jahr': 'no label', 'ai0215': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_B2022AIN04AI021520240203_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});