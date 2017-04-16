export {
  _,
  $,
};

import {
  get,
  post,
} from 'util/ajax';
import {
  getCookie,
  setCookie,
  resetCookies,
} from 'util/cookie';
import {
  find,
  forEach,
  partial,
  template,
  wait,
} from 'util/core';
import {
  register,
} from 'util/dispatcher';
import {
  querySelector,
  querySelectorAll,
  querySelectorOrNull,
  remove,
  searchFromScripts,
} from 'util/dom';
<% if (supportImage) { %>
import {
  openImage,
} from 'util/image';
<% } %>
import {
  openLink,
} from 'util/link';
import {
  info,
  warn,
} from 'util/logger';
import {
  generateRandomIP,
  nuke,
  removeAllTimer,
} from 'util/misc';
import {
  uswProxy,
} from 'util/platform';


const _ = {
  find,
  forEach,
  generateRandomIP,
  info,
  partial,
  register,
  template,
  wait,
  warn,
};


function $ (selector, context) {
  return querySelector(selector, context);
}
$.$ = querySelectorOrNull;
$.$$ = querySelectorAll;
$.get = get;
$.getCookie = getCookie;
$.nuke = nuke;
<% if (supportImage) { %>
$.openImage = openImage;
<% } %>
$.openLink = openLink;
$.post = post;
$.remove = remove;
$.removeAllTimer = removeAllTimer;
$.resetCookies = resetCookies;
$.searchFromScripts = searchFromScripts;
$.setCookie = setCookie;
$.window = uswProxy;
