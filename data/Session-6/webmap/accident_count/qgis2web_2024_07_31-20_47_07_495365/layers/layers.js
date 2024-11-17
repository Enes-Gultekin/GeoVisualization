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
var format_AccidentPer1000Vehicle_1 = new ol.format.GeoJSON();
var features_AccidentPer1000Vehicle_1 = format_AccidentPer1000Vehicle_1.readFeatures(json_AccidentPer1000Vehicle_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccidentPer1000Vehicle_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccidentPer1000Vehicle_1.addFeatures(features_AccidentPer1000Vehicle_1);
var lyr_AccidentPer1000Vehicle_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AccidentPer1000Vehicle_1, 
                style: style_AccidentPer1000Vehicle_1,
                popuplayertitle: "Accident Per 1000 Vehicle",
                interactive: true,
    title: 'Accident Per 1000 Vehicle<br />\
    <img src="styles/legend/AccidentPer1000Vehicle_1_0.png" /> 1.07 - 2.15<br />\
    <img src="styles/legend/AccidentPer1000Vehicle_1_1.png" /> 2.15 - 2.61<br />\
    <img src="styles/legend/AccidentPer1000Vehicle_1_2.png" /> 2.61 - 3.23<br />\
    <img src="styles/legend/AccidentPer1000Vehicle_1_3.png" /> 3.23 - 4.19<br />\
    <img src="styles/legend/AccidentPer1000Vehicle_1_4.png" /> 4.19 - 6.49<br />'
        });
var format_AccidentNumberPerCity_2 = new ol.format.GeoJSON();
var features_AccidentNumberPerCity_2 = format_AccidentNumberPerCity_2.readFeatures(json_AccidentNumberPerCity_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccidentNumberPerCity_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccidentNumberPerCity_2.addFeatures(features_AccidentNumberPerCity_2);
var lyr_AccidentNumberPerCity_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AccidentNumberPerCity_2, 
                style: style_AccidentNumberPerCity_2,
                popuplayertitle: "Accident Number Per City",
                interactive: true,
    title: 'Accident Number Per City<br />\
    <img src="styles/legend/AccidentNumberPerCity_2_0.png" /> 8 - 27<br />\
    <img src="styles/legend/AccidentNumberPerCity_2_1.png" /> 27 - 38<br />\
    <img src="styles/legend/AccidentNumberPerCity_2_2.png" /> 38 - 57<br />\
    <img src="styles/legend/AccidentNumberPerCity_2_3.png" /> 57 - 97<br />\
    <img src="styles/legend/AccidentNumberPerCity_2_4.png" /> 97 - 989<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_AccidentPer1000Vehicle_1.setVisible(false);lyr_AccidentNumberPerCity_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AccidentPer1000Vehicle_1,lyr_AccidentNumberPerCity_2];
lyr_AccidentPer1000Vehicle_1.set('fieldAliases', {'LAND': 'LAND', 'MODELLART': 'MODELLART', 'OBJART': 'OBJART', 'OBJART_TXT': 'OBJART_TXT', 'OBJID': 'OBJID', 'HDU_X': 'HDU_X', 'BEGINN': 'BEGINN', 'ENDE': 'ENDE', 'ADM': 'ADM', 'BEZ_NAT': 'BEZ_NAT', 'BEZ_LAN': 'BEZ_LAN', 'BEZ_RBZ': 'BEZ_RBZ', 'BEZ_KRS': 'BEZ_KRS', 'BEZ_VWG': 'BEZ_VWG', 'BEZ_GEM': 'BEZ_GEM', 'RGS': 'RGS', 'SCH': 'SCH', 'BEMERKUNG': 'BEMERKUNG', 'Points': 'Points', 'acc/1kkfc': 'acc/1kkfc', 'acc/1000kfz_sch': 'acc/1000kfz_sch', 'acc/1000kfz_kfz': 'acc/1000kfz_kfz', 'acc/1000kfz_pkw': 'acc/1000kfz_pkw', 'acc/1000kfz_kfz_name': 'acc/1000kfz_kfz_name', 'acc/1000kfz_kfz_kfz': 'acc/1000kfz_kfz_kfz', 'acc/1000kfz_kfz_pkw': 'acc/1000kfz_kfz_pkw', 'acc/1000kfz_SCH_8': 'acc/1000kfz_SCH_8', 'Count_fid': 'Count_fid', 'Count_LAND': 'Count_LAND', 'Count_MODELLART': 'Count_MODELLART', 'Count_OBJART': 'Count_OBJART', 'Count_OBJART_TXT': 'Count_OBJART_TXT', 'Count_OBJID': 'Count_OBJID', 'Count_HDU_X': 'Count_HDU_X', 'Count_BEGINN': 'Count_BEGINN', 'Count_ENDE': 'Count_ENDE', 'Count_ADM': 'Count_ADM', 'Count_BEZ_NAT': 'Count_BEZ_NAT', 'Count_BEZ_LAN': 'Count_BEZ_LAN', 'Count_BEZ_RBZ': 'Count_BEZ_RBZ', 'Count_BEZ_KRS': 'Count_BEZ_KRS', 'Count_BEZ_VWG': 'Count_BEZ_VWG', 'Count_RGS': 'Count_RGS', 'Count_SCH': 'Count_SCH', 'Count_BEMERKUNG': 'Count_BEMERKUNG', 'Count_Points': 'Count_Points', 'Count_Accidents': 'Count_Accidents', });
lyr_AccidentNumberPerCity_2.set('fieldAliases', {'fid': 'fid', 'LAND': 'LAND', 'MODELLART': 'MODELLART', 'OBJART': 'OBJART', 'OBJART_TXT': 'OBJART_TXT', 'OBJID': 'OBJID', 'HDU_X': 'HDU_X', 'BEGINN': 'BEGINN', 'ENDE': 'ENDE', 'ADM': 'ADM', 'BEZ_NAT': 'BEZ_NAT', 'BEZ_LAN': 'BEZ_LAN', 'BEZ_RBZ': 'BEZ_RBZ', 'BEZ_KRS': 'BEZ_KRS', 'BEZ_VWG': 'BEZ_VWG', 'BEZ_GEM': 'BEZ_GEM', 'RGS': 'RGS', 'SCH': 'SCH', 'BEMERKUNG': 'BEMERKUNG', 'Points': 'Points', 'Accidents': 'Accidents', });
lyr_AccidentPer1000Vehicle_1.set('fieldImages', {'LAND': 'TextEdit', 'MODELLART': 'TextEdit', 'OBJART': 'TextEdit', 'OBJART_TXT': 'TextEdit', 'OBJID': 'TextEdit', 'HDU_X': 'TextEdit', 'BEGINN': 'TextEdit', 'ENDE': 'TextEdit', 'ADM': 'TextEdit', 'BEZ_NAT': 'TextEdit', 'BEZ_LAN': 'TextEdit', 'BEZ_RBZ': 'TextEdit', 'BEZ_KRS': 'TextEdit', 'BEZ_VWG': 'TextEdit', 'BEZ_GEM': 'TextEdit', 'RGS': 'TextEdit', 'SCH': 'TextEdit', 'BEMERKUNG': 'TextEdit', 'Points': 'TextEdit', 'acc/1kkfc': 'TextEdit', 'acc/1000kfz_sch': 'TextEdit', 'acc/1000kfz_kfz': 'Range', 'acc/1000kfz_pkw': 'Range', 'acc/1000kfz_kfz_name': 'TextEdit', 'acc/1000kfz_kfz_kfz': 'Range', 'acc/1000kfz_kfz_pkw': 'Range', 'acc/1000kfz_SCH_8': 'TextEdit', 'Count_fid': 'TextEdit', 'Count_LAND': 'TextEdit', 'Count_MODELLART': 'TextEdit', 'Count_OBJART': 'TextEdit', 'Count_OBJART_TXT': 'TextEdit', 'Count_OBJID': 'TextEdit', 'Count_HDU_X': 'TextEdit', 'Count_BEGINN': 'TextEdit', 'Count_ENDE': 'TextEdit', 'Count_ADM': 'TextEdit', 'Count_BEZ_NAT': 'TextEdit', 'Count_BEZ_LAN': 'TextEdit', 'Count_BEZ_RBZ': 'TextEdit', 'Count_BEZ_KRS': 'TextEdit', 'Count_BEZ_VWG': 'TextEdit', 'Count_RGS': 'TextEdit', 'Count_SCH': 'TextEdit', 'Count_BEMERKUNG': 'TextEdit', 'Count_Points': 'TextEdit', 'Count_Accidents': 'TextEdit', });
lyr_AccidentNumberPerCity_2.set('fieldImages', {'fid': 'TextEdit', 'LAND': 'TextEdit', 'MODELLART': 'TextEdit', 'OBJART': 'TextEdit', 'OBJART_TXT': 'TextEdit', 'OBJID': 'TextEdit', 'HDU_X': 'TextEdit', 'BEGINN': 'TextEdit', 'ENDE': 'TextEdit', 'ADM': 'TextEdit', 'BEZ_NAT': 'TextEdit', 'BEZ_LAN': 'TextEdit', 'BEZ_RBZ': 'TextEdit', 'BEZ_KRS': 'TextEdit', 'BEZ_VWG': 'TextEdit', 'BEZ_GEM': 'TextEdit', 'RGS': 'TextEdit', 'SCH': 'TextEdit', 'BEMERKUNG': 'TextEdit', 'Points': 'TextEdit', 'Accidents': 'TextEdit', });
lyr_AccidentPer1000Vehicle_1.set('fieldLabels', {'LAND': 'no label', 'MODELLART': 'no label', 'OBJART': 'no label', 'OBJART_TXT': 'no label', 'OBJID': 'no label', 'HDU_X': 'no label', 'BEGINN': 'no label', 'ENDE': 'no label', 'ADM': 'no label', 'BEZ_NAT': 'no label', 'BEZ_LAN': 'no label', 'BEZ_RBZ': 'no label', 'BEZ_KRS': 'no label', 'BEZ_VWG': 'no label', 'BEZ_GEM': 'no label', 'RGS': 'no label', 'SCH': 'no label', 'BEMERKUNG': 'no label', 'Points': 'no label', 'acc/1kkfc': 'inline label - always visible', 'acc/1000kfz_sch': 'no label', 'acc/1000kfz_kfz': 'no label', 'acc/1000kfz_pkw': 'no label', 'acc/1000kfz_kfz_name': 'no label', 'acc/1000kfz_kfz_kfz': 'no label', 'acc/1000kfz_kfz_pkw': 'no label', 'acc/1000kfz_SCH_8': 'no label', 'Count_fid': 'no label', 'Count_LAND': 'no label', 'Count_MODELLART': 'no label', 'Count_OBJART': 'no label', 'Count_OBJART_TXT': 'no label', 'Count_OBJID': 'no label', 'Count_HDU_X': 'no label', 'Count_BEGINN': 'no label', 'Count_ENDE': 'no label', 'Count_ADM': 'no label', 'Count_BEZ_NAT': 'no label', 'Count_BEZ_LAN': 'no label', 'Count_BEZ_RBZ': 'no label', 'Count_BEZ_KRS': 'no label', 'Count_BEZ_VWG': 'no label', 'Count_RGS': 'no label', 'Count_SCH': 'no label', 'Count_BEMERKUNG': 'no label', 'Count_Points': 'no label', 'Count_Accidents': 'no label', });
lyr_AccidentNumberPerCity_2.set('fieldLabels', {'fid': 'no label', 'LAND': 'no label', 'MODELLART': 'no label', 'OBJART': 'no label', 'OBJART_TXT': 'no label', 'OBJID': 'no label', 'HDU_X': 'no label', 'BEGINN': 'no label', 'ENDE': 'no label', 'ADM': 'no label', 'BEZ_NAT': 'no label', 'BEZ_LAN': 'no label', 'BEZ_RBZ': 'no label', 'BEZ_KRS': 'no label', 'BEZ_VWG': 'no label', 'BEZ_GEM': 'no label', 'RGS': 'no label', 'SCH': 'no label', 'BEMERKUNG': 'no label', 'Points': 'no label', 'Accidents': 'inline label - always visible', });
lyr_AccidentNumberPerCity_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});