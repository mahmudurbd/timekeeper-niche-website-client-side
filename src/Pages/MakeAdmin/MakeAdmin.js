import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const handleBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        e.preventDefault();
    }
    return (
        <section className="fdb-block">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 text-center">
                    <h1>Make Admin</h1>
                    <form onSubmit={handleAdminSubmit}>
                        <div className="input-group mt-4 mb-4">
                        <input onBlur={handleBlur} type="text" className="form-control" placeholder="Enter email address"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;