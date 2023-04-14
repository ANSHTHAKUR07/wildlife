import styles from './ProjectStatus.module.css';

const ProjectStatus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Overview</h1>
        <p>
        Forest restoration is a process of regaining the ecological functionality and enhancing the biodiversity of degraded, damaged or destroyed forests. It involves active human intervention to create new forest cover where it has been lost, or to increase the density and diversity of existing forests. Forest restoration aims to recover forest ecosystems, providing a range of environmental, social and economic benefits, such as carbon sequestration, water conservation, erosion control, wildlife habitat, and the provision of goods and services for local communities. Forest restoration is an important approach to mitigate the negative impacts of deforestation and forest degradation and to contribute to global efforts to combat climate change.
        </p>
        <p>
        Forest restoration efforts are often undertaken in response to deforestation, forest degradation, and other forms of environmental damage caused by human activities. These activities can lead to soil erosion, loss of biodiversity, and a decline in ecosystem services, such as clean water and carbon storage. Forest restoration can help to address these problems by repairing damaged ecosystems, providing habitat for wildlife, and improving the livelihoods of local communities who rely on forest resources.

Forest restoration is a complex process that requires a multi-disciplinary approach, involving scientists, foresters, policymakers, and local communities. It involves careful planning and monitoring to ensure that restoration activities are appropriate for the local context and that they are achieving their desired outcomes. Successful forest restoration can have a range of benefits, including improved environmental health, increased biodiversity, and greater social and economic opportunities for local communities.
        </p>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7263993670986!2d75.70256857449596!3d31.255996560158177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1681334135103!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h4>Project Information</h4>
        <p>Status - Ongoing</p>
      </div>
    </div>
  );
};
export default ProjectStatus;
