
const APIKEY = 'AIzaSyBNf3lqH_3TtVO1mw3U9uHF36nSNqjcuy0';
const APIZOOM = 15;
const APISIZE = '400x400';


const getImageMapUrl = ({lat,lng}) => {
    //&signature=YOUR_SIGNATURE
    const URLMap = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${APIZOOM}&size=${APISIZE}&markers=color:orange%7Csize:mid%7C${lat},${lng}&maptype=roadmap&key=${APIKEY}`;
    return URLMap;
}

const getLintToMaps = ({lat,lng}) =>{
    return `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`;
}

const getImageAndLink = (param) => [getImageMapUrl(param), getLintToMaps(param)]

export { getImageAndLink };