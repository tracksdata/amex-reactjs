import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary';
import A from './A';
import FoodBox from './FoodBox';
import Veg from './Veg';
import NonVeg from './NonVeg';

class ActionBox extends Component {

    state = {
        totalCount: 0
    }

    calculateTotalCount(e) {
        const { totalCount } = this.state;
        this.setState({ totalCount: totalCount + e.v });
    }

    renderButtons() {
        let numbers = [-1, 2, 3, -4, 5, 6, -7, 8, 9, -10];
        return numbers.map((number, idx) => {
            return <Action key={idx} value={number} onAction={e => this.calculateTotalCount(e)} />
        })
    }

    render() {

        const { totalCount } = this.state;

        return (
            <div>
                <div className="card">
                    <div className="card-header">Action Box - <span className="badge badge-warning">{totalCount}</span></div>
                    <div className="card-body">
                        {
                            // <Action value="Kick" onAction={e=>this.calculateTotalCount()} />
                            // <Action value="Hit"  onAction={e=>this.calculateTotalCount()}/>
                        }

                        <FoodBox>
                            <Veg />
                            <Veg />
                            <Veg />
                        </FoodBox>

                        <FoodBox>
                            <NonVeg/>
                            <NonVeg/>
                            <NonVeg/>
                        </FoodBox>

                        {
                            //  <A color="red"/>
                        }


                        {
                            // {this.renderButtons()}
                        }

                        <div style={{ clear: 'both' }}>
                            {
                                //<Summary value={totalCount} />
                            }
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default ActionBox;