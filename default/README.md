# default

> This is a vue template for pc!

## Build Setup

``` 
1.less       (只支持局部引入)
@import '../assets/css/globel.less';

2.element-ui (推荐局部引入)
import ElButton from 'element-ui/packages/button/src/button';
components:{ElButton}

3.axios  (api/api.js)
import {test} from './api/api'
Vue.prototype.$test=test;
```
