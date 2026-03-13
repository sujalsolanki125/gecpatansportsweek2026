import krishImg from '../assets/Krish.jpeg';
import priyankImg from '../assets/Priyank.jpeg';
import kamleshImg from '../assets/Kamlesh.jpeg';
import sujalImg from '../assets/sujal.jpeg';
import rishuImg from '../assets/Rishu.jpeg';
import aryanImg from '../assets/Aryan.jpeg';
import dhruvilImg from '../assets/Dhruvil.jpeg';

export const coordinatorSections = [
  {
    id: 'main-coordinator',
    title: 'Main Coordinator',
    icon: 'star',
    members: [
      { id: 1, name: 'Singh Rishu (VI CSE)', phone: '6354929746', image: rishuImg },
      { id: 2, name: 'Singh Aryan (VI CSE)', phone: '9313979224', image: aryanImg },
      { id: 3, name: 'Kavad Dhruvil (VI CSE)', phone: '7405750247', image: dhruvilImg }
    ]
  },
  {
    id: 'registration-certification',
    title: 'Registration & Certification',
    icon: 'assignment_turned_in',
    members: [
      { id: 1, name: 'Patil Krish Bhavik (VI CSE)', phone: '9998628467', image: krishImg },
      { id: 2, name: 'Bharadra Priyank (VI CSE)', phone: '9328702326', image: priyankImg }
    ]
  },
  {
    id: 'web-team',
    title: 'Web Team',
    icon: 'code',
    members: [
      { id: 1, name: 'Kamlesh Suthar (VI CSE)', image: kamleshImg },
      { id: 2, name: 'Sujalkumar Solanki (VI CSE)', image: sujalImg }
    ]
  }
];