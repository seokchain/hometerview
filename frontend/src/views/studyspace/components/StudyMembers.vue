<template>
  <tr>
    <td style="width:30px"></td>
    <td style="font-weight:700">
      {{ member.user.userName
      }}<span v-if="member.joinType === 'LEADER'" style="font-size:17px"
        >&nbsp;👑</span
      >
    </td>
    <td>{{ member.user.userEmail }}</td>
    <td style="width:100px"></td>
    <td>
      <router-link
        :to="{
          name: 'membercoverletter',
          params: { studentindex: studentindex }
        }"
        style="color:#6c4bcb; font-size:3.4vh;"
      >
        <i
          class="input-icon uil uil-file-alt coverletter-icon"
          style="font-size:3.7vh;"
        >
          <span class="tooltip-text"
            >자기소개서를 등록, 확인 할 수 있습니다.</span
          >
        </i>
      </router-link>
    </td>
    <td>
      <button
        @click="kickMember(stdMemberInfo)"
        v-if="
          studySpaceDetail.joinType === 'LEADER' && member.joinType !== 'LEADER'
        "
      >
        <i class="input-icon uil uil-ban"></i>
      </button>
    </td>
  </tr>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "StudyMembers",
  props: {
    member: Object,
    studentindex: Number
  },

  data() {
    return {
      stdMemberInfo: {
        stdNo: this.$route.params.stdNo,
        userNo: this.member.user.userNo
      }
    };
  },
  computed: {
    ...mapGetters(["studySpaceDetail"])
  },
  methods: {
    ...mapActions(["kickMember"])
  }
};
</script>

<style scoped>
/* .study-member-wrapper {
  padding: 5%;
}
.member {
  box-sizing: border-box;
  width: 100%;
  background: #fcfcfc;
  border: 1px solid #653fd3;
  border-radius: 30px;
} */
td {
  font-size: 23px;
}
tr:hover {
  background-color: rgba(161, 104, 253, 0.05) !important;
}
.tooltip-text {
  display: none;
  position: absolute;
  max-width: 200px;
  border: 1px solid #653fd3;
  border-radius: 5px;
  padding: 5px;
  font-size: 13px;
  color: black;
  background: #f6f2ff;
  z-index: 10;
  font-style: normal;
  font-weight: normal;
}

.coverletter-icon:hover .tooltip-text {
  display: inline;
}
</style>
