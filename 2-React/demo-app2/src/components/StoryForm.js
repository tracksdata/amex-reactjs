import React, { Component } from 'react';

class StoryForm extends Component {

    handleSubmit(e) {

        e.preventDefault();
     
        const { onSubmit } = this.props;
      
        let newStory={
            author:this.refs.author.value,
            body:this.refs.body.value,
        }

        if (onSubmit) {
            onSubmit(newStory);
            this.refs.author.value='';
            this.refs.body.value='';
        }

    }

   
    render() {
    
        return (
            <div>
                <div className="card">
                    <div className="card-header bg-primary">Story Form</div>
                    <div className="card-body">
                        <div>
                            <form onSubmit={e => this.handleSubmit(e)}>

                                <div className="form-group">
                                    <label>Author</label>
                                    <input className="form-control" ref="author"  />
                                </div>
                                <div className="form-group">
                                    <label>Body</label>
                                    <input className="form-control" ref="body" />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-dark">Post</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default StoryForm;