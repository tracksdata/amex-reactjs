import React, { Component } from 'react';

class Story extends Component {
    handleEditClick(e) {
        e.preventDefault();
        const {value,onEdit}=this.props;
        const {id}=value;

        if(onEdit){
            onEdit({id});
        }

    }
    render() {
        const { value } = this.props;
        const { author, body } = value;
        return (
            <div className="mystyle">
                <div className="alert alert-info">
                    <span className="badge badge-dark">{author}</span>
                    <hr />
                    <p>{body} </p>
                    <p><button className="btn btn-primary" onClick={e => this.handleEditClick(e)}>Update</button>
                    <button className="btn btn-danger " onClick={e => this.handleEditClick(e)}>Delete</button></p>

                </div>
            </div>
        );
    }
}

export default Story;