import { Fragment } from 'react';
import Link from 'next/link';

import { getNewsForYear, getAvailableNewsYears } from '@/lib/news';
import NewsList from '@/components/news-list';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[0];

  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  }

  let newsContent = <p>No news found for the selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const links = getAvailableNewsYears();

  return (
    <Fragment>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
