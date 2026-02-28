import { useNavigate } from 'react-router-dom';
import { Countdown } from '../components/Countdown';
import { Button } from 'pixel-retroui';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat relative flex-1 w-full flex flex-col bg-background-dark overflow-x-hidden min-h-[calc(100svh-64px)]">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 md:py-8 relative">

        <div className="h-full justify-evenly max-w-4xl w-full text-center z-10 flex flex-col items-center gap-4 md:gap-5">
          <div className="space-y-2 flex flex-col items-center">

            {/* Badge — allow wrapping on very small screens */}
            <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-widest text-center">
              Government Engineering College, Patan
            </span>

            <h1 className="pt-1 text-primary text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Presents
              <div className="pt-2 md:pt-4 hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-minecraft-bold text-secondary">
                Sports Week 2026
              </div>
            </h1>

            <p className="pt-2 md:pt-4 text-secondary text-sm md:text-xl lg:text-2xl max-w-2xl mx-auto font-light leading-relaxed px-2">
              Experience the ultimate adrenaline rush. Join the most energetic sports festival of the year where champions are made and legends are born.
            </p>
          </div>

          {/* Countdown Timer */}
          <Countdown />

          {/* CTA */}
          <div className="mt-2 md:mt-3 flex flex-col sm:flex-row gap-3 items-center justify-center w-full">
            <Button
              shadow="#6b6b6b"
              className="px-6 py-1 w-full sm:w-auto"
              onClick={() => navigate('/game')}
            >
              Explore Events
            </Button>
            <Button
              bg="#FFBB0E"
              textColor="black"
              borderColor="black"
              shadow="#604604"
              className="px-6 py-1 w-full sm:w-auto"
              onClick={() => navigate('/gallery')}
            >
              Our Gallery
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
