<template>
  <div class="page-datePick">
    <div class="head">
      <div class="progress">
        <div class="bar">
          <div class="complete" style="width: 50%;"></div>
        </div>
        <span class="vl">2/24</span>
      </div>
      <p class="tit">您的出生日期</p>
    </div>
    <mt-datetime-picker ref="picker" v-model="pickerVisible" option="option" 
      :startDate="startDate" format='YYYY-MM-DD HH:mm' :endDate="endDate" 
      type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
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
  background-color: #fff;
  z-index: 99999;
}

.page-datePick .picker-toolbar {
  display: none;
}

.page-datePick .v-modal {
  display: none;
}

.picker-item .picker-item {
}

.picker-item.picker-selected {
  opacity: 1;
}
.picker {
  height: 2.2rem;
}
.page-datePick .mint-popup {
  position: fixed;
  top: 0.6rem;
  height: 2.2rem;
  animation: datePicker 2s;
}

.page-datePick .picker-items {
  background: #fff;
  margin: 0 0.2rem;
}

@keyframes datePicker {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.page-datePick .tit {
  font-size: 0.17rem;
  margin: 0.15rem 0 0.2rem 0.2rem;
  padding: 0;
  color: #000;
  text-align: left;
}
</style>

<script>
export default {
  data() {
    return {
      dataJson: "",
      user_id: "",
      checkedValue: -1,
      pickerVisible: "1985-6-6",
      startDate: new Date("1968"),
      endDate: new Date(),
      option: { format: "YYYY-MM-DD" }
    };
  },

  mounted() {
    this.openPicker();
  },
  methods: {
    openPicker() {
      this.checkedValue = this.$refs.picker.open();
    },

    getUserData() {
      var _self = this;
      this.$store
        .dispatch("GetusrMes", this.$route.params.userid)
        .then(() => {
          var json = _self.$store.getters.userMes;
          _self.dataJson = json;
          _self.setUserData();
        })
        .catch(err => {
       
        });
    },
    setUserData() {
      var _self = this;
      this.dataJson.datePick = this.checkedValue;
      this.dataJson.nextKey = "/houseArea";
      this.$store
        .dispatch("SetUsrMes", this.dataJson)
        .then(() => {
          _self.$router.push({
            path: "/houseArea" + "/" + _self.$route.params.userid
          });
        })
        .cath(err => {
          console.log(err);
        });
    },
    submit() {
      this.checkedValue = this.$refs.picker.currentValue;
      this.getUserData();
    }
  }
};
</script>