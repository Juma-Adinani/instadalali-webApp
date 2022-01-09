import { requests, url, utils } from "helpers";
import schema from "schema";

import React, {useEffect, useState} from "react";
import ReactPannellum, { addHotSpot, addScene,getAllScenes } from "react-pannellum";

export default function Panorama(props){
  const {item} = props;
  const [tours, setTours] = useState([])
  const [selectedTour, setSelectedTour ] = useState(null)

  async function fetchData(){
    const res = await requests.get(`${url.dalali.virtualtour}?query=${schema.virtualtour}&listing__id=${item?.id}`)
    if(res.results?.length>0){
      setTours(res.results);
      setSelectedTour(res.results[0]);
    }
  }
  useEffect(() => {
    fetchData();
  }, [item])

  async function selectTour(tour){
    setSelectedTour(null)
    await utils.sleep(10);
    setSelectedTour(tour)
  }


  return(
      <div>
        {!!selectedTour?.file && <ReactPannellum
          id="virtuarTour"
          sceneId="firstScene"
          imageSource= {selectedTour?.file}
          config={{
              autoRotate: 0.1,
              author: "Instadalali",
              title: "Virtual Tour",
              description: `A 360 view of listing ID: ${item?.id}`,
              type: "equirectangular",
              preview: selectedTour?.thumbnail||"",
              autoLoad: true,
              hotSpots:[]

          }}
          style={{
            width: "100%",
            height: "80vh",
          }}
        />}
        {!!selectedTour?.file &&
          <div className="ltn__list-item-half">
            {tours.map((tour, index)=>(
              <div className="ltn__img-slide-item-4"  key={`tour-${index}`}>
                <div
                  onClick={()=>selectTour(tour)}
                  >
                  <img src={tour?.thumbnail} alt="" height={60} width={80} />
              </div>
            </div>))
            }
          </div>}
      </div>
    );
  
}