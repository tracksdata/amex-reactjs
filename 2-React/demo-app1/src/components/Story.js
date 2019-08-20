import React, { Component } from 'react';

class Story extends Component {
    render() {
        let {story}=this.props;
        return (
            <div className="alert alert-info" key="idx">
                 <span className="badge badge-dark">
                     {story.author}
                 </span>
                 <hr/>
                 <p>
                     {story.body}
                 </p>
             </div>
        );
    }
}

export default Story;