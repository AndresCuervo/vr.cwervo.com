---
title: Example Tree!
---

<script src="https://rawgit.com/ngokevin/aframe-animation-component/master/dist/aframe-animation-component.min.js"></script>
<script src="/a-frame-js/click-component.js"></script>
<script src="/a-frame-js/specifyPosition.js"></script>
<!-- <script src="/a-frame-js/tree-geom.js"></script> -->

<!-- Working with .ply models -->
<script src="https://rawgit.com/donmccurdy/aframe-extras/v2.1.1/dist/aframe-extras.loaders.min.js"></script>
<!-- Entity generator -->
<script src="https://unpkg.com/aframe-entity-generator-component@^3.0.0/dist/aframe-entity-generator-component.min.js"></script>
<script src="https://unpkg.com/aframe-randomizer-components@^3.0.1/dist/aframe-randomizer-components.min.js"></script>
<script src="https://unpkg.com/aframe-layout-component@4.0.1/dist/aframe-layout-component.min.js"></script>

<a-scene>
    <a-assets>
        <a-asset-item id="treePly" src="/assets/ply/tree-shelled.bake.ply"></a-asset-item>
        <a-mixin id="red" material="color: red"></a-mixin>
        <a-mixin id="blue" material="color: blue"></a-mixin>
        <a-mixin id="cube" geometry="primitive: box"></a-mixin>
        <img id="lime-green-picture" src="/images/textures/watercolor/lime-green-square.png">
        <a-mixin id="limeCube" geometry="primitive: box" material="src: #lime-green-picture"></a-mixin>
        <a-mixin id="candle" geometry="primitive: sphere" light></a-mixin>
        <a-mixin id="baseTree" ply-model="src: #treePly" rotation="-90 0 0"
        random-spherical-position="radius: 4; startY: 95;"
        specify-position
        scale="0.05 0.05 0.05"></a-mixin>
        <a-mixin id="spinTree360"
        animation__rotate="property: rotation;
        dur: 6000;
        loop: true;
        easing: linear;
        from: -90 0 0;
        to: -90 360 0"></a-mixin>
        <a-entity id="shinyDoughnut" geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360"
        material="color: #2eafac; roughness: 0; metalness: 1;"
        animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0;
        dur: 4000;"></a-entity>
    </a-assets>
    <!-- Eventaully replace this, maybe with a photo of the Arb? THE ARB getting glitchier  and glitcher, ooooh! -->
  <!-- <a-sky src="https://image.shutterstock.com/z/stock-photo--degree-forest-panorama-107308361.jpg" rotation="0 -130 0"></a-sky> -->
  <a-sky src="/images/panoramas/manic-night/archway.jpg" rotation="0 -130 0"></a-sky>

  <a-entity mixin="cube limeCube" position="-3 0 -3"
  rotation="45 0 0"></a-entity>

  <a-entity layout="type: circle; radius: 10">
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
  </a-entity>

  <a-entity layout="type: circle; radius: 10" position="0 2.5 0"
  animation__rotate="property: rotation; dur: 10000; easing: linear; loop: true; to: 0 360 0">
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 1500;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.9;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 2000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.8;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 3000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.7;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.6;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 5000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.5;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 6000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.4;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 5000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.3;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 6000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.2;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 7000;"></a-entity>
    <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 8000;"></a-entity>
  </a-entity>


  <!-- <a-entity mixin="tree-geom" position="-3 2 -3" -->
  <!-- rotation="45 0 0"></a-entity> -->

  <a-entity mixin="shinyDoughnut" position="0 0 -5"></a-entity>

  <!-- <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" -->
  <!-- material="color: #2eafac; roughness: 0; metalness: 1;" -->
  <!-- position="0 0 -5" -->
  <!-- animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; -->
  <!-- dur: 4000;"></a-entity> -->

  <a-entity geometry="primitive: circle; radius: 10; segments: 30" material="color: #F79F24"
  position="0 15 -12"
  rotation="25 0 10"
  animation__segs="property: geometry.segments;
  loop: true;
  easing: linear;
  from: 30; to: 3;
  dir: alternate;
  dur: 3000;"
  ></a-entity>

  <a-entity geometry="primitive: circle; radius: 10; segments: 30" material="color: #F79F24"
  position="0 15 -12"
  rotation="25 15 15"
  animation__segs="property: geometry.segments;
  loop: true;
  easing: linear;
  from: 30; to: 3;
  dir: alternate;
  dur: 3000;"
  ></a-entity>

  <!-- <a-entity mixin="baseTree" position="-3 2 -3"></a-entity> -->
  <!-- <a-entity mixin="baseTree spinTree360" position="0 1.5 -3" -->
  <!-- animation__up-and-down="property: position; dur: 1500; loop: true; easing: linear; -->
  <!-- dir: alternate; -->
  <!-- from: 0 1.5 -3; -->
  <!-- to: 0 3 -3;"></a-entity> -->
  <!-- <a-entity mixin="baseTree"></a-entity> -->

  <!-- <a-entity entity-generator="mixin: baseTree; num: 50;"></a-entity> -->
  <!-- <a-entity entity-generator="mixin: baseTree; num: 5;"></a-entity> -->

  <a-camera>
    <a-cursor
      scale="2 2 2"
      geometry="primitive: ring"
      material="color: #FFC0CB; shader: flat">
    </a-cursor>
  </a-camera>
</a-scene>
