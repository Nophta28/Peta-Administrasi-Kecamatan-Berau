var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Admkota_1 = new ol.format.GeoJSON();
var features_Admkota_1 = format_Admkota_1.readFeatures(json_Admkota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admkota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admkota_1.addFeatures(features_Admkota_1);
var lyr_Admkota_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Admkota_1, 
                style: style_Admkota_1,
                popuplayertitle: 'Adm kota',
                interactive: true,
                title: '<img src="styles/legend/Admkota_1.png" /> Adm kota'
            });
var format_clip_2 = new ol.format.GeoJSON();
var features_clip_2 = format_clip_2.readFeatures(json_clip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_2.addFeatures(features_clip_2);
var lyr_clip_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_2, 
                style: style_clip_2,
                popuplayertitle: 'clip',
                interactive: true,
    title: 'clip<br />\
    <img src="styles/legend/clip_2_0.png" /> Batu Putih<br />\
    <img src="styles/legend/clip_2_1.png" /> Biatan<br />\
    <img src="styles/legend/clip_2_2.png" /> Biduk-Biduk<br />\
    <img src="styles/legend/clip_2_3.png" /> Gunung Tabur<br />\
    <img src="styles/legend/clip_2_4.png" /> Karangan<br />\
    <img src="styles/legend/clip_2_5.png" /> Kelay<br />\
    <img src="styles/legend/clip_2_6.png" /> Maratua<br />\
    <img src="styles/legend/clip_2_7.png" /> Muara Wahau<br />\
    <img src="styles/legend/clip_2_8.png" /> Pulau Derawan<br />\
    <img src="styles/legend/clip_2_9.png" /> Sambaliung<br />\
    <img src="styles/legend/clip_2_10.png" /> Sandaran<br />\
    <img src="styles/legend/clip_2_11.png" /> Segah<br />\
    <img src="styles/legend/clip_2_12.png" /> Tabalar<br />\
    <img src="styles/legend/clip_2_13.png" /> Talisayan<br />\
    <img src="styles/legend/clip_2_14.png" /> Tanjung Redeb<br />\
    <img src="styles/legend/clip_2_15.png" /> Teluk Bayur<br />\
    <img src="styles/legend/clip_2_16.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Admkota_1.setVisible(true);lyr_clip_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Admkota_1,lyr_clip_2];
lyr_Admkota_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'Luas': 'Luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_clip_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Admkota_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'Luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_clip_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'Hidden', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Admkota_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'Luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_clip_2.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_clip_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});