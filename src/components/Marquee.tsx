const ITEMS = ["Next.js","TypeScript","Tailwind CSS","React","Node.js","PostgreSQL","Prisma","REST API","Git","Vercel"];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {all.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
