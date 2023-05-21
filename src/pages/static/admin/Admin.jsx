import React, { useEffect, useState } from "react";
import { db } from "../../../features/users/details/send_user_infos";
import { query, collection, onSnapshot } from "firebase/firestore";
import "./admin.css";

function Admin() {
    const [data, setData] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'users'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let users = [];
            querySnapshot.forEach((doc) => {
                users.push({ ...doc.data() });
            });
            console.log(data)
            setData(users);
        });
        return () => unsubscribe();
    })

    return (
        <>
            <div className="__admin_component">
                <h1>All Users ({data.length})</h1>
                <div className="__users">
                    {data.map(({
                        ageRange,
                        country,
                        email,
                        firstName,
                        gender,
                        lastName,
                        one_on_one_mentorship,
                        phone_number,
                        preferred_course,
                    }) => (
                        <div className="__user__item">
                            <div className="__user__item_name">
                                <p>{firstName} {lastName}</p>
                            </div>
                            <div className="__user__item_info">
                                <p>Email : <span>{email}</span></p>
                                <p>Phone Number : <span>{phone_number}</span></p>
                                <p>Age Range : <span>{ageRange}</span></p>
                                <p>Gender : <span>{gender}</span></p>
                                <p>Country : <span>{country}</span></p>
                                <p>Preferred Course : <span>{preferred_course}</span></p>
                                <p>One on One Mentorship : <span>{one_on_one_mentorship}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Admin