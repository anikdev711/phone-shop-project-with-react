/* eslint-disable react/prop-types */
import PhonesCard from "./PhonesCard";


const Phones = ({phones}) => {

    return (
        <div>
            <h3 className="text-2xl text-center py-4">Our Phones Collections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
        </div>
    );
};

export default Phones;