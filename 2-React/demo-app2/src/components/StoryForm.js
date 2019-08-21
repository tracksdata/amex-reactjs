import React, { Component } from 'react';

class StoryForm extends Component {
    
    handleSubmit(e) {
        e.preventDefault();
        let newStory = {
            id: this.refs.id.value,
            author: this.refs.author.value,
            body: this.refs.body.value
        }


        let { onSumit } = this.props;
        if (onSumit) {
            if (newStory.author)
                onSumit(newStory);
            this.refs.id.value = '';
            this.refs.author.value = '';
            this.refs.body.value = '';
        }
    }

    state={
        isOpen:false
    }
    

    toggleForm(){
        const {isOpen}=this.state;
        this.setState({isOpen:!isOpen});

    }
   
    render() {
   
        let {oldStory}=this.props;
        const {isOpen}=this.state;

        if(!isOpen){
            return <button onClick={e=>this.toggleForm()} className="btn btn-success">Add New Story</button>
        }
       
        return (
            

            <div>
                <div className="card">
                    <div className="card-header bg-primary">Story Form</div>
                    <div className="card-body">
                        <div>
                            <form onSubmit={e => this.handleSubmit(e)}>
                                <div className="form-group">
                                    <label>Id</label>
                                    <input className="form-control" ref="id" />
                                </div>
                                <div className="form-group">
                                    <label>Author</label>
                                    <input className="form-control" ref="author" />
                                </div>
                                <div className="form-group">
                                    <label>Body</label>
                                    <input className="form-control" ref="body" />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-dark">Post</button>
                                    <button type="submit" className="btn btn-dark btn-space" onClick={e=>this.toggleForm()}>Cancel</button>


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