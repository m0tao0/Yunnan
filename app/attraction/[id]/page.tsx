import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookSpine, Footer, Header } from "../../components/SiteChrome";
import { attractionById, attractions } from "../../data";

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

  const related = attractions
    .filter((item) => item.city === attraction.city && item.id !== attraction.id)
    .slice(0, 3);

  return (
    <div className="site-shell">
      <BookSpine />
      <main className="paper">
        <Header compact />
        <article className="detail">
          <section className="detail-hero">
            <div className="detail-hero__image">
              <Image
                src={attraction.image}
                alt={attraction.name}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 55vw"
              />
              <span>{attraction.city} · FAMILY FIELD NOTE</span>
            </div>
            <div className="detail-hero__copy">
              <Link href="/#journey" className="back-link">← 返回逐日行程</Link>
              <span className="eyebrow">{attraction.kicker}</span>
              <h1>{attraction.name}</h1>
              <p>{attraction.intro}</p>
              <div className="child-fit">
                <span>亲子适配</span>
                <b>{attraction.childFit}</b>
              </div>
            </div>
          </section>

          <section className="fact-ledger" aria-label="地点实用信息">
            <div><span>开放时间</span><b>{attraction.open}</b></div>
            <div><span>参考费用</span><b>{attraction.ticket}</b></div>
            <div><span>建议用时</span><b>{attraction.duration}</b></div>
            <div><span>怎么去</span><b>{attraction.transport}</b></div>
          </section>

          <section className="detail-columns">
            <div>
              <span className="eyebrow">WHAT TO DO</span>
              <h2>到这里具体玩什么</h2>
              <ol className="number-list">
                {attraction.activities.map((activity, index) => (
                  <li key={activity}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{activity}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="safety-panel">
              <span className="eyebrow">PARENT CHECK</span>
              <h2>安全与取舍</h2>
              <ul>
                {attraction.safety.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="rain-note">
                <span>雨天方案</span>
                <p>{attraction.rainPlan}</p>
              </div>
            </div>
          </section>

          <section className="related">
            <div className="section-heading">
              <div>
                <span className="eyebrow">NEARBY IN THE PLAN</span>
                <h2>{attraction.city}段的其他地点</h2>
              </div>
            </div>
            <div className="related__grid">
              {related.map((item) => (
                <Link href={`/attraction/${item.id}`} key={item.id}>
                  <span>{item.kicker}</span>
                  <h3>{item.name}</h3>
                  <b>打开地点笔记 ↗</b>
                </Link>
              ))}
            </div>
          </section>
        </article>
        <Footer />
      </main>
    </div>
  );
}

