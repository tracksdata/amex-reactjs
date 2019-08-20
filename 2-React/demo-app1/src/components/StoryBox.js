import React, { Component } from 'react';
import Story from './Story';
import StoryForm from './StoryForm';

class StoryBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: [
                { id: 1, author: 'Praveen', body: 'This is Story 1' },
                { id: 2, author: 'James', body: 'This is Story 2' }
            ],

            heros: [
                { heroName: 'James', age: 87 }
            ]
        }
    }

    addNewStory(newStory) {
        let { stories } = this.state;
        stories = stories.concat(newStory);
        this.setState({ stories });
        console.log(stories);

    }

    renderStories() {
        let { stories } = this.state;

        return stories.map((story, idx) => {
            return (
                <Story story={story} key={idx} />
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
                    <StoryForm onSubmit={newStory => this.addNewStory(newStory)} />
                    <hr />
                    {this.renderStories()}

                </div>
            </div>
        );
    }
}

export default StoryBox;