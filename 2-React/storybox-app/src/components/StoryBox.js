import React, { Component } from 'react';
import Story from './Story';
import StoryForm from './StoryForm';

class StoryBox extends Component {
    state = {
        stories: [
            { id: 10, author: 'Praveen', body: 'This is story1' },
            { id: 11, author: 'Richard', body: 'This is story2' }
        ],
        story: { id: 0, author: '', body: '' }
        ,
        isEditing: false
    }

    renderStories() {
        const { stories } = this.state;
        return stories.map((story, idx) => {
            return (
                <Story key={idx} value={story} onEdit={e => this.editStory(e)} />
            )
        })
    }

    // Edit Story form
    editStory(e) {

        const { id } = e;
        let { stories } = this.state;
        stories.map((s, idx) => {
            console.log(s.id + " and " + id);

            console.log(s.author);

        })
        let story = stories.find(story => story.id === id)
        this.setState({ story, isEditing: true });

    }


    // Handle Form data
    handleChange(e) {
        const { id, value } = e;
        let { story } = this.state;
        story = { ...story, [id]: value } // Copy 
        this.setState({ story })
    }

    addNewStory() {
        const { story, isEditing } = this.state;
        let newList = [];
        if (isEditing) {
            const { stories } = this.state;
            newList = stories.map((sto, idx) => {
                if (sto.id === story.id) {
                    return { ...story }
                } else {
                    return sto;
                }
            })
        } else {
            let nextId = Math.floor(Math.random() * 1000);
            story.id = nextId;
            let { stories } = this.state;
            // stories = stories.concat(story);
            newList = [story, ...stories];
        }

        this.setState({ stories: newList }, () => {
            let story = {
                id: 0,
                author: '',
                body: ''
            }
            this.setState({ story, isEditing: false })
        });


    }

    render() {
        let { story } = this.state;
        return (
            <div>
                <div className="card">
                    <div className="card-header">Story Box</div>
                    <div className="card-body">
                        <StoryForm
                            onChange={e => this.handleChange(e)}
                            onSubmit={e => { this.addNewStory() }}
                            value={story}
                        />
                        <hr />
                        {this.renderStories()}

                    </div>
                </div>
            </div>
        );
    }
}

export default StoryBox;