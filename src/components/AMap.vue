<template>
  <div></div>
</template>

<script>
import AMap from "AMap";

export default {
  mounted() {
    const params = {
      keyWord: ["酒店", "喜来登"],
      centerPoint: [114.05798, 22.54277],
      city: "",
    };
    this.aMapSearchNearBy(params);
  },

  methods: {
    /**
     * 高德地图查询周边
     *
     * @param { keyWordVal } 关键字
     * @param { centerPoint } 查询坐标
     * @param { range } 查询范围
     * @param { city } 指定城市名
     * @param { pageSize } 每页条数，默认10条
     * @param { pageIndex } 当前页，默认第一页
     */
    aMapSearchNearBy(params) {
      const { keyWord, centerPoint, range, city, pageSize, pageIndex } = params;

      AMap.service(["AMap.PlaceSearch"], () => {
        var placeSearch = new AMap.PlaceSearch({
          city,
          pageSize,
          pageIndex,
        });

        placeSearch.searchNearBy(keyWord, centerPoint, range, (status, res) => {
          if (res.info !== "OK") {
            console.log("查询结果为空");
            return false;
          }

          console.log("查询结果:::", res.poiList.pois);
        });
      });
    },
  },
};
</script>
