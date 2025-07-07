export default function NewsDetailPage({ params }) {
  const { slug } = params;
  return (
    <>
      <h1>News Detail Page</h1>
      <p>News ID: {slug}</p>
    </>
  );
}
