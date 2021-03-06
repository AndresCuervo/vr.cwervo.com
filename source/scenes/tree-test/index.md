---
title: Example Tree!
---

<script src="https://rawgit.com/ngokevin/aframe-animation-component/master/dist/aframe-animation-component.min.js"></script>
<script src="/a-frame-js/click-component.js"></script>
<script src="/a-frame-js/specifyPosition.js"></script>
<script src="/a-frame-js/randomDataPos.js"></script>
<!-- <script src="/a-frame-js/tree-geom.js"></script> -->

<!-- Working with .ply models -->
<script src="https://rawgit.com/donmccurdy/aframe-extras/v2.1.1/dist/aframe-extras.loaders.min.js"></script>
<!-- Entity generator -->
<script src="https://unpkg.com/aframe-entity-generator-component@^3.0.0/dist/aframe-entity-generator-component.min.js"></script>
<script src="https://unpkg.com/aframe-randomizer-components@^3.0.1/dist/aframe-randomizer-components.min.js"></script>
<script src="https://unpkg.com/aframe-layout-component@4.0.1/dist/aframe-layout-component.min.js"></script>

<script src="https://unpkg.com/aframe-template-component@^3.1.1/dist/aframe-template-component.min.js"></script>

<a-scene>
    <a-assets>
        <a-asset-item id="treePly" src="/assets/ply/tree-shelled.bake.ply"></a-asset-item>
        <a-mixin id="tree-color" material="color: green"></a-mixin>
        <a-mixin id="bark-color" material="color: #926239"></a-mixin>
        <a-mixin id="cube" geometry="primitive: box"></a-mixin>
        <!-- <img id="lime-green-picture" src="/images/textures/watercolor/lime-green-square.png"> -->
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
        <img id="pine-needles-texture" src="/images/textures/pine-needles.jpg">
        <img id="bark-cylinder-texture" src="/images/textures/bark.jpg">
        <a-mixin id="tree-texture" material="src:#pine-needles-texture"></a-mixin>
        <a-mixin id="bark-texture" material="src:#bark-cylinder-texture"></a-mixin>
        <!-- <a-entity position="0 3 -4"> -->
        <script id="treeTemplate" type="html">
            <a-entity id="conicTree-${number}" position="${pos}">
                <a-cone mixin="tree-texture" radius-bottom="2" radius-top="0" height="2">
                    <a-cone mixin="tree-texture" radius-bottom="2" radius-top="0" position="0 -1   0"></a-cone>
                    <a-cone mixin="tree-texture" radius-bottom="2" radius-top="0" position="0 -1.5 0"></a-cone>
                    <!-- <a-cylinder mixin="bark-color" height="1" radius="0.5" position="0 -2.5 0"     ></a-cylinder> -->
                    <a-cylinder random-rotation="min: 0 0 0; max: 0 360 0" mixin="bark-texture" height="2" radius="0.5" position="0 -2.5 0"     ></a-cylinder>
                </a-cone>
            </a-entity>
        </script>
        <script id="boxesTemplate" type="html">
                <a-cone mixin="tree-color" radius-bottom="2" radius-top="0" position="0 -1   0" mergeTo="conicTree-${number}"></a-cone>
            <a-box color="${box1color}" position="-1 0 -5"></a-box>
            <a-box color="${box2color}" position="0 1 -5"></a-box>
            <a-box color="${box3color}" position="1 0 -5"></a-box>
        </script>
    </a-assets>
    <!-- Eventaully replace this, maybe with a photo of the Arb? THE ARB getting glitchier  and glitcher, ooooh! -->
  <!-- <a-sky src="https://image.shutterstock.com/z/stock-photo--degree-forest-panorama-107308361.jpg" rotation="0 -130 0"></a-sky> -->
  <a-sky src="/images/panoramas/manic-night/archway.jpg" rotation="0 -130 0"></a-sky>

  <!-- <a-entity template="src: #boxesTemplate" data-box1color="red" data-box2color="green" data-box3color="blue" data-number="0"></a-entity> -->

  <a-entity template="src: #treeTemplate" data-number="1" data-pos="-2 3 -4"></a-entity>
  <a-entity template="src: #treeTemplate" data-number="2" data-pos="1 3 -4"></a-entity>
  <a-entity template="src: #treeTemplate" data-number="3" data-pos="0 3 -4"></a-entity>

  <!-- Actually, go on with "specify position" component at a later date, -->
  <!-- what you actually want is a "random-prop" component or something like that to pass into data-pos using the A-Frame template component??? -->
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="4"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="5"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="6"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="7"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="8"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="9"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="10"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="11"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="12"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="13"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="14"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="15"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="16"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="17"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="18"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="19"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="20"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="21"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="22"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="23"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="24"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="25"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="26"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="27"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="28"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="29"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="30"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="31"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="32"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="33"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="34"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="35"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="36"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="37"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="38"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="39"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="40"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="41"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="42"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="43"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="44"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="45"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="46"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="47"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="48"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="49"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="50"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="51"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="52"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="53"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="54"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="55"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="56"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="57"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="58"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="59"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="60"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="61"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="62"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="63"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="64"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="65"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="66"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="67"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="68"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="69"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="70"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="71"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="72"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="73"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="74"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="75"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="76"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="77"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="78"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="79"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="80"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="81"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="82"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="83"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="84"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="85"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="86"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="87"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="88"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="89"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="90"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="91"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="92"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="93"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="94"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="95"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="96"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="97"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="98"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="99"></a-entity>
  <a-entity rand-data-pos template="src: #treeTemplate" data-number="100"></a-entity>
  <!-- Okay, this is just a hack, start using .md.erb or whatever to do this lol -->

  <!-- <a-entity mixin="conicTree" position="0 3 -3"></a-entity> -->
  <!-- <a-entity id="treeBase" position="-2 3 -4" animation__move="property: rotation; to: 360 0 0; loop: true;"> -->
  <!--     <a-cone color="green" radius-bottom="2" radius-top="0" height="2" mergeTo="#treeBase"> -->
  <!--         <a-cone mixin="tree-color" radius-bottom="2" radius-top="0" position="0 -1   0" mergeTo="#treeBase"></a-cone> -->
  <!--         <a-cone mixin="tree-color" radius-bottom="2" radius-top="0" position="0 -1.5 0" mergeTo="#treeBase"></a-cone> -->
  <!--         <a-cylinder mixin="bark-color" height="1" radius="0.5" position="0 -2.5 0"      mergeTo="#treeBase"></a-cylinder> -->
  <!--     </a-cone> -->
  <!-- </a-entity> -->

  <!-- <a-entity mixin="cube limeCube" position="-3 0 -3" -->
  <!-- rotation="45 0 0"></a-entity> -->


  <!-- <a-light type="point" position="0 4 -4" -->
  <!-- animation__orbit = "property: rotation; to: 0 360 -4; -->
  <!-- easing: linear; loop: true; dir: alternate;"> -->
  <!--   <a-entity mixin="cube limeCube" size> -->
  <!--   </a-entity> -->
  <!-- </a-light> -->

  <!-- <a-entity position="0 3 -4"> -->
  <!--   <a-cone color="green" radius-bottom="2" radius-top="0" height="2"> -->
  <!--       <a-cone mixin="tree-color" radius-bottom="2" radius-top="0" position="0 -1   0"></a-cone> -->
  <!--       <a-cone mixin="tree-color" radius-bottom="2" radius-top="0" position="0 -1.5 0"></a-cone> -->
  <!--       <a-cylinder mixin="bark-color" height="1" radius="0.5" position="0 -2.5 0"></a-cylinder> -->
  <!--   </a-cone> -->
  <!-- </a-entity> -->

  <!-- <a-entity layout="type: circle; radius: 10"> -->
  <!--   <a-entity entity-generator="mixin: conicTree; num: 50;"></a-entity> -->
  <!-- </a-entity> -->


  <!-- <a-entity layout="type: circle; radius: 10"> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!-- </a-entity> -->
  <!--  -->
  <!-- <a-entity layout="type: circle; radius: 10" position="0 2.5 0" -->
  <!-- animation__rotate="property: rotation; dur: 10000; easing: linear; loop: true; to: 0 360 0"> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 1500;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.9;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 2000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.8;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 3000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.7;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 4000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.6;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 5000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.5;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 6000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.4;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 5000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.3;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 6000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.2;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 7000;"></a-entity> -->
  <!--   <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.2; arc: 360" material="color: #2eafac; roughness: 0; metalness: 0.1;" position="0 0 -5" animation__rotate="property: rotation; loop: true; easing: linear; from: 0 0 0; to: 360 0 0; dur: 8000;"></a-entity> -->
  <!-- </a-entity> -->


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
