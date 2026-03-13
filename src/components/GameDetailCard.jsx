import { useState } from 'react';
import { Button, Card } from 'pixel-retroui';


export function GameDetailCard({ game }) {
  const [copiedPhone, setCopiedPhone] = useState('');
  const coordinators = game.studentCoordinators?.length
    ? game.studentCoordinators
    : [{ name: game.coordinator, phone: game.phone, email: game.email }];
  const firstCoordinator = coordinators[0];
  const remainingCoordinators = coordinators.slice(1);

  const handleCopyPhone = async (phone) => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(phone);
      setTimeout(() => setCopiedPhone(''), 1200);
    } catch {
      setCopiedPhone('');
    }
  };

  return (
    <>
      {/* ── Fixed background: pinned to viewport, scrolls behind content ── */}
      <div
        style={{ backgroundImage: `url(${game.bgImage})` }}
        className="fixed inset-0 -z-10 bg-cover bg-bottom md:bg-center bg-no-repeat"
      />
      {/* ── Fixed dark overlay for readability ── */}
      {/* <div className="fixed inset-0 -z-10 bg-black/60" /> */}

      {/* ── Scrollable page content ── */}
      <div className="relative w-full flex flex-col overflow-x-hidden">
        <main className="flex flex-col flex-1 max-w-5xl mx-auto w-full px-4 md:px-8 py-12 md:py-16 md:space-y-10 gap-7">

          {/* Back Button */}
          {/* <div className="absolute top-6 left-1/6 transform -translate-x-1/2">
            <Button
              onClick={() => navigate('/game')}
              className="hidden! !md:flex items-center gap-2 px-2 py-1"
            >
              <span className="material-symbols-outlined md:text-lg">arrow_back</span>
              Back to Games
            </Button>
          </div> */}

          {/* Header */}
          <div className="text-center md:mt-12 flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-minecraft-bold mb-4">{game.title}</div>
            <p className="text-secondary md:text-lg md:max-w-2/3">{game.about}</p>
          </div>


          {/* Coordinator + Register */}
          <Card className="grid grid-cols-1 md:grid-cols-2 md:gap-0 overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <p className="text-secondary text-xs uppercase tracking-wider mb-4 text-center md:text-left">Student Coordinators</p>
              <div className="space-y-3">
                {firstCoordinator && (
                  <div className="flex flex-col gap-1 text-center md:text-left">
                    <h3 className="text-primary text-lg font-bold leading-none">{firstCoordinator.name}</h3>
                    <div className="flex items-center gap-2 md:justify-start justify-center flex-wrap">
                      <a href={`tel:${firstCoordinator.phone}`} className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-medium">
                        <span className="material-symbols-outlined text-base">call</span>
                        {firstCoordinator.phone}
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopyPhone(firstCoordinator.phone)}
                        className="text-xs px-2 py-1 border-2 border-black bg-primary text-black hover:brightness-95 transition"
                      >
                        {copiedPhone === firstCoordinator.phone ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                )}

                {remainingCoordinators.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {remainingCoordinators.map((person, idx) => (
                    <div key={`${person.name}-${idx}`} className="flex flex-col gap-1 text-center md:text-left">
                      <h3 className="text-primary text-lg font-bold leading-none">{person.name}</h3>
                      <div className="flex items-center gap-2 md:justify-start justify-center flex-wrap">
                        <a href={`tel:${person.phone}`} className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-medium">
                          <span className="material-symbols-outlined text-base">call</span>
                          {person.phone}
                        </a>
                        <button
                          type="button"
                          onClick={() => handleCopyPhone(person.phone)}
                          className="text-xs px-2 py-1 border-2 border-black bg-primary text-black hover:brightness-95 transition"
                        >
                          {copiedPhone === person.phone ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  ))}
                  </div>
                )}
              </div>
            </div>
            <div className="info-card p-6 md:p-8 flex flex-col items-center justify-center text-center gap-5 border-t md:border-t-0 md:border-l border-primary/20">
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
          <Card className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-1">
            <div className="info-card p-5 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">group</span>
              <div>
                <p className="text-secondary text-xs uppercase tracking-wider">Team Size</p>
                <p className="text-primary text-xl font-bold">{game.teamSize}</p>
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

        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 px-6 text-center text-sm">
          © 2026 Sports Week · Government Engineering College, Patan
        </footer>
      </div>
    </>
  );
}
