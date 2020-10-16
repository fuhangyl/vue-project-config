<template>
  <div v-show="previewList.length" class="comp-preview_container">
    <swiper ref="mySwiper" :options="swiperPreview">
      <swiper-slide v-for="picture in previewList" :key="picture">
        <img :src="picture" />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: { Swiper, SwiperSlide },
  props: {
    previewList: {
      type: Array,
      default() {
        return []
      },
      required: true
    },
    previewIndex: {
      type: Number,
      default: 0,
      required: true
    },
    scrollY: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data() {
    const _self = this
    return {
      swiperPreview: {
        pagination: {
          el: '.swiper-pagination'
        },
        on: {
          tap: function() {
            setTimeout(() => {
              _self.closePreview()
            })
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  watch: {
    previewIndex(index) {
      this.swiper.slideTo(index)
    }
  },
  methods: {
    // 关闭预览
    closePreview() {
      const body = document.getElementsByTagName('body')[0]
      body.style.height = 'auto'
      body.style.overflow = 'auto'
      this.$emit('empty-preview-list')
      window.scrollTo(0, this.scrollY)
    }
  }
}
</script>

<style lang="scss">
.comp-preview_container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
  background: #000;
  img {
    $w: 750px;
    width: px2rem($w);
  }
  .swiper-container,
  .swiper-wrapper,
  .swiper-slide {
    height: 100%;
  }
  .swiper-slide {
    @include flex_layout(center, center);
  }
  .swiper-pagination-bullets {
    $bottom: 40px;
    position: absolute;
    bottom: px2rem($bottom);
    left: 0;
    right: 0;
    @include flex_layout(center, center);
    .swiper-pagination-bullet {
      $size: 16px;
      flex: 0 0 px2rem($size);
      width: px2rem($size);
      height: px2rem($size);
      border-radius: px2rem($size);
      background: rgba(255, 255, 255, 0.6);
      margin: 0 6px;
      &.swiper-pagination-bullet-active {
        background: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
