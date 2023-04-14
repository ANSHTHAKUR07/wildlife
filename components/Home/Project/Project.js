import styles from './Project.module.css';

const Project = () => {
  const content = [
    {
      title: 'Camera Trap Monitoring',
      desc: 'essential tool for studying wildlife populations and behavior in their natural habitat. By capturing images and videos of animals in the wild, researchers can gather data on their movements, interactions, and overall health',
    },
    {
      title: 'Forest Rejuventation',
      desc: ' is the process of restoring degraded or damaged forests to their original state. It involves activities such as planting trees, controlling invasive species, and implementing sustainable management practices. Forest rejuvenation is crucial for maintaining healthy ecosystems, combating climate change, and preserving biodiversity.',
    },
    {
      title: ' Kelp Forest Replanting',
      desc: 'Kelp forests are an essential habitat for a variety of marine species, including sea otters, sea urchins, and abalone. However, due to human activities and climate change, many kelp forests have been destroyed or damaged. To help restore these important ecosystems, kelp forest replanting efforts are being undertaken around the world. These efforts involve planting young kelp individuals in damaged or degraded areas to promote the regrowth of kelp forests.',
    },
  ];
  return (
    <section className={styles.container}>
      <h2>Project We Worked On Now</h2>
      <div className={styles.contentContainer}>
        {content.map((item, index) => {
          const { title, desc } = item;
          return (
            <article key={index} className={styles.content}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Project;
