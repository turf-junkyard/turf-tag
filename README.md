turf-tag
========
[![Build Status](https://travis-ci.org/Turfjs/turf-tag.svg)](https://travis-ci.org/Turfjs/turf-tag)

Performs a spatial join on a set of points from a set of polygons.

```js
var tag = require('turf-tag')
var fs = require('fs')

t.load('./testIn/tagPoints.geojson', function(err, points){
  t.load('./testIn/tagPolygons.geojson', function(err, polygons){

var pts = JSON.parse(fs.readFileSync('/path/to/pts.geojson'))
var polys = JSON.parse(fs.readFileSync('/path/to/polys.geojson'))

var tagged = tag(points, polygons, 'polyID', 'containingPolyID')

console.log(taggedPoints)
```