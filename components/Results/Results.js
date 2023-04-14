import styles from './Results.module.css';
import img1 from '../../public/images/digging.jpg';
import img2 from '../../public/images/landing2.jpg';
import Image from 'next/image';

const Results = () => {
  const content = [
    {
      title: 'Our Effort',
      desc: 'Our organization is committed to the restoration of degraded and deforested areas, and we have been working tirelessly towards this goal. Our efforts include planting native tree species, conducting forest inventory assessments, removing invasive species, and implementing sustainable land use practices. We work closely with local communities to ensure their participation and support in these restoration efforts, as well as to provide training and education on sustainable forest management practices. Through our dedication and hard work, we aim to restore biodiversity and ecosystem services, enhance carbon sequestration, and improve the livelihoods of local communities who depend on healthy forest ecosystems. We are proud of the progress we have made and remain committed to continuing our efforts towards the restoration of degraded forest ecosystems.',
      img: img1,
    },
    {
      title: 'The Result',
      desc: 'Forest restoration has helped and  aimmed to bring back degraded forest areas to their original condition, and to improve the overall health and biodiversity of the forest ecosystem. When successful, these efforts can have a wide range of benefits, including the provision of habitat for wildlife, the protection of watersheds, and the sequestration of carbon.',
      img: img2,
    },
  ];
  return (
    <div className={styles.container}>
      {content.map((item, index) => {
        const { title, desc, img } = item;
        return (
          <div className={styles.item} key={index}>
            <div className={styles.info}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
            <div className={styles.image}>
              <Image src={img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Results;
