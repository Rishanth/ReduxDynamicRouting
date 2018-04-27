import React from "react";

const calculateSum = (count,listData) => {

    let finalCount = 0;
        listData.forEach((data)=>{
            finalCount = finalCount +data;
        });

    return finalCount;
};

const finalOutput = ({result})=> {

    return (
        <div>
            <h1>{result}</h1>
        </div>
    )
};



const createAddFunction = (WrappedComponent) => {
    return class Data extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                listData:[],
                count:1
            }
        }
        componentDidMount(){
            this.setState({
                 listData : [1,5,8,10,21]
        })
        }
        render(){
           const {count, listData} = this.state;

            return(
                <WrappedComponent
                 result = {listData.length > 0 ? calculateSum(count,listData):''}
                />
            )
        }
    }
};


let Contact = createAddFunction(finalOutput);


export default Contact