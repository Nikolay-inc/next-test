import Head from 'next/head';
import A from '../components/A';

export default function MainContainer({children, keywords}) {
  return (
    <>
        <Head>
            <meta keywords={"nikolay, next, react, dev, ebash" + keywords} ></meta>
            <title>Main page</title>
        </Head>
        <div className='navbar'>
            <A text="Main" href="/" />
            <A text="Users" href="/users" />
        </div>
        <div>
            {children}
        </div>
        <style jsx>
            {`
                .navbar {
                    background-color: orange;
                    padding: 15px;
                }
            `}
        </style>
    </>
  )
}
