(function(window, undefined) {
  var dictionary = {
    "6a72582f-f471-4cfd-9715-147436374f4b": "温馨12月",
    "0642435f-b0d5-462b-81d5-b46676142907": "消息中心",
    "2f09dc8d-5a4f-4c04-9cee-922d718a19f6": "商品详情",
    "ced927f6-9b92-4e4c-b084-38f18f25123d": "订单详情",
    "3ee24e45-28ed-4450-97bf-7c6aa98b0fac": "NEWxiangxi",
    "ff964bb5-f4c8-4b4c-bcc6-8adee95cb843": "瓷陶共耀",
    "9333f2fd-eb8b-4032-9dec-9e0c5c2d8b88": "分类儿童",
    "9f7c77a2-05b3-41a3-9018-4caa19b50dbd": "我的订单",
    "d83bf484-f41a-4596-9dce-82d78d9d3e25": "作品",
    "44f820cb-1a48-4084-8bf1-32f0d70f24ab": "纸火锅",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "7c7caa5a-e8e6-4339-8231-ebac99d092c6": "社区详情1",
    "4e1fe822-caf7-4692-960f-c8c9313b272c": "分类咖啡",
    "7326697c-7ce0-4e1e-b4b8-9471cd100cfa": "LAMY",
    "b56f1b44-4916-4c6e-81dd-bca9bc1b8113": "shaixuanxiangxi",
    "d82789fd-bc57-4757-8327-05464e40add9": "Rifle Paper",
    "c9cf2025-10a9-44b0-bec0-146180157c00": "众筹",
    "f6113c08-b1b2-483d-acfc-5a98d37f7d6e": "长笛演奏",
    "7dd434a7-69f7-4a58-898e-b18a79621001": "一盏灯，一个世界",
    "be0a3552-d767-4259-b822-febe06bb726a": "购物车",
    "152e7ccb-ac97-4ff0-b7db-0a7517ba988b": "爵士复兴之路",
    "f46a2fc9-030c-4b99-9b26-4b884e63776f": "分类沙龙",
    "a75b413e-c2d0-4276-8aa3-227a2bc4d188": "评论详情",
    "fff6d26a-39d0-49fe-aae9-63513a861547": "哈利波特",
    "c205f5a3-bd4b-40f9-a495-f0988e9b6e03": "社区详情NEW",
    "06524b5a-a20d-418d-8b35-c3c72bc689f6": "分类鲜花",
    "1a774d98-9e9c-4dcb-8aff-f5ad5623bee2": "专题详情",
    "a352767d-65c3-4d15-93b2-307a1a2ad82e": "坚持传统美学的回归",
    "7c4845db-7816-443f-806b-8c035b2dc8f7": "托马斯公益讲座",
    "13564503-3bc3-48a3-b287-60e3f104919f": "分类文具",
    "9900fc81-1d2e-41cd-85b5-f4a4f30dec39": "圣诞姜饼屋",
    "12efa637-2413-4f6f-ad07-9088c868eea3": "诗歌的力量",
    "df6f0903-53c4-4c31-b028-a3f0a185aae2": "李泛摄影分享会",
    "99bfc2cb-1598-4b89-be3d-58f302156e31": "品牌详情",
    "21c898e9-578c-4ef0-a57d-3446d4f68fc9": "文学创作与文化的推动",
    "39522fa2-1a47-4afa-bf1f-5b1b622c6b1e": "私信",
    "f14abe34-7eb8-40e4-a5bf-47064fc54de2": "查林图书",
    "3582fe02-6f36-449a-b861-beba0d57d836": "Moleskine",
    "6523dbea-1ee9-482c-87be-8aed7ad2f626": "咖啡商品",
    "a4dd1d60-f188-4795-89ab-bba5e41fe19f": "分类画廊",
    "c007e906-7c0d-4757-95c6-4877c29164bb": "品牌详情6",
    "1bdf3d99-5a3a-459c-b418-a82e02601079": "品牌详情5",
    "1fdca256-6702-461f-9aab-d9fa472c91a3": "品牌详情4",
    "109fae2e-1997-4af8-bf9f-3730b4380867": "品牌详情3",
    "f7320713-6456-44c1-9b14-f31c636ecb87": "品牌详情2",
    "66ed4274-56a9-4f8d-a8a7-ad475ff0fc08": "分类详情",
    "d21d1a48-44f1-454d-9b7f-c0d8b5465b41": "作者书详情",
    "00acb759-e514-4079-ba12-51aec07554fd": "分类空间",
    "3140eed7-a5f6-4945-8d33-ffb4c2458ce8": "设置",
    "902309dc-ab12-49dd-add1-299b450a2f92": "莫言",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);