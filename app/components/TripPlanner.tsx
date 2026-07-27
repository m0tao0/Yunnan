"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { assetPath, days, stationHref, type City } from "../data";

type Filter = "全部" | City;

const paceLabels = {
  松弛: "留有余量",
  适中: "上午重点 + 午休",
  充实: "灵活短休",
};

export function TripPlanner() {
  const [filter, setFilter] = useState<Filter>("全部");
  const [openDay, setOpenDay] = useState<number>(0);
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
        </div>
        <div className="hero__visual">
          <figure className="hero__photo hero__photo--main">
            <Image
              src={assetPath("/images/dali-erhai.jpg")}
              alt="洱海与苍山之间的乡野风景"
              fill
              priority
              sizes="(max-width: 800px) 90vw, 48vw"
            />
            <figcaption>DALI · ERHAI</figcaption>
          </figure>
          <figure className="hero__photo hero__photo--inset">
            <Image
              src={assetPath("/images/jade-dragon.jpg")}
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
              <article
                className={`day-card ${isOpen ? "is-open" : ""}`}
                id={`day-${day.day}`}
                key={day.day}
              >
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
                      <Image src={assetPath(day.hero)} alt="" fill sizes="(max-width: 800px) 100vw, 30vw" />
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
                            <Link
                              className="timeline__link"
                              href={stationHref(day.day, index, item)}
                            >
                              <h4>{item.place}</h4>
                              {item.transport && <span className="transport">↗ {item.transport}</span>}
                              <p>{item.activity}</p>
                              {item.note && <small>{item.note}</small>}
                              <b className="station-detail-cta">打开站点详情 →</b>
                            </Link>
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
    </>
  );
}
