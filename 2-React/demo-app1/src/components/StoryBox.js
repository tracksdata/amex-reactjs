import React, { Component } from 'react';

class StoryBox extends Component {

    constructor(props){
        super(props);
        this.state={
            stories:[
                {id:1,author:'Praveen',body:'This is Story 1'},
                {id:2,author:'James',body:'This is Story 2'}
            ],

            heros:[
                {heroName:'James',age:87}
            ]
        }
    }

    renderStories(){
         let {stories}=this.state;
        return stories.map((story,idx)=>{
            return(
             <div className="alert alert-info">
                 <span className="badge badge-dark">
                     {story.author}
                 </span>
                 <hr/>
                 <p>
                     {story.body}
                 </p>
             </div>
            )
         })
    }

    render() {
        return (
            <div className="card">

                <div className="card-header bg-primary">
                    Story Box
                </div>

                <div className="card-body">

                   {this.renderStories()}

                </div>
            </div>
        );
    }
}

export default StoryBox;