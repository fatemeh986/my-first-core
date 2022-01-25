import React from "react";

const Contactus=()=>{
    return(
        <div>
            <h1>contact us</h1>
            <form action="" className="contactform">
                <div className="contactform__field">
                    <label for="">Name</label>
                    <div className="contactform__input">
                    <input type="text" name="name" placeholder="Name"/>
                    </div>
                </div>
                <div className="contactform__field">
                    <label for="">Email</label>
                    <div>
                    <input type="text" name="email"  placeholder="Email"/>
                    </div>
                </div>
                <button className="addbtn">Add</button>
            </form>
            
        </div>
    );
}
export default Contactus