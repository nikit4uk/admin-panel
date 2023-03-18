import styles from '@/styles/Footer.module.scss';

export default function Footer({footerTitles} : {footerTitles: any}) {
    return(
        <footer className={styles.footer}>
            <div className='container'>
                <p>{footerTitles.Date} © {footerTitles.Rights}</p>
            </div>
        </footer>
    );
};