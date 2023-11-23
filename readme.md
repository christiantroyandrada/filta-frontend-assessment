# Assessment

### Hello Repository visitors!  Welcome to my assessment repository
This repository is forked from https://github.com/mindarc/frontend-assessment and it is such a fun and challenging repository to work on.  Hope you people like it and you can reach out to me at christiantroyandrada@gmail.com.  Have a nice day!

### Explanation for why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana:

- `'b' + 'a'` yields the string `'ba'.`
- `+ +'a'` uses the unary plus operator in an attempt to convert the string `'a'` to a number. 
- However, because the letter `'a'` is not a valid number, the result is `NaN` (Not-a-Number).
`'ba' + NaN + 'a'` equals **'baNaNa'**.
- Finally, using `.toLowerCase()` on **'baNaNa'** converts all characters to lowercase, yielding **'banana'**.

As a result, the expression `('b' + 'a' + + 'a' + 'a').toLowerCase()` returns **'banana'**.

  

## Project setup

```

npm install

```

  

### Compiles and hot-reloads for development

```

npm run serve

```

  

### Compiles and minifies for production

```

npm run build

```

  

### Lints and fixes files

```

npm run lint

```

  

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).