import { Link } from 'react-router-dom';
import { allGames } from '../data/gamesData';
import { useNavigate } from 'react-router-dom';
import { Button } from 'pixel-retroui';


export function GamePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[url('/src/assets/bg1.png')] bg-cover bg-center bg-no-repeat relative w-full flex flex-col hero-gradient overflow-x-hidden">

        <main className="p-20 flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 pb-12 md:pb-16">
          {/* Sports Events Grid */}
          <section>
            <div className="text-center mb-12">
              <div className="text-3xl md:text-4xl font-minecraft-bold mb-4">Available Sports</div>
              <p className="text-secondary text-lg">Choose your sport and join the competition</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
              {allGames.map((game) => (
                <article key={game.id} className="game-card rounded-lg group bg-[#10131A] overflow-clip">
                  <div className="relative overflow-hidden">
                    <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-1 ml-2">
                      <img src="src/assets/players.svg" alt="Players" className="w-6 h-6 inline mr-2" />
                      {game.teamSize}
                    </div>
                    <Button 
                      bg="#FFBB0E"
                      shadow='#604604'
                      onClick={() => navigate(`/game/${game.id}`)}
                      className="text-xs">
                        Register Now
                    </Button>
                  </div>
                 
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-primary/10   py-8 px-6 text-center text-primary text-sm">
          © 2026 Sports Week · Government Engineering College, Patan
        </footer>
      </div>
    </>
  );
}
