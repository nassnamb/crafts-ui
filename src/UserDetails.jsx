import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UserDetails = ({user}) => {



    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const [properties, setProperties] = useState({})

    useEffect(() => {

        if(params.keys) {

        }

    }, []);


    return(
        <>
        <h2> This page under maintenance, available soon</h2>
        
        </>
    )

}

export default UserDetails;