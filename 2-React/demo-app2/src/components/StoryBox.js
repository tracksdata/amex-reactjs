import React, { Component } from 'react';
import Story from './Story';
import StoryForm from './StoryForm';

class StoryBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: [
                { id: 1, author: 'James', body: 'This is Story 1' },
                { id: 2, author: 'Divya', body: 'This is Story 2' }
            ],
            books: [
                { bookId: 10, bookName: 'Java Script', price: 9474 }
            ]
        }
    }

    // Display / renmder stories
    renderStories() {
        // let books=[...this.state.books];
        const { stories } = this.state;
        return stories.map((story, idx) => {
            return  <Story  
            key={idx} value={story}
            onDeleteAction={e => this.f1(story)} 
            onUpdateAction={id=>this.f2(id)}/>  
        });
    }

    addNewStory(newStory) {        
            let nextId = Math.floor(Math.random() * 1000);
            newStory.id = nextId;
            let {stories}=this.state;
            stories=stories.concat(newStory);
            this.setState({ stories });
    }


    f1(story) {
        this.setState({
            stories: this.state.stories.filter((x, idx) => story.id !== x.id)
        });
    }

    f2(id) {
     
    }

    render() {

       
        return (
            <div className="card">
                <div className="card-header bg-primary">Story Box</div>
                <div className="card-body">
                    <StoryForm 
                    onSubmit={newStory=>this.addNewStory(newStory)} 
                     />
                    <hr />
                    {this.renderStories()}
                </div>
            </div>
        );
    }
}

export default StoryBox;