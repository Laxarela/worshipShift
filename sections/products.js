const shopifyDomain = "https://lela-test.myshopify.com";
const storefrontAccessToken = ADMIN_API_DATA;

async function fetchProduct(handle) {
  const query = `
    {
  products (first:5){
    edges {
      node {
        id
        title
        description
        tags
        metafields (first:5){
          edges{
            node{
              key
              value
            }
          }
        }
        metafield (namespace:"custom", key:"creator" ){
          value
        }
 
        media(first:2) {
          edges {
            node {       
              alt
              id
              
              
            }
          }
        }
    
      }
    }
  }
}


  `;

  const response = await fetch(`https://lela-test.myshopify.com/api/2023-04/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  return result.data.productByHandle;
}

function updateProductDetails(product) {
  const dynamicContent = document.getElementById("dynamic-content");

  dynamicContent.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.description}</p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const productHandle = window.location.pathname.split("/").pop();
  fetchProduct(productHandle).then(updateProductDetails);
});
