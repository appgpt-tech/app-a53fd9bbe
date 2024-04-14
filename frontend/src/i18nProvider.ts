//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    SpareParts: {
      name: 'Spare Parts',
      fields: {
        name: 'Name',
        price: 'Price',
        compatibility: 'Compatibility',
        stockQuantity: 'Stock Quantity',
        id: 'id',
      },
    },
    EngineOil: {
      name: 'Engine Oil',
      fields: {
        name: 'Name',
        price: 'Price',
        compatibility: 'Compatibility',
        stockQuantity: 'Stock Quantity',
        id: 'id',
      },
    },
    Categories: {
      name: 'Categories',
      fields: {
        categoryName: 'Category Name',
        description: 'Description',
        stockQuantity: 'Stock Quantity',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    SpareParts: {
      name: 'Spare Parts (fr)',
      fields: {
        name: 'Name (fr)',
        price: 'Price (fr)',
        compatibility: 'Compatibility (fr)',
        stockQuantity: 'Stock Quantity (fr)',
        id: 'id',
      },
    },
    EngineOil: {
      name: 'Engine Oil (fr)',
      fields: {
        name: 'Name (fr)',
        price: 'Price (fr)',
        compatibility: 'Compatibility (fr)',
        stockQuantity: 'Stock Quantity (fr)',
        id: 'id',
      },
    },
    Categories: {
      name: 'Categories (fr)',
      fields: {
        categoryName: 'Category Name (fr)',
        description: 'Description (fr)',
        stockQuantity: 'Stock Quantity (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);