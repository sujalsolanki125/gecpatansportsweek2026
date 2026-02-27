import { Card, Button } from 'pixel-retroui';
import { coordinators } from '../data/coordinatorsData';

export function ContactPage() {
  return (
    <>
      <div className="bg-[url('/src/assets/bg1.png')] bg-cover bg-center bg-no-repeat relative w-full flex flex-col hero-gradient overflow-x-hidden">
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-12 md:py-16 space-y-14">
          
          {/* Page Header */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              Meet the Coordinators
            </div>
            <p className="text-secondary text-lg max-w-2xl md:max-w-none mx-auto">Have questions? Reach out directly to our sports week coordinators.</p>
          </div>

          

          {/* Main Coordinator */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">star</span> Main Coordinator
            </h2>
            <Card 
              bg="#101136a8"
              textColor="white"
              borderColor="white"
              shadowColor="black"
              className="p-16 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="shrink-0 flex flex-col items-center gap-3">
                <img src={coordinators.main.image} alt={coordinators.main.name} className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary/50 shadow-lg"/>
                <span className="bg-primary/20 border border-primary/40 text-primary text-xs font-semibold px-3 py-1 rounded-full">Main Coordinator</span>
              </div>
              <div className="flex-1 w-full space-y-5 text-center md:text-left">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">{coordinators.main.name}</h3>
                  <p className="text-secondary text-sm mt-1">{coordinators.main.title}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="pb-3 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">call</span>
                    <div>
                      <p className="text-slate-500 text-xs">Phone</p>
                      <a href={`tel:${coordinators.main.phone}`} className="text-primary font-medium hover:text-secondary transition-colors">{coordinators.main.phone}</a>
                    </div>
                  </div>
                  <div className="pb-3 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                    <div>
                      <p className="text-slate-500 text-xs">Email</p>
                      <a href={`mailto:${coordinators.main.email}`} className="text-primary font-medium hover:text-secondary transition-colors text-sm">{coordinators.main.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Student Coordinators */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">groups</span> Student Coordinators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {coordinators.students.map(coord => (
                <Card 
                  bg="#101136a8"
                  textColor="white"
                  borderColor="white"
                  shadowColor="black"
                  key={coord.id} 
                  className=" rounded-xl p-6 flex flex-col items-center text-center gap-5   hover:bg-white/5 transition-all hover:border-primary/30">
                    <div className="relative">
                      <img src="/src/assets/collegelogo.png" alt={coord.name} className="w-24 h-24 rounded-full object-cover border-4 border-primary/50 shadow-lg"/>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-primary text-xl font-bold">{coord.name}</h3>
                      <div className="flex flex-wrap justify-center gap-2 mt-2">
                        <span className="bg-secondary/20 border border-secondary/40 text-secondary text-xs px-3 py-1 rounded-full">{coord.semester}</span>
                        <span className="bg-secondary/20 border border-secondary/40 text-secondary text-xs px-3 py-1 rounded-full">{coord.branch}</span>
                      </div>
                    </div>
                    <div className="w-full space-y-2">
                      <div className="pb-2 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">call</span>
                        <a href={`tel:${coord.phone}`} className="text-primary hover:text-secondary transition-colors text-sm font-medium">{coord.phone}</a>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">sports</span>
                        <span className="text-secondary text-xs">{coord.sports}</span>
                      </div>
                    </div>
                </Card>
              ))}
            </div>
          </div>

        </main>
        <footer className="border-t border-primary/10   py-8 px-6 text-center text-primary text-sm">
          © 2026 Sports Week · Government Engineering College, Patan
        </footer>
      </div>
    </>
  );
}
