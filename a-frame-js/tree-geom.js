AFRAME.registerGeometry('example', {
  schema: {
    vertices: {
      default: ['-10 10 0', '-10 -10 0', '10 -10 0'],
    }
  },
  init: function (data) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push.call(
      geometry.vertices,
      data.vertices.map(function (vertex) {
        var points = vertex.split(' ').map(parseInt);
        return new THREE.Vector3(points[0], points[1], points[2]);
      })
    );
    geometry.faces.push(new THREE.Face3(0, 1, 2));
    this.geometry = geometry;
  }
});
