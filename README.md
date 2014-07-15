turf-tag
========
[![Build Status](https://travis-ci.org/Turfjs/turf-tag.svg)](https://travis-ci.org/Turfjs/turf-tag)

Performs a spatial join on a set of points from a set of polygons.

###Install

```sh
npm install turf-inside
```

###Parameters

|name|description|
|---|---|
|points|A FeatureCollection of Point Features|
|polygons|A FeatureCollection of Polygon Features|
|polyID|id field on the polygons|
|containingPolyID|id field to tag onto points that are in a corresponding polygon|

###Usage

```js
tag(points, polygons, 'polyID', 'containingPolyID')
```

###Example

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