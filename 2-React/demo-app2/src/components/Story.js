import React, { Component } from 'react';

class Story extends Component {

    render() {
        let {story}=this.props;
        return (
            <div>
               <div className="alert alert-info">
               <span className="badge badge-dark"> {story.author}</span>
                <hr/>
                <p>{story.body}</p>
                <p>
                    <button className="btn btn-danger btn-sm btn-space">Delete</button>
                    <button className="btn btn-primary btn-sm btn-space">Update</button>
                </p>
           </div>  
                
            </div>
        );
    }
}

export default Story;