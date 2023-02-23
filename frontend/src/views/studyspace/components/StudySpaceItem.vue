<template>
  <!-- <div class="card" :class="classArray[itemIndex]" @click="moveToStudyDetail">
      <img :src="imgsrc" class="card-img-top" alt="..." >
      <div class="card-body">
        <div>
          <div>

            <h3><span v-if="studySpace.comName!=null">[{{studySpace.comName}}]</span>{{ studySpace.stdName }}</h3>
            <ul class="study-item-text">
            <li>기간 : {{ studySpace.startDate }} ~ {{ studySpace.endDate }}</li>
            <li>진행 일자 :{{ studySpace.stdDay }}</li>
            <li>인원제한 : {{ studySpace.stdLimit }}</li>
            </ul>
          </div>

        </div>
      </div>
    </div> -->

  <!-- <img :src="image" class="d-block w-100" alt="..." /> -->
  <div class="carousel-caption d-none d-md-block">
    <div class="row">
      <h5>
        <span
          class="comName"
          v-if="
            studySpace.comName != null &&
              studySpace.comName != '' &&
              studySpace.comName != 'null'
          "
          >[{{ studySpace.comName }}]
        </span>
        <span class="stdName">{{ studySpace.stdName }}</span>
      </h5>
      <p class="stdDetail">스터디 설명 : {{ studySpace.stdDetail }}</p>
      <div class="slider-btn">
        <span class="moveBtn" @click="moveToStudyDetail()"
          >🏠 스터디 스페이스로 이동</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/common/lib/vue-router";

export default {
  name: "StudySpaceItem",
  props: {
    studySpace: Object
  },

  data() {
    return {
      studyJoins: this.studySpace.studyJoins,
      imgsrc: require("@/assets/images/ssafy-logo.png"),
      image: require("../../../assets/images/background.jpg")
    };
  },
  computed: {
    // countStudyJoins(){
    //     const count = this.studyJoins.length
    //     return count
    // }
  },
  methods: {
    moveToStudyDetail() {
      router.push({
        name: "studydetail",
        params: { stdNo: this.studySpace.stdNo }
      });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
.comName {
  color: #d76d77;
  font-weight: 1000;
}

.stdName {
  font-weight: 100;
}

.stdDetail {
  font-size: 18px;
}

.moveBtn:hover {
  font-weight: 700;
  color: #76bef8;
}
</style>
