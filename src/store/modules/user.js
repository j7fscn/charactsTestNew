import { getusrMes,setUsrMes } from '@/api/getUsr';
 function  parseQueryString(str) {
    var obj={};
    var keyvalue=[];
    var key="",value=""; 
    var paraString=str.substring(str.indexOf("?")+1,str.length).split("&");
    debugger
    for(var i in paraString)
    {
        keyvalue=paraString[i].split("=");
        key=keyvalue[0];
        value=keyvalue[1];
        obj[key]=value; 
    } 
    return obj;
}
const user = {
  state: {
    userData: {},
    isNewUsr:true,
  },
  mutations: {
    GET_USR: (state, data) => {
      state.userData = data;
    },
    INSERT_USR: (state, data) => {
    },
    CHANGE_ISNEW:(state,isTrue)=>{

    }
  },
  actions: {
    // 获取
    GetusrMes({ commit }, userId) {
      var url = 'http://120.27.215.62:8999/personalityTest/getPersonalityTestResult?';
      return new Promise((resolve, reject) => {
        getusrMes(url, { user_id: userId }).then(response => {
          var result=response.data.result;
          var data='';
          if(result=="数据库没有该userId的记录"){
            data=response;
            commit('CHANGE_ISNEW',false);
          
          }else {
            data=parseQueryString(response.data.result);
            commit('CHANGE_ISNEW',true);
  
          }
          commit('GET_USR',data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    SetUsrMes({ commit }, params) {
      var url = 'http://120.27.215.62:8999/personalityTest/insertPersonalityTestResult';
      return new Promise((resolve, reject) => {
        setUsrMes(url, params).then(response => {
          const data = response.data;
          commit('INSERT_USR', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
}

export default user;
