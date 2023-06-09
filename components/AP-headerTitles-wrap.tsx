import { useState, useEffect } from 'react';
import styles from '../styles/aPanel.module.scss';

export default function HeaderTitlesWrap({header} : {header: any}) {
    const [MainPage, setMainPage] = useState('');
    const [LoginPage, setLoginPage] = useState('');
    const [AdminPanelPage, setAdminPanelPage] = useState('');

    useEffect(()=> {
        for (let key in header[0]) {
            switch(key){
                case 'MainPage':
                    setMainPage(header[0][key])
                    break;
                case 'LoginPage':
                    setLoginPage(header[0][key])
                    break;
                case 'AdminPanel':
                    setAdminPanelPage(header[0][key])
                    break;
            }
        }
    },[])

    const saveHeader = () => {
        fetch('/api/change-header', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                MainPage: MainPage,
                LoginPage: LoginPage,
                AdminPanel: AdminPanelPage,
            })
        })
        .then( (res) => res.json() )
        .then( res => console.log(res))
        .catch( err  => console.log(err))
    }

    return (
        <>
            <h4>Header</h4>
            <div className={styles.titlesWrap}>
                <textarea defaultValue={MainPage} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                    ): void => setMainPage(ev.target.value)} />
                <textarea defaultValue={LoginPage} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                    ): void => setLoginPage(ev.target.value)} />
                <textarea defaultValue={AdminPanelPage} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                    ): void => setAdminPanelPage(ev.target.value)} />
            </div>
            <a className='btn' onClick={saveHeader}>Submit</a>
        </>
    )
}