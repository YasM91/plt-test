import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.scss';
import ThemeComponent from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeComponent>
                    <Component {...pageProps} />
                </ThemeComponent>
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
