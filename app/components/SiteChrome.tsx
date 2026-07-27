import Link from "next/link";

export function BookSpine() {
  return (
    <aside className="book-spine" aria-hidden="true">
      <span>云南 · 亲子旅行计划</span>
      <b>2026</b>
    </aside>
  );
}

export function Header({ compact = false }: { compact?: boolean }) {
  return (
    <header className={`site-header ${compact ? "site-header--compact" : ""}`}>
      <Link href="/" className="wordmark" aria-label="返回行程首页">
        <span className="wordmark__mark">雲</span>
        <span>
          <b>山水之间</b>
          <small>A FAMILY JOURNEY IN YUNNAN</small>
        </span>
      </Link>
      <nav aria-label="主导航">
        <Link href="/#journey">逐日行程</Link>
        <Link href="/#places">目的地</Link>
        <Link href="/#budget">预算</Link>
        <Link href="/notes">行前须知</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span className="eyebrow">THE ROUTE</span>
        <strong>上海 → 大理 → 丽江 → 上海</strong>
      </div>
      <p>
        票价、营业时间和交通为规划参考，临行前48小时以官方及平台实时信息复核。
      </p>
      <div className="image-credits">
        图片：新华网 / 胡超；Wikimedia Commons / Luis Franco、Uwe
        Aranas、Inhorw、Colin W、Corymgrenier（依各自许可使用）。
      </div>
    </footer>
  );
}

