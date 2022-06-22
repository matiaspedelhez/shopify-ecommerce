# Shopify eCommerce

Status of the project: finished

Deployment: failed to deploy. Looks like Shopify API blocks any fetch made from Vercel or Heroku.

---

If you are a recruiter and you are interested in a realtime preview of this website, please mail me at matiaspedelhezinf@gmail.com

### Features

- Admin panel (CMS) for editing products, prices, descriptions, images, etc. (Storefront API from Shopify).
- Client's cart is stored locally, meaning that any time a user comes back, the cart remains the same.
- SSR provided by using Next.js. It also uses React, GraphQL and TailwindUI components for the responsive UI.
- There was an intention to make the website configurable through a config file. At the end, the only implementation was total_items_to_display.

```js
// app_config.json

{
    "catalog": {
        "total_items_to_display": "8"
    }
}
```

### Screenshots

/
![HOME](/screenshots/home.png?raw=true)

/store/1
![STORE](/screenshots/catalog-1.png?raw=true)

/store/product/wethered-mens-fair-isle-shawl-neck-cardigan
![PRODUCT](/screenshots/product.png?raw=true)

/store/product/sport-shoes
![CART](/screenshots/cart.png?raw=true)

Shopify Admin Page
![SHOPIFY](/screenshots/admin-panel.png?raw=true)
