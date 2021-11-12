import React , {Fragment} from 'react';
import Helmet from 'react-helmet'

const Seo = ({
    meta,
    image,
    title,
    description,
    pathSlug,
    keywords,
    date,
    isBlogPost,
    dateModified,

}) => {
    const url= `https://romigomez.com.ar/${pathSlug}`

    return (
        <Fragment>
            <Helmet titleTemplate={`${title}`}>
                <html lang="en" />
                <title>{title}</title>
        
{/*                 <link rel="icon" sizes="16x16" type="image/png" href={icon16} />
                <link rel="icon" sizes="32x32" type="image/png" href={icon32} />
                <link
                    rel="apple-touch-icon"
                    sizes="192x192"
                    type="image/png"
                    href={icon192}
                />
                <link
                    rel="apple-touch-startup-image"
                    sizes="512x512"
                    type="image/png"
                    href={icon512}
                /> */}
        
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />
                <link rel="canonical" key={url} href={url} />
        
                <meta name="description" content={description} />

                <meta
                    name="google-site-verification"
                    content="rdHghgE19nXaz19_OXvkv_MuEOSHl8lQPesWUmp21oU"
                />
        
{/*                 <meta property="og:url" content={url} />
                <meta property="og:title" content={title || useSiteMetadata().title} />
                <meta name="og:description" content={metaDescription} />
                {isBlogPost && <meta property="og:type" content="article" />}
                {metaImage && <meta property="og:image" content={metaImage} />}
        
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:title" content={title || useSiteMetadata().title} />
                <meta name="twitter:creator" content={useSiteMetadata().twitter} />
                <meta name="twitter:card" content="summary" />
                {metaImage && <meta name="twitter:image" content={metaImage} />} */}
            </Helmet>

{/*             <SchemaOrg
                url={url}
                title={title}
                image={metaImage}
                description={metaDescription}
                datePublished={date ? date : false}
                canonicalUrl={url}
                author={author}
                baseUrl={useSiteMetadata().siteUrl}
                dateModified={dateModified}
                defaultTitle={defaultTitle}
                isBlogPost={isBlogPost ? isBlogPost : false}
            /> */}
        </Fragment>
    );
};

export default Seo;