// Services are described from the projects and skills in the resume - no pricing, clients or freelance claims.

export const services = [
  {
    id: 'android',
    icon: 'android',
    title: 'Android Application Development',
    text: 'Native Android applications built with Kotlin and XML, using Firebase Authentication and Cloud Firestore for sign-in and cloud data.',
    points: [
      'Kotlin + XML screens and mobile UI implementation',
      'Firebase Authentication and Cloud Firestore integration',
      'Separate user and admin applications (ElectroHub)',
      'Business workflows with PDF bills and payment tracking (Patel Auto Garage)',
    ],
    tech: ['Kotlin', 'XML', 'Android Studio', 'Firebase', 'Glide', 'Cloudinary'],
    projects: [
      { label: 'ElectroHub', href: '#electrohub' },
      { label: 'Patel Auto Garage', href: '#garage' },
    ],
  },
  {
    id: 'web',
    icon: 'globe',
    title: 'Web Development',
    text: 'Database-driven web applications built with PHP and MySQL, with front-ends in HTML, CSS and JavaScript.',
    points: [
      'PHP and MySQL web applications with role-based panels',
      'Responsive front-ends using HTML, CSS and JavaScript',
      'Booking, slot management and receipt workflows',
      'Local development and testing with XAMPP (Smart Parking Management System)',
    ],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'XAMPP'],
    projects: [{ label: 'Smart Parking Management System', href: '#parking' }],
  },
]
