<template>
  <div class="test">
    <heading @click="toggle()">选择棋盘大小</heading>
    <v-container>
      <v-snackbar
        v-model="isShowInfo"
        :color="''"
        :multi-line="true"
        :timeout="0"
        :top="true"
        :vertical="true"
      >
        <span>{{tipInfo}}</span>
        <v-btn dark text @click="isShowInfo = false">Close</v-btn>
      </v-snackbar>
      <v-overlay :value="isShowInfo"></v-overlay>
    </v-container>
    <v-item-group mandatory>
      <v-container>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-item v-slot:default="{ active, toggle }">
              <div @click="toggleClick(n)">
                <v-card
                  :color="active ? 'primary' : ''"
                  class="d-flex align-center"
                  dark
                  height="200"
                  @click="toggle"
                >
                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="display-3 flex-grow-1 text-center"
                    >{{gameSizeList[n-1]}}</div>
                  </v-scroll-y-transition>
                </v-card>
              </div>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <heading>构筑关卡预置</heading>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-row
          v-for="n in gameSize+2"
          :key="n"
          align="center"
          justify="center"
          class="grey lighten-5"
          style
        >
          <v-card
            v-for="n2 in blockNums[gameSize - 1]/(gameSize+2)"
            :key="n2"
            class="ma-3 pa-6"
            outlined
            tile
            width="240"
            height="240"
          >
            <v-btn @click="emptyItem(n,n2)">添加预置</v-btn>
            <div v-if="items[getIndex(n,n2)].show">
              <v-overflow-btn
                class="my-2"
                :items="chessTypes"
                label="选择棋子类型"
                v-model="items[getIndex(n,n2)].chessTypeStr"
              ></v-overflow-btn>
              <v-overflow-btn
                class="my-2"
                :items="(chooseChessGroup(n,n2))?normalChesses:otherChesses"
                label="选择棋子"
                v-model="items[getIndex(n,n2)].chessStr"
              ></v-overflow-btn>
              <!-- {{items[getIndex(n,n2)].data}} -->
            </div>
          </v-card>
        </v-row>
      </v-col>
      <heading @click="toggle()">更改关卡数据</heading>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="6" md="2">
            <v-form ref="form">
              <v-text-field v-model="levelId" label="levelId" required></v-text-field>
              <v-text-field v-model="levelCode" label="levelCode" required></v-text-field>
            </v-form>
          </v-col>
          <v-col cols="6" md="2">
            <v-form ref="form">
              <v-text-field v-model="levelData.maxStep" label="maxStep" required></v-text-field>
              <v-select v-model="targetType" :items="targetTypeAvailable" label="targetType"></v-select>
              <v-text-field v-model="levelData.levelTarget" label="levelTarget" required></v-text-field>
            </v-form>
          </v-col>
          <v-col cols="6" md="2">
            <v-text-field v-model="levelData.targetScore1" label="targetScore1" required></v-text-field>
            <v-text-field v-model="levelData.targetScore2" label="targetScore2" required></v-text-field>
            <v-text-field v-model="levelData.targetScore3" label="targetScore3" required></v-text-field>
          </v-col>
          <v-col cols="6" md="2">
            <v-text-field v-model="levelData.awardType" label="awardType" required></v-text-field>
            <v-text-field v-model="levelData.awardNum" label="awardNum" required></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6" md="2"></v-col>
          <v-col cols="6" md="2">
            <v-btn class="copy" @click="levelData.levelTarget = getAutoLevelConfig()">智能识别预置</v-btn>
          </v-col>
          <v-col cols="6" md="2">
            <v-btn class="copy" @click="emptyData()">清空数据</v-btn>
          </v-col>
          <v-col cols="6" md="2">
            <v-btn class="copy" :data-clipboard-text="copyData" @click="exportData()">导出数据</v-btn>
          </v-col>
        </v-row>
        <heading @click="toggle()">表单展示</heading>
        <v-row justify="center">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">关卡id</th>
                  <th class="text-left">关卡号</th>
                  <th class="text-left">棋盘类型</th>
                  <th class="text-left">步数</th>
                  <th class="text-left">任务类型</th>
                  <th class="text-left">任务目标</th>
                  <th class="text-left">关卡预置</th>
                  <th class="text-left">一星分数</th>
                  <th class="text-left">二星分数</th>
                  <th class="text-left">三星分数</th>
                  <th class="text-left">奖励类型</th>
                  <th class="text-left">奖励数值</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in tableData" :key="item.levelId">
                  <td>{{ item.levelId }}</td>
                  <td>{{ item.levelCode }}</td>
                  <td>{{ item.levelType }}</td>
                  <td>{{ item.maxStep }}</td>
                  <td>{{ item.targetType }}</td>
                  <td>{{ item.levelTarget }}</td>
                  <td>{{ item.levelConfig }}</td>
                  <td>{{ item.targetScore1 }}</td>
                  <td>{{ item.targetScore2 }}</td>
                  <td>{{ item.targetScore3 }}</td>
                  <td>{{ item.awardType }}</td>
                  <td>{{ item.awardNum }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ClipBoard from "clipboard";
export default {
  name: "Timeline",

  data: () => ({
    menu: false,
    items: [
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      },
      {
        show: false,
        isChessNormal: true,
        chessType: 0,
        chess: -1,
        chessTypeStr: 0,
        chessStr: -1,
        data: ""
      }
    ],
    originItems: [],
    isChessNormal: true,
    gameSms: [4, 3, 2],
    blockNums: [9, 16, 25],
    gameSize: 1,
    gameSizeList: ["3*3", "4*4", "5*5"],
    targetTypeAvailable: [
      "合成目标",
      "特殊目标",
      "消除目标",
      "分数目标",
      "位置目标"
    ],
    targetType: "合成目标",
    otherChesses: [
      "猫草",
      "猫草花盆",
      "裂纹冰块",
      "坚硬冰块",
      "毛线球",
      "石头"
    ],
    normalChesses: [
      "2",
      "4",
      "8",
      "16",
      "32",
      "64",
      "128",
      "256",
      "512",
      "1024",
      "2048"
    ],
    chessTypes: [
      "猫咪棋子",
      "不可动猫咪棋子",
      "目标猫咪棋子",
      "数值冰块",
      "纸箱",
      "障碍棋子"
    ],
    targetIndex: 0,
    tipInfo: "",
    isShowInfo: false,
    levelData: {
      levelType: 1,
      maxStep: 50,
      targetType: 1,
      levelTarget: -1,
      levelConfig: -1,
      targetScore1: 1000,
      targetScore2: 2000,
      targetScore3: 3000,
      awardType: 10001,
      awardNum: 10
    },
    originLevelData: {},
    copyData: "",
    levelId: 20001,
    levelCode: 1,
    tableData: []
  }),
  watch: {
    items: {
      handler: function(newVal) {
        //console.log("newVal:", newVal);
        //console.log("oldVal:", oldVal);
        for (let i = 0; i < newVal.length; i++) {
          if (newVal[i].chessTypeStr == 0) continue;
          if (newVal[i].chessStr == -1) continue;
          newVal[i] = this.updateItem(i, newVal[i]);
        }
      },
      deep: true
    }
  },
  created: function() {
    this.originItems = this.copyArray(this.items);
    this.originLevelData = Object.assign({}, this.levelData);
  },
  methods: {
    getDataObject() {
      let data = [];
      this.items.forEach(function(item) {
        if (item.data != "") {
          data.push(item.data);
        }
      });
      //data = data.join("|");
      this.levelData.levelType = this.gameSize;
      this.levelData.targetType = this.getTargetType();
      let levelData = Object.assign({}, this.levelData);
      levelData.levelId = this.levelId;
      levelData.levelCode = this.levelCode;
      levelData.levelConfig = data;
      return Object.assign({}, levelData);
    },
    getAutoLevelConfig() {
      let levelData = this.getDataObject();
      let levelTarget = -1;
      if (levelData.targetType == 3) {
        let code1 = 0;
        let code2 = 0;
        let code1Num = 0;
        let code2Num = 0;
        var that = this;
        levelData.levelConfig.forEach(function(item) {
          let items = item.split(",");
          if (parseInt(items[1]) == 6) {
            if (
              code1 != 0 &&
              code2 != 0 &&
              items[2] != code1 &&
              items[2] != code2
            ) {
              console.error("数值出错！！！");
              this.showInfo("levelTarget值出错！");
            }
            if (!that.canAddToTask(items[2])) return true;
            if (code1 == 0) {
              code1 = parseInt(items[2]);
              code1Num++;
            } else {
              if (parseInt(items[2]) == code1) {
                code1Num++;
                return true;
              }
              if (code2 == 0) {
                code2 = parseInt(items[2]);
                code2Num++;
              } else {
                if (items[2] == code2) {
                  code2Num++;
                }
              }
            }
          }
        });
        if (code1 != 0) {
          if (code2 == 0) {
            levelTarget = code1 + "," + code1Num;
          } else if (code1 != 0 && code2 != 0) {
            levelTarget = code1 + "," + code1Num + "," + code2 + "," + code2Num;
          }
        }
      } else if (levelData.targetType == 4) {
        levelTarget = 1000;
      } else if (levelData.targetType == 5) {
        //位置目标
        let code1 = 0;
        let code2 = 0;
        let code1Num = 0;
        let code2Num = 0;
        let error;
        let index = 0;
        levelData.levelConfig.forEach(item => {
          let items = item.split(",");
          if (index == 0) {
            error = parseInt(items[1]);
          }
          index++;
          if (parseInt(items[1]) != error) {
            console.error("纸箱和数值冰块不能同时出现！");
            this.showInfo("纸箱和数值冰块不能同时出现！");
          }
          if (parseInt(items[1]) == 4 || parseInt(items[1]) == 5) {
            if (
              code1 != 0 &&
              code2 != 0 &&
              items[2] != code1 &&
              items[2] != code2
            ) {
              console.error("数值出错！！！");
              this.showInfo("levelTarget值出错！");
            }
            if (code1 == 0) {
              code1 = parseInt(items[2]);
              code1Num++;
            } else {
              if (parseInt(items[2]) == code1) {
                code1Num++;
                return true;
              }
              if (code2 == 0) {
                code2 = parseInt(items[2]);
                code2Num++;
              } else {
                if (items[2] == code2) {
                  code2Num++;
                }
              }
            }
          }
        });
        if (code1 != 0) {
          if (code2 == 0) {
            levelTarget = code1 + "," + code1Num;
          } else if (code1 != 0 && code2 != 0) {
            levelTarget = code1 + "," + code1Num + "," + code2 + "," + code2Num;
          }
        }
      } else if (levelData.targetType == 1) {
        let code = 2;
        levelData.levelConfig.forEach(function(item) {
          let items = item.split(",");
          if (parseInt(items[1]) == 1) {
            if (parseInt(items[2]) > code) {
              code = parseInt(items[2]);
            }
          }
        });
        levelTarget = code * 2 + "," + 1;
      }

      return levelTarget;
    },
    emptyItem(n, n2) {
      let index = this.getIndex(n, n2);
      let item = this.items[index];
      console.log(item);
      item.show = !item.show;
      if (!item.show) {
        item.isChessNormal = true;
        item.chessType = 0;
        item.chess = -1;
        item.chessTypeStr = 0;
        item.chessStr = -1;
        item.data = "";
      }
    },
    emptyData() {
      this.items = this.copyArray(this.originItems);
      this.levelData = this.originLevelData;
      this.targetType = "合成目标";
    },
    updateItem(i, item) {
      let numArr = this.normalChesses;
      //let index = 0;
      numArr.forEach(num => {
        if (item.chessTypeStr == "猫咪棋子" && num == item.chessStr) {
          item.chessType = 1;
          item.data = i.toString() + "," + item.chessType + "," + num;
        } else if (
          item.chessTypeStr == "不可动猫咪棋子" &&
          num == item.chessStr
        ) {
          item.chessType = 2;
          item.data = i.toString() + "," + item.chessType + "," + num;
        } else if (
          item.chessTypeStr == "目标猫咪棋子" &&
          num == item.chessStr
        ) {
          item.chessType = 3;
          item.data = i.toString() + "," + item.chessType + "," + num;
        } else if (item.chessTypeStr == "数值冰块" && num == item.chessStr) {
          item.chessType = 4;
          item.data = i.toString() + "," + item.chessType + "," + num;
        } else if (item.chessTypeStr == "纸箱" && num == item.chessStr) {
          item.chessType = 5;
          item.data = i.toString() + "," + item.chessType + "," + num;
        } else if (item.chessTypeStr == "障碍棋子" && item.chessStr != -1) {
          let chessCode = this.getChessCode(item.chessStr);
          item.chessType = 6;
          item.data = i.toString() + "," + item.chessType + "," + chessCode;
        }
        //index++;
      });
      return item;
    },
    getChessCode(str) {
      let code = -1;
      switch (str) {
        case "猫草":
          code = "1";
          break;
        case "猫草花盆":
          code = "2";
          break;
        case "裂纹冰块":
          code = "3";
          break;
        case "坚硬冰块":
          code = "4";
          break;
        case "毛线球":
          code = "5";
          break;
        case "石头":
          code = "6";
          break;
        default:
          code = "-2";
          console.warn("code数据错误");
          break;
      }
      return code;
    },
    canAddToTask(str) {
      let flag = true;
      switch (str) {
        case "5":
          flag = false;
          break;
        case "6":
          flag = false;
          break;
        default:
          break;
      }
      return flag;
    },
    chooseChessGroup(n, n2) {
      let chessTypeStr = this.items[this.getIndex(n, n2)].chessTypeStr;
      return (
        chessTypeStr == "猫咪棋子" ||
        chessTypeStr == "不可动猫咪棋子" ||
        chessTypeStr == "目标猫咪棋子" ||
        chessTypeStr == "数值冰块" ||
        chessTypeStr == "纸箱"
      );
    },
    copyArray(arr) {
      return arr.map(e => {
        if (typeof e === "object") {
          return Object.assign({}, e);
        } else {
          return e;
        }
      });
    },
    toggleClick(n) {
      this.items = this.copyArray(this.originItems);
      this.gameSize = n;
    },

    getIndex(n, n2) {
      return (this.gameSize + 2 - n) * (this.gameSize + 2) + n2 - 1;
    },
    // levelData: {
    //   levelType: -1,
    //   maxStep: -1,
    //   targetType: -1,
    //   levelTarget: -1,
    //   levelConfig: -1,
    //   targetScore1: -1,
    //   targetScore2: -1,
    //   targetScore3: -1,
    //   awardType: 10001,
    //   awardNum: 10
    // }
    getTargetType() {
      let index = 1;
      for (let i = 0; i < this.targetTypeAvailable.length; i++) {
        if (this.targetType == this.targetTypeAvailable[i]) {
          index = i + 1;
        }
      }
      return index;
    },
    getData() {
      let data = [];
      this.items.forEach(function(item) {
        if (item.data != "") {
          data.push(item.data);
        }
      });
      data = data.join("|");
      this.levelData.levelConfig = data;
      this.levelData.levelType = this.gameSize;
      this.levelData.targetType = this.getTargetType();
      let levelData = Object.assign({}, this.levelData);
      levelData.levelId = this.levelId;
      levelData.levelCode = this.levelCode;
      this.tableData.push(Object.assign({}, levelData));
      return (
        this.levelId +
        "	" +
        this.levelCode +
        "	" +
        levelData.levelType +
        "	" +
        levelData.maxStep +
        "	" +
        levelData.targetType +
        "	" +
        levelData.levelTarget +
        "	" +
        levelData.levelConfig +
        "	" +
        levelData.targetScore1 +
        "	" +
        levelData.targetScore2 +
        "	" +
        levelData.targetScore3 +
        "	" +
        levelData.awardType +
        "	" +
        levelData.awardNum
      );
    },
    exportData() {
      this.copyData = this.getData();
      console.log("点击了");
      let clip = new ClipBoard(".copy");
      clip.on("success", () => {
        this.levelId++;
        this.levelCode++;
        this.showInfo("复制成功！");
        // 释放内存
        clip.destroy();
      });
      clip.on("error", () => {
        // 不支持复制
        this.showInfo("浏览器不支持自动复制，可在此复制");
        // 释放内存
        clip.destroy();
      });
    },
    showInfo(info) {
      this.tipInfo = info;
      this.isShowInfo = true;
    }
  }
};
</script>
