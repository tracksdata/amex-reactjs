import React, { Component } from 'react';
import Story from './Story';
import StoryForm from './StoryForm';

class StoryBox extends Component {

    constructor(props){
        super(props);
        this.state={
            stories:[
                {id:1,author:'James',body:'This is Story 1'},
                {id:2,author:'Divya',body:'This is Story 2'}
            ],
            books:[
                {bookId:10,bookName:'Java Script',price:9474}
            ]
        }
    }

    // Display / renmder stories
    renderStories(){
      // let books=[...this.state.books];
       let {stories}=this.state; 
      return stories.map((story,idx)=>{
           return(
                <div>
                    <Story story={story} key={idx} onDelete={story=>this.deleteStory(story)}/>
                </div>
           );
       });

    }
   
    addNewStory(newStory){
        
        let {stories}=this.state;
        stories=stories.concat(newStory);
        this.setState({stories});        
    }


    deleteStory(story){
        // --- delete the story from state
        console.log('--- delete function');
        
    }

    render() {
        return (
            <div className="card">
                <div className="card-header bg-primary">Story Box</div>
               <div className="card-body">
                   <StoryForm onSumit={newStory=>this.addNewStory(newStory)}/>
                   <hr/>
                    {this.renderStories()}
               </div>
            </div>
        );
    }
}

export default StoryBox;