import {colors} from "./colors";
import {font} from "./config";
export const sortingOptions=[
        { title: 'Sorting Options', textStyle:{fontFamily:font.bold, color:colors.grey}},
        { title: 'Price', value:"price" },
        { title: 'Post Date', value:"post__post_date" },
        { title: 'Agent Name', value:"post__owner_profile__username" },
        { title: 'Bedrooms Count', value:"bedrooms_count" },
        { title: 'Master Bedrooms Count', value:"master_bedrooms_count" },
        // { title: 'Cancel', textStyle:{color:"gray", paddingBottom:20}},
 ]