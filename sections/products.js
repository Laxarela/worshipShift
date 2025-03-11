import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://admin.shopify.com/store/lela-test/apps/shopify-graphiql-app', {
  headers: {
    'X-Shopify-Access-Token':ADMIN_API_DATA ,
    'Content-Type': 'application/json',
  },
  
});

const query = `
{
  products(first: 2) {
    edges {
      node {
        id
        title
        descriptionHtml
        variants(first: 2) {
          edges {
            node {
              id
              title
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
}`;

async function fetchProducts() {
  try {
    const data = await client.request(query);
    console.log(data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();
