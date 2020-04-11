import {
  Category,
  CategoryServiceFactory,
  CategoryConfiguration,
  LogLevel,
} from 'typescript-logging';

CategoryServiceFactory.setDefaultConfiguration(
  new CategoryConfiguration(LogLevel.Info),
);

export const APP_LOGGER = new Category('SchoolApi');
export const CREEX_INIT_LOGGER = new Category('SchoolApi_Init', APP_LOGGER);
