<template>
  <div class="page-datePick">
    <div class="head">
      <div class="progress">
        <div class="bar">
          <div class="complete" style="width: 2%;"></div>
        </div>
        <span class="vl">1/20</span>
      </div>
      <p class="tit">您的出生日期</p>
    </div>
    <mt-datetime-picker ref="picker" v-model="pickerVisible" option="option" :startDate="startDate" format='YYYY-MM-DD HH:mm' :endDate="endDate" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
    </mt-datetime-picker>
    <div class="bottom" @click="submit">
      <div class="cont checked">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
    </div>
  </div>
</template>
<style>
.page-datePick .head {
  position: fixed;
  top: 0;
  width: 100%;
}

.page-datePick .picker-toolbar {
  display: none;
}

.page-datePick .v-modal {
  display: none;
}

.picker-item .picker-item {}

.picker-item.picker-selected {
  opacity: 1;
}

.page-datePick .mint-popup {

  position: fixed;
  top: 1rem;
  height: 3rem;
  overflow: hidden;
}

.page-datePick .picker-items {
  background: #999999;
  margin: 0 .2rem;
}

.page-datePick .tit {
  font-size: .17rem;
  margin: .15rem 0 .2rem .2rem;
  padding: 0;
  color: #222;
  text-align: left;
}
</style>

<script>
export default {
  data() {
    return {
      dataJson: '',
      currentKey: '',
      user_id: '',
      nextKey: 'nextKey',
      checkedValue: -1,
      pageName: 'datePick',
      nextPage: 'houseArea',
      pickerVisible: '1990-6-15',
      startDate: new Date('1960'),
      endDate: new Date('2017'),
      option: { format: 'YYYY-MM-DD' },
    }
  },
  created() {
    this.getUserData();

  },
  mounted() {
    this.currentKey = this.pageName;
    this.openPicker();

  },
  methods: {

    openPicker() {

      this.checkedValue = this.$refs.picker.open();

    },
    setValue() {
      this.setUserData();
     
    },
    getUserData() {
      var _self = this;
      let urlG = ('http://192.168.2.240:8999/personalityTest/getPersonalityTestResult?user_id=' + this.$route.params.userid)
      this.$jsonp(urlG).then(json => {
        this.dataJson = json.data.result
      }).catch(err => {
        console.log(err)
      })
    },
    setUserData() {
      var _self = this;
      var data = '';
      if (!this.dataJson ) {
        data = 'user_id=' + this.$route.params.userid + '&' + this.currentKey + '=' + this.checkedValue + '&' + this.nextKey + '=' + this.nextPage;

      } else {
        data = this.dataJson + '&' + this.currentKey + '=' + this.checkedValue + '&' + this.nextKey + '=' + this.nextPage
      }
      var strToJson = this.parseQueryString(data)
      var str = ''
      for (let i in strToJson) {
        if (i == this.currentKey) {
          strToJson[i] = this.checkedValue
        }
        str += i + '=' + strToJson[i] + '&'
      }
      str = str.substring(0, str.length - 1)
      var url = 'http://192.168.2.240:8999/personalityTest/insertPersonalityTestResult?' + str
      this.$jsonp(url).then(json => {
        _self.$router.push({ path: _self.nextPage + '/' + _self.$route.params.userid });
      }).catch(err => {
        console.log(err)
      })
    },
    parseQueryString(url) {
      var obj = {};
      var keyvalue = [];
      var key = "", value = "";
      var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
      for (var i in paraString) {
        keyvalue = paraString[i].split("=");
        key = keyvalue[0];
        value = keyvalue[1];
        obj[key] = value;
      }
      return obj;
    },
    submit() {
      this.checkedValue = this.$refs.picker.currentValue;
      this.setUserData();


    }
  },

};
</script>