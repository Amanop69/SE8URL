import { useEffect, useState } from 'react';
import './LinkResult.css'
import copy from './copy.png'
import link from '../Hero/link.png'
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';

const LinkResult = ({ inputValue }) => {
    console.log(inputValue);
    const [shortUrl, setShortUrl] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortUrl(res.data.result.full_short_link2);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(inputValue.length) {
            fetchData();
        }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000);

        return () => clearTimeout(timer);
    }, [copied]);

    if(loading) {
        return <p className='nodata'>Loading...</p>
    }

    if(error) {
        return <p className='nodata'>Something Went Wrong Try Refresh :( </p>
    }

  return (
    <>
    {shortUrl && (
        <div className='result'>
        <img src={link} alt="linkk" width={35} className='llnk' />
        <p className='presult'>{shortUrl}</p>

        <CopyToClipboard 
            text={shortUrl} 
            onCopy={() => setCopied(true)}
        >
            <button className={copied ? "copied" : "butt"}><img src={copy} alt="copy" width={50} className='copyb' /></button>
        </CopyToClipboard>
    </div>
    )}
    </>
  )
}

export default LinkResult