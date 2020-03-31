<template>
  <div class="article">
    <h1 class="subtitle-1 grey--text">article</h1>
    <v-container class="my-5">
      <div class="vcontent" ref="vcontent"></div>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      essayData:{},
    };
  },
  methods: {
    getContentData() {
      var url = "http://localhost:3000";

      axios
        .get(url + "/searchArticle")
        .then(response => {
          console.log(response);
          this.content = response.data[0].content;

          this.$refs.vcontent.innerHTML += this.content;

          //document.getElementsByClassName("page-cover-image")[0].src = this.src;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getCoverData() {
      var url = "http://localhost:3000";

      axios
        .get(url + "/getImageUrl", {
          params: { name: "11" }
        })
        .then(response => {
          //let url = window.URL.createObjectURL(response)
          //this.src = url;
          //var fs = require('fs');
          console.log("response", response.data);
          // let result = new fs.ReadStream(response.data);
          // console.log(result);
          document.getElementsByClassName("page-cover-image")[0].src =
            response.data;
          // let imgSrc =
          //   "data:image/png;base64," +
          //   btoa(
          //     new Uint8Array(response.data).reduce(
          //       (data, byte) => data + String.fromCharCode(byte),
          //       ""
          //     )
          //   );
          //   img.src = require(imgSrc);

          // let img = document.getElementsByClassName("page-cover-image")[0];
          // let blob = new Blob([response.data], {
          //   type: "application/octet-stream"
          // });
          // const url = URL.createObjectURL(blob);
          // img.src = url;
          // console.log("url",url);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getEssayData() {
      this.axios
        .get(this.baseUrl + "/getEssayInfo",{
          params: { name: this.$route.query.name }
        })
        .then(response => {
          this.essayData = response.data;
          this.$refs.vcontent.innerHTML += this.essayData.content;
          let coverImg = document.getElementsByClassName("page-cover-image")[0];
          if (coverImg)
            coverImg.src =this.essayData.url;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {
    this.getEssayData();
  }
};
</script>

<style scoped>
.vcontent{
  max-width: 800px;
  margin:0 auto
}
html {
  -webkit-print-color-adjust: exact;
}
* {
  box-sizing: border-box;
  -webkit-print-color-adjust: exact;
}

html,
body {
  margin: 0;
  padding: 0;
}

@media only screen {
  body {
    margin: 2em auto;
    max-width: 900px;
    color: rgb(55, 53, 47);
  }
}

body {
  line-height: 1.5;
  white-space: pre-wrap;
}

.vcontent >>> a,
.vcontent >>> a.visited {
  color: inherit;
  text-decoration: underline;
}

.vcontent >>> .pdf-relative-link-path {
  font-size: 80%;
  color: #444;
}

.vcontent >>> h1,
h2,
h3 {
  letter-spacing: -0.01em;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 0;
}

.vcontent >>> .page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.75em;
}

.vcontent >>> h1 {
  font-size: 1.875rem;
  margin-top: 1.875rem;
}

.vcontent >>> h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}

.vcontent >>> h3 {
  font-size: 1.25rem;
  margin-top: 1.25rem;
}

.vcontent >>> .source {
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 1.5em;
  word-break: break-all;
}

.vcontent >>> .callout {
  border-radius: 3px;
  padding: 1rem;
}

.vcontent >>> figure {
  margin: 1.25em 0;
  page-break-inside: avoid;
}

.vcontent >>> figcaption {
  opacity: 0.5;
  font-size: 85%;
  margin-top: 0.5em;
}

.vcontent >>> mark {
  background-color: transparent;
}

.vcontent >>> .indented {
  padding-left: 1.5em;
}

.vcontent >>> hr {
  background: transparent;
  display: block;
  width: 100%;
  height: 1px;
  visibility: visible;
  border: none;
  border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

.vcontent >>> img {
  max-width: 100%;
}

@media only print {
  .vcontent >>> img {
    max-height: 100vh;
    object-fit: contain;
  }
}

@page {
  margin: 1in;
}

.vcontent >>> .collection-content {
  font-size: 0.875rem;
}

.vcontent >>> .column-list {
  display: flex;
  justify-content: space-between;
}

.vcontent >>> .column {
  padding: 0 1em;
}

.vcontent >>> .column:first-child {
  padding-left: 0;
}

.vcontent >>> .column:last-child {
  padding-right: 0;
}

.vcontent >>> .table_of_contents-item {
  display: block;
  font-size: 0.875rem;
  line-height: 1.3;
  padding: 0.125rem;
}

.vcontent >>> .table_of_contents-indent-1 {
  margin-left: 1.5rem;
}

.vcontent >>> .table_of_contents-indent-2 {
  margin-left: 3rem;
}

.vcontent >>> .table_of_contents-indent-3 {
  margin-left: 4.5rem;
}

.vcontent >>> .table_of_contents-link {
  text-decoration: none;
  opacity: 0.7;
  border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

.vcontent >>> table,
th,
td {
  border: 1px solid rgba(55, 53, 47, 0.09);
  border-collapse: collapse;
}

.vcontent >>> table {
  border-left: none;
  border-right: none;
}

.vcontent >>> th,
td {
  font-weight: normal;
  padding: 0.25em 0.5em;
  line-height: 1.5;
  min-height: 1.5em;
  text-align: left;
}

.vcontent >>> th {
  color: rgba(55, 53, 47, 0.6);
}

.vcontent >>> ol,
ul {
  margin: 0;
  margin-block-start: 0.6em;
  margin-block-end: 0.6em;
}

.vcontent >>> li > ol:first-child,
li > ul:first-child {
  margin-block-start: 0.6em;
}

.vcontent >>> ul > li {
  list-style: disc;
}

.vcontent >>> ul.to-do-list {
  text-indent: -1.7em;
}

.vcontent >>> ul.to-do-list > li {
  list-style: none;
}

.vcontent >>> .to-do-children-checked {
  text-decoration: line-through;
  opacity: 0.375;
}

.vcontent >>> ul.toggle > li {
  list-style: none;
}

.vcontent >>> ul {
  padding-inline-start: 1.7em;
}

.vcontent >>> ul > li {
  padding-left: 0.1em;
}

.vcontent >>> ol {
  padding-inline-start: 1.6em;
}

.vcontent >>> ol > li {
  padding-left: 0.2em;
}

.vcontent >>> .mono ol {
  padding-inline-start: 2em;
}

.vcontent >>> .mono ol > li {
  text-indent: -0.4em;
}

.vcontent >>> .toggle {
  padding-inline-start: 0em;
  list-style-type: none;
}

/* Indent toggle children */
.vcontent >>> .toggle > li > details {
  padding-left: 1.7em;
}

.vcontent >>> .toggle > li > details > summary {
  margin-left: -1.1em;
}

.vcontent >>> .selected-value {
  display: inline-block;
  padding: 0 0.5em;
  background: rgba(206, 205, 202, 0.5);
  border-radius: 3px;
  margin-right: 0.5em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  white-space: nowrap;
}

.vcontent >>> .collection-title {
  display: inline-block;
  margin-right: 1em;
}

.vcontent >>> time {
  opacity: 0.5;
}

.vcontent >>> .icon {
  display: inline-block;
  max-width: 1.2em;
  max-height: 1.2em;
  text-decoration: none;
  vertical-align: text-bottom;
  margin-right: 0.5em;
}

.vcontent >>> img.icon {
  border-radius: 3px;
}

.vcontent >>> .user-icon {
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
  margin-right: 0.5rem;
}

.vcontent >>> .user-icon-inner {
  font-size: 0.8em;
}

.vcontent >>> .text-icon {
  border: 1px solid #000;
  text-align: center;
}

.vcontent >>> .page-cover-image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 30vh;
}

.vcontent >>> .page-header-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.vcontent >>> .page-header-icon-with-cover {
  margin-top: -0.72em;
  margin-left: 0.07em;
}

.vcontent >>> .page-header-icon img {
  border-radius: 3px;
}

.vcontent >>> .link-to-page {
  margin: 1em 0;
  padding: 0;
  border: none;
  font-weight: 500;
}

.vcontent >>> p > .user {
  opacity: 0.5;
}

.vcontent >>> td > .user,
td > time {
  white-space: nowrap;
}

.vcontent >>> input[type="checkbox"] {
  transform: scale(1.5);
  margin-right: 0.6em;
  vertical-align: middle;
}

.vcontent >>> p {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.vcontent >>> .image {
  border: none;
  margin: 1.5em 0;
  padding: 0;
  border-radius: 0;
  text-align: center;
}

.vcontent >>> .code,
code {
  background: rgba(135, 131, 120, 0.15);
  border-radius: 3px;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 85%;
  tab-size: 2;
}

.vcontent >>> code {
  color: #eb5757;
}

.vcontent >>> .code {
  padding: 1.5em 1em;
}

.vcontent >>> .code > code {
  background: none;
  padding: 0;
  font-size: 100%;
  color: inherit;
}

.vcontent >>> blockquote {
  font-size: 1.25em;
  margin: 1em 0;
  padding-left: 1em;
  border-left: 3px solid rgb(55, 53, 47);
}

.vcontent >>> .bookmark-href {
  font-size: 0.75em;
  opacity: 0.5;
}

.vcontent >>> .sans {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}
.vcontent >>> .code {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
}
.vcontent >>> .serif {
  font-family: Lyon-Text, Georgia, KaiTi, STKaiTi, "华文楷体", KaiTi_GB2312,
    "楷体_GB2312", serif;
}
.vcontent >>> .mono {
  font-family: Nitti, "Microsoft YaHei", "微软雅黑", monospace;
}
.vcontent >>> .pdf .sans {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol",
    "Twemoji", "Noto Color Emoji", "Noto Sans CJK SC", "Noto Sans CJK KR";
}

.vcontent >>> .pdf .code {
  font-family: Source Code Pro, "SFMono-Regular", Consolas, "Liberation Mono",
    Menlo, Courier, monospace, "Twemoji", "Noto Color Emoji",
    "Noto Sans Mono CJK SC", "Noto Sans Mono CJK KR";
}

.vcontent >>> .pdf .serif {
  font-family: PT Serif, Lyon-Text, Georgia, KaiTi, STKaiTi, "华文楷体",
    KaiTi_GB2312, "楷体_GB2312", serif, "Twemoji", "Noto Color Emoji",
    "Noto Sans CJK SC", "Noto Sans CJK KR";
}

.vcontent >>> .pdf .mono {
  font-family: PT Mono, Nitti, "Microsoft YaHei", "微软雅黑", monospace,
    "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK SC",
    "Noto Sans Mono CJK KR";
}

.vcontent >>> .highlight-default {
}
.vcontent >>> .highlight-gray {
  color: rgb(155, 154, 151);
}
.vcontent >>> .highlight-brown {
  color: rgb(100, 71, 58);
}
.vcontent >>> .highlight-orange {
  color: rgb(217, 115, 13);
}
.vcontent >>> .highlight-yellow {
  color: rgb(223, 171, 1);
}
.vcontent >>> .highlight-teal {
  color: rgb(15, 123, 108);
}
.vcontent >>> .highlight-blue {
  color: rgb(11, 110, 153);
}
.vcontent >>> .highlight-purple {
  color: rgb(105, 64, 165);
}
.vcontent >>> .highlight-pink {
  color: rgb(173, 26, 114);
}
.vcontent >>> .highlight-red {
  color: rgb(224, 62, 62);
}
.vcontent >>> .highlight-gray_background {
  background: rgb(235, 236, 237);
}
.vcontent >>> .highlight-brown_background {
  background: rgb(233, 229, 227);
}
.vcontent >>> .highlight-orange_background {
  background: rgb(250, 235, 221);
}
.vcontent >>> .highlight-yellow_background {
  background: rgb(251, 243, 219);
}
.vcontent >>> .highlight-teal_background {
  background: rgb(221, 237, 234);
}
.vcontent >>> .highlight-blue_background {
  background: rgb(221, 235, 241);
}
.vcontent >>> .highlight-purple_background {
  background: rgb(234, 228, 242);
}
.vcontent >>> .highlight-pink_background {
  background: rgb(244, 223, 235);
}
.vcontent >>> .highlight-red_background {
  background: rgb(251, 228, 228);
}
.vcontent >>> .block-color-default {
  color: inherit;
  fill: inherit;
}
.vcontent >>> .block-color-gray {
  color: rgba(55, 53, 47, 0.6);
  fill: rgba(55, 53, 47, 0.6);
}
.vcontent >>> .block-color-brown {
  color: rgb(100, 71, 58);
  fill: rgb(100, 71, 58);
}
.vcontent >>> .block-color-orange {
  color: rgb(217, 115, 13);
  fill: rgb(217, 115, 13);
}
.vcontent >>> .block-color-yellow {
  color: rgb(223, 171, 1);
  fill: rgb(223, 171, 1);
}
.vcontent >>> .block-color-teal {
  color: rgb(15, 123, 108);
  fill: rgb(15, 123, 108);
}
.vcontent >>> .block-color-blue {
  color: rgb(11, 110, 153);
  fill: rgb(11, 110, 153);
}
.vcontent >>> .block-color-purple {
  color: rgb(105, 64, 165);
  fill: rgb(105, 64, 165);
}
.vcontent >>> .block-color-pink {
  color: rgb(173, 26, 114);
  fill: rgb(173, 26, 114);
}
.block-color-red {
  color: rgb(224, 62, 62);
  fill: rgb(224, 62, 62);
}
.block-color-gray_background {
  background: rgb(235, 236, 237);
}
.block-color-brown_background {
  background: rgb(233, 229, 227);
}
.block-color-orange_background {
  background: rgb(250, 235, 221);
}
.block-color-yellow_background {
  background: rgb(251, 243, 219);
}
.block-color-teal_background {
  background: rgb(221, 237, 234);
}
.block-color-blue_background {
  background: rgb(221, 235, 241);
}
.block-color-purple_background {
  background: rgb(234, 228, 242);
}
.block-color-pink_background {
  background: rgb(244, 223, 235);
}
.block-color-red_background {
  background: rgb(251, 228, 228);
}

.checkbox {
  display: inline-flex;
  vertical-align: text-bottom;
  width: 16;
  height: 16;
  background-size: 16px;
  margin-left: 2px;
  margin-right: 5px;
}

.checkbox-on {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
</style>