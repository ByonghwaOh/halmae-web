// https://nextjs.org/docs/api-reference/next.config.js/introduction

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.halmae.shop',
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
