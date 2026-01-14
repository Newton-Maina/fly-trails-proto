import { TourItem } from '../types';

export const tours: TourItem[] = [
  { 
    id: '1', 
    title: "Great Migration", 
    price: "$3,400", 
    duration: "7 Days", 
    category: "Kenya", 
    imageUrl: "/great-migration.jpg", 
    size: 'md:col-span-2',
    excerpt: "Witness millions of wildebeest crossing the Mara River in the world's greatest wildlife spectacle."
  },
  { 
    id: '2', 
    title: "Pyramids of Giza", 
    price: "$2,100", 
    duration: "5 Days", 
    category: "Egypt", 
    imageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2070&auto=format&fit=crop", 
    size: 'col-span-1',
    excerpt: "Stand before the Sphinx and explore ancient tombs in the land of the Pharaohs."
  },
  { 
    id: '3', 
    title: "Victoria Falls", 
    price: "$1,800", 
    duration: "4 Days", 
    category: "Zambia", 
    imageUrl: "/victoria-falls.jpg", 
    size: 'col-span-1',
    excerpt: "Feel the spray of 'The Smoke that Thunders' on a thrilling adventure tour."
  },
  { 
    id: '4', 
    title: "Diani Beach Retreat", 
    price: "$1,200", 
    duration: "5 Days", 
    category: "Kenya", 
    imageUrl: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=2066&auto=format&fit=crop", 
    size: 'col-span-1',
    excerpt: "Relax on pristine white sands and swim in the turquoise waters of the Indian Ocean."
  },
  { 
    id: '5', 
    title: "Kilimanjaro Trek", 
    price: "$2,900", 
    duration: "8 Days", 
    category: "Tanzania", 
    imageUrl: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=2070&auto=format&fit=crop", 
    size: 'md:col-span-2',
    excerpt: "Conquer the 'Roof of Africa' on the Machame Route for breathtaking summit views."
  },
  { 
    id: '6', 
    title: "Okavango Delta", 
    price: "$3,800", 
    duration: "6 Days", 
    category: "Botswana", 
    imageUrl: "/okavango-delta.jpg", 
    size: 'col-span-1',
    excerpt: "Navigate the waterways in a mokoro and see wildlife in a lush oasis."
  }
];