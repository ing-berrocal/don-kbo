import restaurantData from '../../helper/mockdata/RestaurantData';
import {getImageMapUrl,getLintToMaps} from '../../helper/googlemap/ImageMap';

const Main = () => {

    const restaurantes = restaurantData;

    return (
        <>
            <div className="container py-4 px-3 mx-auto">
                <div class="row">
                    {
                        restaurantes.map(restaurante=>(
                            <div class="col">
                        <div class="card mb-3">
                            <img src={getImageMapUrl(restaurante.point)} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{ restaurante.name }</h5>
                                    <p class="card-text"><a target={'_blank'} href={getLintToMaps(restaurante.point)}>{ restaurante.address }</a></p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export { Main };