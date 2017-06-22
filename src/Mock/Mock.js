import Mock from 'mockjs'
const Random=Mock.Random;
//'ImagePath':Random.image('200x100', '#50B347', '#FFF', 'png', '');
var datas=[
  //首页数据
  {
    "Url":"/index",
    "data":{
      'Banner': {//轮播图
        "MoreUrl":null,
        "EntityList|3":[{
          'id|+1': 11,
          'ImagePath':'https://img.alicdn.com/tps/i4/TB164s.RXXXXXaoaXXXSutbFXXX.jpg',
          'Url'     : '@url()',
        }]
      },
      'FeaturedGoods': {//特色好货
        "MoreUrl":'@url()',
        "EntityList|5":[{
          'id|+1': 31,
          'ImagePath':'https://img.alicdn.com/tps/i4/TB1tulwRXXXXXaIXVXXSutbFXXX.jpg',
          'Url'     : '@url()',
          "Name":"@csentence(40)",
          "Price|10-100":10,
          "BuyCount|101-200":101,
          "Views|20-90":20,
        }]
      },
      'BrotherMachine': {//机哥专区
        "MoreUrl":'@url()',
        "EntityList|6":[{
          'id|+1': 41,
          'ImagePath':'http://img65.86pla.com/9/20161128/636159485002227374760.jpg',
          'Url'     : '@url()',
          "Name":"@csentence(40)",
          "Price|10-100":10,
          "BuyCount|101-200":101,
          "Views|20-90":20,
        }]
      },
      'GuessLike': {//猜你喜欢
        "MoreUrl":'@url()',
        "EntityList|6":[{
          'id|+1': 41,
          'ImagePath':'http://s4.51cto.com/wyfs02/M02/86/9B/wKiom1fFNLTSmq9uAAICqel6GrQ231.jpg-wh_651x-s_3478425846.jpg',
          'Url'     : '@url()',
          "Name":"@csentence(40)",
          "Price|10-100":10,
          "BuyCount|101-200":101,
          "Views|20-90":20,
        }]
      },
    }
  },
  //购物车数据
  {
    "Url":"/Cart",
    "data": {
      'ShoppingCart': {//特色好货
        "MoreUrl":'@url()',
        "EntityList|5":[{
          'id|+1': 31,
          'ImagePath':'@color',
          'Url'     : '@url()',
          "Name":"@csentence(40)",
          "Price|10-100":10,
          "BuyCount|101-200":101,
          "Views|20-90":20,
          "cartNum":1,
        }]
      },
    }
  },
  //产品分类
  {
    "Url":"/TypeData",
    "data": {
        'Brand': {//品牌
        "EntityList|5":[{
          'id|+1': 61,
          "Name":"@csentence(5)",
        }]
      },
      'Model': {//机型
        "EntityList|5":[{
          'id|+1': 71,
          "Name":"@csentence(5)",
        }]
      },
      'classification': {//分类
        "EntityList|5":[{
          'id|+1': 81,
          "Name":"@csentence(5)",
        }]
      },
      'Subcategory': {//子分类
        "EntityList|5":[{
          'id|+1': 91,
          "Name":"@csentence(5)",
        }]
      },
    }
  },
  //产品列表
  {
    "Url":"/ProductList",
    "data": {
      'ProductList': {//特色好货
        totalPage:3,
        "EntityList|6":[{
          'id|+1': 31,//id
          'ImagePath':'@color',//图片
          'Url'     : '@url()',//url
          "Name":"@csentence(40)",//标题
          "Batch|10-100":10,//起批个数
          "SellingPrice|101-200":101,//销售价
          "TradePrice|20-90":20,//批发价
          "Stock":1,//库存
        }]
      },
    }
  },
  //待付款、待发货、待收货、待退款、待评价---数据
  {
    "Url":"/GetOrderCategory",
    "data": {
      'OrderListOne': {//待付款
        "EntityList|5":[{
          'id|+1': 61,
          "Name":"@csentence(5)",
        }]
      },
      'OrderListTwo': {//待发货
        "EntityList|5":[{
          'id|+1': 71,
          "Name":"@csentence(5)",
        }]
      },
      'OrderListThree': {//待收货
        "EntityList|5":[{
          'id|+1': 81,
          "Name":"@csentence(5)",
        }]
      },
      'OrderListFour': {//待退款
        "EntityList|5":[{
          'id|+1': 91,
          "Name":"@csentence(5)",
        }]
      },
      'OrderListFive': {//待评价
        "EntityList|5":[{
          'id|+1': 91,
          "Name":"@csentence(5)",
        }]
      },
    }
  },
]
datas.forEach(function(n){
  Mock.mock(n.Url,n.data)
  Mock.setup({ timeout: 0 });
})

