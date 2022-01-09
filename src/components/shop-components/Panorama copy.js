import React from "react";
import Pannellum, { getConfig } from "react-pannellum";


  // function onClick() {
  //   addHotSpot(
  //     {
  //       pitch: 14.1,
  //       yaw: 1.5,
  //       type: "info",
  //       text: "Baltimore Museum of Art",
  //       URL: "https://artbma.org/",
  //     },
  //     "firstScene"
  //   );
  //   addScene("2ndScene", 
  //   {
  //     imageSource:"https://pannellum.org/images/wyman-park-playground-cubic/face0.jpg",
  //     autoRotate: -2,
  //     author: "Instadalali2",
  //     title: "Virtual Tour2",
  //     description: "A 3602 image view of the place",  
  // }, (res)=>console.log("Done ", res))
  //   // console.log("getAllScenes", getAllScenes())
  // }

//   const tourConfig={   
//     "default": {
//         "firstScene": "circle",
//         "author": "Matthew Petroff",
//         "sceneFadeDuration": 1000
//     },
    
//     "scenes": {
//         "circle": {
//             "title": "Mason Circle",
//             "hfov": 110,
//             "pitch": -3,
//             "yaw": 117,
//             "type": "equirectangular",
//             "panorama": tours[0],
//             "hotSpots": [
//                 {
//                     "pitch": -2.1,
//                     "yaw": 132.9,
//                     "type": "scene",
//                     "text": "Spring House or Dairy",
//                     "sceneId": "house"
//                 }
//             ]
//         },

//         "house": {
//             "title": "Spring House or Dairy",
//             "hfov": 110,
//             "yaw": 5,
//             "type": "equirectangular",
//             "panorama":  tours[1],
//             "hotSpots": [
//                 {
//                     "pitch": -0.6,
//                     "yaw": 37.1,
//                     "type": "scene",
//                     "text": "Mason Circle",
//                     "sceneId": "circle",
//                     "targetYaw": -23,
//                     "targetPitch": 2
//                 }
//             ]
//         }
//     }
// }
export default function Panorama(props){
  function onClick() {
    console.log(getConfig());
  }

    const config = {
      autoRotate: -2,
    };
    return (
      <div style={{flex:1}}>
        <Pannellum
          id="1"
          sceneId="firstScene"
          imageSource="http://instadalali.hudumabomba.com:8009/media/virtualtour/rn_image_picker_lib_temp_e2db9d7a-04b0-4045-941f-9c274fa0be7b.jpg"
          config={config}
          author="Instadalali"
          pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        uiText ={{loadButtonLabel:"Take virtual tour"}}
         style={
            {
            width: "100vw",
            height: "60vh",
            background: "#000000"
            }
         }
        >
        </Pannellum>
      </div>
    );
}