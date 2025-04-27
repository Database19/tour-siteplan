(function(){
    var script = {
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "rootPlayer",
 "desktopMipmappingEnabled": false,
 "children": [
  "this.MainViewer"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "start": "this.init()",
 "defaultVRPointer": "laser",
 "paddingLeft": 0,
 "downloadEnabled": false,
 "definitions": [{
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -94.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FAE7053B_F559_D320_41D1_D39D73CC1BBF"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 178.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E4497370_F559_D720_41D1_DC922C8DA268"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 179.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FA94D635_F559_D120_41E3_699A64392E0A"
},
{
 "label": "Tour Site Plan 6_7 - Panorama",
 "id": "panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 178.39,
   "yaw": -0.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5"
  },
  {
   "backwardYaw": 1.61,
   "yaw": 179.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3DEA51F_DD76_2B71_41DC_309EB2E26775",
  "this.overlay_D3BCC885_DD76_5951_41D0_B275E3373809"
 ],
 "thumbnailUrl": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -0.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FB9DA2B5_F559_D123_41C5_436359CAF33B"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -1.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E47243F3_F559_D720_41EA_C4337DFF185F"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -178.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E46133C5_F559_D760_41B3_BCE5DE5F7B1C"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_camera"
},
{
 "label": "Tour Site Plan 6_9 - Panorama",
 "id": "panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -87.65,
   "yaw": -179.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3B204EE_DD72_2AD3_41DA_AFEB64ECCDB6",
  "this.overlay_D2C2030E_DD72_6F53_41E3_296E342F4B87"
 ],
 "thumbnailUrl": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_camera"
},
{
 "label": "Tour Site Plan 5",
 "id": "panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.91,
   "yaw": 1.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3"
  },
  {
   "backwardYaw": -0.66,
   "yaw": -88.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB"
  },
  {
   "backwardYaw": -178.17,
   "yaw": 89.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3C3011F_DD72_2B72_41DC_BD4D52A17806",
  "this.overlay_D213CAFE_DD72_3EB2_4189_24766472D869",
  "this.overlay_D26E6802_DD72_D953_41D3_0C4D131AA416"
 ],
 "thumbnailUrl": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "label": "Tour Site Plan 4",
 "id": "panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -88.58,
   "yaw": -0.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4"
  },
  {
   "backwardYaw": -31.56,
   "yaw": -118.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3FFB57C_DD72_2BB7_41E3_DE68C038807D",
  "this.overlay_D238A8F6_DD72_5AB3_41E1_E1E307C1510B"
 ],
 "thumbnailUrl": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -178.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FACF9494_F559_D1E0_41E8_B037E2CD3003"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -178.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FAF965B9_F559_D323_41E2_BFE75271E929"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -89.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FAE94566_F559_D320_41D9_E0FCFA5E3559"
},
{
 "items": [
  {
   "media": "this.panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_camera"
  },
  {
   "media": "this.panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_camera"
  },
  {
   "media": "this.panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_camera"
  },
  {
   "media": "this.panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_camera"
  },
  {
   "media": "this.panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_camera"
  },
  {
   "media": "this.panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_camera"
  },
  {
   "media": "this.panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_camera"
  },
  {
   "media": "this.panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_camera"
  },
  {
   "media": "this.panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_camera"
  },
  {
   "media": "this.panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_camera"
  },
  {
   "media": "this.panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_camera"
  },
  {
   "media": "this.panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E45A239A_F559_D7E0_41E9_B0083FAE1950"
},
{
 "label": "Tour Site Plan 6_6 - Panorama",
 "id": "panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -88.03,
   "yaw": 1.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B"
  },
  {
   "backwardYaw": 89.56,
   "yaw": -178.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3DED1B8_DD75_EABF_41E1_5BD90DDF9201",
  "this.overlay_D2BC4DE3_DD76_5AD1_41D1_AF1ACB8E70E3"
 ],
 "thumbnailUrl": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_camera"
},
{
 "label": "Tour Site Plan 3",
 "id": "panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -118.42,
   "yaw": -31.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB"
  },
  {
   "backwardYaw": 85.41,
   "yaw": -162.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3CEE7F3_DD4E_D6B1_41DA_A08B16FA4D11",
  "this.overlay_D2C61D7C_DD4E_5BB7_41CE_3ADD5A4CF1C1"
 ],
 "thumbnailUrl": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "label": "Tour Site Plan 6_12 - Panorama",
 "id": "panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.72,
   "yaw": -88.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A"
  },
  {
   "backwardYaw": 0.17,
   "yaw": 1.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3D6BB27_DD7D_DF51_41EA_FBB1B05B9392",
  "this.overlay_D20257A0_DD7E_374F_41CE_113F99C8F35C"
 ],
 "thumbnailUrl": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 179.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FAF1558F_F559_D3FF_41A0_FE9AC886734B"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -179.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FA80B5E3_F559_D320_41C9_B3892661E6EB"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 1.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FAA3D660_F559_D120_418F_A244A92145F0"
},
{
 "label": "Tour Site Plan 2",
 "id": "panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -162.38,
   "yaw": 85.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E"
  },
  {
   "backwardYaw": 179.61,
   "yaw": 1.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3EF043C_DD4E_29B7_41E1_18EF113FB680",
  "this.overlay_D2A20A88_DD4E_795F_41A9_DE518E1D4DB3"
 ],
 "thumbnailUrl": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -178.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FACB546A_F559_D120_41E3_37DEE370A3F2"
},
{
 "label": "Tour Site Plan 1",
 "id": "panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D30EF14F_DD52_6BD1_41D5_B15D0515A680"
 ],
 "thumbnailUrl": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -90.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FBB6131A_F559_D0E0_41C5_39EA979544C9"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 92.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FBBD2345_F559_D760_41B9_9113693AD1C2"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 91.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FAD3B4BE_F559_D120_41D9_F92D41DFD79A"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_camera"
},
{
 "label": "Tour Site Plan 6_10 - Panorama",
 "id": "panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.26,
   "yaw": 90.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5"
  },
  {
   "backwardYaw": -179.72,
   "yaw": -87.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0"
  },
  {
   "backwardYaw": 1.45,
   "yaw": 0.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3CCDFA7_DD72_D751_41DC_F7A169F5DDCA",
  "this.overlay_D2C750A2_DD72_2952_41DF_961DB13BABFC",
  "this.overlay_D269806F_DD72_29D2_41C8_7AAFB28C6D81"
 ],
 "thumbnailUrl": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 17.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FB94D27C_F559_D120_41D3_04136AD24C23"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_camera"
},
{
 "label": "Tour Site Plan 6_11 - Panorama",
 "id": "panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.17,
   "yaw": 0.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3CF3376_DD72_2FB3_418D_0CBA3331C4BC",
  "this.overlay_D23AC310_DD72_2F4F_41E8_4B7B722957BD"
 ],
 "thumbnailUrl": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -179.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FA8F860D_F559_D0E0_4179_243DF43C716E"
},
{
 "label": "Tour Site Plan 6_8 - Panorama",
 "id": "panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 90.29,
   "yaw": -1.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3"
  },
  {
   "backwardYaw": -0.02,
   "yaw": 178.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D3AA27CE_DD76_56D2_41E5_5E539C13008C",
  "this.overlay_D3F711FF_DD76_2AB1_41DD_010475683BD0"
 ],
 "thumbnailUrl": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 148.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FAD5D4E8_F559_D120_41EA_55DC61A5F759"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 61.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FADF0512_F559_D0E0_41D7_68926CA8C347"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 91.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_FBAAD2EF_F559_D120_41B8_500433BD97A4"
},
{
 "toolTipPaddingRight": 6,
 "paddingBottom": 0,
 "transitionDuration": 500,
 "id": "MainViewer",
 "toolTipOpacity": 1,
 "width": "100%",
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingLeft": 6,
 "toolTipTextShadowColor": "#000000",
 "paddingLeft": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "progressRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowBlurRadius": 3,
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderRadius": 0,
 "vrPointerSelectionTime": 2000,
 "height": "100%",
 "toolTipTextShadowOpacity": 0,
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "progressHeight": 10,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarBottom": 5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadow": true,
 "playbackBarOpacity": 1,
 "playbackBarLeft": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderColor": "#000000",
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "progressBarOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "progressBorderSize": 0,
 "playbackBarHeight": 10,
 "toolTipBorderSize": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingTop": 0,
 "minWidth": 100,
 "shadow": false,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "progressBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowColor": "#333333",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0
},
{
 "maps": [
  {
   "hfov": 6.77,
   "yaw": -0.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.11
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5, this.camera_E47243F3_F559_D720_41EA_C4337DFF185F); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2F5EFC5_F32F_EF60_41EC_5DFF76CA63B0",
   "pitch": -5.11,
   "yaw": -0.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.77,
   "distance": 100
  }
 ],
 "id": "overlay_D3DEA51F_DD76_2B71_41DC_309EB2E26775",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 10.87,
   "yaw": 179.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.41
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9, this.camera_FACB546A_F559_D120_41E3_37DEE370A3F2); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FBB9E19A_F526_53E0_41C8_00A2215FF8E1",
   "pitch": -7.41,
   "yaw": 179.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.87,
   "distance": 100
  }
 ],
 "id": "overlay_D3BCC885_DD76_5951_41D0_B275E3373809",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 5.9,
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.41
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E4E23EC4_F52A_5160_41DC_2A3423D66FE8",
   "pitch": -4.41,
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.9,
   "distance": 100
  }
 ],
 "id": "overlay_D3B204EE_DD72_2AD3_41DA_AFEB64ECCDB6",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 8.99,
   "yaw": -179.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.38
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3, this.camera_FBBD2345_F559_D760_41B9_9113693AD1C2); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2CB7FC6_F32F_EF60_41D7_47118E22DC56",
   "pitch": -7.38,
   "yaw": -179.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.99,
   "distance": 100
  }
 ],
 "id": "overlay_D2C2030E_DD72_6F53_41E3_296E342F4B87",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 5.44,
   "yaw": 1.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.24
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3, this.camera_FA8F860D_F559_D0E0_4179_243DF43C716E); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2F64FC4_F32F_EF60_4199_496A938E3BFE",
   "pitch": -4.24,
   "yaw": 1.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.44,
   "distance": 100
  }
 ],
 "id": "overlay_D3C3011F_DD72_2B72_41DC_BD4D52A17806",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 4.64,
   "yaw": -88.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.7
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB, this.camera_FA94D635_F559_D120_41E3_699A64392E0A); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2F6AFC4_F32F_EF60_41A9_DD919483D84D",
   "pitch": -3.7,
   "yaw": -88.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.64,
   "distance": 100
  }
 ],
 "id": "overlay_D213CAFE_DD72_3EB2_4189_24766472D869",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 7.87,
   "yaw": 89.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.81
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A, this.camera_FAA3D660_F559_D120_418F_A244A92145F0); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D3AD25D6_DD72_6AF3_41E9_C2B29EF992D3",
   "pitch": -4.81,
   "yaw": 89.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.87,
   "distance": 100
  }
 ],
 "id": "overlay_D26E6802_DD72_D953_41D3_0C4D131AA416",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 11.35,
   "yaw": -118.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.75
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E, this.camera_FAD5D4E8_F559_D120_41EA_55DC61A5F759); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2F79FC4_F32F_EF60_41D1_C06FCD827746",
   "pitch": -14.75,
   "yaw": -118.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.35,
   "distance": 100
  }
 ],
 "id": "overlay_D3FFB57C_DD72_2BB7_41E3_DE68C038807D",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 9.98,
   "yaw": -0.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.01
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4, this.camera_FAD3B4BE_F559_D120_41D9_F92D41DFD79A); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2F7FFC4_F32F_EF60_41D3_793011B07AC5",
   "pitch": -7.01,
   "yaw": -0.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.98,
   "distance": 100
  }
 ],
 "id": "overlay_D238A8F6_DD72_5AB3_41E1_E1E307C1510B",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 4.84,
   "yaw": 1.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B, this.camera_FBAAD2EF_F559_D120_41B8_500433BD97A4); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2F51FC4_F32F_EF60_41EE_5FF4CE7C5986",
   "pitch": -3.56,
   "yaw": 1.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.84,
   "distance": 100
  }
 ],
 "id": "overlay_D3DED1B8_DD75_EABF_41E1_5BD90DDF9201",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 8.6,
   "yaw": -178.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4, this.camera_FBB6131A_F559_D0E0_41C5_39EA979544C9); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2F57FC5_F32F_EF60_41E8_B464E32730E9",
   "pitch": -8.56,
   "yaw": -178.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.6,
   "distance": 100
  }
 ],
 "id": "overlay_D2BC4DE3_DD76_5AD1_41D1_AF1ACB8E70E3",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 8.6,
   "yaw": -31.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.95
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB, this.camera_FADF0512_F559_D0E0_41D7_68926CA8C347); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D3AB45D5_DD72_6AF1_41E2_80DDEA4060A4",
   "pitch": -6.95,
   "yaw": -31.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.6,
   "distance": 100
  }
 ],
 "id": "overlay_D3CEE7F3_DD4E_D6B1_41DA_A08B16FA4D11",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 6,
   "yaw": -162.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.24
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9, this.camera_FAE7053B_F559_D320_41D1_D39D73CC1BBF); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E4957F2A_F526_6F20_41DF_7105955C8617",
   "pitch": -7.24,
   "yaw": -162.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6,
   "distance": 100
  }
 ],
 "id": "overlay_D2C61D7C_DD4E_5BB7_41CE_3ADD5A4CF1C1",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 4.25,
   "yaw": 1.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.98
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7, this.camera_FA80B5E3_F559_D320_41C9_B3892661E6EB); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2CA0FC7_F32F_EF60_41EA_C4147CA19AF6",
   "pitch": -3.98,
   "yaw": 1.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.25,
   "distance": 100
  }
 ],
 "id": "overlay_D3D6BB27_DD7D_DF51_41EA_FBB1B05B9392",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 7.08,
   "yaw": -88.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.66
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A, this.camera_FAF965B9_F559_D323_41E2_BFE75271E929); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2CA6FC7_F32F_EF60_41E2_0D72874894E3",
   "pitch": -4.66,
   "yaw": -88.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.08,
   "distance": 100
  }
 ],
 "id": "overlay_D20257A0_DD7E_374F_41CE_113F99C8F35C",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 7.31,
   "yaw": 1.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.72
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA, this.camera_FB9DA2B5_F559_D123_41C5_436359CAF33B); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2F08FC3_F32F_EF60_41C0_561844F0281F",
   "pitch": -5.72,
   "yaw": 1.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.31,
   "distance": 100
  }
 ],
 "id": "overlay_D3EF043C_DD4E_29B7_41E1_18EF113FB680",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 10.3,
   "yaw": 85.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.57
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E, this.camera_FB94D27C_F559_D120_41D3_04136AD24C23); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2F0CFC3_F32F_EF60_41E7_66820B2B8936",
   "pitch": -9.57,
   "yaw": 85.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.3,
   "distance": 100
  }
 ],
 "id": "overlay_D2A20A88_DD4E_795F_41A9_DE518E1D4DB3",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 8.55,
   "yaw": -1.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.48
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E496DF29_F526_6F20_41E4_FE8F46A5EE5A",
   "pitch": -7.48,
   "yaw": -1.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.55,
   "distance": 100
  }
 ],
 "id": "overlay_D30EF14F_DD52_6BD1_41D5_B15D0515A680",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 5.07,
   "yaw": 0.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.33
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4, this.camera_E46133C5_F559_D760_41B3_BCE5DE5F7B1C); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2CBDFC6_F32F_EF60_41BA_3758B75810FD",
   "pitch": -4.33,
   "yaw": 0.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.07,
   "distance": 100
  }
 ],
 "id": "overlay_D3CCDFA7_DD72_D751_41DC_F7A169F5DDCA",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 4.18,
   "yaw": -87.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.2
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0, this.camera_E45A239A_F559_D7E0_41E9_B0083FAE1950); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2CA2FC6_F32F_EF60_41D7_EFEF949518B6",
   "pitch": -3.2,
   "yaw": -87.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.18,
   "distance": 100
  }
 ],
 "id": "overlay_D2C750A2_DD72_2952_41DF_961DB13BABFC",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 4.17,
   "yaw": 90.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.84
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5, this.camera_E4497370_F559_D720_41D1_DC922C8DA268); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2CA7FC6_F32F_EF60_4181_5A956777E536",
   "pitch": -2.84,
   "yaw": 90.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.17,
   "distance": 100
  }
 ],
 "id": "overlay_D269806F_DD72_29D2_41C8_7AAFB28C6D81",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 4.94,
   "yaw": 0.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.7
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B, this.camera_FACF9494_F559_D1E0_41E8_B037E2CD3003); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2CABFC6_F32F_EF60_41DF_6CDD55ED8855",
   "pitch": -3.7,
   "yaw": 0.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.94,
   "distance": 100
  }
 ],
 "id": "overlay_D3CF3376_DD72_2FB3_418D_0CBA3331C4BC",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 5.81,
   "yaw": 87.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.39
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2CBBFC7_F32F_EF60_41C1_A3DEA3CEBAF1",
   "pitch": -4.39,
   "yaw": 87.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.81,
   "distance": 100
  }
 ],
 "id": "overlay_D23AC310_DD72_2F4F_41E8_4B7B722957BD",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 5.09,
   "yaw": -1.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3, this.camera_FAE94566_F559_D320_41D9_E0FCFA5E3559); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2F47FC5_F32F_EF60_41EE_36379290DB87",
   "pitch": -3.86,
   "yaw": -1.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.09,
   "distance": 100
  }
 ],
 "id": "overlay_D3AA27CE_DD76_56D2_41E5_5E539C13008C",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 8.4,
   "yaw": 178.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.33
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA, this.camera_FAF1558F_F559_D3FF_41A0_FE9AC886734B); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FBA6F176_F52E_3320_41E6_584A479C379C",
   "pitch": -5.33,
   "yaw": 178.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.4,
   "distance": 100
  }
 ],
 "id": "overlay_D3F711FF_DD76_2AB1_41DD_010475683BD0",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2F5EFC5_F32F_EF60_41EC_5DFF76CA63B0",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FFEB94_DD56_5F77_41E3_E4EC8E48A1EA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FBB9E19A_F526_53E0_41C8_00A2215FF8E1",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E4E23EC4_F52A_5160_41DC_2A3423D66FE8",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FF194C_DD56_3BD7_41D4_29D3C35B33C0_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2CB7FC6_F32F_EF60_41D7_47118E22DC56",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2F64FC4_F32F_EF60_4199_496A938E3BFE",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2F6AFC4_F32F_EF60_41A9_DD919483D84D",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FD8D30_DD56_7B4F_41DD_42E7F49723D4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D3AD25D6_DD72_6AF3_41E9_C2B29EF992D3",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2F79FC4_F32F_EF60_41D1_C06FCD827746",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1F8560D_DD56_6956_41E2_45E0E695E5DB_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2F7FFC4_F32F_EF60_41D3_793011B07AC5",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2F51FC4_F32F_EF60_41EE_5FF4CE7C5986",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FF24A5_DD56_6951_41DC_0B55A393344A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2F57FC5_F32F_EF60_41E8_B464E32730E9",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D3AB45D5_DD72_6AF1_41E2_80DDEA4060A4",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FCEF65_DD56_57D1_41B4_378B6ED7CB0E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E4957F2A_F526_6F20_41DF_7105955C8617",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2CA0FC7_F32F_EF60_41EA_C4147CA19AF6",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FE1E48_DD55_D9DF_41C4_2EAFF307542B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2CA6FC7_F32F_EF60_41E2_0D72874894E3",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2F08FC3_F32F_EF60_41C0_561844F0281F",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D193A8CD_DD56_5AD6_41E4_C2554E8F46E9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2F0CFC3_F32F_EF60_41E7_66820B2B8936",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D35D1112_DD56_2B72_41DA_B86AAB5A966F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E496DF29_F526_6F20_41E4_FE8F46A5EE5A",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2CBDFC6_F32F_EF60_41BA_3758B75810FD",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2CA2FC6_F32F_EF60_41D7_EFEF949518B6",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FF1069_DD56_29DE_41C0_B2562AE9C3A3_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2CA7FC6_F32F_EF60_4181_5A956777E536",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2CABFC6_F32F_EF60_41DF_6CDD55ED8855",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FF2735_DD55_D7B1_4196_35BC4C3721C7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2CBBFC7_F32F_EF60_41C1_A3DEA3CEBAF1",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E2F47FC5_F32F_EF60_41EE_36379290DB87",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D1FFB295_DD56_2976_41D9_81ACA76C25C5_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FBA6F176_F52E_3320_41E6_584A479C379C",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
}],
 "class": "Player",
 "width": "100%",
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "shadow": false,
 "height": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player2614"
 },
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); }
 },
 "overflow": "visible",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
