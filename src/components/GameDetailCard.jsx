import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'pixel-retroui';


export function GameDetailCard({ game }) {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ backgroundImage: `url(${game.image})` }} className="bg-cover bg-center bg-no-repeat relative w-full flex flex-col hero-gradient overflow-x-hidden">
        <main className="flex flex-col flex-1 max-w-5xl mx-auto w-full px-4 md:px-8 py-12 md:py-16 md:space-y-10 gap-7">

          {/* Back Button */}
          <div className="absolute top-6 left-1/6 transform -translate-x-1/2">
            <Button
              onClick={() => navigate('/game')}
              className="!hidden md:flex items-center gap-2 px-2 py-1"
            >
              <span className="material-symbols-outlined md:text-lg">arrow_back</span>
              Back to Games
            </Button>
          </div>

          {/* Header */}
          <div className="text-center md:mt-12 flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-minecraft-bold mb-4">{game.title}</div>
            <p className="text-secondary md:text-lg md:max-w-2/3">{game.about}</p>
          </div>


          {/* Coordinator + Register */}
          <Card className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="p-6 flex flex-col sm:flex-row items-center gap-6 justify-items-center justify-center">
              <img src="/collegelogo.png" alt="Coordinator" className="w-24 h-24 rounded-full object-cover border-4 border-primary/50 shadow-lg flex-shrink-0" />
              <div className="flex-col justify-items-center">
                <p className="text-secondary text-xs uppercase tracking-wider">Sports Coordinator</p>
                <h3 className="text-primary text-xl font-bold">{game.coordinator}</h3>
                <a href={`tel:${game.phone}`} className="flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-medium">
                  <span className="material-symbols-outlined text-base">call</span>
                  {game.phone}
                </a>
                <a href={`mailto:${game.email}`} className="flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm">
                  <span className="material-symbols-outlined text-base">mail</span>
                  {game.email}
                </a>
              </div>
            </div>
            <div className="info-card p-6 flex flex-col items-center justify-center text-center gap-5">
              <span className="material-symbols-outlined text-primary text-5xl">app_registration</span>
              <div>
                <h3 className="text-primary text-xl font-bold mb-1">Ready to Participate?</h3>
                <p className="text-secondary text-sm">Fill out the registration form to secure your spot.</p>
              </div>
              <Button
                bg="#FFBB0E"
                textColor="black"
                borderColor="black"
                shadow="#604604"
                className="w-full"
                onClick={() =>
                  window.open(`${game.registerationForm}`, '_blank', 'noopener,noreferrer')
                }
              >
                Register via Google Form
              </Button>
            </div>
          </Card>

          {/* Info Grid */}
          <Card className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-1">
            <div className="info-card p-5 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">group</span>
              <div>
                <p className="text-secondary text-xs uppercase tracking-wider">Team Size</p>
                <p className="text-primary text-xl font-bold">{game.teamSize}</p>
              </div>
            </div>
            <div className="info-card p-5 flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary text-4xl">event</span>
              <div>
                <p className="text-secondary text-xs uppercase tracking-wider">Event Date</p>
                <p className="text-primary text-xl font-bold">{game.eventDate}</p>
              </div>
            </div>
            <div className="info-card p-5 flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary text-4xl">location_on</span>
              <div>
                <p className="text-secondary text-xs uppercase tracking-wider">Venue</p>
                <p className="text-primary text-xl font-bold">{game.venue}</p>
              </div>
            </div>
          </Card>

          {/* About + Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="info-card !p-6 space-y-3">
              <div className="text-lg font-minecraft-bold text-primary">About the Event</div>
              <p className=" text-sm leading-relaxed">{game.details}</p>
            </Card>
            <Card className="!p-6 space-y-3">
              <div className="text-lg font-minecraft-bold text-primary">Rules & Guidelines</div>
              <ul className="text-secondary text-sm space-y-2 list-none">
                {game.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Back Button */}

        </main>

        {/* Footer */}
        <footer className="border-t border-white/10   py-8 px-6 text-center text-sm">
          © 2026 Sports Week · Government Engineering College, Patan
        </footer>
      </div>
    </>
  );
}
