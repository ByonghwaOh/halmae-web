// https://nextjs.org/docs/api-reference/next.config.js/introduction

const getCardURL = 'https://ckrohv0jme.execute-api.ap-northeast-2.amazonaws.com/default/CardBenefitResult';

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/cardbenefit',
        destination: getCardURL,
      },
    ];
  },
};
