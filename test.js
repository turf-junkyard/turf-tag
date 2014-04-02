var test = require('tape')
var fs = require('fs')
var tag = require('./')

test('tag', function(t){
  t.plan(3)

  var points = JSON.parse(fs.readFileSync('./geojson/tagPoints.geojson'))
  var polygons = JSON.parse(fs.readFileSync('./geojson/tagPolygons.geojson'))
  
  var taggedPoints = tag(points, polygons, 'polyID', 'containingPolyID')

  t.ok(taggedPoints.features, 'features should be ok')
  t.equal(taggedPoints.features.length, points.features.length, 
    'tagged points should have the same length as the input points')

  var count = 0
  taggedPoints.features.forEach(function(pt){
    if(pt.properties.containingPolyID === 4){
      count++
    }
  })
  t.equal(count, 6, 'polygon 4 should have tagged 6 points')
});