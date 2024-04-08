import { useState } from "react";
export const Register = ()=>{

    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });

    // handeling input value
    const handelInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user)
    }
    return <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img src="/images/4966418.jpg" alt="registration form"
                        width="500"
                        height="500" />
                    </div>

                    {/* registration form code */}
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registrion Form</h1>
                        <br />

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                name="username"
                                placeholder="usernae"
                                id="username"
                                required
                                autoCapitalize="off"
                                value={user.username}
                                onChange={handelInput} />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text"
                                name="email"
                                placeholder="email"
                                id="email"
                                required
                                autoCapitalize="off" 
                                value={user.email}
                                onChange={handelInput}/>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="phone">Phone No</label>
                                <input type="text"
                                name="phone"
                                placeholder="phone No"
                                id="phone"
                                required
                                autoCapitalize="off" 
                                value={user.phone}
                                onChange={handelInput}/>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="text"
                                name="password"
                                placeholder="password"
                                id="password"
                                required
                                autoCapitalize="off" 
                                value={user.password}
                                onChange={handelInput}/>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-submit">Register Now</button>
                        </form> 
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
}