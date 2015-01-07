var inside = require('turf-inside');
/**
 * Performs a spatial join on a set of points from a set of polygons.
 *
 * @module turf/tag
 * @param {FeatureCollection} points a collection of Features with {@link Point}
 * geometries
 * @param {FeatureCollection} polygons collection of Features with {@link Polygon}
 * geometries
 * @param {string} polyId
 * @param {string} containingPolyId
 * @return {LineString} output
 * @example
 * var tag = require('turf-tag')
 * var fs = require('fs')
 * t.load('./testIn/tagPoints.geojson', function(err, points){
 *   t.load('./testIn/tagPolygons.geojson', function(err, polygons){
 * var pts = JSON.parse(fs.readFileSync('/path/to/pts.geojson'))
 * var polys = JSON.parse(fs.readFileSync('/path/to/polys.geojson'))
 * var tagged = tag(points, polygons, 'polyID', 'containingPolyID')
 * console.log(taggedPoints)
 */
module.exports = function(points, polygons, field, outField){
  points.features.forEach(function(pt){
    if(!pt.properties){
      pt.properties = {};
    }
    polygons.features.forEach(function(poly){
      if(!pt.properties[outField]){
        var isInside = inside(pt, poly);
        if(isInside){
          pt.properties[outField] = poly.properties[field];
        }
        else{
          pt.properties[outField] = null;
        }
      }
    });
  })
  return points;
}
