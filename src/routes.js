import React from "react";
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';

import {ABOUT,CONTACT,HOME, getComponentState} from './reducers/componentState';
import ErrorBoundary from '../src/components/App/Utils/ErrorBoundary';


//code splitting at Route Level using React loadable.


const Loading = () => <div>Loading...</div>;



class DynamicImport extends React.Component {

    state = {
        component: null
    };

    componentWillMount() {
        const {getComponentState,flag} = this.props;
        getComponentState(flag);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.componentDisplay != nextProps.componentDisplay){
             this.setState({
                 component: nextProps.componentDisplay[0]
             })
        }
    }

    render() {
         return this.props.children(this.state.component)
    }
}


class Routes extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            About:null,
            App:null,
            Contact:null
        }
    }

     App = ()=>{
        return (
            <ErrorBoundary>
            <DynamicImport flag={HOME} {...this.props}>
                {(Component) => Component == null ? <Loading/> :<ErrorBoundary><Component/></ErrorBoundary>}
            </DynamicImport>
            </ErrorBoundary>
        )

    };

     About = ()=>{
        return (
            <DynamicImport flag={ABOUT}  {...this.props}>
                {(Component) => Component == null ? <Loading/> :<ErrorBoundary><Component/></ErrorBoundary>}
            </DynamicImport>
        )
    };

     Contact = ()=>{
        return (
            <ErrorBoundary>
            <DynamicImport flag={CONTACT} {...this.props}>
                {(Component) => Component == null ? <Loading/> :<ErrorBoundary><Component/></ErrorBoundary>}
            </DynamicImport>
            </ErrorBoundary>
        )
    };


    render(){

        return (

        <div>
            <Route exact path="/" component={this.App} {...this.props}/>
            <Route path="/about" component={this.About} {...this.props}/>
            <Route path="/contact" component={this.Contact} {...this.props}/>
        </div>
        )
    }




}
const mapStateToProps = (state) => {
    return {
        componentDisplay: state.componentState
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({getComponentState}, dispatch);




export default connect(mapStateToProps, mapDispatchToProps)(Routes);

