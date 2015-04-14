[![Travis – build status](https://img.shields.io/travis/tomekwi/format-xml.cli/master.svg?style=flat-square)](https://travis-ci.org/tomekwi/format-xml.cli)
 
[![Code climate](https://img.shields.io/codeclimate/github/tomekwi/format-xml.cli.svg?style=flat-square)](https://codeclimate.com/github/tomekwi/format-xml.cli)
 
[![David – status of dependencies](https://img.shields.io/david/tomekwi/format-xml.cli.svg?style=flat-square)](https://david-dm.org/tomekwi/format-xml.cli)
 
[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)




format-xml
==========

**A streaming XML beautifier.**  
**Fully customizable.**  
**Opt-in – no magic.**

*Heads up: This is a work in progress. Ideas and criticism are very welcome.*




Installation
------------

1. Make sure you have *Node.js* or *io.js*. On Unix-like systems you’re best off with [nvm](https://github.com/creationix/nvm). Windows have [official installers](https://nodejs.org/download/).

2. Install the CLI for your user:

```sh
$ npm install --global format-xml
```




Usage
-----

Out of the box – minimal output:

```sh
$ format-xml < dirty.xml > clean.xml
```

Smart presets:

```sh
$ format-xml --preset svg < dirty.svg > clean.svg
```

CLI configuration:

```sh
$ format-xml --indent-string "\t" < dirty.xml > clean.xml
```

JSON or [safe CSON](http://npm.im/cson-parser) configuration:

```sh
$ echo "indentString: '\t'" > .format-xml.cson
$ format-xml < dirty.xml > clean.xml
$ # or:
$ format-xml --config-file .format-xml.cson < dirty.xml > clean.xml
```




Alternatives
------------

This tool is focused and configurable. If you’re after something else, you might try these out:

- [pretty-xml](https://npm.im/pretty-xml)




License
-------

[MIT][] © [Tomek Wiszniewski][]

[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
