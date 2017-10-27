import { getusrMes,setUsrMes } from '@/api/getUsr';
 function  parseQueryString(str) {
    var obj={};
    var keyvalue=[];
    var key="",value=""; 
    var paraString=str.substring(str.indexOf("?")+1,str.length).split("&");
    for(var i in paraString)
    {
        keyvalue=paraString[i].split("=");
        key=keyvalue[0];
        value=keyvalue[1];
        obj[key]=value; 
    } 
    return obj;
}
function swithHouseName(n) {
  switch (n) {
    case 0:
      return "小户型";
      break;
    case 1:
      return "大户型";
      break;
    default:
      return "超大户型";
  }
}
const user = {
  state: {
    userData: {},
    isNewUsr:false,
  },
  mutations: {
    GET_USR: (state, data) => {
      state.userData = data;
    },
    INSERT_USR: (state, data) => {
    },
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
            data=response.data.result;
          
          }else {
            data=parseQueryString(response.data.result);
            if(typeof(data.houseArea=="number")){
              data.houseArea=swithHouseName(data.houseArea);
            }
  
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
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
}

export default user;
