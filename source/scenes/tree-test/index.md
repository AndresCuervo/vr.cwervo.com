---
title: Example Tree!
---

<script src="https://rawgit.com/ngokevin/aframe-animation-component/master/dist/aframe-animation-component.min.js"></script>
<script src="/a-frame-js/click-component.js"></script>

<!-- Working with .ply models -->
<script src="https://rawgit.com/donmccurdy/aframe-extras/v2.1.1/dist/aframe-extras.loaders.min.js"></script>

<a-scene>
    <a-assets>
        <a-asset-item id="treePly" src="/assets/ply/tree-shelled.bake.ply"></a-asset-item>
    </a-assets>
  <a-sky src="/images/panoramas/sf-moma-01-2017/moma-lobby-sculpture.jpg" rotation="0 -130 0"></a-sky>

  <a-entity ply-model="src: #treePly" rotation="-90 0 0"
      position="-2 1.5 -2"
      scale="0.025 0.025 0.025"
      animation__rotate="property: rotation;
      dur: 6000;
      loop: true;
      easing: linear;
      from: -90 0 0;
      to: -90 360 0"></a-entity>

  <!-- <a&#45;box -->
  <!--   color="red" -->
  <!--   position="&#45;1 2 &#45;3" -->
  <!--   change&#45;color&#45;on&#45;click -->
  <!--   animation__position="property: rotation; -->
  <!--   dur: 1000; -->
  <!--   to: 0 360 360; -->
  <!--   loop: true;" -->
  <!--   animation__scale="property: scale; -->
  <!--   dur: 300; -->
  <!--   from: 2.5 2.5 2.5; -->
  <!--   to: 2 2 2; -->
  <!--   startEvents: click;"></a&#45;box> -->


  <a-camera>
    <!-- position="0 0 &#45;1" -->
    <a-cursor
      scale="2 2 2"
      geometry="primitive: ring"
      material="color: #FFC0CB; shader: flat"
      >
      <!-- animation__change_cursor_color_on_click="startEvents: click; -->
      <!-- property: color; -->
      <!-- to: material.color;" -->
    </a-cursor>
  </a-camera>
</a-scene>
