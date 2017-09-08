export const product = {
    namespaced: true,
    state:{
        testName:"",
    },
    mutations:{
        reName(state,newName){
            state.testName = newName
        }
    }
};