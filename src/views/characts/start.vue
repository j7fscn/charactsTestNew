<template>
    <div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      userId: 0
    };
  },
  beforeCreate() {},
  created() {
    this.linkToPage();
  },
  methods: {
    linkToPage() {
      var _self = this;
      this.userId = this.$route.params.userid;
      var fromShare = this.$route.query.fromShare == 1 ? 1 : 0;
      if (!this.userId || this.userId == "undefined") {
        this.$router.push({ path: "/shakeFirst/" + this.userId });
        this.userId = _self.getRadomId();
        this.$router.push({
          path: "/start/" + this.userId + "?fromShare=" + fromShare
        }); //没有ID生成随机ID
      }
      _self.getUsr();
    },
    getUsr() {
      var _self = this;
      this.$store
        .dispatch("GetusrMes", this.userId)
        .then(() => {
          var json = _self.$store.getters.userMes;
          if (_self.$store.getters.userMes == "数据库没有该userId的记录") {
            _self.insertUsr(); // 插入新用户
            return;
          }
          if (json.shakeSmart == "0") {
            _self.$router.push({ path: "/shakeFirst/" + _self.userId });
            return;
          }
          _self.$router.push({
            path: json.nextKey.replace("%2F", "/") + "/" + _self.userId
          });
        })
        .catch(err => {
          console.log(err, 1);
        });
    },
    insertUsr() {
      var _self = this;
      var fromShare = this.$route.query.fromShare == 1 ? 1 : 0;
      this.$store
        .dispatch("SetUsrMes", {
          user_id: _self.userId,
          shakeSmart: 0,
          fromShare: fromShare
        })
        .then(() => {
          _self.$router.push({ path: "/shakeFirst/" + _self.userId });
        })
        .catch(err => {
          console.log(err, 2);
        });
    },
    getRadomId() {
      let idStr = Date.now().toString(36);
      idStr += Math.random()
        .toString(36)
        .substr(3);
      return idStr;
    }
  }
};
</script>
