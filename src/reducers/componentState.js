
export const ABOUT = 'About';
export const CONTACT = 'Contact';
export const HOME = 'Home';

const initialState = {
    page: '',
    isAbout:false,
    isContact:false,
    isHome:false
};

export default (state = initialState, action) => {

    if(action.type){
        var formattedObject = Object.assign({},...state,action.payload);
        return formattedObject;
    }
    else{
        return state;
    }
}


export const getComponentState = (flag) => {
    return (dispatch) => {
         import('../../src/components/App/'+flag).then((res)=>{
             dispatch({
                 type:flag,
                 payload:[res.default]
             })
         })
    };
};


