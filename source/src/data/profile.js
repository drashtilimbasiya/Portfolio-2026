// All personal details come from the final resume PDF and the original certificates.

export const profile = {
  name: 'Drashti Limbasiya',
  shortName: 'Drashti',
  role: 'Android Application Developer & Web Developer',
  roles: ['Android Application Developer', 'Web Developer'],
  secondary: 'Web Development',
  location: 'Surat, Gujarat, India',
  email: 'drashtidhirubhailimbasiya@gmail.com',
  phone: '+91 97120 25741',
  // WhatsApp direct chat (number from the final resume, India +91, digits only in the URL)
  whatsappNumber: '919712025741',
  whatsappHref:
    'https://wa.me/919712025741?text=' +
    encodeURIComponent('Hello Drashti, I visited your portfolio and would like to connect with you.'),
  linkedin: 'https://www.linkedin.com/in/drashti-limbasiya-412177321',
  github: 'https://github.com/drashtilimbasiya',
  resume: 'resume/Drashti_Limbasiya_Resume.pdf',
  objective:
    'Motivated Bachelor of Computer Applications (BCA) student focused on Android application development and web development. Hands-on project experience building Android applications with Kotlin, XML and Firebase, along with web-based systems using PHP, MySQL, HTML, CSS and JavaScript. Seeking an entry-level opportunity to apply practical development skills, contribute to real-world software projects and continue learning modern technologies.',
}

export const heroTags = ['Kotlin', 'XML', 'Firebase', 'PHP', 'MySQL']

export const education = [
  {
    period: '2024 – 2027',
    title: 'Bachelor of Computer Applications (BCA)',
    place: 'Veer Narmad South Gujarat University (VNSGU)',
    status: 'Pursuing',
    details: [
      { label: 'Semester 1', value: '8.91 CGPA' },
      { label: 'Semester 2', value: '9.18 CGPA' },
      { label: 'Semester 3', value: '9.27 CGPA' },
      { label: 'Semester 4', value: '9.55 CGPA' },
    ],
  },
  {
    period: '2024',
    title: 'Higher Secondary Certificate (HSC)',
    place: 'Gujarat Secondary and Higher Secondary Education Board',
    details: [{ label: 'Result', value: '91.14%' }],
  },
  {
    period: '2022',
    title: 'Secondary School Certificate (SSC)',
    place: 'Gujarat Secondary and Higher Secondary Education Board',
    details: [{ label: 'Result', value: '83.17%' }],
  },
]

export const internship = {
  company: 'CareerSahi EdTech Private Limited',
  title: 'Full Stack Development Intern',
  period: '01 May 2026 – 30 May 2026',
  duration: '120 hours',
  grade: 'A+',
  credentialId: 'CS-INT2026-00602',
  quote: 'The intern completed all tasks with dedication, discipline, and good technical understanding.',
  certificate: 'certificates/previews/internship-careersahi.jpg',
  original: 'certificates/originals/internship-careersahi.png',
}

export const skillGroups = [
  {
    title: 'Android Development',
    icon: 'android',
    items: ['Kotlin', 'XML', 'Android Studio', 'Firebase Authentication', 'Cloud Firestore'],
  },
  {
    title: 'Programming Languages',
    icon: 'code',
    items: ['C', 'C++', 'Java', 'Python'],
  },
  {
    title: 'Web Technologies',
    icon: 'globe',
    items: ['PHP', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Databases',
    icon: 'database',
    items: ['Firebase', 'MySQL', 'MongoDB', 'SQL Server'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'tool',
    items: ['Android Studio', 'XAMPP Server', 'GitHub'],
  },
]

export const competencies = [
  'Android application development and mobile UI implementation',
  'Web application development and database fundamentals',
  'Logical thinking, debugging and problem-solving',
  'Understanding application workflows and user requirements',
  'Self-learning, adaptability and willingness to learn new technologies',
]

export const knowledge = [
  {
    label: 'Android',
    text: 'Building native Android application screens using Kotlin and XML, connecting apps to Firebase services, and implementing common app workflows.',
  },
  {
    label: 'Firebase',
    text: 'Firebase Authentication and Cloud Firestore for user authentication and cloud data management.',
  },
  {
    label: 'Web',
    text: 'PHP-based web application development, MySQL database connectivity and front-end technologies.',
  },
  {
    label: 'Workflow',
    text: 'Working with project requirements, UI implementation, testing, debugging and documentation.',
  },
]

export const aboutFacts = [
  { label: 'Career roles', value: 'Android Application Developer & Web Developer' },
  { label: 'Core stack', value: 'Kotlin · Firebase · PHP · MySQL' },
  { label: 'Studying', value: 'BCA · VNSGU (2024–2027)' },
  { label: 'Based in', value: 'Surat, Gujarat' },
]

export const interests = [
  'Android Application Development',
  'Web Development',
  'Mobile Application Development',
  'Firebase-Based Applications',
  'UI Implementation',
]
