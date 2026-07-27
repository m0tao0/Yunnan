import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookSpine, Footer, Header } from "../../../components/SiteChrome";
import {
  assetPath,
  stationHref,
  stationSequence,
} from "../../../data";

export function generateStaticParams() {
  return stationSequence
    .filter((entry) => !entry.item.attractionId)
    .map((entry) => ({
      day: String(entry.day.day),
      index: String(entry.index),
    }));
}

export default async function StopPage({
  params,
}: {
  params: Promise<{ day: string; index: string }>;
}) {
  const { day, index } = await params;
  const dayNumber = Number(day);
  const stopIndex = Number(index);
  const currentSequenceIndex = stationSequence.findIndex(
    (entry) => entry.day.day === dayNumber && entry.index === stopIndex,
  );
  const current = stationSequence[currentSequenceIndex];

  if (!current || current.item.attractionId) notFound();

  const previous = stationSequence[currentSequenceIndex - 1];
  const next = stationSequence[currentSequenceIndex + 1];
  const { item, day: dayPlan } = current;
  const facts = [
    ["时间", item.time],
    ["交通", item.transport ?? "步行或现场衔接"],
    ["当日节奏", dayPlan.pace],
    ["天气提示", dayPlan.weather],
  ];

  return (
    <div className="site-shell">
      <BookSpine />
      <main className="paper">
        <Header compact />
        <article className="detail detail--field-guide">
          <section className="detail-hero detail-hero--istanbul">
            <div className="detail-hero__image">
              <Image
                src={assetPath(dayPlan.hero)}
                alt={`${item.place}行程参考`}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 52vw"
              />
              <span>{dayPlan.city} · ITINERARY STOP</span>
            </div>
            <div className="detail-hero__copy">
              <Link href={`/#day-${dayNumber}`} className="back-link">
                ← 返回第{dayNumber}天时间线
              </Link>
              <span className="eyebrow">云南亲子行程站点</span>
              <p className="detail-district">
                DAY {String(dayNumber).padStart(2, "0")} · {dayPlan.date} · {dayPlan.city}
              </p>
              <h1>{item.place}</h1>
              <p className="detail-intro">{item.activity}</p>

              <div className="detail-quick-facts" aria-label="站点实用信息">
                {facts.map(([label, value], factIndex) => (
                  <article key={label}>
                    <span>{String(factIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <small>{label}</small>
                      <b>{value}</b>
                    </div>
                  </article>
                ))}
              </div>

              <div className="detail-route-card">
                <span>如何到达 · 上一站出发</span>
                <strong>{previous?.item.place ?? "行程起点"} → {item.place}</strong>
                <p>{item.transport ?? "按当天时间线衔接，优先选择步行或平台网约车。"}</p>
              </div>
            </div>
          </section>

          <section className="detail-body detail-body--guide">
            <div className="detail-primary">
              <div className="content-block-heading">
                <span className="eyebrow">AT THIS STOP</span>
                <h2>这一站怎么安排</h2>
              </div>
              <div className="play-gallery play-gallery--single">
                <article>
                  <div className="play-gallery__image">
                    <Image
                      src={assetPath(dayPlan.hero)}
                      alt={`${item.place}活动参考`}
                      fill
                      sizes="(max-width: 800px) 100vw, 55vw"
                    />
                    <span>行程节点 · DAY {String(dayNumber).padStart(2, "0")}</span>
                  </div>
                  <div className="play-gallery__copy">
                    <span>01</span>
                    <div>
                      <h3>{item.activity}</h3>
                      <p>
                        {item.note ?? "按孩子当时的精神和天气灵活调整，不为赶下一个点压缩休息。"}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <aside className="detail-aside">
              <div className="aside-card safety-panel">
                <span className="eyebrow">PARENT CHECK</span>
                <h2>当天节奏提示</h2>
                <ul>
                  <li>{dayPlan.parentTip}</li>
                  <li>{item.note ?? "提前确认接送点、证件和随身物品。"}</li>
                  <li>如孩子明显疲惫，先缩短停留，不压缩必要休息。</li>
                </ul>
              </div>
              <div className="aside-card rain-note">
                <span>当天预算</span>
                <p>{dayPlan.budget}</p>
              </div>
            </aside>
          </section>

          <section className="next-stop">
            <span className="eyebrow">CONTINUE THE JOURNEY</span>
            <h2>{next ? `下一站：${next.item.place}` : "九日行程已经完成"}</h2>
            <div className="next-actions">
              <Link className="next-back" href={`/#day-${dayNumber}`}>
                ← 返回第{dayNumber}天时间线
              </Link>
              {next && (
                <Link
                  className="paper-button"
                  href={stationHref(next.day.day, next.index, next.item)}
                >
                  进入下一站 <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </section>
        </article>
        <Footer />
      </main>
    </div>
  );
}
