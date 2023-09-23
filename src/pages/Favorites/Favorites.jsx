import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";


const Favorites = () => {
    const [favorite, setFavorite] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
        setFavorite(favoriteItems);
        // console.log(favoriteItems);
        if (favoriteItems) {
            const total = favoriteItems.reduce((previousPrice, currentItem) => previousPrice + currentItem.price, 0);
            setTotalPrice(total);
            // console.log(total);

        }
        else {
            setNoFound('No data found')
        }

    }, [])

    const handleRemove = () => {
        localStorage.clear();
        setFavorite([]);
        setNoFound('No data found');
    }

    return (
        <div>
            {
                noFound ? (<p className="flex justify-center items-center h-[80vh]">{noFound}</p>)
                    : (<div>
                        {
                            favorite.length > 0 && (
                                <div>
                                    <button onClick={handleRemove}
                                        className="bg-green-300 block mx-auto px-5"
                                    >Delete all favorites</button>
                                    <h1>Total Price: {totalPrice}</h1>
                                </div>
                            )
                        }
                    </div>)
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {
                    isShow ? favorite.map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
                    : favorite.slice(0,2).map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
                }
            </div>

            {
                favorite.length > 2 &&
                <button onClick={() => setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto" >
                    {isShow ? 'See Less' : 'See More'}
                </button>

            }

        </div>
    );
};

export default Favorites;