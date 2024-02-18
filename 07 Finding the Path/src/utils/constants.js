const CORS_PROXY = "https://corsproxy.io/?";

export const RES_THUMBNAIL_URL =
  CORS_PROXY +
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const SWIGGY_API_URL =
  CORS_PROXY +
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4198627&lng=72.8116591&page_type=DESKTOP_WEB_LISTING";

export const SWIGGY_RES_MENU =
  CORS_PROXY +
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4150201&lng=72.8196225&catalog_qa=undefined&restaurantId=";

export const OFFER_LOGO_URL =
  CORS_PROXY +
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";

export const MENU_ITEM_IMAGE_URL =
  CORS_PROXY +
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
