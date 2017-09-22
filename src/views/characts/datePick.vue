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
    <mt-datetime-picker ref="picker" v-model="pickerVisible" :startDate="startDate" :endDate="endDate" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" >
      </mt-datetime-picker>
    <div class="bottom" @click="submit">
      <div class="cont checked">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
    </div>
  </div>
</template>
<style>

.page-datePick .head{position: fixed;top:0;width:100%;}

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
.page-datePick .mint-popup {

  position: fixed;
  top: 1rem;
  height: 3rem;
  overflow: hidden;

}
.page-datePick  .picker-items {
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
      pickerVisible: '1990-6-15',
      startDate: new Date('1960'),
      endDate:new Date('2017'),
    }
  },
  mounted() {
    this.openPicker();
    //@confirm="handleChange"
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    },
   submit(){
     var date= this.$refs.picker.currentValue;

   }
  },

};
</script>