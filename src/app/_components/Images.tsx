import { db } from "~/server/db";

export default async function Images () { 
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });

  return (
    <div className="flex flex-wrap gap-4 px-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          {image.url && <img src={image.url} alt="image" />}
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}