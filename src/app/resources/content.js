import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Enmanoell",
  lastName: "Mosley",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desarrollador Web & Administrador Digital",
  avatar: "/images/avatar.webp",
  email: "enmanoell@mosley.mx",
  location: "America/Monterrey", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "Inglés"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Suscríbete a mi Newsletter</>,
  description: (
    <>
     Escribo sobre desarrollo web, automatización y transformación digital. Comparto lo que aprendo construyendo soluciones reales para empresas.
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
  title: `${person.name} — Portafolio`,
  description: `Portafolio de ${person.name}: desarrollo web, implementación de sistemas y administración digital.`,
  headline: <>Diseño que inspira, código que funciona.</>,
  featured: {
    display: true,
    title: <>Conoce <strong className="ml-4">Mosley Digital Services</strong></>,
    href: "https://mosley.mx",
  },
  subline: (
    <>
      Soy Enmanoell Mosley. Desarrollo sitios web, implemento sistemas ERP y<br/>
      lidero <strong>Mosley Digital Services</strong>, mi firma de soluciones digitales.
    </>
  ),
};

const about = {
  path: "/sobre-mi",
  label: "Sobre mí",
  title: `Sobre – ${person.name}`,
  description: `${person.name}: desarrollador web, implementador de sistemas y fundador de Mosley Digital Services.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://clientes.mosley.mx/book/5f91566e",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>Con más de 7 años de experiencia en desarrollo web, diseño e implementación de sistemas,
        he trabajado con empresas de distintos sectores creando soluciones digitales que funcionan.
        En 2023 fundé <strong>Mosley Digital Services</strong>, donde canalizo todo lo que he aprendido
        para ayudar a negocios a crecer con tecnología.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia",
    experiences: [
      {
        company: "Mosley Digital Services",
        timeframe: "2023 - Presente",
        role: "Fundador & Director Digital",
        achievements: [
          <>Fundé mi propia firma digital enfocada en desarrollo web, automatización de procesos e implementación de sistemas para empresas de distintos sectores.</>,
          <>Desarrollo soluciones con tecnologías modernas como Next.js, Astro y Strapi, optimizando rendimiento, escalabilidad y experiencia de usuario. También he creado herramientas internas y extensiones de navegador para flujos de trabajo específicos.</>,
          <>Implemento y personalizo Odoo ERP para empresas medianas y grandes, diseñando flujos de negocio completos con automatizaciones, migraciones masivas, integraciones externas y ajustes contables y logísticos multiempresa.</>,
          <>Combino habilidades técnicas y de diseño para entregar experiencias digitales completas, desde el diseño en Figma hasta la implementación backend, priorizando eficiencia, escalabilidad y mantenimiento a largo plazo.</>,
          <>Desarrollo sitios web con WordPress para clientes que necesitan alto nivel de personalización sin tocar código, y con Next.js/Astro para proyectos que demandan máximo rendimiento.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          
        ]
,
      },
      {
        company: "Sociedad Securitas",
        timeframe: "2020 - Presente",
        role: "Diseñador Web & Implementador de Sistemas",
        achievements: [
          <>Diseñé, desarrollé e implementé sitios web a medida para clientes de distintos sectores, incluyendo la implementación completa de sistemas ERP con Odoo desde cero.</>,
          <>He liderado más de 30 proyectos de principio a fin, gestionando desde la planificación hasta la entrega. Implementé soluciones de software que mejoraron la eficiencia operativa de los equipos.</>,
          <>Administro servidores en entornos Windows y Linux, trabajo con bases de datos SQL y NoSQL, y he realizado migraciones masivas de datos sin comprometer la integridad de la información.</>,
          <>Mi enfoque ha sido siempre entregar soluciones escalables y adaptadas a necesidades reales, integrando diseño y desarrollo para experiencias digitales sólidas.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          
        ]
,
      },
      {
        company: "InMedia",
        timeframe: "2016 - 2019",
        role: "Diseñador Gráfico",
        achievements: [
          <>Creé contenido visual para redes sociales, videos promocionales y documentales. Aquí descubrí mi pasión por conectar diseño con tecnología, lo que me llevó al desarrollo web.</>,
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
        title: "WordPress",
        description: <>Experto en la creación de sitios web con WordPress, desde blogs hasta tiendas en línea, incluyendo desarrollo y modificación de plugins.</>,  
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
{
  title: "Python",
  description: <>Desarrollo scripts, automatizaciones y módulos personalizados para Odoo ERP con Python.</>,  
  // optional: leave the array empty if you don't want to display images
  images: [],
},
{
        title: "Odoo ERP",
        description: <>Implementación, personalización y migración de datos en Odoo. Diseño flujos de negocio completos con automatizaciones e integraciones.</>,  
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
        description: <>Diseño prototipos e interfaces en Figma como parte esencial de mi flujo de trabajo, del concepto al código.</>,  
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
        title: "Next.js & Astro",
        description: <>Llevo diseños a producción con frameworks modernos como Next.js y Astro, priorizando rendimiento y experiencia de usuario.</>,  
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
        
      },
            {
        title: "Adobe Suite",
        description: <>Manejo Photoshop, Illustrator, Premiere y After Effects desde mi etapa como diseñador gráfico, habilidades que sigo aplicando en cada proyecto.</>,  
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
  title: "Blog — Enmanoell Mosley",
  description: `Artículos sobre desarrollo web, automatización y tecnología.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/proyectos",
  label: "Proyectos",
  title: `Proyectos — ${person.name}`,
  description: `Proyectos diseñados y desarrollados por ${person.name}.`,
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
