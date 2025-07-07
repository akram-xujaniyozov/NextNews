import Link from "next/link";

export default function NewsPage(params) {
  return (
    <div>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/first-item">First News Item</Link>
        </li>
        <li>
          <Link href="/news/second-item">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/third-item">Third News Item</Link>
        </li>
      </ul>
    </div>
  );
}
