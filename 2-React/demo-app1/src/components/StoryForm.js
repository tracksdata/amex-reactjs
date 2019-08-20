import React, { Component } from 'react';

class StoryForm extends Component {
    handleSubmit(e){
        e.preventDefault();
        let newStory={
            author:this.refs.author.value,
            body:this.refs.body.value
        }

        
        let {onSubmit}=this.props;

        if(onSubmit){
        onSubmit(newStory);
        this.refs.author.value='';
        this.refs.body.value='';
        }
        //console.log(newStory);
        
    }

    render() {
        return (
            <div>
                <div className="card">

                    <div className="card-header bg-primary">
                        Story Form
                    </div>

                    <div className="card-body">
                        <form onSubmit={e=>this.handleSubmit(e)}>
                            <div className="form-group">
                                <label>Author</label>
                                <input className="form-control" ref="author"/>
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <input className="form-control" ref="body"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn btn-success" ref="name"/>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default StoryForm;