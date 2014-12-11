inside = require('turf-inside');

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