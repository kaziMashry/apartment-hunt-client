import React, { useContext, useState } from 'react';
import { userContext } from '../../App';

const AddRentHouse = () => {
    document.title = 'Add rent house';
    const [serviceTitle, setServiceTitle] = useState(null);
    const [price, setPrice] = useState(null);
    const [location, setLocation] = useState(null);
    const [bedroom, setBedroom] = useState(null);
    const [bathroom, setBathroom] = useState(null);
    const [file, setFile] = useState(null);

    const [loggedinUser, setLoggedinUser] = useContext(userContext);

    const ownerEmail = loggedinUser.email;

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', serviceTitle);
        formData.append('ownerEmail', ownerEmail);
        formData.append('price', price);
        formData.append('location', location);
        formData.append('bedroom', bedroom);
        formData.append('bathroom', bathroom);

        console.log(formData);
        
        fetch('https://blooming-wildwood-49204.herokuapp.com/addAppartments', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(isAdded => {
            alert(isAdded);
        })

        e.preventDefault();
    }

    return (
        <div className="m-3 p-4 bg-white rounded-lg">
            <form>
                <input type='text' placeholder='Service title' onChange={(e) => setServiceTitle(e.target.value)} required/>
                <input type='number' placeholder='Price' onChange={(e) => setPrice(e.target.value)} required/>
                <input type='text' placeholder='Location' onChange={(e) => setLocation(e.target.value)} required/>
                <input type='number' placeholder='Number of bedroom' onChange={(e) => setBedroom(e.target.value)} required/> 
                <input type='number' placeholder='Number of bathroom' onChange={(e) => setBathroom(e.target.value)} required/>
                <input type='file'  onChange={(e) => setFile(e.target.value)} required/> <br />

                <input type='submit' className="btn-brand m-1" onClick={(e) => handleSubmit(e)} />
            </form>
        </div>
    );
};

export default AddRentHouse;