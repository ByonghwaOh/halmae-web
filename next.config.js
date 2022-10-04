// https://nextjs.org/docs/api-reference/next.config.js/introduction
// to ensure the proper operation of redirects/rewrites,
// configure rules in `netlify.toml` file.

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog',
        //destination: 'https://blog.halmae.shop',
        destination: 'https://halmae-blog-fugether.vercel.app',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/cardbenefit',
        destination: 'https://ckrohv0jme.execute-api.ap-northeast-2.amazonaws.com/default/CardBenefitResult',
      },
    ];
  },
};
