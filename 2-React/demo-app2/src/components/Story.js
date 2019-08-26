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

    updateData(e) {
        e.preventDefault();
       // let { story } = this.props;
        let {value,onUpdateAction} =this.props;
        const {id}=value;
        if (onUpdateAction) {
            onUpdateAction(id);
        }

    }

    render() {
        let { value } = this.props;
        let {author,body}=value;
        return (
            <div>
                <div className="alert alert-info">
                    <span className="badge badge-dark"> {author}</span>
                    <hr />
                    <p>{body}</p>
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