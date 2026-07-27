import Link from "next/link";
import type { CSSProperties } from "react";
import { BookSpine, Footer, Header } from "../components/SiteChrome";
import { assetPath, packingGroups } from "../data";

const bookingSteps = [
  ["出票后", "锁定上海—大理、丽江—上海航班，以及大理—丽江动车候选班次。"],
  ["尽早", "确认大理实力希尔顿4晚与丽江金茂隐逸香江路8号4晚。"],
  ["出发前7—14天", "预约糊涂窝与一项5岁儿童可参加的白沙手工。"],
  ["按官方放票节奏", "关注丽江旅游集团渠道，预约云杉坪索道。"],
  ["出发前1—2天", "在平台保存喜洲、雪山、玉湖和机场定位；远途去程提前一晚预约。"],
  ["每天出发前", "复核降雨、雷暴、风力和景区停运信息。"],
];

const weatherPlans = [
  ["云上草原", "湿滑或雷雨", "与喜洲上午互换；设施没干就不攀爬。"],
  ["路极公园", "赛道积水、雷暴", "与洱海骑行互换；仍不安全则退款。"],
  ["洱海骑行", "强风、积水", "缩到30—60分钟，或改酒店活动。"],
  ["糊涂窝 + 白沙", "持续中到大雨", "取消牧场，保留室内手工和午餐。"],
  ["玉龙雪山", "索道停运", "接受退票，改白沙或黑龙潭；不升级大索道。"],
  ["玉湖 + 龙女湖", "持续大雨", "改黑龙潭 + 博物院，古城视雨量决定。"],
];

export default function NotesPage() {
  return (
    <div className="site-shell">
      <BookSpine />
      <main className="paper">
        <Header compact />
        <article className="notes-page">
          <header
            className="notes-cover"
            style={{ "--notes-cover-image": `url("${assetPath("/images/jade-dragon.jpg")}")` } as CSSProperties}
          >
            <div>
              <Link href="/" className="back-link">← 返回旅行手账</Link>
              <span className="eyebrow">BEFORE YOU GO · 2026.09</span>
              <h1>雨季尾声的云南，<br />行李要轻，也要会分层。</h1>
              <p>
                9月4日至12日仍处雨季后半段。城区白天温和、早晚偏凉，
                阵雨与放晴会快速切换；云杉坪约3200米，风雨时体感会明显降低。
              </p>
            </div>
            <aside>
              <span>穿衣公式</span>
              <strong>速干打底</strong>
              <b>＋</b>
              <strong>薄抓绒</strong>
              <b>＋</b>
              <strong>防水防风外套</strong>
              <small>热了逐层脱，不把厚羽绒服作为默认必需品。</small>
            </aside>
          </header>

          <section className="packing">
            <div className="section-heading">
              <div>
                <span className="eyebrow">PACKING LIST</span>
                <h2>一家三口打包清单</h2>
              </div>
              <p>按“日常行李 + 当天随身包”分装，雨具与备用袜永远放在最容易拿到的位置。</p>
            </div>
            <div className="packing-grid">
              {packingGroups.map((group, index) => (
                <section key={group.title}>
                  <span>0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ))}
            </div>
          </section>

          <section className="altitude">
            <div>
              <span className="eyebrow">ALTITUDE NOTE</span>
              <h2>云杉坪当天，不用“硬扛”。</h2>
              <p>
                孩子不奔跑、不连续大喊。出现持续头痛、恶心、异常嗜睡、走路不稳或精神明显变差，
                立即下降海拔，并取消当晚束河。
              </p>
            </div>
            <div className="altitude__numbers">
              <span><b>3,200m</b><small>云杉坪约海拔</small></span>
              <span><b>1h+</b><small>回酒店强制恢复</small></span>
              <span><b>0</b><small>不安排冰川大索道</small></span>
            </div>
          </section>

          <section className="weather-table">
            <div className="section-heading">
              <div>
                <span className="eyebrow">RAIN PLAN</span>
                <h2>天气不好时怎么换</h2>
              </div>
            </div>
            <div className="notes-table">
              <div className="notes-row notes-row--head">
                <span>原计划</span><span>触发条件</span><span>替代方案</span>
              </div>
              {weatherPlans.map((row) => (
                <div className="notes-row" key={row[0]}>
                  <b>{row[0]}</b><span>{row[1]}</span><p>{row[2]}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="booking">
            <div className="booking__heading">
              <span className="eyebrow">BOOKING ORDER</span>
              <h2>预约顺序</h2>
              <p>不提前联系私人包车。较远路线用平台预约网约车，雪山和龙女湖配合官方接驳。</p>
            </div>
            <ol>
              {bookingSteps.map(([time, step], index) => (
                <li key={time}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><b>{time}</b><p>{step}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="final-check">
            <span>出门前最后确认</span>
            <div>
              <p>儿童身份证明</p>
              <p>防滑鞋</p>
              <p>雨衣</p>
              <p>温水与零食</p>
              <p>索道票种</p>
              <p>当天返程车</p>
            </div>
          </section>
        </article>
        <Footer />
      </main>
    </div>
  );
}
