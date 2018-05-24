## Simple Vue directive for numeric words' ending

### Installing

> Set as package.json dependency: "word-ending": "bitbucket:Uhanov/vue-word-ending"

### Import

import wordEnding from 'word-ending'

Vue.use(wordEnding)

### Usage

```
<span v-word-ending="[['заказ', 'заказа', 'заказов'], count]"></span>
```
