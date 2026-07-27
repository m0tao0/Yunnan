"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { attractions, costRows, days, tripMeta, type City } from "../data";

type Filter = "全部" | City;

const paceLabels = {
  松弛: "留有余量",
  适中: "上午重点 + 午休",
  充实: "灵活短休",
};

export function TripPlanner() {
  const [filter, setFilter] = useState<Filter>("全部");
  const [openDay, setOpenDay] = useState<number>(1);
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = window.localStorage.getItem("yunnan-trip-checklist");
    if (saved) {
      try {
        setDone(JSON.parse(saved));
      } catch {
        window.localStorage.removeItem("yunnan-trip-checklist");
      }
    }
  }, []);

  const filteredDays = useMemo(
    () => days.filter((day) => filter === "全部" || day.city === filter),
    [filter],
  );

  function toggleDone(key: string) {
    setDone((current) => {
      const next = { ...current, [key]: !current[key] };
      window.localStorage.setItem("yunnan-trip-checklist", JSON.stringify(next));
      return next;
    });
  }

  return (
    <>
      <section className="hero" aria-labelledby="trip-title">
        <div className="hero__copy">
          <span className="eyebrow">SEPTEMBER · NINE DAYS · ONE FAMILY</span>
          <h1 id="trip-title">
            九日慢游，
            <br />
            穿过苍山与雪山
          </h1>
          <p className="hero__dek">
            给一个喜欢攀爬、跑动和动手的5岁男孩：把最重要的户外项目留给清晨，
            在大理守住午睡，在丽江用车上午睡和短休换来更丰富的下午。
          </p>
          <div className="hero__meta">
            <div>
              <span>日期</span>
              <b>{tripMeta.dates}</b>
            </div>
            <div>
              <span>路线</span>
              <b>{tripMeta.route}</b>
            </div>
            <div>
              <span>舒适预算</span>
              <b>{tripMeta.budget}</b>
            </div>
          </div>
          <a className="paper-button" href="#journey">
            打开旅行手账
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero__visual">
          <figure className="hero__photo hero__photo--main">
            <Image
              src="/images/dali-erhai.jpg"
              alt="洱海与苍山之间的乡野风景"
              fill
              priority
              sizes="(max-width: 800px) 90vw, 48vw"
            />
            <figcaption>DALI · ERHAI</figcaption>
          </figure>
          <figure className="hero__photo hero__photo--inset">
            <Image
              src="/images/jade-dragon.jpg"
              alt="丽江玉龙雪山"
              fill
              priority
              sizes="(max-width: 800px) 45vw, 23vw"
            />
            <figcaption>LIJIANG · 27.1°N</figcaption>
          </figure>
          <div className="hero__stamp">
            <span>FAMILY</span>
            <b>9</b>
            <span>DAYS</span>
          </div>
        </div>
      </section>

      <section className="route-strip" aria-label="九天路线概览">
        {days.map((day) => (
          <button
            key={day.day}
            type="button"
            onClick={() => {
              setFilter("全部");
              setOpenDay(day.day);
              document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>D{day.day}</span>
            <b>{day.date}</b>
            <small>{day.city}</small>
          </button>
        ))}
      </section>

      <section className="editorial-intro">
        <div>
          <span className="eyebrow">TRAVEL PHILOSOPHY</span>
          <h2>不是把景点塞满，而是让孩子真的走进去。</h2>
        </div>
        <div className="editorial-intro__rules">
          <p><b>01</b> 云上草原和路极都放在精神最好的上午。</p>
          <p><b>02</b> 大理每天守住午睡；丽江允许车睡与短休。</p>
          <p><b>03</b> 以预约网约车为主，官方接驳进入雪山与龙女湖。</p>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DAY BY DAY</span>
            <h2>逐日行程</h2>
          </div>
          <p>点击每天展开时间轴；方框可作为旅途中使用的完成清单。</p>
        </div>

        <div className="filter-tabs" role="tablist" aria-label="按城市筛选">
          {(["全部", "大理", "丽江"] as Filter[]).map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={filter === item ? "is-active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
              <span>
                {item === "全部" ? days.length : days.filter((day) => day.city === item).length}
              </span>
            </button>
          ))}
        </div>

        <div className="day-list">
          {filteredDays.map((day) => {
            const isOpen = openDay === day.day;
            return (
              <article className={`day-card ${isOpen ? "is-open" : ""}`} key={day.day}>
                <button
                  type="button"
                  className="day-card__summary"
                  aria-expanded={isOpen}
                  onClick={() => setOpenDay(isOpen ? 0 : day.day)}
                >
                  <div className="day-card__number">
                    <span>DAY</span>
                    <b>{String(day.day).padStart(2, "0")}</b>
                  </div>
                  <div className="day-card__title">
                    <div>
                      <span className={`city-tag city-tag--${day.city}`}>{day.city}</span>
                      <span>{day.date} · {day.weekday}</span>
                    </div>
                    <h3>{day.title}</h3>
                    <p>{day.subtitle}</p>
                  </div>
                  <div className="day-card__pace">
                    <span>{day.pace}</span>
                    <small>{paceLabels[day.pace]}</small>
                  </div>
                  <span className="day-card__toggle" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="day-card__body">
                    <div className="day-photo">
                      <Image src={day.hero} alt="" fill sizes="(max-width: 800px) 100vw, 30vw" />
                      <span>{day.weather}</span>
                    </div>
                    <div className="timeline">
                      {day.schedule.map((item, index) => {
                        const key = `${day.day}-${index}`;
                        return (
                          <div className={`timeline__item ${done[key] ? "is-done" : ""}`} key={key}>
                            <button
                              type="button"
                              className="check"
                              onClick={() => toggleDone(key)}
                              aria-label={`${done[key] ? "取消完成" : "标记完成"}：${item.place}`}
                            >
                              {done[key] ? "✓" : ""}
                            </button>
                            <time>{item.time}</time>
                            <div>
                              <h4>{item.place}</h4>
                              {item.transport && <span className="transport">↗ {item.transport}</span>}
                              <p>{item.activity}</p>
                              {item.note && <small>{item.note}</small>}
                              {item.attractionId && (
                                <Link href={`/attraction/${item.attractionId}`}>
                                  查看地点详情与安全提示 →
                                </Link>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <aside className="parent-note">
                      <span>给家长的节奏提示</span>
                      <p>{day.parentTip}</p>
                      <b>{day.budget}</b>
                    </aside>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="places" id="places">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PLACES & PLAY</span>
            <h2>孩子会真正参与的地方</h2>
          </div>
          <p>去掉以旅拍为主、同质化或强度不合适的项目，保留跑、爬、骑、观察与手作。</p>
        </div>
        <div className="place-grid">
          {attractions.slice(0, 8).map((place, index) => (
            <Link className={`place-card place-card--${index % 3}`} href={`/attraction/${place.id}`} key={place.id}>
              <div className="place-card__image">
                <Image src={place.image} alt={place.name} fill sizes="(max-width: 800px) 90vw, 30vw" />
              </div>
              <div className="place-card__copy">
                <span>{place.city} · {place.duration}</span>
                <h3>{place.name}</h3>
                <p>{place.kicker}</p>
                <b>查看详情 ↗</b>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="hotel-ledger">
        <div className="hotel-ledger__title">
          <span className="eyebrow">TWO BASES, NO RUSH</span>
          <h2>只住两家酒店，不反复搬行李</h2>
        </div>
        {tripMeta.hotels.map((hotel, index) => (
          <article key={hotel.name}>
            <span>0{index + 1}</span>
            <div>
              <small>{hotel.city} · {hotel.nights}</small>
              <h3>{hotel.name}</h3>
              <p>{hotel.note}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="budget" id="budget">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FAMILY BUDGET</span>
            <h2>一家三口预算账本</h2>
          </div>
          <p>按2位成人 + 1位5岁儿童估算；机票和酒店价格是波动最大的部分。</p>
        </div>
        <div className="budget__grid">
          <div className="budget-table">
            <div className="budget-row budget-row--head">
              <span>类别</span><span>低位</span><span>高位</span><span>说明</span>
            </div>
            {costRows.map((row) => (
              <div className="budget-row" key={row[0]}>
                <b>{row[0]}</b><span>{row[1]}</span><span>{row[2]}</span><small>{row[3]}</small>
              </div>
            ))}
          </div>
          <aside className="budget-ticket">
            <span>RECOMMENDED</span>
            <p>舒适准备</p>
            <strong>¥28,000</strong>
            <em>—</em>
            <strong>¥32,000</strong>
            <small>另留 ¥1,000—2,000 购买茶叶、鲜花饼、东巴纸品与儿童纪念品。</small>
          </aside>
        </div>
      </section>

      <section className="notes-cta">
        <div>
          <span className="eyebrow">BEFORE YOU GO</span>
          <h2>九月仍在雨季尾声，行李要会“分层”。</h2>
          <p>查看穿衣、雨具、雪山随身包、预约顺序和恶劣天气替代方案。</p>
        </div>
        <Link className="paper-button paper-button--light" href="/notes">
          打开行前须知
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

