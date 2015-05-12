# overflowing

> Finds page elements that are overflowing

![overflowing screenshot](test/overflowing.png)

[![Build status][ci-image]][ci-url]

`bower install overflowing` then include on the page, or use as [code snippet][snippets]

    overflowing('td', true);
    // finds all elements with selector `td` that overflow, 
    // highlights them and throws an error
    overflowing('.foo');
    // finds all elements with class '.foo' that overflow and throws an error

## MIT License

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[snippets]: http://glebbahmutov.com/blog/chrome-dev-tools-code-snippets/

[ci-image]: https://travis-ci.org/bahmutov/overflowing.png?branch=master
[ci-url]: https://travis-ci.org/bahmutov/overflowing
