import minifier from 'string-minify';

const schema={
  listings: minifier(`{
      id,price,price_currency,min_payment_months_count,
      bedrooms_count,master_bedrooms_count,
      post{
        id,url,post_date,caption,
        owner_profile{
          id,
          username
      }},
      location{
        name,lat,lng
      }
   }`),
   message:minifier(
     `{
        _id, id,text,image, video, createdAt:created,sent,pending
        user{
          _id:id,name:first_name,
        },
      }
  `),
  virtualtour:`{file,thumbnail,listing{id}}`
}

/*
    price,price_currency,
    min_payment_months_count,
    months_count,bedrooms_count,
    master_bedrooms_count,
    post{
      id,url,post_date
    },
    location{
      name
    },
    owner_profile{
      username
    }
*/
export default schema;
