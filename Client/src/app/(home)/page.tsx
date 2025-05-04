import Images from '../components/images';
import Landing from '../components/landing';
import images from './images'; 

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <main className="flex-grow">
      <Landing />
      <Images images={images}/> 
     </main> 
    </div>
  );
}