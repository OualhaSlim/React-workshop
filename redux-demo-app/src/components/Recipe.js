import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'


class Recipe extends Component{

    componentWillUnmount() {
        if(this.refs.shipping.checked)
            this.props.dispatch({type:'Sub_Shipping'});
    }
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.dispatch({type:'Add_Shipping'});
        }
        else{
            this.props.dispatch({type:'Sub_Shipping'});
        }
    }

    render(){
        
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}



export default connect(mapStateToProps)(Recipe)