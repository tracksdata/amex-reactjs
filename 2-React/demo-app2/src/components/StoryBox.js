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
        let { stories } = this.state;
        return stories.map((story, idx) => {
            return (

                <Story story={story} key={idx} onDeleteAction={story => this.f1(story)} onUpdateAction={story=>this.f2(story)} />

            );
        });

    }

    addNewStory(newStory) {

        let { stories } = this.state;
        stories = stories.concat(newStory);
        this.setState({ stories });
    }


    f1(story) {

        this.setState({
            stories: this.state.stories.filter((x, i) => story.id !== x.id)
        });
    }
    f2(story) {
       // console.log('--- Update function ' + story.author);
        return story;

    }

    render() {
        let oldStory={
            id:'S001',
            author:'Praveen',
            body:'Story10'
        }
        return (
            <div className="card">
                <div className="card-header bg-primary">Story Box</div>
                <div className="card-body">
                    <StoryForm onSumit={newStory => this.addNewStory(newStory)} story={oldStory} />
                    <hr />
                    {this.renderStories()}
                </div>
            </div>
        );
    }
}

export default StoryBox;