import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookSpine, Footer, Header } from "../../components/SiteChrome";
import {
  activityImagesFor,
  assetPath,
  attractionById,
  attractions,
  stationHref,
  stationSequence,
} from "../../data";

export function generateStaticParams() {
  return attractions.map((attraction) => ({ id: attraction.id }));
}

export default async function AttractionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const attraction = attractionById[id];

  if (!attraction) notFound();

  const currentIndex = stationSequence.findIndex(
    (entry) => entry.item.attractionId === attraction.id,
  );
  const current = stationSequence[currentIndex];
  const previous = stationSequence[currentIndex - 1];
  const next = stationSequence[currentIndex + 1];
  const dayNumber = current?.day.day ?? 1;
  const playImages = activityImagesFor(attraction);

  const facts = [
    ["开放时间", attraction.open],
    ["参考费用", attraction.ticket],
    ["建议用时", attraction.duration],
    ["亲子适配", attraction.childFit],
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
                src={assetPath(attraction.image)}
                alt={`${attraction.name}实景`}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 52vw"
              />
              <span>{attraction.city} · FAMILY FIELD NOTE</span>
            </div>
            <div className="detail-hero__copy">
              <Link href={`/#day-${dayNumber}`} className="back-link">
                ← 返回第{dayNumber}天时间线
              </Link>
              <span className="eyebrow">云南亲子站点档案</span>
              <p className="detail-district">DAY {String(dayNumber).padStart(2, "0")} · {attraction.city}</p>
              <h1>{attraction.name}</h1>
              <p className="detail-intro">{attraction.intro}</p>

              <div className="detail-quick-facts" aria-label="站点实用信息">
                {facts.map(([label, value], index) => (
                  <article key={label}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <small>{label}</small>
                      <b>{value}</b>
                    </div>
                  </article>
                ))}
              </div>

              <div className="detail-route-card">
                <span>如何到达 · 上一站出发</span>
                <strong>
                  {previous?.item.place ?? "酒店"} → {attraction.name}
                </strong>
                <p>{attraction.transport}</p>
              </div>
            </div>
          </section>

          <section className="detail-body detail-body--guide">
            <div className="detail-primary">
              <div className="content-block-heading">
                <span className="eyebrow">WHAT TO DO</span>
                <h2>到这里具体玩什么</h2>
                <p>不追求打卡数量，把时间留给孩子真正能参与的动作和观察。</p>
              </div>

              <div className="play-gallery">
                {attraction.activities.map((activity, index) => (
                  <article key={activity}>
                    <div className="play-gallery__image">
                      <Image
                        src={assetPath(playImages[index])}
                        alt={`${attraction.name}：${activity}`}
                        fill
                        sizes="(max-width: 800px) 100vw, 35vw"
                      />
                      <span>现场玩法 · {String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="play-gallery__copy">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{activity}</h3>
                        <p>
                          先让孩子观察环境，再由家长陪同参与；不以完成数量和拍照效果作为目标。
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="detail-aside">
              <div className="aside-card safety-panel">
                <span className="eyebrow">PARENT CHECK</span>
                <h2>安全与取舍</h2>
                <ul>
                  {attraction.safety.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="aside-card rain-note">
                <span>天气不好时</span>
                <p>{attraction.rainPlan}</p>
              </div>
              <p className="detail-data-note">
                开放时间和费用为行程规划参考，临行前48小时以景区官方及平台实时信息为准。
              </p>
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
