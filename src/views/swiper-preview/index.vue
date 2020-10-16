<template>
  <div class="swiper-preview_container">
    <h1>Swiper Preview</h1>
    <div
      v-for="(gallery, index) in galleryList"
      :key="index"
      class="gallery-list"
    >
      <div
        v-for="(picture, pictureIdx) in gallery"
        :key="picture"
        :style="'backgroundImage: url(' + picture + ')'"
        class="gallery"
        @click="previewPicture(gallery, pictureIdx)"
      ></div>
    </div>
    <comp-preview
      :preview-list="previewList"
      :preview-index="previewIndex"
      :scroll-y="scrollY"
    />
  </div>
</template>

<script>
import CompPreview from '@/components/CompPreview'
export default {
  components: { CompPreview },
  data() {
    return {
      galleryList: [
        [
          'http://pic-cdn-dev.creality.com/model/5b57f95a-ad71-493a-8bb2-2f446ee27d2b',
          'http://pic-cdn-dev.creality.com/model/510ea284-aedc-4381-8b1c-04ed43d07c11',
          'http://pic-cdn-dev.creality.com/model/968e1694-2a7e-4e81-981f-d53fcb4b2da2',
          'http://pic-cdn-dev.creality.com/model/0c4c045b-9ee1-4cba-a741-5697a034a4b3'
        ],
        [
          'http://pic-cdn-dev.creality.com/model/be64b688-3766-4049-bd06-97fec0cadeb3',
          'http://pic-cdn-dev.creality.com/model/56bbb953-a27d-4c45-806b-0d7c8515addf',
          'http://pic-cdn-dev.creality.com/model/617bcb6c-cc5e-4126-9a53-d518b0072fd8',
          'http://pic-cdn-dev.creality.com/model/1067158a-2872-48ab-839c-5762de61fb1b',
          'http://pic-cdn-dev.creality.com/model/5737704d-2e06-4bc7-815f-ba4102fd8562'
        ]
      ],
      previewList: [],
      previewIndex: 0,
      scrollY: 0
    }
  },
  methods: {
    // 点击预览大图
    previewPicture(list, index) {
      this.scrollY =
        document.documentElement.scrollTop || document.body.scrollTop
      const body = document.getElementsByTagName('body')[0]
      body.style.height = '100vh'
      body.style.overflow = 'hidden'
      this.previewList = list
      this.previewIndex = index
    },
    // 置空预览列表数据
    emptyPreviewList() {
      this.previewList = []
      this.previewIndex = 0
    }
  }
}
</script>

<style lang="scss">
.swiper-preview_container {
  $padding: 20px;
  padding: 0 px2rem($padding);
  h1 {
    $margin-bottom: 40px;
    $margin-top: 100px;
    $font-size: 48px;
    text-align: center;
    font-size: px2rem($font-size);
    margin-bottom: px2rem($margin-bottom);
    margin-top: px2rem($margin-top);
  }
  .gallery-list {
    $margin-bottom: 20px;
    margin-bottom: px2rem($margin-bottom);
    border-bottom: 1px solid #ccc;
    @include flex_layout(center, flex-start);
    flex-wrap: wrap;
    .gallery {
      $size: 160px;
      $border-radius: 10px;
      $margin-right: 20px;
      width: px2rem($size);
      height: px2rem($size);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: px2rem($border-radius);
      margin-right: px2rem($margin-right);
      margin-bottom: px2rem($margin-right);
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
}
</style>
