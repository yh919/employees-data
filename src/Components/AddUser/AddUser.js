import React from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";

const onSubmitHandler = (e) => { 
    e.preventDefault();
    console.log(e);
 }

const AddUser = () => {
    return ( 
        <Form onSubmit={onSubmitHandler}>
            <Form.Controller>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter Name" id="name" />
                <label htmlFor="age">Age</label>
                <input type="text" placeholder="Enter Age" id="age" />
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Enter Title" id="title" />
                <Form.Controller>
                    <Button type='submit'>Submit</Button>
                    <Button type='reset'>Reset</Button>
                </Form.Controller>
            </Form.Controller>
        </Form>
     );
}
 
export default AddUser;