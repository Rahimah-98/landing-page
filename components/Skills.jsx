const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Git',
  'SEO',
  'Responsive Design',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'TypeScript',
  'GraphQL',
  'RESTful APIs',
  'Webpack',
  'Figma',
  'Agile Methodologies',
  'Testing & Debugging',
];

export default function Skills() {
  return (
    <div>
      <h3 className='font-semibold text-xl mb-10'>My Skills</h3>

      <div className='flex flex-wrap gap-3'>
        {skills.map((skill) => (
          <span
            key={skill}
            className='bg-gray-100 px-4 py-2 rounded text-sm font-medium'>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
