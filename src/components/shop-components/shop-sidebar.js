import React, {useEffect} from "react";
import { useRecoilState } from "recoil";
import { filtersState } from "atoms";
import {filtersSections} from "helpers/sections";

function Section(props){
  const [filters, setFilters] = useRecoilState(filtersState);
  const {section, handleInputChange}=props;
  const i=section.title;
  switch(section.type){
    case "checkbox":
      return (<>
          <h4 className="ltn__widget-title">{section.title}</h4>
          <ul>
          {section.options.map((option, j)=>(
              <li key={`option-${i}-${j}`}>
              <label className="checkbox-item">
                {option.title}
                <input 
                  type="checkbox" 
                  onChange={handleInputChange} 
                  name={`${option.field}[]=${option.value}`}
                  checked={filters[option.field]?.includes(option.value)}
                />
                <span className="checkmark" />
              </label>
              <span className="categorey-no">{option.count||""}</span>
              </li>
            ))}
          </ul>
          <hr />
          </>)
    case 'boolean':
      return (<>
        <h4 className="ltn__widget-title">{section.title}</h4>
        <ul>
          {section.options.map((option, j)=>(
            <li key={`option-${i}-${j}`}>
              <label className="checkbox-item">
                {option.title}
                <input 
                type="checkbox" 
                name={option.field} 
                onChange={handleInputChange} 
                checked={filters[option.field]||false}
                />
                <span className="checkmark" />
              </label>
              <span className="categorey-no">{option.count||""}</span>
            </li>
          ))}
        </ul>
        <hr />
      </>)
    case 'radio':
          return (<>
            <h4 className="ltn__widget-title">{section.title}</h4>
            <ul>
              {section.options.map((option, j)=>(
                <div key={`option-${i}-${j}`}>
                  <div>
                    <input onChange={handleInputChange} 
                      type="radio" 
                      id={option.value} 
                      name={section.field} 
                      value={option.value} 
                      checked={filters[section.field]===option.value}
                      />
                    <label htmlFor={option.value}>{option.title}</label>
                  </div>
                  <span className="categorey-no">{option.count||""}</span>
                </div>
              ))}
            </ul>
            <hr />
          </>)

    case 'amount-slider':
      return (
      <div className="widget--- ltn__price-filter-widget">
        <h4 className="ltn__widget-title ltn__widget-title-border---">
          {section.title}
        </h4>
        {section.options.map((option, j)=>(
        <div className="price_filter" key={j}>
          <div className="price_slider_amount">
            {/* <input type="submit" defaultValue="Your range:" onChange={handleInputChange} /> */}
            <input
              type="text"
              className="amount"
              name={`${option.field}-__gte-__lte`}
              onChange={handleInputChange}
            />
          </div>
          <div className="slider-range" onChange={handleInputChange} />
        </div>))}
      </div>)
    default:
      return (<>
                <h4 className="ltn__widget-title">{section.title}</h4>
                <ul>
                  {section.options.map((option, j)=>(
                    <li key={`option-${j}`}>
                    <div>
                        {option.title}
                        <span className="categorey-no">
                          <input 
                          value={filters[option.field]||0}
                          style={{
                            width:50, height:25, 
                            borderRadius:8, textAlign:"center"}} className="amount" type="number" name={option.field} onChange={handleInputChange} />
                        </span>
                        </div>
                    </li>
                  ))}
                </ul>
                <hr />
        </>)
  }
}

export default function Sidebar(props){
    const [filters, setFilters] = useRecoilState(filtersState);
    function handleInputChange(e){
      let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      let name = e.target.name
      if(name && name.split("=").length===2){ //eg name => bedroom_count__gte=1 //most cases this is checkbox
        [name, value]=name.split("=")
        const value_origin=value;
        const isList = name.includes("[]")
        if(!e.target.checked){//if box is unchecked, unset the value
          value = undefined
        }
        if(isList){//append or remove from list to list
          const filtersName=name.replace("[]", "")
          //also rename name here to the filtersName
          name=filtersName;
          let filtersValue=filters[filtersName]||[]
          if(value === undefined){ //remove from list
              value=filtersValue.filter(v=>v!==value_origin)
          }else{//add to list
            value=[...filtersValue, value_origin]
          }
        }
      }
      // save multiple or one value
      if(name.includes("-")){//eg price_currency-__gte-__lte
        const nameParts=name.split("-").slice(1,)
        const valueParts=value.split("-")
        const extraDict={page:undefined}
        nameParts.map((n, index)=>{
          extraDict[`${name.split("-")[0]}${n}`]=valueParts[index]?.trim()||0
        })
        setFilters({
          ...filters,
          ...extraDict
        });

      }else{
        setFilters({
          ...filters,
          page:undefined,
          [name]: value,
        });
      }
   }

   const filtersCount = Object.keys(filters).length;

    return (
      <div className="col-lg-4  mb-100">
        <aside className="sidebar ltn__shop-sidebar">
          <h3 className="mb-10">Preferences</h3>
          {filtersCount>1 && <label className="mb-30" onClick={()=>setFilters({order_by:"-id"})}>
            <small>Reset All {filtersCount} Filters </small>
          </label>}
          {/* Advance Information widget */}
          <div className="widget ltn__menu-widget">
          {filtersSections.map((section, i)=>(
              <Section key={i} section={section} handleInputChange={handleInputChange}/>
            ))}

          </div>
        </aside>
      </div>
    );
}

