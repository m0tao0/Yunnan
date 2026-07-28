export type City = "大理" | "丽江";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  return `${publicBasePath}${path}`;
}

export type ScheduleItem = {
  time: string;
  place: string;
  transport?: string;
  activity: string;
  note?: string;
  attractionId?: string;
};

export type DayPlan = {
  day: number;
  date: string;
  weekday: string;
  city: City;
  title: string;
  subtitle: string;
  pace: "松弛" | "适中" | "充实";
  weather: string;
  hero: string;
  schedule: ScheduleItem[];
  parentTip: string;
  budget: string;
};

export type Attraction = {
  id: string;
  city: City;
  name: string;
  kicker: string;
  intro: string;
  image: string;
  open: string;
  ticket: string;
  duration: string;
  transport: string;
  childFit: string;
  activities: string[];
  safety: string[];
  rainPlan: string;
};

export type ActivityImage = {
  image: string;
  source?: string;
};

export const tripMeta = {
  dates: "2026.09.04—09.12",
  route: "上海 → 大理 → 丽江 → 上海",
  travelers: "2位成人 + 1位5岁男孩",
  budget: "¥28,000—32,000",
  hotels: [
    {
      city: "大理",
      name: "大理实力希尔顿酒店",
      nights: "4晚",
      note: "午睡基地；往返各景点以平台网约车为主",
    },
    {
      city: "丽江",
      name: "丽江金茂隐逸酒店",
      nights: "4晚",
      note: "香江路8号；不换酒店，靠近束河与雪山方向",
    },
  ],
};

export const attractions: Attraction[] = [
  {
    id: "march-street",
    city: "大理",
    name: "三月街小集",
    kicker: "抵达后的轻量文化热身",
    intro:
      "9月4日对应农历七月二十三的小集日。它不是盛大的三月街民族节，却更像当地人的日常集市：水果、扎染、手工与小吃，适合孩子用一笔小预算自己做选择。",
    image: "/images/dali-old-town.jpg",
    open: "固定赶集日；建议 09:00—17:00 之间到访",
    ticket: "免费",
    duration: "约 1.5—2 小时",
    transport: "大理机场至酒店寄存行李后，网约车约20分钟",
    childFit: "★★★☆ 逛吃与自主购物，体力要求低",
    activities: ["辨认当地水果与香料", "找扎染纹样", "给孩子 ¥30—50 自主挑选"],
    safety: ["人多处必须牵手", "动物摊只短看，不主动触摸", "航班晚点则直接删掉"],
    rainPlan: "小雨可穿雨衣短逛；中到大雨直接回酒店休息。",
  },
  {
    id: "cloud-grassland",
    city: "大理",
    name: "苍海云上草原",
    kicker: "把最想玩的攀爬放在早上",
    intro:
      "核心不是看动物，而是滑梯、钻爬、平衡和草地活动。安排开门即到，避开午后雷阵雨，也把孩子精神最好的时段留给体能玩法。",
    image: "/images/dali-erhai.jpg",
    open: "参考 09:00—18:00；17:30 停止入场",
    ticket: "基础票约 ¥19.9/人；园内项目另付",
    duration: "约 2.5 小时",
    transport: "酒店分段网约车，单程参考 ¥40—70",
    childFit: "★★★★★ 攀爬、滑梯、钻爬、平衡",
    activities: ["无动力攀爬挑战", "滑梯、钻爬与跑跳", "有兴趣再短时投喂小动物"],
    safety: ["雷雨或设施湿滑时不攀爬", "穿防滑包头运动鞋", "先检查绳网与滑梯落地区"],
    rainPlan: "与喜洲上午互换；若设施未干，改酒店泳池与儿童区。",
  },
  {
    id: "dali-old-town",
    city: "大理",
    name: "大理古城",
    kicker: "午睡后的散步与晚餐",
    intro:
      "不追求打卡所有城门，只沿主街、水渠和安静支巷慢走，边吃边感受白族城镇日常。把它放在午睡后，既有晚间气氛，也不会透支孩子。",
    image: "/images/dali-old-town.jpg",
    open: "开放式街区全天；商铺多为 10:00—22:00",
    ticket: "古城免费；内部场馆另计",
    duration: "约 3 小时（含晚餐）",
    transport: "酒店网约车往返；古城内步行",
    childFit: "★★★ 水渠、城门与小吃探索",
    activities: ["看白族民居门楼", "沿水渠散步", "白族菜晚餐"],
    safety: ["雨后石板路很滑", "晚间不走偏巷", "先看菜单价格再入座"],
    rainPlan: "小雨照常；大雨改酒店晚餐，古城顺延或放弃。",
  },
  {
    id: "xizhou",
    city: "大理",
    name: "喜洲古镇",
    kicker: "白族建筑与一项短手工",
    intro:
      "喜洲值得去，但要用“上午半日”而不是全天打卡。转角楼、四方街和院落建筑足够形成差异，再从甲马、瓦猫或扎染中选一项短体验。",
    image: "/images/dali-erhai.jpg",
    open: "街区全天；院落多为 08:30—18:00",
    ticket: "古镇免费；院落约 ¥20—30/成人；手工约 ¥100—300/份",
    duration: "约 3.5 小时（含午餐）",
    transport: "提前一晚预约网约车至游客中心；午餐时预约返程",
    childFit: "★★★★ 找建筑细节 + 动手体验",
    activities: ["转角楼与四方街寻宝", "甲马/瓦猫/扎染三选一", "甜咸喜洲粑粑"],
    safety: ["巷口电动车多，必须牵手", "不在车行道路追跑", "乳扇第一次只少量尝试"],
    rainPlan: "小雨可逛院落；持续大雨缩短古镇，保留室内手工。",
  },
  {
    id: "succulent-garden",
    city: "大理",
    name: "木石多肉·云朵花园",
    kicker: "午睡后的植物游乐场",
    intro:
      "它不是纯拍照花园。沙坑、滑梯、蹦床与植物手作可以让孩子继续动起来，多肉和小动物只是环境的一部分。",
    image: "/images/dali-erhai.jpg",
    open: "参考 09:00—18:00；周末夜场以现场为准",
    ticket: "成人约 ¥49；1.2米以下参考免票；DIY另付",
    duration: "约 1.5—2 小时",
    transport: "午睡后从酒店网约车往返",
    childFit: "★★★★☆ 游乐设施 + 多肉DIY",
    activities: ["沙坑、滑梯与蹦床", "植物拓印或多肉DIY", "自愿短时看小动物"],
    safety: ["石子路不穿凉鞋", "不触摸不认识的仙人掌", "雨后注意泥泞与滑倒"],
    rainPlan: "大雨改酒店泳池或儿童区域，不提前买不可退票。",
  },
  {
    id: "dali-luge",
    city: "大理",
    name: "大理路极主题公园",
    kicker: "男孩会记很久的重头戏",
    intro:
      "把路极单独放在一个早晨，先慢速熟悉刹车，再决定是否增加圈数。5岁孩子通常与成人同车，由成人全程控制。",
    image: "/images/dali-erhai.jpg",
    open: "参考 10:00—19:00；18:00 停售",
    ticket: "单次约 ¥128；家庭3次参考 ¥388",
    duration: "约 2 小时",
    transport: "酒店往返网约车，参考 ¥120—200",
    childFit: "★★★★★ 速度、弯道和参与感",
    activities: ["第一圈熟悉刹车", "后续圈数再逐步提速", "回酒店泳池放松"],
    safety: ["孩子与成人同车", "头盔扣紧并服从身高规则", "积水、雷暴或赛道关闭绝不勉强"],
    rainPlan: "与洱海骑行互换；赛道仍湿则退款或放弃。",
  },
  {
    id: "erhai-corridor",
    city: "大理",
    name: "洱海生态廊道",
    kicker: "湖风里完成一段亲子骑行",
    intro:
      "选择龙龛码头到才村方向的平缓路段，只骑3—5公里。目标是看湖、看田野和一起移动，不追求里程。",
    image: "/images/dali-erhai.jpg",
    open: "公共空间开放；租车点多在白天营业",
    ticket: "廊道免费；亲子车家庭预算 ¥80—150",
    duration: "约 2—2.5 小时",
    transport: "酒店网约车至龙龛码头；廊道内骑行",
    childFit: "★★★★☆ 自然、风与移动体验",
    activities: ["亲子车骑行3—5公里", "看洱海与苍山", "在安全草地短暂停留"],
    safety: ["头盔、安全带、护脚挡板齐全", "不让孩子单独骑入人流", "强风或积水立即缩短"],
    rainPlan: "缩短至30—60分钟，或改酒店活动后按时乘动车。",
  },
  {
    id: "hutuwu-baisha",
    city: "丽江",
    name: "糊涂窝与白沙古镇",
    kicker: "草地活动、古镇观察与东巴手作",
    intro:
      "糊涂窝只作为一小时左右的草地活动，不购买长时间骑马或旅拍套餐；随后到白沙找木门、水渠和东巴文字，下午完成一件真正能带走的手作。",
    image: "/images/lijiang-old-town.jpg",
    open: "糊涂窝须预约确认；白沙街区全天，壁画 08:30—17:30",
    ticket: "糊涂窝家庭约 ¥100—300；古镇免费；手工约 ¥50—300/份",
    duration: "约 5—6 小时（含午餐和手工）",
    transport: "提前预约分段网约车；白沙在指定点上下车",
    childFit: "★★★★ 草地跑动 + 寻宝 + 手工",
    activities: ["草地自由活动", "找东巴文字、木门和水渠", "东巴纸/版画/瓦猫/泥板画四选一"],
    safety: ["不买长时骑马", "车行巷口牵手", "确认手工适合5岁独立参与"],
    rainPlan: "持续大雨取消牧场，只保留室内手工与午餐。",
  },
  {
    id: "jade-dragon",
    city: "丽江",
    name: "云杉坪与蓝月谷",
    kicker: "雪山日只到适合亲子的高度",
    intro:
      "不去冰川公园大索道。用云杉坪森林栈道和蓝月谷湖水，让孩子感受高海拔森林、雪山与冰川融水，同时控制强度。",
    image: "/images/jade-dragon.jpg",
    open: "景区参考 07:00—18:00；15:00停售，16:00停入",
    ticket: "进山 ¥100/成人；景区车约 ¥20/人；云杉坪索道 ¥40/人",
    duration: "约 6—7 小时（含交通）",
    transport: "预约网约车或官方直通车到游客中心，景区内乘官方车",
    childFit: "★★★★☆ 森林栈道、雪山和湖泊",
    activities: ["云杉坪森林栈道慢走", "观察雪山地貌与高山植物", "蓝月谷选1—2个湖区短走"],
    safety: ["约3200米，不奔跑不大喊", "持续头痛、恶心、异常嗜睡或走不稳时立即下降", "带儿童身份证明，索道分票种核对"],
    rainPlan: "索道停运则退票，改白沙、黑龙潭或酒店活动，不升级大索道。",
  },
  {
    id: "shuhe",
    city: "丽江",
    name: "束河古镇",
    kicker: "雪山休息后的轻松傍晚",
    intro:
      "束河离酒店近，只走青龙桥、九鼎龙潭和水渠一小圈。它是雪山日的可删减项：状态好就去，孩子疲惫就留在酒店。",
    image: "/images/lijiang-old-town.jpg",
    open: "街区全天；部分展馆约 08:30—17:30",
    ticket: "开放街区；古城维护费以现场政策为准",
    duration: "约 2—3 小时（含早晚餐）",
    transport: "酒店短途网约车",
    childFit: "★★★ 小桥、流水、轻松散步",
    activities: ["青龙桥与水渠", "九鼎龙潭短停", "早一点吃晚餐"],
    safety: ["雪山后精神差就取消", "雨后桥面与石板滑", "不追夜景、不走远路"],
    rainPlan: "大雨直接酒店晚餐。",
  },
  {
    id: "yuhu-longnv",
    city: "丽江",
    name: "玉湖村与龙女湖",
    kicker: "石头村落到高原草地",
    intro:
      "玉湖村的石墙和纳西院落，与龙女湖的草地和山景形成自然与人文组合。孩子可以完成找石墙、找木门的小任务，湖边只走1—2公里。",
    image: "/images/snow-summit.jpg",
    open: "开放村落；正规接驳参考 08:30—18:00",
    ticket: "村落免费；接驳近期参考约 ¥39/人",
    duration: "约 3—4 小时",
    transport: "预约网约车至玉湖村游客区，换正规接驳进出龙女湖",
    childFit: "★★★★★ 石路、草地、湖边自然探索",
    activities: ["找石墙、木门和水渠", "湖边轻走1—2公里", "草地自由探索"],
    safety: ["湖边无连续护栏，始终在一臂距离内", "不强制骑马", "碎石路穿防滑鞋"],
    rainPlan: "持续大雨改黑龙潭与博物院，古城视雨量决定。",
  },
  {
    id: "black-dragon-old-town",
    city: "丽江",
    name: "黑龙潭与丽江古城",
    kicker: "午后从公园一路走进古城",
    intro:
      "黑龙潭是孩子休息后重新启动的轻量活动，之后沿水系进入古城，避开最拥挤路线，把晚餐和购买小纪念品一起完成。",
    image: "/images/black-dragon-pool.jpg",
    open: "黑龙潭 07:30—21:00；博物院 09:00—17:00；古城全天",
    ticket: "公园与博物院免费；古维费如征收按现场政策",
    duration: "约 4—5 小时（含晚餐）",
    transport: "酒店网约车至黑龙潭；之后步行进入古城，返程网约车",
    childFit: "★★★★ 水系、桥、巷子与市井观察",
    activities: ["黑龙潭看水与雪山倒影", "博物院短看纳西文化", "古城晚餐与东巴纸品购物"],
    safety: ["雨后石板路非常滑", "桥边水边不奔跑", "不冲动购买高价银器玉器"],
    rainPlan: "先删黑龙潭，再把古城缩短到17:00—19:30。",
  },
  {
    id: "zhongyi-market",
    city: "丽江",
    name: "忠义市场",
    kicker: "离开前的市井早餐与轻购物",
    intro:
      "市场位于古城南侧，机场也在城市南面。退房后带着行李一路向南，短逛市场再去机场，不折返酒店。",
    image: "/images/lijiang-old-town.jpg",
    open: "早间最活跃；本行程 08:45—09:35",
    ticket: "免费",
    duration: "约 50 分钟",
    transport: "平台小时租或带途经点的送机订单，行李随车",
    childFit: "★★★ 早餐、水果与日常市场",
    activities: ["烤饵块或米线早餐", "挑水果和轻便伴手礼", "观察当地蔬菜与香料"],
    safety: ["贵重物品不留车内", "晚于09:10离店则直接去机场", "不买散装野生菌和需冷藏食品"],
    rainPlan: "大雨或出发晚时压缩到20分钟，必要时取消。",
  },
];

export const attractionById = Object.fromEntries(
  attractions.map((attraction) => [attraction.id, attraction]),
);

export const days: DayPlan[] = [
  {
    day: 1,
    date: "09.04",
    weekday: "周五",
    city: "大理",
    title: "上海直飞大理，逛三月街小集",
    subtitle: "把抵达日当作轻量文化热身",
    pace: "松弛",
    weather: "午后阵雨概率高",
    hero: "/images/dali-old-town.jpg",
    schedule: [
      { time: "上午", place: "上海浦东 → 大理", transport: "直飞优先", activity: "选择11:30—12:00前落地的航班，机上吃简餐。", note: "航班时刻以出票为准" },
      { time: "12:20", place: "大理机场 → 酒店", transport: "网约车 / 接机 约50分钟", activity: "到大理实力希尔顿寄存行李。" },
      { time: "13:20", place: "三月街小集", transport: "网约车约20分钟", activity: "看水果、扎染与手作，给孩子一笔自主购物预算。", attractionId: "march-street" },
      { time: "15:30", place: "大理实力希尔顿", transport: "网约车", activity: "办理入住，午睡至少2小时；晚餐放酒店。", note: "航班晚点就删三月街" },
    ],
    parentTip: "今天不追求景点数量，先让孩子适应海拔、温度和旅行节奏。",
    budget: "现场约 ¥400—650",
  },
  {
    day: 2,
    date: "09.05",
    weekday: "周六",
    city: "大理",
    title: "云上草原，午睡后去大理古城",
    subtitle: "早上尽情爬，傍晚慢慢逛",
    pace: "适中",
    weather: "上午更适合户外",
    hero: "/images/dali-erhai.jpg",
    schedule: [
      { time: "08:30", place: "酒店 → 云上草原", transport: "网约车", activity: "出发前确认设施是否因雨关闭。" },
      { time: "09:00", place: "苍海云上草原", activity: "攀爬、滑梯、钻爬和平衡设施；小动物只按兴趣短看。", attractionId: "cloud-grassland" },
      { time: "12:00", place: "酒店", transport: "网约车", activity: "午餐；13:00—15:30午睡，不压缩。" },
      { time: "16:30", place: "大理古城", transport: "网约车", activity: "沿主街和水渠慢走，吃一顿白族菜晚餐。", attractionId: "dali-old-town" },
    ],
    parentTip: "雨后设施没干就不要玩攀爬；古城只走一条舒适小环线。",
    budget: "现场约 ¥650—1,000",
  },
  {
    day: 3,
    date: "09.06",
    weekday: "周日",
    city: "大理",
    title: "喜洲古镇与多肉花园",
    subtitle: "白族建筑、短手工和植物游乐",
    pace: "适中",
    weather: "备好轻薄雨衣",
    hero: "/images/dali-erhai.jpg",
    schedule: [
      { time: "08:20", place: "酒店 → 喜洲", transport: "预约网约车", activity: "定位游客中心，路上看苍山和田野。" },
      { time: "09:10", place: "喜洲古镇", activity: "转角楼、四方街、院落；甲马、瓦猫或扎染三选一。", attractionId: "xizhou" },
      { time: "11:40", place: "喜洲午餐", activity: "甜咸喜洲粑粑和白族家常菜；吃饭时预约返程。" },
      { time: "13:30", place: "酒店", transport: "预约网约车", activity: "午睡至15:45。" },
      { time: "16:10", place: "木石多肉·云朵花园", transport: "网约车", activity: "沙坑、滑梯、蹦床，或做植物拓印/多肉DIY。", attractionId: "succulent-garden" },
    ],
    parentTip: "不需要包车等待：去程提前预约，午餐时再约返程，更自由也更省。",
    budget: "现场约 ¥950—1,450",
  },
  {
    day: 4,
    date: "09.07",
    weekday: "周一",
    city: "大理",
    title: "路极公园，下午酒店放松",
    subtitle: "一个高参与度的运动主题上午",
    pace: "松弛",
    weather: "赛道怕积水与雷暴",
    hero: "/images/dali-erhai.jpg",
    schedule: [
      { time: "09:15", place: "酒店 → 路极公园", transport: "网约车", activity: "再次确认赛道开放。" },
      { time: "10:00", place: "大理路极主题公园", activity: "第一圈熟悉刹车，后续再逐步提高速度。", attractionId: "dali-luge" },
      { time: "12:40", place: "酒店", transport: "网约车", activity: "午餐，13:30—16:00午睡。" },
      { time: "16:00", place: "酒店", activity: "泳池、儿童区或迷你高尔夫。" },
    ],
    parentTip: "5岁孩子与成人同车；雨天或赛道积水就取消，不把刺激当成必须完成的任务。",
    budget: "现场约 ¥700—1,000",
  },
  {
    day: 5,
    date: "09.08",
    weekday: "周二",
    city: "大理",
    title: "洱海骑行，下午动车去丽江",
    subtitle: "在湖边告别大理，再平稳换城",
    pace: "适中",
    weather: "留意湖边风力",
    hero: "/images/dali-erhai.jpg",
    schedule: [
      { time: "08:20", place: "龙龛码头 → 才村方向", transport: "网约车 + 亲子车", activity: "沿生态廊道骑3—5公里，不追求里程。", attractionId: "erhai-corridor" },
      { time: "11:20", place: "酒店", activity: "午餐，12:30—14:30午睡并延迟退房。" },
      { time: "14:40", place: "酒店 → 大理站", transport: "网约车", activity: "预留安检时间。" },
      { time: "16:00前后", place: "大理 → 丽江", transport: "动车约1.5—2小时", activity: "车上看风景、吃点心。" },
      { time: "傍晚", place: "丽江金茂隐逸酒店", transport: "网约车", activity: "入住香江路8号，酒店晚餐。" },
    ],
    parentTip: "确认订的是香江路8号的丽江金茂隐逸，不是甘海子的雪山酒店。",
    budget: "现场约 ¥650—950",
  },
  {
    day: 6,
    date: "09.09",
    weekday: "周三",
    city: "丽江",
    title: "糊涂窝、白沙古镇与手工",
    subtitle: "孩子跑动、观察和动手的一整天",
    pace: "充实",
    weather: "草地活动看降雨",
    hero: "/images/lijiang-old-town.jpg",
    schedule: [
      { time: "08:30", place: "酒店 → 白沙方向", transport: "预约网约车", activity: "前往三元村方向，分段叫车。" },
      { time: "09:00", place: "糊涂窝牧场", activity: "草地活动；有兴趣再投喂小羊或兔子。", attractionId: "hutuwu-baisha" },
      { time: "10:25", place: "白沙古镇", transport: "网约车", activity: "找东巴文字、木门和水渠，11:30吃午饭。" },
      { time: "13:00", place: "白沙 / 阿美泽手工", activity: "东巴纸、版画、瓦猫或泥板画四选一。" },
      { time: "14:15", place: "酒店", transport: "预约网约车", activity: "车上短睡；15:30—17:00洗澡、换衣、补水。" },
      { time: "17:30", place: "酒店相邻区域", activity: "晚餐、散步和简单购物。" },
    ],
    parentTip: "这天不强制正式午睡；如果上午累，返程车上睡30—45分钟即可。",
    budget: "现场约 ¥850—1,300",
  },
  {
    day: 7,
    date: "09.10",
    weekday: "周四",
    city: "丽江",
    title: "云杉坪、蓝月谷与束河",
    subtitle: "雪山日控制高度，也保留傍晚弹性",
    pace: "充实",
    weather: "高海拔体感明显更冷",
    hero: "/images/jade-dragon.jpg",
    schedule: [
      { time: "06:30", place: "酒店", activity: "早餐，准备温水和简餐；孩子不能空腹乘索道。" },
      { time: "07:00", place: "酒店 → 雪山游客中心", transport: "预约网约车 / 官方直通车", activity: "按索道时段出发。" },
      { time: "08:00", place: "云杉坪", transport: "景区车 + 索道", activity: "森林栈道慢走，看树木与雪山。", attractionId: "jade-dragon" },
      { time: "10:30", place: "蓝月谷", transport: "景区车", activity: "选1—2个湖区短走，不必坐额外电瓶车。" },
      { time: "14:00", place: "酒店", transport: "网约车 / 直通车", activity: "洗澡、安静休息至少1小时。" },
      { time: "16:30", place: "束河古镇", transport: "短途网约车", activity: "状态好再去青龙桥、九鼎龙潭和水渠；顺便晚餐。", attractionId: "shuhe" },
    ],
    parentTip: "云杉坪约3200米。任何明显不适都先下撤；下午束河是可以随时删除的弹性项。",
    budget: "现场约 ¥1,150—1,700",
  },
  {
    day: 8,
    date: "09.11",
    weekday: "周五",
    city: "丽江",
    title: "玉湖村、龙女湖、黑龙潭与古城",
    subtitle: "自然探索之后，用市井晚餐收尾",
    pace: "充实",
    weather: "碎石路雨后湿滑",
    hero: "/images/black-dragon-pool.jpg",
    schedule: [
      { time: "08:15", place: "酒店 → 玉湖村", transport: "预约网约车", activity: "前往游客区域。" },
      { time: "09:00", place: "玉湖村与龙女湖", transport: "步行 + 正规接驳", activity: "找石墙与木门；湖边轻走1—2公里。", attractionId: "yuhu-longnv" },
      { time: "11:45", place: "附近午餐", activity: "选快速上菜的家常餐，同时预约返程。" },
      { time: "12:45", place: "酒店", transport: "网约车", activity: "车上短睡，回房换衣补水，休息至14:30。" },
      { time: "15:00", place: "黑龙潭", transport: "网约车", activity: "走桥看潭水，可短看丽江市博物院。", attractionId: "black-dragon-old-town" },
      { time: "16:30", place: "丽江古城", transport: "沿水系步行", activity: "安静巷子散步，18:00左右晚餐和小件购物。" },
    ],
    parentTip: "体力不够先删黑龙潭，再缩短古城；玉湖、龙女湖和晚餐优先保留。",
    budget: "现场约 ¥750—1,250",
  },
  {
    day: 9,
    date: "09.12",
    weekday: "周六",
    city: "丽江",
    title: "忠义市场早餐，直飞上海",
    subtitle: "不折返酒店的顺路收尾",
    pace: "松弛",
    weather: "按航班与路况倒推",
    hero: "/images/lijiang-old-town.jpg",
    schedule: [
      { time: "07:30", place: "酒店", activity: "早餐、退房；证件与电子产品随身。" },
      { time: "08:15", place: "酒店 → 忠义市场", transport: "平台小时租 / 带途经点送机", activity: "全部行李随车，不私下谈价。" },
      { time: "08:45", place: "忠义市场", activity: "烤饵块或米线，买水果与轻便伴手礼。", attractionId: "zhongyi-market" },
      { time: "09:35", place: "忠义市场 → 三义机场", transport: "同一平台订单", activity: "约10:20抵达机场。" },
      { time: "12:50参考", place: "丽江 → 上海", transport: "直飞", activity: "把飞行时段当午睡时间。", note: "最终以出票时刻为准" },
    ],
    parentTip: "晚于08:40出发就把市场压缩至20分钟；晚于09:10离店则直接去机场。",
    budget: "现场约 ¥350—600",
  },
];

export const packingGroups = [
  {
    title: "证件与预订",
    items: ["成人身份证", "儿童身份证或户口簿信息页", "机票/动车/酒店确认单", "云杉坪索道预约截图"],
  },
  {
    title: "分层穿衣",
    items: ["速干短袖与长裤", "薄抓绒", "轻薄防水防风外套", "薄帽", "每日备用袜", "防滑包头运动鞋"],
  },
  {
    title: "雨季装备",
    items: ["成人折叠伞", "儿童分体或长款雨衣", "背包防雨罩", "密封袋", "速干小毛巾"],
  },
  {
    title: "亲子随身包",
    items: ["温水杯", "少量高能量零食", "儿童防晒与遮阳帽", "驱蚊液", "创可贴与常用药", "湿巾与备用衣裤"],
  },
  {
    title: "雪山日加装",
    items: ["抓绒与防风外套", "薄帽", "温水与简餐", "备用袜", "证件", "防晒", "雨衣"],
  },
];

export const costRows = [
  ["往返机票", "¥7,000", "¥10,500", "上海—大理、丽江—上海；以出票为准"],
  ["大理酒店 4晚", "¥4,800", "¥6,800", "大理实力希尔顿"],
  ["丽江酒店 4晚", "¥5,200", "¥7,600", "丽江金茂隐逸（香江路8号）"],
  ["当地交通", "¥2,300", "¥3,700", "网约车、动车、景区官方接驳"],
  ["门票与体验", "¥2,100", "¥3,600", "路极、手工、雪山等"],
  ["餐饮", "¥2,680", "¥3,660", "一家三口九天"],
  ["合计", "¥24,080", "¥35,860", "舒适建议准备 ¥28,000—32,000"],
];

export const stationSequence = days.flatMap((day) =>
  day.schedule.map((item, index) => ({ day, item, index })),
);

export function stationHref(
  dayNumber: number,
  index: number,
  item: ScheduleItem,
) {
  return item.attractionId
    ? `/attraction/${item.attractionId}`
    : `/stop/${dayNumber}/${index}`;
}

const commons = (filename: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(filename)}`;

const activityImages: Record<string, ActivityImage[]> = {
  "march-street": [
    {
      image: "/images/activity/fruit-market.jpg",
      source: commons("Bingtsai Fruit Market - panoramio.jpg"),
    },
    {
      image: "/images/activity/tiedye.jpg",
      source: commons(
        "Bai fabric, tie-dyed - Yunnan Provincial Museum - DSC02211.JPG",
      ),
    },
    {
      image: "/images/activity/dali-vendor.jpg",
      source: commons("Flute Vendor (48427572497).jpg"),
    },
  ],
  "cloud-grassland": [
    {
      image: "/images/activity/playground-climb.jpg",
      source: commons(
        "Childrens playground climbing structure built to resemble rocks.jpg",
      ),
    },
    {
      image: "/images/activity/playground-slide.jpg",
      source: commons("Chinese Playground (dragon structure).jpg"),
    },
    {
      image: "/images/activity/feeding-pets.jpg",
      source: commons(
        "Child Feeding her Pets (1872) painting by Gaetano Chierici.jpg",
      ),
    },
  ],
  "dali-old-town": [
    {
      image: "/images/dali-old-town.jpg",
      source: commons("The old town of Dali.JPG"),
    },
    {
      image: "/images/dali-old-town.jpg",
      source: commons("The old town of Dali.JPG"),
    },
    {
      image: "/images/activity/chinese-food-vendors.jpg",
      source: commons("Chinese Food Vendors (48599394157).jpg"),
    },
  ],
  xizhou: [
    {
      image: "/images/activity/xizhou-market.jpg",
      source: commons("Market Scene, Xizhou, China (49528691361).jpg"),
    },
    {
      image: "/images/activity/tiedye.jpg",
      source: commons(
        "Bai fabric, tie-dyed - Yunnan Provincial Museum - DSC02211.JPG",
      ),
    },
    {
      image: "/images/activity/chinese-food-vendors.jpg",
      source: commons("Chinese Food Vendors (48599394157).jpg"),
    },
  ],
  "succulent-garden": [
    {
      image: "/images/activity/playground-slide.jpg",
      source: commons("Chinese Playground (dragon structure).jpg"),
    },
    {
      image: "/images/activity/succulent.jpg",
      source: commons("SLO Botanical Garden - Succulent 1.jpg"),
    },
    {
      image: "/images/activity/feeding-pets.jpg",
      source: commons(
        "Child Feeding her Pets (1872) painting by Gaetano Chierici.jpg",
      ),
    },
  ],
  "dali-luge": [
    {
      image: "/images/activity/luge-cart.jpg",
      source: commons(
        "Laterns-Kuehboden-summer toboggan-run (type Wiegand)-01ASD.jpg",
      ),
    },
    {
      image: "/images/activity/luge-ride.jpg",
      source: commons(
        "Laterns-Kuehboden-summer toboggan-run (type Wiegand)-02ASD.jpg",
      ),
    },
    {
      image: "/images/activity/hotel-pool.jpg",
      source: commons("Swimming Pool in a hotel in Tamil Nadu 03.jpg"),
    },
  ],
  "erhai-corridor": [
    {
      image: "/images/activity/family-cycling.jpg",
      source: commons(
        "Paul Bunyan Scenic Byway - Family Bicycling Along Paul Bunyan Scenic Byway - NARA - 7720972.jpg",
      ),
    },
    {
      image: "/images/dali-erhai.jpg",
      source:
        "https://english.news.cn/20241101/7df0d5fb80414aec8a5865ccd7962731/c.html",
    },
    {
      image: "/images/dali-erhai.jpg",
      source:
        "https://english.news.cn/20241101/7df0d5fb80414aec8a5865ccd7962731/c.html",
    },
  ],
  "hutuwu-baisha": [
    {
      image: "/images/snow-summit.jpg",
      source: commons("Lijiang Snow Mountain Summit.JPG"),
    },
    {
      image: "/images/activity/dongba-glyphs.jpg",
      source: commons("Dongba pictographic glyphs - Lijiang.jpg"),
    },
    {
      image: "/images/activity/dongba-glyphs.jpg",
      source: commons("Dongba pictographic glyphs - Lijiang.jpg"),
    },
  ],
  "jade-dragon": [
    {
      image: "/images/activity/forest-boardwalk.jpg",
      source: commons("Maoershan-Boarded Trail.jpg"),
    },
    {
      image: "/images/jade-dragon.jpg",
      source: commons(
        "Lijiang Yunnan China Jade-Dragon-Snow-Mountain-01.jpg",
      ),
    },
    {
      image: "/images/activity/blue-moon-valley.jpg",
      source: commons(
        "玉龙雪山 蓝月谷 Blue Moon Valley - panoramio.jpg",
      ),
    },
  ],
  shuhe: [
    {
      image: "/images/lijiang-old-town.jpg",
      source: commons("Lijiang-calle-l01.jpg"),
    },
    {
      image: "/images/black-dragon-pool.jpg",
      source: commons("Black Dragon Pool, Lijiang - panoramio.jpg"),
    },
    {
      image: "/images/activity/chinese-food-vendors.jpg",
      source: commons("Chinese Food Vendors (48599394157).jpg"),
    },
  ],
  "yuhu-longnv": [
    {
      image: "/images/activity/stone-village-1.jpg",
      source: commons("Baoshan Stone Village.jpg"),
    },
    {
      image: "/images/activity/blue-moon-valley.jpg",
      source: commons(
        "玉龙雪山 蓝月谷 Blue Moon Valley - panoramio.jpg",
      ),
    },
    {
      image: "/images/jade-dragon.jpg",
      source: commons(
        "Lijiang Yunnan China Jade-Dragon-Snow-Mountain-01.jpg",
      ),
    },
  ],
  "black-dragon-old-town": [
    {
      image: "/images/black-dragon-pool.jpg",
      source: commons("Black Dragon Pool, Lijiang - panoramio.jpg"),
    },
    {
      image: "/images/activity/dongba-glyphs.jpg",
      source: commons("Dongba pictographic glyphs - Lijiang.jpg"),
    },
    {
      image: "/images/lijiang-old-town.jpg",
      source: commons("Lijiang-calle-l01.jpg"),
    },
  ],
  "zhongyi-market": [
    {
      image: "/images/activity/chinese-food-vendors.jpg",
      source: commons("Chinese Food Vendors (48599394157).jpg"),
    },
    {
      image: "/images/activity/fruit-market.jpg",
      source: commons("Bingtsai Fruit Market - panoramio.jpg"),
    },
    {
      image: "/images/activity/xizhou-market.jpg",
      source: commons("Market Scene, Xizhou, China (49528691361).jpg"),
    },
  ],
};

export function activityImagesFor(attraction: Attraction): ActivityImage[] {
  const images = activityImages[attraction.id];

  if (!images || images.length !== attraction.activities.length) {
    return attraction.activities.map(() => ({ image: attraction.image }));
  }

  return images;
}
