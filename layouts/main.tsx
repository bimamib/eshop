import { useRouter } from "next/router";
import  Head  from 'next/head';
import Header from './../components/header/index';

type LayoutType = {
    title?:string;
    children?: React.ReactNode;
}

export default({ children,title = 'E-shop'}:
LayoutType) => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <div className="app-main">
          <Head>
            <title>{ title }</title>
          </Head>
    
          <Header />
    
          <main className={(pathname !== '/' ? 'main-page' : '')}>
            { children }
          </main>
        </div>
      )
}