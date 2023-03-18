import { useState, useEffect } from 'react';
import styles from '../styles/aPanel.module.scss';

export default function BlockTitlesWrap({titles, blockTitle, objIdx} : {titles:any, blockTitle:any, objIdx:any}) {
    const [BlockTitle, setBlockTitle] = useState('');
    const [BlockSubtitle, setBlockSubtitle] = useState('');
    const [BlockText1, setBlockText1] = useState('');
    const [BlockText2, setBlockText2] = useState('');
    const [BlockBtn, setBlockBtn] = useState('');

    useEffect(()=> {
        for (let key in titles[objIdx]) {
            switch(key){
                case 'title':
                    setBlockTitle(titles[objIdx][key])
                    break;
                case 'subtitle':
                    setBlockSubtitle(titles[objIdx][key])
                    break;
                case 'text1':
                    setBlockText1(titles[objIdx][key])
                    break;
                case 'text2':
                    setBlockText2(titles[objIdx][key])
                    break;
                case 'btn':
                    setBlockBtn(titles[objIdx][key])
                    break;
            }
        }
    },[])

    const saveBlock = (blockTitle:any) => {
        const collection:string = "Titles";
        const filter:object = { block: blockTitle };
        const filterStr = encodeURIComponent(JSON.stringify(filter));
        const url = `/api/change-titles?collection=${collection}&filter=${filterStr}`;
      
        fetch(url, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            title: BlockTitle,
            subtitle: BlockSubtitle,
            text1: BlockText1,
            text2: BlockText2,
            btn: BlockBtn,
          }),
        })
          .then((res) => res.json())
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      };
      

    return (
        <>
            <h4>{blockTitle}</h4>
            <div className={styles.titlesWrap}>
                <textarea defaultValue={BlockTitle} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                    ): void => setBlockTitle(ev.target.value)} />
                <textarea defaultValue={BlockSubtitle} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                    ): void => setBlockSubtitle(ev.target.value)} />
                <textarea defaultValue={BlockText1} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                    ): void => setBlockText1(ev.target.value)} />
                <textarea defaultValue={BlockText2} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                    ): void => setBlockText2(ev.target.value)} />
                <textarea defaultValue={BlockBtn} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                    ): void => setBlockBtn(ev.target.value)} />
            </div>
            <a className='btn' onClick={() => saveBlock(blockTitle)}>Submit</a>
        </>
    )
}