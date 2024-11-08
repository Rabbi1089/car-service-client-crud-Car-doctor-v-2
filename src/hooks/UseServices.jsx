import { useEffect, useState } from "react";


const UseServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('car-service-server-blue.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return services
};

export default UseServices;