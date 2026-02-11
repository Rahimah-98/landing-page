import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'wild aosis',
    desc: 'lorem ipsum dolor sit amet consectetur.',
    image: '/projects/1.png',
  },
  {
    title: 'Ecummerce',
    desc: 'lorem ipsum dolor sit amet consectetur.',
    image: '/projects/2.png',
  },
];

export default function Projects() {
  return (
    <section className='bg-gray-50 py-28 px-6' id='projects'>
      <h2 className='text-center text-3xl font-bold mb-20 text-gray-600'>
        PROJECTS
      </h2>

      <div className='max-w-6xl mx-auto space-y-28'>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
