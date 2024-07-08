import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/99c30ec1-93a4-4b0b-868e-f2de2032e8c9-lfw48g.jpg',
  'https://utfs.io/f/cf98713d-210a-4a3c-8d64-f704c047d113-lwvbur.jpg',
  'https://utfs.io/f/3854cbd2-5970-4795-8e05-2c262018b9f4-ftjgay.jpg',
  'https://utfs.io/f/4c334004-660c-45db-adf3-03423d1dfbf6-kmnol1.jpg'
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id}>
            {post.name}
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
