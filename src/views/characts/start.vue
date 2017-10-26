<template>
    <div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      from: 0
    };
  },
  computed: {},
  beforeCreate() {},
  created() {
    this.linkToPage();
  },
  methods: {
    linkToPage() {
      var _self = this;
      var userId = this.$route.params.userid;
      var fromShare = this.$route.query.fromShare;
      this.fromShare = this.$route.query.fromShare ? 1 : 0;

     this.$store.commit('CHANGE_ISNEW',false);
      if ( !this.$route.params.userid || this.$route.params.userid == "undefined") {
        this.$router.push({ path:"/start/" +_self.getRadomId() + "?fromShare=" +this.fromShare}); //没有ID生成随机ID
      }

      _self.getUsr();
    },
    getUsr() {
      var _self = this;
      var userId = this.$route.params.userid;
      var fromShare = this.$route.query.fromShare;
      this.$store
        .dispatch("GetusrMes", userId)
        .then(() => {
          var json = _self.$store.getters.userMes;
          if (!_self.$store.getters.isNewUsr) {
            _self.insertUsr(); // 插入新用户
            return;
          }
          if (json.data.shakeSmart == "0") {
            _self.$router.push({ path: "/shakeFirst/" + userId + "?fromShare=" + fromShare});
            return;
          }
          _self.$router.push({
            path: json.nextKey + "/" + userId + "?fromShare=" + fromShare
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    insertUsr() {
      var _self = this;
      var userId = this.$route.params.userid;
      var fromShare = this.$route.query.fromShare;
      this.$store.dispatch("SetUsrMes", {
          user_id: userId,
          shakeSmart: 0,
          fromShare: fromShare
        })
        .then(() => {
          _self.$router.push({ path: "/shakeFirst/" + userId });
        })
        .cath(err => {
          
        });
    },
    getRadomId() {
            let idStr = Date.now().toString(36)
            idStr += Math.random().toString(36).substr(3)
            return idStr
        }

  }
};
</script>
