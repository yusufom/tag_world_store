import { Menu, Product } from './shopify/types';

export const homepageItems: Product[] = [
  {
    id: 'product-1-id',
    handle: 'product-1-handle',
    availableForSale: true,
    title: 'Product 1',
    description: 'Description of Product 1',
    descriptionHtml: '<p>Description of Product 1</p>',
    options: [
      {
        id: 'option-1-id',
        name: 'Color',
        values: ['Black', 'White']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '20.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '10.00',
        currencyCode: 'USD'
      }
    },
    variants: [
      {
        id: '123456',
        title: 'Product 1',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Black'
          }
        ],
        price: {
          amount: '10.00',
          currencyCode: 'USD'
        }
      }
    ],
    images: [
      {
        url: 'https://scontent.cdninstagram.com/v/t51.2885-15/101400758_596922607612023_6468260232632297751_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDczeDEwNzMuc2RyLmYyODg1In0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=xlwvaozk7p4Q7kNvgGyv2Wu&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjMyMzY4ODM1MzkxMDA5MTgwMw%3D%3D.2-ccb7-5&oh=00_AYDU7qx7xv4iDHgP9GDAczFxn3VqPqX7zOO5LDw1wJXUAg&oe=66561D7D&_nc_sid=10d13b',
        altText: 'string',
        width: 400,
        height: 400
      }
    ],
    featuredImage: {
      url: 'https://scontent.cdninstagram.com/v/t51.2885-15/101400758_596922607612023_6468260232632297751_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDczeDEwNzMuc2RyLmYyODg1In0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=xlwvaozk7p4Q7kNvgGyv2Wu&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjMyMzY4ODM1MzkxMDA5MTgwMw%3D%3D.2-ccb7-5&oh=00_AYDU7qx7xv4iDHgP9GDAczFxn3VqPqX7zOO5LDw1wJXUAg&oe=66561D7D&_nc_sid=10d13b',
      altText: 'string',
      width: 400,
      height: 400
    },
    seo: {
      title: 'SEO Title for Product 1',
      description: 'SEO Description for Product 1'
    },
    tags: ['tag1', 'tag2'],
    updatedAt: '2024-05-25T12:00:00Z'
  },
  {
    id: 'product-1-id',
    handle: 'product-1-handle',
    availableForSale: true,
    title: 'Product 1',
    description: 'Description of Product 1',
    descriptionHtml: '<p>Description of Product 1</p>',
    options: [
      {
        id: 'option-1-id',
        name: 'Color',
        values: ['Black', 'White']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '20.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '10.00',
        currencyCode: 'USD'
      }
    },
    variants: [
      {
        id: '123456',
        title: 'Product 1',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Black'
          }
        ],
        price: {
          amount: '10.00',
          currencyCode: 'USD'
        }
      }
    ],
    images: [
      {
        url: 'https://scontent.cdninstagram.com/v/t51.2885-15/101681004_262919411450632_6391641585590837382_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NzIwLnNkci5mMjg4NSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=4tLjn_HdzBsQ7kNvgHGj4GP&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjMyNDEwMzgyNjgwODIyOTAxNA%3D%3D.2-ccb7-5&oh=00_AYCuiNHxkH7PfeI369zeXolVlAkgsCmmIeAhAd18ZthAtw&oe=66564601&_nc_sid=10d13b',
        altText: 'string',
        width: 400,
        height: 400
      }
    ],
    featuredImage: {
      url: 'https://scontent.cdninstagram.com/v/t51.2885-15/101681004_262919411450632_6391641585590837382_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NzIwLnNkci5mMjg4NSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=4tLjn_HdzBsQ7kNvgHGj4GP&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjMyNDEwMzgyNjgwODIyOTAxNA%3D%3D.2-ccb7-5&oh=00_AYCuiNHxkH7PfeI369zeXolVlAkgsCmmIeAhAd18ZthAtw&oe=66564601&_nc_sid=10d13b',
      altText: 'string',
      width: 400,
      height: 400
    },
    seo: {
      title: 'SEO Title for Product 1',
      description: 'SEO Description for Product 1'
    },
    tags: ['tag1', 'tag2'],
    updatedAt: '2024-05-25T12:00:00Z'
  },
  {
    id: 'product-2-id',
    handle: 'product-2-handle',
    availableForSale: false,
    title: 'Tissot watch',
    description: 'Tissot for your wrist',
    descriptionHtml: '<p>Tissot for your wrist</p>',
    options: [
      {
        id: 'option-2-id',
        name: 'Color',
        values: ['Black', 'White']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '30.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '30.00',
        currencyCode: 'USD'
      }
    },
    variants: [
      {
        id: '1234567',
        title: 'Tissot watch',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Black'
          }
        ],
        price: {
          amount: '30.00',
          currencyCode: 'USD'
        }
      }
    ],
    images: [
      {
        url: 'https://scontent.cdninstagram.com/v/t51.2885-15/82470891_695321564602913_5778620450406977261_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NzIwLnNkci5mMjg4NSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=zpTiogeeYxsQ7kNvgGPkUW3&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjMyNDA4NDM2OTgwMDkyMjA2OQ%3D%3D.2-ccb7-5&oh=00_AYB7mSeWJprdrriyE7DFO237bDhIfMmPB7KZE6r7YlB_Xw&oe=66563C3B&_nc_sid=10d13b',
        altText: 'string',
        width: 400,
        height: 400
      }
    ],
    featuredImage: {
      url: 'https://scontent.cdninstagram.com/v/t51.2885-15/82470891_695321564602913_5778620450406977261_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NzIwLnNkci5mMjg4NSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=zpTiogeeYxsQ7kNvgGPkUW3&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjMyNDA4NDM2OTgwMDkyMjA2OQ%3D%3D.2-ccb7-5&oh=00_AYB7mSeWJprdrriyE7DFO237bDhIfMmPB7KZE6r7YlB_Xw&oe=66563C3B&_nc_sid=10d13b',
      altText: 'string',
      width: 400,
      height: 400
    },
    seo: {
      title: 'SEO Title for Product 1',
      description: 'SEO Description for Product 1'
    },
    tags: ['tag1', 'tag2'],
    updatedAt: '2024-05-25T12:00:00Z'
  }
];

//

export const menuData: Menu[] = [
  {
    title: 'All',
    path: 'strings/products'
  },
  {
    title: 'Womens',
    path: 'strings/products'
  },
  {
    title: 'Mens',
    path: 'strings/products'
  },
  {
    title: 'Watches',
    path: 'strings/products'
  }
];
