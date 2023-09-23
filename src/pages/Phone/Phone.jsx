import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const Phone = () => {
    const [phone, setPhone] = useState({});
    const { id } = useParams();
    const phones = useLoaderData();
    // console.log(id);
    // console.log(phones);

    useEffect(() => {
        const findPhones = phones.find((item) => item.id === id);
        // console.log(findPhones);
        setPhone(findPhones);
    }, [id, phones])
    // console.log(phone);

    return (
        <div>
            {/* <h1 className="text-2xl text-center">Phone Details</h1> */}

            <PhoneCard phone={phone}></PhoneCard>

        </div>
    );
};

export default Phone;