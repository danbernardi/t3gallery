import {
  SignedOut,
  SignedIn
} from '@clerk/nextjs'
import Images from './_components/Images';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in</div>
      </SignedOut>
      
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
