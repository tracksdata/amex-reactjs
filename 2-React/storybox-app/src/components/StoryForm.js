import React, { Component } from 'react';

class StoryForm extends Component {

    handleSubmit(e){
        e.preventDefault();
        const {onSubmit}=this.props;
        if(onSubmit){
            onSubmit(e)
        }
        

    }

    handleChange(e){
        const {target} =e;
        let {id,value}=target;
       // console.log(id);

       const {onChange}=this.props;
       if(onChange){ 
           onChange({id,value});
       }
        
        
        

    }
    render() {
        let {value}=this.props;
        let {author,body}=value;
        return (
            <div>
                <div>
                    <form onSubmit={e=>this.handleSubmit(e)}>
                        <div className="formgroup">
                            <label>Author</label>
                            <input className="form-control" value={author} id="author" onChange={e=>this.handleChange(e)} />
                        </div>
                        <div className="formgroup">
                            <label>Body</label>
                            <textarea className="form-control" value={body} id="body" onChange={e=>this.handleChange(e)} ></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-primary">Add Story</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default StoryForm;