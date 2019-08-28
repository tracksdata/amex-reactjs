import React, { Component } from 'react';

class StoryForm extends Component {
    state={
        isOpen:true
    }

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
                <div className="card card-body">
                    <form onSubmit={e=>this.handleSubmit(e)}>
                        <div className="form-group">
                            <label>Author</label>
                            <input className="form-control" value={author} id="author" onChange={e=>this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Body</label>
                            <textarea className="form-control" value={body} id="body" onChange={e=>this.handleChange(e)} ></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary">{this.props.btnLble}</button>
                            {this.props.btnLble ===  'Update Story'? <button  className="btn btn-dark mystyle" >Cancel</button>:console.log('HOho')}
                            
                            
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default StoryForm;