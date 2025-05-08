const Projects = () => {
  return (
    <section id="projects" className="grid grid-cols-2 lg:grid-cols-4">
      <h2 className="sr-only">Projects</h2>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/desktop/image-gallery-milkbottles.jpg"
        />
        <img src="/mobile/image-gallery-milkbottles.jpg" alt="Milk Bottles" />
      </picture>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/desktop/image-gallery-orange.jpg"
        />
        <img src="/mobile/image-gallery-orange.jpg" alt="Orange" />
      </picture>

      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/desktop/image-gallery-cone.jpg"
        />
        <img src="/mobile/image-gallery-cone.jpg" alt="Ice-cream cone" />
      </picture>

      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/desktop/image-gallery-sugarcubes.jpg"
        />
        <img src="/mobile/image-gallery-sugar-cubes.jpg" alt="Sugar cubes" />
      </picture>
    </section>
  );
}

export default Projects;
