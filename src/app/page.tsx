import { db } from "~/server/db";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });

  return (
    <main>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            {image.url && <img src={image.url} alt="image" />}
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
