import { useState, useEffect } from "react";

const base_URL = "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1";

export function Api(URL) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${base_URL}/${URL}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);


    return {data};
}



// export async function registerUser(userData) {
//     const response = await fetch(`${URL}/users`, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(userData),
//     } )
//     return response.json;
// }

