---
title: Example Tree!
---

<script src="https://rawgit.com/ngokevin/aframe-animation-component/master/dist/aframe-animation-component.min.js"></script>
<script src="/a-frame-js/click-component.js"></script>
<script src="/a-frame-js/specifyPosition.js"></script>

<!-- Working with .ply models -->
<script src="https://rawgit.com/donmccurdy/aframe-extras/v2.1.1/dist/aframe-extras.loaders.min.js"></script>
<!-- Entity generator -->
<script src="https://unpkg.com/aframe-entity-generator-component@^3.0.0/dist/aframe-entity-generator-component.min.js"></script>
 <script src="https://unpkg.com/aframe-randomizer-components@^3.0.1/dist/aframe-randomizer-components.min.js"></script>

<a-scene>
    <a-assets>
        <a-asset-item id="treePly" src="/assets/ply/tree-shelled.bake.ply"></a-asset-item>
        <a-mixin id="red" material="color: red"></a-mixin>
        <a-mixin id="blue" material="color: blue"></a-mixin>
        <a-mixin id="cube" geometry="primitive: box"></a-mixin>
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
    </a-assets>
  <a-sky src="/images/panoramas/sf-moma-01-2017/moma-lobby-sculpture.jpg" rotation="0 -130 0"></a-sky>

  <!-- <a-entity mixin="baseTree" position="-3 2 -3"></a-entity> -->
  <!-- <a-entity mixin="baseTree spinTree360" position="0 1.5 -3" -->
  <!-- animation__up-and-down="property: position; dur: 1500; loop: true; easing: linear; -->
  <!-- dir: alternate; -->
  <!-- from: 0 1.5 -3; -->
  <!-- to: 0 3 -3;"></a-entity> -->
  <!-- <a-entity mixin="baseTree"></a-entity> -->

  <a-entity entity-generator="mixin: baseTree; num: 50;"></a-entity>

  <a-camera>
    <a-cursor
      scale="2 2 2"
      geometry="primitive: ring"
      material="color: #FFC0CB; shader: flat">
    </a-cursor>
  </a-camera>
</a-scene>
