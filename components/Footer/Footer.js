import styles from './Footer.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdSmartphone } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { FaFacebookF, FaHome, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const CustomFooter = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.aboutUs}>
          {/*  to be changed to logo */}
          <h1>Conservation Resources Hub</h1>
          <p>
          We can all play a role in protecting biodiversity, no matter how small. By making simple changes in our daily lives, such as reducing our use of single-use plastics or supporting environmentally conscious companies, we can make a difference
          </p>
        </div>
        <div className={styles.contact}>
          <h3>Contact Info</h3>
          <span>Address: 124 lovely professional university</span>
          <div className="icon__container">
            <div className={styles.info}>
              <BsFillTelephoneFill />
              <span> +91600-222-3333</span>
            </div>
            <div className={styles.info}>
              <MdSmartphone />
              <span> +91500-222-3333</span>
            </div>
            <div className={styles.info}>
              <FiMail />
              <span> contact@werenewable.com</span>
            </div>
          </div>
        </div>
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <div className={styles.linkContainer}>
            <FaHome />
            <Link className={styles.link} href={'/'}>
              Home
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <AiOutlineInfoCircle />
            <Link className={styles.link} href={'/about'}>
              About
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <BsFillTelephoneFill />
            <Link className={styles.link} href={'/contact'}>
              Contact
            </Link>
          </div>
        </div>
        <div className={styles.recent}>
          <h3>Find Us</h3>
          <div className={styles.findUs}>
            <div className={styles.icon}>
              <FaFacebookF />
            </div>
            <div className={styles.icon}>
              <FaTwitter />
            </div>
            <div className={styles.icon}>
              <FaYoutube />
            </div>
          </div>
        </div>
      </footer>
      <footer className={styles.bottomFooter}>
        <p>&copy; All right reserved {new Date().getFullYear()} </p>
      </footer>
    </>
  );
};
export default CustomFooter;
