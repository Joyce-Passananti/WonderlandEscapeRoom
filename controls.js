var hasKey = false;
var isSmall = false;

AFRAME.registerComponent("start-interact", {
    init: function () {
      var data = this.data;
      var sceneEl = document.querySelector("a-scene");
      var start = sceneEl.querySelector("#start");
      var cover = document.querySelector("#cover");
      console.log(start, sceneEl)
  
      start.addEventListener("mouseenter", function () {
        start.setAttribute("color", "pink");
      });
  
      start.addEventListener("mouseleave", function () {
        start.setAttribute("color", "purple");
      });
  
      start.addEventListener("click", function () {
        sceneEl.removeChild(start);
        cover.setAttribute("visible","false");  
      });
    }
  });

AFRAME.registerComponent("stump-interact", {
    init: function () {
      var data = this.data;
      var sceneEl = document.querySelector("a-scene");
      var stump = sceneEl.querySelector("#stump");
      var camera = document.querySelector("#rig");
      var chairs = document.querySelector("#chairs");
  
      stump.addEventListener("mouseenter", function () {
          stump.setAttribute("animation", "property: scale; to: 13 13 13; dur: 200");
          console.log("hi");
      });
  
      stump.addEventListener("mouseleave", function () {          
          stump.setAttribute("animation", "property: scale; to: 10 10 10; dur: 200");
          console.log("bi");
      });
  
      stump.addEventListener("click", function () {
          camera.setAttribute("animation", "property: position; to: 0 85 20; dur: 2500");
          camera.setAttribute("animation__2", "property: position; from: 0 85 20; to: 0 10 35; dur: 8000; delay: 2000");

          chairs.setAttribute("animation", "property: position; to: 0 4 0; dur: 6000; delay: 3000");
          chairs.setAttribute("animation__2", "property: rotation; to: 24 360 23; loop: true; dur: 3000; ");
          chairs.setAttribute("animation__3", "property: rotation; to: 0 0 0; delay: 9000");
      });
    }
  });

  AFRAME.registerComponent("potion-interact", {
    init: function () {
      var data = this.data;
      var sceneEl = document.querySelector("a-scene");
      var potion = sceneEl.querySelector("#bottle");
      var camera = document.querySelector("#rig");
      var chairs = document.querySelector("#chairs");
      var table = document.querySelector("#table");
  
      potion.addEventListener("mouseenter", function () {
          potion.setAttribute("animation", "property: scale; to: .4 .4 .4; dur: 200");
          console.log("hi");
      });
  
      potion.addEventListener("mouseleave", function () {
          potion.setAttribute("animation", "property: scale; to: .2 .2 .2; dur: 200");
          console.log("bi");
      });
  
      potion.addEventListener("click", function () {
          potion.setAttribute("visible", "false");
          isSmall = true;

          camera.setAttribute("animation", "property: position; to: 0 0 .2 45; dur: 50");
          camera.setAttribute("animation__2", "property: rotation; to: 10 0 0; dur: 50; delay: 0");

          chairs.setAttribute("animation", "property: scale; to: 1 4 1; dur: 200; delay: 0");
          table.setAttribute("animation", "property: scale; to: 2 5 2; dur: 200; delay: 0");
      });
    }
  });

  AFRAME.registerComponent("key-interact", {
    init: function () {
      var data = this.data;
      var sceneEl = document.querySelector("a-scene");
      var key = sceneEl.querySelector("#key");
      var camera = document.querySelector("#rig");
  
      key.addEventListener("mouseenter", function () {
          key.setAttribute("animation", "property: scale; to: .01 .01 .01; dur: 200");
          console.log("hi");
      });
  
      key.addEventListener("mouseleave", function () {
          key.setAttribute("animation", "property: scale; to: .004 .004 .004; dur: 200");
          console.log("bi");
      });
  
      key.addEventListener("click", function () {
          key.setAttribute("visible", "false");
          hasKey = true;
      });
    }
  });

  
  AFRAME.registerComponent("door-interact", {
    init: function () {
      var data = this.data;
      var sceneEl = document.querySelector("a-scene");
      var door = sceneEl.querySelector("#door");
      var keyhole = sceneEl.querySelector("#keyhole");
      var camera = document.querySelector("#rig");
  
      door.addEventListener("mouseenter", function () {
        keyhole.setAttribute("animation", "property: rotation; from: 0 0 20; to: 0 0 -20; dir: alternate; loop: true; dur: 300; ");
        keyhole.setAttribute("animation__2", "property: scale; to: .1 .1 .1; dur: 200");
        console.log("rotate");
      });
  
      door.addEventListener("mouseleave", function () {
        keyhole.setAttribute("animation", "property: rotation; to: 0 0 0;");
        keyhole.setAttribute("animation__2", "property: scale; to: .04 .04 .04; dur: 200");
        console.log("stop");

      });
  
      door.addEventListener("click", function () {
          if(hasKey && isSmall) {
            console.log("yay u win a prize");
            camera.setAttribute("animation", "property: position; to: 0 90 20; dur: 1000");
          }
          else
            console.log("no")
      });
    }
  });