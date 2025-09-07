// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Bricolage_Grotesque, Knewave } from "next/font/google";

const grotesk = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
});
const brush = Knewave({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={`min-h-screen w-full bg-black text-white ${grotesk.className}`}>
      <header className="relative z-20 flex items-center justify-center py-6">
        <Link
          href="/"
          className="relative h-12 w-12 flex items-center justify-center rounded bg-white/95 hover:bg-white transition"
          aria-label="Logo"
        >
      
          <span className="absolute block h-[2px] w-6 bg-black rotate-45 rounded-sm"></span>
          <span className="absolute block h-[2px] w-6 bg-black -rotate-45 rounded-sm"></span>
        </Link>
      </header>

      <main className="relative mx-auto max-w-[1200px] px-6 pb-28">
        <div className="pointer-events-none absolute left-1/2 top-[200px] z-0 h-[260px] w-[92%] -translate-x-1/2 rounded-[18px] bg-white/[0.06] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        <div className="pointer-events-none absolute inset-0 z-0 [background:radial-gradient(60%_40%_at_50%_30%,rgba(255,255,255,0.08),transparent_60%)]" />

       
        <div className="pointer-events-none absolute left-2 top-32 z-10 hidden md:block">
          <CircularBadge />
        </div>

        
        <nav className="absolute right-8 top-24 z-20 hidden text-right md:block">
          <ol className="space-y-3 text-sm font-extrabold tracking-wide">
            <li>
              <Link href="#" className="inline-flex items-center gap-3">
                <span className="opacity-70">01</span>
                <span className="underline underline-offset-4">Home</span>
              </Link>
            </li>
           
            <li className="text-white/70 hover:text-white transition">
              <Link href="#" className="inline-flex items-center gap-3">
                <span>03</span> <span>Projects</span>
              </Link>
            </li>
          </ol>

          <div className="mt-6 space-y-2 text-sm font-extrabold">
            <Link href="#" className="block hover:underline">Blog</Link>
            <Link href="#" className="block hover:underline">Updates</Link>
            <Link href="#" className="block hover:underline">Contact</Link>
          </div>
        </nav>

        <section className="relative z-10 mx-auto mt-6 grid place-items-center">
          <div className="relative inline-block">
           
            <div className="rounded-[16px] p-[7px] [background:linear-gradient(90deg,#ff0055,#ff9a00,#ffd300,#00d084,#00a2ff,#bd00ff)] shadow-[0_0_40px_rgba(189,0,255,0.35)]">
              <div className="relative rounded-[12px] overflow-hidden bg-black">
               
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10" />
                
                <div className="relative h-[340px] w-[260px] sm:h-[420px] sm:w-[320px] md:h-[520px] md:w-[400px]">
                  <Image
                    src="/rockHand.png"
                    alt="Rock hand"
                    fill
                    className="rounded-[12px] object-cover object-center drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                    priority
                  />
                </div>
              </div>
            </div>


            <div
              className={`${brush.className} pointer-events-none absolute -left-10 -bottom-10 rotate-[-7deg] select-none`}
            >
              <span className="block text-[42px] sm:text-[56px] md:text-[72px] leading-none">
                <span className="px-2">
                  <span className="text-white drop-shadow-[0_4px_24px_rgba(255,0,120,0.25)]">
                    Ablum
                  </span>
                </span>
              </span>
            </div>
          </div>
        </section>

        
        <div className="relative z-20 mt-10 text-center">
          <h1 className="text-[42px] leading-[1.05] font-extrabold sm:text-6xl md:text-7xl">
            TECHNOLOGY <span className="inline-block">&amp; DESIGN</span>
          </h1>
          <p className="mt-6 text-[12px] tracking-[0.38em] text-white/85">
            CRAFTED WITH LOVE by AARUSHI!
          </p>
        </div>
      </main>
    </div>
  );
}


function CircularBadge() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" className="opacity-90">
      <defs>
        <path
          id="circlePath"
          d="M70,70 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0"
        />
      </defs>
      <g>
        <circle cx="70" cy="70" r="60" fill="transparent" stroke="white" strokeOpacity="0.15" />
        <text fill="white" fontSize="12" fontWeight="800" letterSpacing="2">
          <textPath xlinkHref="#circlePath" startOffset="0">
            OPEN FOR BUSINESS • OPEN FOR BUSINESS •
          </textPath>
        </text>
        <foreignObject x="55" y="55" width="30" height="30">
          <div className="grid h-full w-full place-items-center text-lg">🤟🏻</div>
        </foreignObject>
      </g>
    </svg>
  );
}
