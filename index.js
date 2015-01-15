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
var bbox = [0, 0, 50, 50];

// create a triangular grid of polygons
var triangleGrid = turf.tin(turf.grid(bbox, 10));

triangleGrid.features.forEach(function(f) {
  f.properties.fill = '#' +
    (~~(Math.random() * 16)).toString(16) +
    (~~(Math.random() * 16)).toString(16) +
    (~~(Math.random() * 16)).toString(16);
  f.properties.stroke = 0;
  f.properties['fill-opacity'] = 1;
});

var randomPoints = turf.random('point', 30, {
  bbox: bbox
});

var both = turf.featurecollection(
  triangleGrid.features.concat(randomPoints.features));

//=both

var tagged = turf.tag(randomPoints, triangleGrid,
                      'fill', 'marker-color');

//=tagged
 */
module.exports = function(points, polygons, field, outField){
  // prevent mutations
  points = JSON.parse(JSON.stringify(points));
  polygons = JSON.parse(JSON.stringify(polygons));
  points.features.forEach(function(pt){
    if(!pt.properties){
      pt.properties = {};
    }
    polygons.features.forEach(function(poly){
      if(pt.properties[outField] === undefined){
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
