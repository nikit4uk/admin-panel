import { useState, useEffect } from 'react';
import styles from '../styles/aPanel.module.scss';

export default function FooterTitlesWrap({footer}) {
    const [FooterDate, setFooterDate] = useState('');
    const [FooterRights, setFooterRights] = useState('');

    useEffect(()=> {
        for (let key in footer[0]) {
            switch(key){
                case 'Date':
                    setFooterDate(footer[0][key])
                    break;
                case 'Rights':
                    setFooterRights(footer[0][key])
                    break;
            }
        }
    },[])

    const saveFooter = () => {
        fetch('/api/change-footer', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                Date: FooterDate,
                Rights: FooterRights,
            })
        })
        .then( (res) => res.json() )
        .then( res => console.log(res))
        .catch( err  => console.log(err))
    }

    return (
        <>
            <h4>Footer</h4>
            <div className={styles.titlesWrap}>
                <textarea type='text' defaultValue={FooterDate} onChange={(e) => setFooterDate(e.target.value)} />
                <textarea type='text' defaultValue={FooterRights} onChange={(e) => setFooterRights(e.target.value)} />
            </div>
            <a className='btn' onClick={saveFooter}>Submit</a>
        </>
    )
}