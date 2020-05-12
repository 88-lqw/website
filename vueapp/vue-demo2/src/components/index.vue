<template xmlns="http://www.w3.org/1999/html">
    <div id="all" >
    <!--头部 -->
    <el-row class="top1" id="top1">
      <el-col class="top" id="top" :xs="{span:24,offset:0}" :sm="{span:24,offset:0}" :md="{span:24,offset:0}" >
        <img src="../img/全球防疫你我有责.png" class="top-img">
        <div class="top-right" ref="top-right-w">
<!--              <div  :class="`${(changeIndex===key ? 'top-right-w-change':'top-right-w-change1')} top-right-w`"  @click="Show(item,key)" ref="top-right-w">-->
<!--              </div>-->
          <div :class="`${(changeIndex===0 ? 'top-right-w-change':'top-right-w-change1')} top-right-w`"  @click="Show(key=0)"><a>{{companyInformation.index.remark}}</a></div>
                <div :class="`${(changeIndex===1 ? 'top-right-w-change':'top-right-w-change1')} top-right-w`"  @click="Show(key=1)"><a>{{companyInformation.aboutAs.remark}}</a></div>
                <div :class="`${(changeIndex===2 ? 'top-right-w-change':'top-right-w-change1')} top-right-w`"  @click="Show(key=2)"><a>{{companyInformation.businessSegment.remark}}</a></div>
                <div :class="`${(changeIndex===3 ? 'top-right-w-change':'top-right-w-change1')} top-right-w`"  @click="Show(key=3)"><a>{{companyInformation.recruit.remark}}</a></div>
                <div :class="`${(changeIndex===4 ? 'top-right-w-change':'top-right-w-change1')} top-right-w`"  @click="Show(key=4)"><a>{{companyInformation.contactAs.remark}}</a></div>
          </div>
          <el-dropdown class="el-dropdown">
                   <div class="el-dropdown-animation">
                       <span class="el-dropdown-link" @click="drawer = !drawer">
                       {{companyInformation.language.remark}} <i class="el-icon-arrow-down el-icon--right hover-animation"></i>
                      </span>
<!--                      <span class="triangle"></span>-->
<!--                       <ul slot="dropdown" class="el-dropdown-menu">-->
<!--                         <li @click="changeLaguage('zh_CN')">中文</li>-->
<!--                         <li @click="changeLaguage('US')">English</li>-->
<!--                       </ul>-->
                   </div>
            </el-dropdown>
<!--        <el-menu-->
<!--          :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  text-color="#fff"  active-text-color="#ffd04b"  background-color="#42b9b8">-->
<!--          <el-submenu index="2" style="background-color: #fcffff">-->
<!--            <template slot="title">{{companyInformation.language.remark}}</template>-->
<!--            <el-menu-item index="2-1" @click="changeLaguage('zh_CN')">中文</el-menu-item>-->
<!--            <el-menu-item index="2-2" @click="changeLaguage('US')">English</el-menu-item>-->
<!--          </el-submenu>-->
<!--        </el-menu>-->
        <el-drawer
          title="我是标题"
          :visible.sync="drawer"
          :with-header="false"
          direction="ttb"
          :modal="false"
          size="100%"
        >
         <div class="demo-drawer">中文</div>
         <div  class="demo-drawer">English</div>
        </el-drawer>
      </el-col>
    </el-row>
    <!--轮播-->
    <!--<el-row>-->
      <!--<el-col class="banner" :xs="{span:24,offset:0}" :sm="{span:24,offset:0}" :md="{span:24,offset:0}" id="banner">-->
        <!--<van-swipe :autoplay="5000" class="my-swipe" :loop="true" @change="onChange">-->
          <!--<van-swipe-item class="my-swipe-bulk" v-for="(item,key) in bannerImg" :key="key">-->
            <!--<img :src="item.url" class="my-swipe-bulk-img">-->
          <!--</van-swipe-item>-->
          <!--<template #indicator>-->
            <!--<div class="custom-indicator invariant" >-->
              <!--<div v-for="(item,key) in bannerImg" :key="key" class="custom-indicator-dots backgroud " :sm="{span:3,offset:1}"  :md="{span:6,offset:1}"></div>-->
            <!--</div>-->
            <!--<el-row class="custom-indicator" >-->
              <!--<el-col v-for="(item,key) in bannerImg" :key="key" :class="`${(current===key ? 'dot':'custom-indicator-dots ')}`" :sm="{span:3,offset:1}"  :md="{span:6,offset:1}"  @click="changeCurrent(key)"></el-col>-->
            <!--</el-row>-->
          <!--</template>-->
        <!--</van-swipe>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <!--轮播二-->
      <div class="banner" id="banner" ref="banner">
        <div id="myCarousel" class="carousel slide" >
<!--            <div class="custom-indicator invariant" >-->
<!--              <div v-for="(item,key) in mainData.default.rotation" :key="key" class="custom-indicator-dots backgroud " :sm="{span:3,offset:1}"  :md="{span:6,offset:1}"></div>-->
<!--            </div>-->
            <!-- 轮播（Carousel）指标 -->
            <ol class="carousel-indicators">
              <template v-for="(item,index) in mainData.default.rotation">
                <li class="dot" data-taget="#myCarousel":data-slide-to="index" :class="`${(index===0 ? 'active':'')}`" :sm="{span:3,offset:1}"  :md="{span:6,offset:1}" @click="changeCurrent(item,index)" ></li>
              </template>
            </ol>
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner" >
          <div class="item" :class="[key===0? 'active':'']" v-for="(item,key) in mainData.default.rotation" :key="key" @change="onChange">
            <img :src="'https://bwd-website.oss-cn-shenzhen.aliyuncs.com/dior/'+item.rotationImage" class="my-swipe-bulk-img" >
          </div>
        </div>
        <!-- 轮播（Carousel）导航 -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </div>
      <el-row>
        <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}" :xl="{span:20,offset:2}" class="zhuye">
            <div class="index" id="index">
              <!--关于我们-->
              <div class="about" ref="about">
                      <el-row class="about-right">
                      <el-col :xs="24" :sm="24" :md="12">
                        <img src="../img/关于我们/图层 2.png" class="about-img1">
                        <img src="../img/关于我们/关于我们左边照片上层渐变.png" class="about-img1 opacity" id="about">
                      </el-col>
                    </el-row>
                      <img src="../img/保卫队小标签.png" class="about-img2">
                      <el-row class="about-word">
                        <el-col class="about-word-us">
                          {{companyInformation.aboutAs.remark}}
                        </el-col>
                        <el-col class="about-word-w comments" :xs="24" :sm="24" :md="24">
                      <span class="about-word-w2">
                            {{companyInformation.aboutAs.content}}
                       </span>
                        </el-col>
                      </el-row>
                  </div>
              <!--公司框架结构-->
              <div class="company comments">
                <img src="../img/保卫队小标签.png" class="about-img2 img-change">
                <!--<img src="../img/关于我们底图.png"class="company-img3"/>-->
                <div class="company-left-title">{{companyInformation.framework.remark}}</div>
                <div :class="`${(company===true? 'company-right-bulk animated swing':'company-right-bulk')}`" ref="companyBulk">
                  <div class="company-left comments">
                    <div class="company-left-bulk" v-for="(item,key) in mainData.default.framework[5]">
                      <div class="company-left-bulk-up" >
                        <img :src="'https://bwd-website.oss-cn-shenzhen.aliyuncs.com/dior/'+item.image" />
                        <div class="company-left-bulk-w">
                          <div class="company-left-bulk-word">{{item.name}}</div>
                          <div class="company-left-bulk-word1">{{item.remark}}</div>
                        </div>
                      </div>
                        <img src="../img/公司架构/单独元素/箭头.png" class="company-left-img1 "/>
                    </div>
                  </div>
                  <div class="company-right">
                    <div class="company-right-top">
                      <div class="company-right-top-bulk" v-for="(item,key) in mainData.default.framework[2]">{{item.name}}</div>
                    </div>
                    <div class="company-right-shu">
                      <div class="company-right-shustyle" v-for="item in 3"></div>
                    </div>
                    <div class="company-right-shu1">
                      <div class="company-right-shu1style"></div>
                    </div>
<!--                    <img src="../img/公司架构/单独元素/树状图上部分树枝.png" class="company-right-img"/>-->
                    <div class="company-right-middle">
                      <div class="company-right-middle-bulk">{{mainData.default.framework[1][0].name}}</div>
                    </div>
<!--                    <img src="../img/公司架构/单独元素/树状图下部分树枝.png" class="company-right-img1"/>-->
                    <div class="company-right-shu2">
                      <div class="company-right-shu2style"></div>
                    </div>
                    <div class="company-right-shu3">
                      <div class="company-right-shu3style" v-for="item in 2"></div>
                    </div>
                    <div class="company-right-foot">
                      <div v-for="(item,key) in mainData.default.framework[3]" :key="key" class="company-right-foot-bulk">
                        {{item.name}}
                      </div>
                     </div>
                    <el-row class="company-right-bottom">
                      <el-col class="company-right-bottom-bulk" v-for="(item,key) in mainData.default.framework[4]" :sm="{span:6,offset:1}" :md="{span:2,offset:1}">{{item.name}}</el-col>
                    </el-row>
                  </div>
                </div>
              </div>
              <!--业务介绍-->
               <div class="business" ref="business">
                <div class="business1" id="business">
                  <div class="business-bulk">
                    <!--防疫物资贸易-->
                    <div ref="animate1" :class="`${(fang===true? 'business-bulk-fang comments animated bounceInRight':'business-bulk-fang comments')}`" >
                      <div class="business-bulk-fang-bulk">
                        <div class="business-bulk-fang-title">
                          {{mainData.default.information.information1[0].name}}
                        </div>
                        <div class="business-bulk-fang-w">
                          {{mainData.default.information.information1[0].content}}
                        </div>
                      </div>
                      <img :src="'https://bwd-website.oss-cn-shenzhen.aliyuncs.com/dior/'+ mainData.default.information.information1[0].image" class="business-bulk-fang-img1">
                    </div>
                    <!--信息交易平台-->
                    <div ref="animate2":class="`${(info===true? 'business-bulk-fang business-bulk-infor comments animated bounceInLeft':'business-bulk-fang business-bulk-infor comments')}`" >
                      <div class="business-bulk-fang-bulk">
                        <div class="business-bulk-fang-title">
                          {{mainData.default.information.information1[1].name}}
                        </div>
                        <div class="business-bulk-fang-w">
                          {{mainData.default.information.information1[1].content}}
                        </div>
                      </div>
                      <img :src="'https://bwd-website.oss-cn-shenzhen.aliyuncs.com/dior/'+ mainData.default.information.information1[1].image" class="business-bulk-infor-img1">
                    </div>
                    <!--新零售-->
                    <div ref="animate3":class="`${(xin===true? 'business-bulk-xin comments animated bounceInRight':'business-bulk-xin comments')}`" >
                      <div  class="business-bulk-fang-bulk">
                        <div class="business-bulk-fang-title">
                          {{mainData.default.information.information1[2].name}}
                        </div>
                        <div class="business-bulk-fang-w">
                          {{mainData.default.information.information1[2].content}}
                        </div>
                      </div>
                      <img :src="'https://bwd-website.oss-cn-shenzhen.aliyuncs.com/dior/'+ mainData.default.information.information1[2].image" class="business-bulk-xin-img1">
                    </div>
                    <!--营业模式-->
                    <div class="pattern animated fadeIn">
                      <!--<el-row>-->
                        <!--<el-col  :sm="{ span: 10,offset:2}" :md="{ span: 5,offset:1}"  v-for="(item,key) in mainData.default.img" :key=key class="pattern-bulk">-->
                          <!--<img class="pattern-img" :src="`${(item.active===true? item.url1:item.url)}`" @mouseover="changeMask(key)" @mouseout="changeMask(key)">-->
                        <!--</el-col>-->
                      <!--</el-row>-->
                      <div class="col-md-3 col-xs-6 pattern-bulk" v-for="(item,key) in mainData.default.information.information2" :key="key" >
                          <div :class="`${(country==='zh_CN'? 'pattern-bulk-k':'pattern-bulk-k noWrap')}`">
                            <img :src="'https://bwd-website.oss-cn-shenzhen.aliyuncs.com/dior/'+item.image" class="pattern-img"/>
                            <div class="pattern-bulk-k-word">{{item.name}}</div>
                            <div class="pattern-bulk-k-word1">{{item.content}}</div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
            </div>
        </el-col>
      </el-row>
    <!--人才招聘-->
    <div class="talents" id="talents" ref="talents">
      <div class="talents-title">{{companyInformation.recruit.remark}}</div>
      <el-row ref="talents" :class="`${(talent===true? 'talents-bulk animated fadeInDown':'talents-bulk ')}`">
        <el-col :sm={span:8,offset:1} :md="{span:6,offset:3} " class="talents-bulk-style" v-for="(item,key) in mainData.default.recruitInformation" >{{item.positionType}}</el-col>
      </el-row>
    </div>
    <!--联系我们-->
    <div class="relation" id="relation" ref="relation">
      <div class="relation-bulk">
        <div  class="relation-bulk1" >
          <div class="relation-title">{{companyInformation.contactAs.remark}}</div>
          <div>
            <div class="relation-info relation-info-margintop">{{companyInformation.qq.remark}}{{companyInformation.qq.content}}</div>
            <div class="relation-info">{{companyInformation.telephone.remark}}{{companyInformation.telephone.content}}</div>
            <div class="relation-info">{{companyInformation.email.remark}}{{companyInformation.email.content}}</div>
            <div class="relation-info">{{companyInformation.address.remark}}{{companyInformation.address.content}}</div>
            <div class="relation-info">{{companyInformation.copyright.remark}}{{companyInformation.copyright.content}}</div>
          </div>
          <div ><a href="http://www.beian.miit.gov.cn/" class="relation-info" target="_blank">{{companyInformation.keepOnRecord.content}}</a></div>
        </div>
        <div class="relation-bulk2 ">
          <img src="../img/二维码.jpg" class="relation-img1 col-md-6"/>
        </div>
      </div>
      <div class="relation-foot">
        <div class="relation-foot-w" @click="Show(key=0)">
          <img src="../img/公司架构/单独元素/箭头.png" class="relation-img">
          <div>
            {{companyInformation.returnTop.remark}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import mainData from '@/assets/js/data'
  import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      mainData: {},
      // msg: mainData.msg,
      // img: mainData.img,
      // bannerImg:mainData.bannerImg,
      url:'',
      show:true,
      key:0,
      current: 0,
      company:false,
      fang:false,
      info:false,
      xin:false,
      scrollObj1:0,
      scrollObj2:0,
      scrollObj3:0,
      scrollObj4:0,
      scrollTop:0,
      talent:false,
      drawer: false,
      clientHeight:0,
      scrollObj:0,
      aboutTop:0,
      top: 0,
      businessTop:0,
      talentsTop:0,
      talentsHeight:0,
      relationTop:0,
      relationHeight:0,
      bannerTop:0,
      changeIndex:0,
      companyInformation:{},
      country:'zh_CN',
    }
  },
  methods: {
    //移动事件监听
    changeMask(key) {
      if(key===this.img[key].key){
        this.img[key].active=!this.img[key].active
      }
    },
    //点击改变语言
    changeLaguage(country){
          axios.get(`/api/api/gw?country=${country}`)
              .then((res)=>{
                  this.mainData.default=res.data.data
                  this.companyInformation=res.data.data.companyInformation
                  console.log(res)
              }).catch((res)=>{
              console.log('请求失败')
          })
    },
    //滚动事件
    handleScroll(e){
          //获取轮播图元素的高度
          this.bannerTop = this.$refs.banner.clientHeight
          this.aboutTop=this.$refs.about.clientHeight
          this.businessTop=this.$refs.business.offsetTop
          this.talentsTop=this.$refs.talents.offsetTop
          this.relationTop=this.$refs.relation.offsetTop
          this.talentsHeight=this.$refs.talents.clientHeight
          this.top = document.querySelector('#top').offsetHeight
          this.relationHeight=document.querySelector('#relation').offsetHeight
          let height=this.scrollTop+this.top-this.bannerTop
          //滚动的高度
          this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if (this.scrollTop<this.bannerTop){
              this.changeIndex=0
          }
          if (this.aboutTop<=this.scrollTop+this.top){
              this.changeIndex=1
          }
          if (this.businessTop<=this.scrollTop+this.top-this.bannerTop){
              this.changeIndex=2
          }
          if (this.talentsTop<=this.scrollTop+this.top){
                  this.changeIndex=3
          }
          if (this.relationTop<=this.scrollTop+this.clientHeight-this.relationHeight){
              this.changeIndex=4
          }
    },
    //轮播指定点击页面
    changeCurrent(item,index){
      $("#myCarousel").carousel(index);
    },
      //top点击事件
    Show(key){
        //轮播图元素的高度
        this.bannerTop = this.$refs.banner.clientHeight
        // const scroll = document.documentElement.scrollTop
        //判断key
      if (key===0){
            document.getElementById('all').scrollIntoView()
      }
      if (key===1){
         this.aboutTop=this.$refs.about.offsetTop
         document.documentElement.scrollTop = this.aboutTop +this.bannerTop
         document.body.scrollTop=this.aboutTop +this.bannerTop
      }
      if (key===2){
          this.businessTop=this.$refs.business.offsetTop
          document.documentElement.scrollTop= this.businessTop +this.bannerTop
          document.body.scrollTop=this.businessTop +this.bannerTop
      }
      if (key===3){
          this.talentsTop=this.$refs.talents.offsetTop
          document.documentElement.scrollTop= this.talentsTop -this.top
          document.body.scrollTop=this.talentsTop -this.top
          this.changeIndex=3
      }
      if (key===4){
          this.relationTop=this.$refs.relation.offsetTop
          document.documentElement.scrollTop= this.relationTop
          document.body.scrollTop=this.relationTop
          this.changeIndex=4
      }
        this.handleScroll()
    },
    // 指示器变化监听
    onChange(key) {
          this.current = key;
    },
    debounce(fn,delay){
        let timer = null //借助闭包
        return function() {
            if(timer){
                clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
                timer = setTimeout(fn,delay)
            }else{
                timer = setTimeout(fn,delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
            }
        }
    },
      //滚动位置获取,判断将要施行的的元素动画
     handlePlace () {
         // this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;//滑动的高度
         this.scrollObj=this.$refs.animate1.getBoundingClientRect().top//元素距顶部的距离
         this.scrollObj1=this.$refs.animate2.getBoundingClientRect().top//元素距顶部的距离
         this.scrollObj2=this.$refs.animate3.getBoundingClientRect().top//元素距顶部的距离
         this.scrollObj3=this.$refs.talents.getBoundingClientRect().top//元素距顶部的距离
         this.scrollObj4=this.$refs.companyBulk.getBoundingClientRect().top//元素距顶部的距离
         //判断元素距顶部的距离是否小于屏幕的高度
         if(this.scrollObj <=this.clientHeight){
                this.fang=true
          }
          if(this.scrollObj1 <=this.clientHeight){
               this.info=true
         }
         if(this.scrollObj2 <=this.clientHeight){
             this.xin=true
         }
          if(this.scrollObj3 <=this.clientHeight){
           this.talent=true
          }
          if (this.scrollObj4<=this.clientHeight){
           this.company=true
          }
     },
  //    getZh(country){
  //     axios.get(`/api/api/gw?country=${country}`)
  //         .then((res)=>{
  //             this.mainData.default=res.data.data
  //             this.companyInformation=res.data.data.companyInformation
  //             console.log(res)
  //         }).catch((res)=>{
  //         console.log('请求失败')
  //     })
  // }
  },
  created(){
      this.changeLaguage(this.country)
  },
  mounted () {
        //创建滚动事件
        window.addEventListener('scroll',this.debounce(this.handlePlace,200))
        window.addEventListener('scroll', this.debounce(this.handleScroll,200))
        this.clientHeight=document.documentElement.clientHeight||document.body.clientHeight;//屏幕的高度
        $('#myCarousel').carousel({
          interval: 2000, //循环时间
          pause: 'hover', //hover之后暂停
          wrap: true  //是否循环
        })
  },
    //离开页面清楚点击事件
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('scroll',this.handlePlace)
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*共有属性*/
 @import "../assets/css/index.css";
</style>
