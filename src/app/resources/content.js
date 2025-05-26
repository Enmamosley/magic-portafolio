import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Enmanoell",
  lastName: "Mosley",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Diseñador Web",
  avatar: "/images/avatar.webp",
  email: "enmanoell@mosley.mx",
  location: "America/Monterrey", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "Ingles"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Suscribete a mi Newsletter</>,
  description: (
    <>
     Ocasionalmente escribo sobre diseño y tecnología, y comparto reflexiones acerca de la intersección entre la creatividad y la ingeniería.
     </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Enmamosley/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "http://www.linkedin.com/in/enmamosley",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `${person.name}'s Portafolio`,
  description: `Portafolio web que muestra mi trabajo como ${person.role}`,
  headline: <>Construyendo puentes entre el diseño y el código</>,
  featured: {
    display: true,
    title: <>Protecto reciente: <strong className="ml-4">Odoo 18 ERP</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Soy Enmanoell, diseñador web y administrador de sistemas en Sociedad Securitas.
      <br /> Después del trabajo, desarrollo mis propios proyectos.
    </>
  ),
};

const about = {
  path: "/about",
  label: "  Sobre mí",
  title: ` Sobre – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Mezclando las mejores tacticas del mercados y 7 años de experiencia como 
        independiente, puedo ofrecer una soluciones altamente especializadas para 
        casi cualquier proyecto.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia",
    experiences: [
      {
        company: "Sociedad Securitas",
        timeframe: "2020 - Presente",
        role: "Diseñador Web y Administrador e implemntador de Sistemas",
        achievements: [
          <>
            Me he encargado de diseñar, desarrollar e implentar sitios web para clientes, incluyendo la
            implementación de Odoo ERP desde 0.
          </>,
          <>
            Durante mi tiempo en la empresa, he trabajado en más de 30 proyectos de principio a fin. He gestionado servidores
            y he implementado soluciones de software personalizadas para satisfacer las necesidades de los clientes,
            lo que ha resultado en una mejora significativa en la eficiencia y la productividad.
          </>,
          <>
            He gestionado servidores tanto en entornos Windows como Linux, asegurando la seguridad y el rendimiento óptimo de
            las aplicaciones. He trabajado con bases de datos SQL y NoSQL, optimizando consultas y mejorando el rendimiento. 
            He realizando migraciones masivas de datos para asegurar la continuidad operativa y la integridad de la información.
          </>      
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          
        ]
,
      },
      {
        company: "InMedia",
        timeframe: "2016 - 2019",
        role: "Diseñador Grafico",
        achievements: [
          <>
            He trabajado en proyectos que abarcan desde la creación de contenido visual para redes sociales hasta la producción de
            videos promocionales y documentales. Mi enfoque se centra en contar historias que emocionan y conectan con la audiencia.
            
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Estudios",
    institutions: [
      {
        name: "Univeridad Autónoma de Nuevo León",
        timeframe: "2019 - 2024",
        description: <>Lic. En Multimedia y Animación Digital.</>,
      },
      {
        name: "Univeridad Autónoma de Nuevo León",
        timeframe: "2019 - 2023",
        description: <>Lic. En Multimedia y Animación Digital.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades técnicas",
    skills: [
            {
        title: "Wordpress",
        description: <>Experto en la creación de cualquier tipo de sitio web en Wordpress, desde blogs hasta tiendas en linea, asi como la creación y modificación de Plugins</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
{
  title: "Python",
  description: <>Soy capaz de crear scripts y aplicaciones en Python, incluyendo la creación de módulos para Odoo ERP.</>,
  // optional: leave the array empty if you don't want to display images
  images: [],
},
{
        title: "Odoo ERP",
        description: <>Experto en la implementación y personalización de Odoo, y la migración de datos.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
                    {
            src: "/images/projects/project-01/I.webp",
            alt: "Implementación",
            width: 12,
            height: 15,
          },
          {
            src: "/images/projects/project-01/F.webp",
            alt: "Funcional",
            width: 12,
            height: 15,
          },
          {
            src: "/images/projects/project-01/TF.webp",
            alt: "Tecnico Funcional",
            width: 12,
            height: 15,
          },

        ],
      },
      {
        title: "Figma",
        description: <>Soy capaz de crear prototipos en Figma sin problema alguno. Como diseñador web Figma es una parte esencial en mi trabajo diario.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/tedx.webp",
            alt: "Tedx Jardines de Pereda",
            width: 19,
            height: 9,
          },
          {
            src: "/images/projects/project-01/tedx2.webp",
            alt: "Tedx Jardines de Pereda",
            width: 19,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Puedo llevar cualquier diseño a next.js, usando herramientas de ultima generación para sitios y apps veloces.
</>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
        
      },
            {
        title: "Adobe Suite",
        description: <>Durante mi epoca como diseñador grafico aprendi a usar las principales herramientas de adobe suite, tales como Photoshop, Illustrator, Premier y After Effects.
</>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Escribiendo sobre diseño y tecnología...",
  description: `Lee ahora lo que he estado publicando`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Diseñado y desarrollado por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
