import dayjs from "dayjs";
export const filtersSections=[
        {
          type:"checkbox",
          field:"offer_type", //rental,sale,lease,resale
          many:true,
          title:"Listing Type",
          options:[
           {
              title:"Renting",
              value:"rental",
              field:"offer_type",
            },
           {
              title:"Lease",
              value:"lease",
              field:"offer_type",
            },
            {
              title:"Sale",
              value:"sale",
              field:"offer_type",

            },
            {
              title:"Resale",
              value:"resale",
              field:"offer_type",
            }
          ]
        },
        {
          type:"checkbox",
          field:"price_currency", //rental,sale,lease,resale
          many:true,
          title:"Pricing Currency",
          options:[
           {
              title:"TZS",
              value:"TZS",
              field:"price_currency",
            },
           {
              title:"USD",
              value:"USD",
              field:"price_currency",
            },
          ]
        },
        {
          type:"counter",
          title:"Room & Bed",
          options:[
            {
              title:"Bedrooms Count",
              field:"bedrooms_count__gte",
            },
            {
              title:"Master Bedrooms Count",
              field:"master_bedrooms_count__gte",
            },
            {
              title:"Bathrooms Count",
              field: "bathrooms_count__gte",
            },
            {
              title:"Minimum Months Payment",
              field: "min_payment_months_count__gte",
            }
          ]
        },
        {
          type:"boolean",
          title:"Amenities",
          options:[
            {
              title:"Has Security",
              field: "has_security",
            },
            {
              title:"Has Heating",
              field:"has_heating",
            },
            {
              title:"Has Air Conditioning",
              field: "has_air_conditioning",
            },
            {
              title:"Is Furnished",
              field:"is_furnished",
            },
             {
              title:"Has Fan",
              field:"has_fan",
            },
             {
              title:"Has Fence",
              field:"has_fence", 
            },
            {
              title:"Has Sitting Room",
              field:"has_sitting_room",
            },
            {
              title:"Is Standalone",
              field:"is_standalone",
            },
            {
              title:"Has Dinning Room",
              field:"has_dinning_room",
            },
            {
              title:"Is Available",
              field:"is_available",
            },
          ]
    },
    { 
      type:"radio",
      field:"post__post_date__gte",
      title:"Filter by Post Date",
      options:[
        {
          title:"Today",
          value: dayjs().startOf('day').format().toString(),
        },
        {
          title:"Within 7 Days",
          value: dayjs().startOf('day').subtract(7, 'day').format().toString(),
        },
        {
          title:"Within 30 day",
          value:dayjs().startOf('day').subtract(30, 'day').format().toString(),
        },
        {
          title:"Within 2 Month",
          value:dayjs().startOf('day').subtract(2, 'month').format().toString(),
        },
        {
          title:"Within 3 Month",
          value:dayjs().startOf('day').subtract(3, 'month').format().toString(),
        },
      ]
    },
    { 
      type:"radio",
      field:"virtual_tour_count__gte",
      title:"Has Virtual Tour",
      options:[
        {
          title:"Any",
          value: undefined,
        },
        {
          title:"At least one",
          value: "1",
        },
      ]
    },

    {
            type:"amount-slider",
            title:"Filter by Price",
            options:[
              {
                title:"Range",
                field: "price",
              },
            ]
      },

  ]