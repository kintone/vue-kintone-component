import { configure } from '@storybook/vue';

import Vue from 'vue';
import { configureActions } from '@storybook/addon-actions';

import Alert from "../src/components/Alert";


// Register custom components.
Vue.component('kintone-alert', Alert);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
})