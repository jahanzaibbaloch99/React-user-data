
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const data = [
    {
        inputusers: "", inputemail: "", inputage: "", inputphone: ""
    }
];
class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:data,
            users: "",
            email: "",
            age: "",
            phone: "",

        }
    };


    onUserHandle = (e) => {
        this.setState({
            users: e.target.value,
        })
    };


    onEmailHandle = (e) => {
        this.setState({
            email: e.target.value,
        })
    };

    onMobileHandle = (e) => {
        this.setState({
            phone: e.target.value,
        })
    };

    onAgeHandle = (e) => {
        this.setState({
            age: e.target.value,
        })
    };

    onSubmithandler = (e) => {
        e.preventDefault()
        this.setState(state => {
            return {
                data:[
                    ...state.data,
                    {
                        inputusers:this.state.users,
                        inputage: this.state.age,
                        inputemail:this.state.email,
                        inputphone:this.state.phone
                    }
                ]
            }
               
            
        })
    };
    render() {
        return (
            <div className="Container">
                <form onSubmit={this.onSubmithandler} >
                    <div className="row">

                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            Name : <input onChange={this.onUserHandle} value={this.state.users} placeholder="Enter Name" type="text" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            Age : <input onChange={this.onAgeHandle} value={this.state.age} placeholder="Enter Age" type="text" />
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            Email : <input onChange={this.onEmailHandle} value={this.state.email} placeholder="Enter Email" type="email" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            Mobile No : <input onChange={this.onMobileHandle} value={this.state.phone} placeholder="Enter Mobile" type="text" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <button className="btn btn-primary"> Submit </button>
                        </div>

                    </div>

                </form>

                <div className="container" >


                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">User Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile No</th>
                            </tr>
                        </thead>
                        {this.state.data.map(data => (
                            <tbody key={data.inputusers} >
                                <tr>
                                    <th scope="row">{data.inputusers}</th>
                                    <td>{data.inputage}</td>
                                    <td>{data.inputemail}</td>
                                    <td>{data.inputphone}</td>
                                </tr>
                            </tbody>

                        ))}

                    </table>

                </div>
            </div>

        )
    }

};

export default Users;