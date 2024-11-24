import { DynamicComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { allContent } from '../utils/content';
import { PageComponentProps } from '@/types';

const Page: React.FC<PageComponentProps> = (props) => {
    return <DynamicComponent {...props} />;
};

export async function getStaticPaths() {
    try {
        const allData = allContent();
        if (!allData || !Array.isArray(allData)) {
            console.error('allContent() did not return a valid array');
            return { paths: [], fallback: false };
        }

        const paths = allData
            .map((obj) => obj?.__metadata?.urlPath)
            .filter(Boolean);

        if (paths.length === 0) {
            console.warn('No paths generated from allContent()');
        }

        console.log('Generated paths:', paths);
        return { paths, fallback: false };
    } catch (error) {
        console.error('Error in getStaticPaths:', error);
        return { paths: [], fallback: false };
    }
}

export async function getStaticProps({ params }) {
    try {
        const allData = allContent();
        if (!allData || !Array.isArray(allData)) {
            console.error('allContent() did not return a valid array');
            return { props: {} };
        }

        const urlPath = '/' + (params.slug || []).join('/');
        console.log('Generated urlPath:', urlPath);

        const props = resolveStaticProps(urlPath, allData);
        if (!props) {
            console.warn('No props resolved for urlPath:', urlPath);
        }

        return { props };
    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return { props: {} };
    }
}

export default Page;
