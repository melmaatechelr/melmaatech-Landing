export const COMPANY_INFO = {
  name: 'Melmaa Tech',
  email: 'support@melmaa.com',
  phone: '+91 7997280049',
  address: {
    street: '3D-5-1/6, Western Street, Near LBC School',
    city: 'Eluru',
    state: 'West Godavari',
    country: 'Andhra Pradesh, 534001, India'
  },
  social: {
    website: 'https://melmaa.tech',
    training: 'https://shift.melmaa.tech/'
  }
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'training', label: 'Training' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' }
];

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};