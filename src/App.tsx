import { ChevronRight, Book, Users, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';
import Logofsf from "./Logofsf.jpeg";


interface Module {
  code: string;
  name: string;
  details?: string[];
}

interface Semester {
  S1: Module[];
  S2: Module[];
}

interface Semesters {
  AP1: Semester;
  AP2: Semester;
}

function App() {
  const semesters: Semesters = {
    AP1: {
      S1: [
        {
          code: 'M111',
          name: 'Analyse 1',
          details: [],
          link: "https://drive.google.com/drive/folders/1abc123"
        },
        {
          code: 'M112',
          name: 'Algèbre 1',
          details: []
        },
        {
          code: 'M113',
          name: 'Physique 1',
          details: ['Électrostatique', 'Magnétostatique']
        },
        {
          code: 'M114',
          name: 'Mécanique 1',
          details: ['Mécanique du point matériel']
        },
        {
          code: 'M115',
          name: 'Informatique 1',
          details: ['Algorithmique et programmation']
        },
        {
          code: 'M116',
          name: 'Méthodologie de travail universitaire',
          details: []
        },
        {
          code: 'M117',
          name: 'Langues Étrangères 1',
          details: ['Langue Anglaise', 'Langue Française']
        }
      ],
      S2: [
        {
          code: 'M121',
          name: 'Analyse 2',
          details: []
        },
        {
          code: 'M122',
          name: 'Algèbre 2',
          details: []
        },
        {
          code: 'M123',
          name: 'Physique 2',
          details: ['Électrocinétique 1', 'Électrocinétique 2']
        },
        {
          code: 'M124',
          name: 'Informatique 2',
          details: ['Bases de données', 'Programmation web']
        },
        {
          code: 'M125',
          name: 'Chimie Générale',
          details: ['Cinétique chimique et thermochimie', 'Structure de la matière']
        },
        {
          code: 'M126',
          name: 'Culture digitale',
          details: []
        },
        {
          code: 'M127',
          name: 'Langues Étrangères 2',
          details: ['Langue Anglaise', 'Langue Française']
        }
      ]
    },
    AP2: {
      S3: [
        {
          code: 'M231',
          name: 'Analyse 3',
          details: []
        },
        {
          code: 'M232',
          name: 'Algèbre 3',
          details: []
        },
        {
          code: 'M233',
          name: 'Électronique Analogique',
          details: []
        },
        {
          code: 'M234',
          name: 'Mécanique 2',
          details: ['Mécanique du Solide']
        },
        {
          code: 'M235',
          name: 'Électronique Numérique et Architecture',
          details: ['Électronique Numérique de base', 'Structure interne des ordinateurs']
        },
        {
          code: 'M236',
          name: 'Culture and art skills',
          details: []
        },
        {
          code: 'M237',
          name: 'Langues Étrangères 3',
          details: ['Langue Anglaise', 'Langue Française']
        }
      ],
      S4: [
        {
          code: 'M241',
          name: 'Analyse 4',
          details: ['Probabilité et Analyse numérique']
        },
        {
          code: 'M242',
          name: 'Probabilités',
          details: ['Probabilités', 'Analyse Numérique']
        },
        {
          code: 'M243',
          name: 'Physique 3',
          details: ['Optique', 'Électromagnétisme et ondes']
        },
        {
          code: 'M244',
          name: 'Thermodynamique et Statique des Fluides',
          details: ['Thermodynamique', 'Statique des Fluides']
        },
        {
          code: 'M245',
          name: 'Sciences et techniques de l\'Ingénieur',
          details: ['Dessin Technique', 'Projet intégrateur']
        },
        {
          code: 'M246',
          name: 'Développement personnel',
          details: []
        },
        {
          code: 'M247',
          name: 'Langues Étrangères 4',
          details: ['Langue Anglaise', 'Langue Française']
        }
      ]
    }
  };

  const getModuleBackground = (code: string) => {
    const backgrounds = {
      // Mathématiques
      'M111': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80',
      'M112': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
      'M121': 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80',
      'M122': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
      
      // Physique
      'M113': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      'M123': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80',
      
      // Mécanique
      'M114': 'https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?auto=format&fit=crop&q=80',
      'M234': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      
      // Informatique
      'M115': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
      'M124': 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80',
      
      // Chimie
      'M125': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80',
      
      // Électronique
      'M233': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80',
      'M235': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
      
      // Analyse
      'M231': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
      'M241': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80',
      
      // Probabilités
      'M242': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80',
      
      // Physique avancée
      'M243': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      
      // Thermodynamique
      'M244': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      
      // Sciences de l'ingénieur
      'M245': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
      
      // Culture et langues
      'M116': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80',
      'M126': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
      'M236': 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80',
      'M246': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80',
      
      // Langues étrangères
      'M117': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80',
      'M127': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80',
      'M237': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80',
      'M247': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80',
    };
    
    return backgrounds[code as keyof typeof backgrounds] || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80';
  };

  const renderModule = (module: Module) => (
    <div
      key={module.code}
      className="module-card glass-effect rounded-xl p-6 card-hover blue-glow"
      style={{
        backgroundImage: `url(${getModuleBackground(module.code)})`,
      }}
    >
      <h4 className="text-xl font-bold mb-2 text-white">{module.code} - {module.name}</h4>
      {module.details && module.details.length > 0 && (
        <ul className="text-blue-100 space-y-1 mt-3">
          {module.details.map((detail: string) => (
            <li key={detail} className="flex items-center">
              <ChevronRight className="h-4 w-4 mr-2" />
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const totalCourses = Object.values(semesters).reduce((total, year) => {
    return total + Object.values(year).reduce((semTotal, sem) => semTotal + sem.length, 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <header className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
            <img src={Logofsf} className="h-8 w-8 text-blue-400" alt="Logo" />;
              <h1 className="text-2xl font-bold">FSF ENSA Agadir</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#ap1" className="text-gray-300 hover:text-white transition">AP1</a>
              <a href="#ap2" className="text-gray-300 hover:text-white transition">AP2</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-black/20 backdrop-blur-sm py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stats-card">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <Book className="h-12 w-12 text-blue-400" />
                <div>
                  <h3 className="stats-number">{totalCourses}</h3>
                  <p className="text-lg text-gray-300 mt-2">Modules Total</p>
                </div>
              </div>
            </div>
            <div className="stats-card">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <Users className="h-12 w-12 text-blue-400" />
                <div>
                  <h3 className="stats-number">500+</h3>
                  <p className="text-lg text-gray-300 mt-2">Étudiants Actifs</p>
                </div>
              </div>
            </div>
            <div className="stats-card">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <GraduationCap className="h-12 w-12 text-blue-400" />
                <div>
                  <h3 className="stats-number">4</h3>
                  <p className="text-lg text-gray-300 mt-2">Semestres</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-16 title-glow">
            FSF - Formation Sans Frontières
          </h1>

          <div className="space-y-24">
            <div id="ap1">
              <h2 className="year-title">Première Année (AP1)</h2>
              
              <div className="mb-16">
                <h3 className="text-2xl font-medium mb-8 text-center text-blue-300">Semestre 1</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {semesters.AP1.S1.map(renderModule)}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-8 text-center text-blue-300">Semestre 2</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {semesters.AP1.S2.map(renderModule)}
                </div>
              </div>
            </div>

            <div id="ap2">
              <h2 className="year-title">Deuxième Année (AP2)</h2>
              
              <div className="mb-16">
                <h3 className="text-2xl font-medium mb-8 text-center text-blue-300">Semestre 3</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {semesters.AP2.S3.map(renderModule)}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-8 text-center text-blue-300">Semestre 4</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {semesters.AP2.S4.map(renderModule)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer id="contact" className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">À propos de FSF</h3>
              <p className="text-gray-400">
                FSF Club des étudiants à l'ENSA d'Agadir.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:contact@ensa-agadir.ac.ma" className="flex items-center text-gray-400 hover:text-white transition">
                  <Mail className="h-5 w-5 mr-2" />
                  contact@ensa-agadir.ac.ma
                </a>
                <p className="text-gray-400">BP 1136, Agadir, Maroc</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FSF ENSA Agadir. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
