import { Card } from 'pixel-retroui';
import { coordinatorSections } from '../data/coordinatorsData';

export function ContactPage() {
  const profileImage = '/collegelogo.png';

  return (
    <>
      <div className="bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat relative w-full flex flex-col hero-gradient overflow-x-hidden">
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-12 md:py-16 space-y-14">

          {/* Page Header */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              Meet the Coordinators
            </div>
            <p className="text-secondary text-lg max-w-2xl md:max-w-none mx-auto">Have questions? Reach out directly to our sports week coordinators.</p>
          </div>



          {coordinatorSections.map((section) => (
            <div key={section.id}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">{section.icon}</span> {section.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {section.members.map((member) => (
                  <Card
                    key={`${section.id}-${member.id}`}
                    bg="#101136a8"
                    textColor="white"
                    borderColor="white"
                    shadowColor="black"
                    className="w-full max-w-[300px] mx-auto aspect-square rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3 backdrop-blur-md bg-white/10 border border-white/30"
                  >
                    <img
                      src={member.image || profileImage}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/50 shadow-lg"
                    />
                    <h3 className="text-primary text-xl font-bold leading-tight">{member.name}</h3>
                    {member.phone ? (
                      <a
                        href={`tel:${member.phone}`}
                        className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-base font-medium"
                      >
                        <span className="material-symbols-outlined text-base">call</span>
                        {member.phone}
                      </a>
                    ) : (
                      <span className="text-secondary text-sm">Web Team</span>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}

        </main>
        <footer className="border-t border-primary/10   py-8 px-6 text-center text-primary text-sm">
          © 2026 Sports Week · Government Engineering College, Patan
        </footer>
      </div>
    </>
  );
}
