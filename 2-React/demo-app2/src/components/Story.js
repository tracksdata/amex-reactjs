import React, { Component } from 'react';

class Story extends Component {

    deleteData() {
        let { story } = this.props;
        //console.log('Data: '+story);

        let { onDeleteAction } = this.props;
        if (onDeleteAction) {
            onDeleteAction(story);
        }

    }

    updateData() {
        let { story } = this.props;
        //console.log('Data: '+story);

        let { onUpdateAction } = this.props;
        if (onUpdateAction) {
            onUpdateAction(story);
        }

    }

    render() {
        let { story } = this.props;
        return (
            <div>
                <div className="alert alert-info">
                    <span className="badge badge-dark"> {story.author}</span>
                    <hr />
                    <p>{story.body}</p>
                    <p>
                        <button className="btn btn-danger btn-sm btn-space" onClick={e => this.deleteData(e)}>Delete</button>
                        <button className="btn btn-primary btn-sm btn-space" onClick={e => this.updateData(e)}>Update</button>
                    </p>
                </div>

            </div>
        );
    }
}

export default Story;