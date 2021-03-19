# build-rscript

[![apm](https://img.shields.io/apm/l/build-rscript.svg?style=flat-square)](https://atom.io/packages/build-rscript)
[![apm](https://img.shields.io/apm/v/build-rscript.svg?style=flat-square)](https://atom.io/packages/build-rscript)
[![apm](https://img.shields.io/apm/dm/build-rscript.svg?style=flat-square)](https://atom.io/packages/build-rscript)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-build-rscript)](https://circleci.com/gh/idleberg/atom-build-rscript)
[![David](https://img.shields.io/david/idleberg/atom-build-rscript.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-rscript)

[Atom Build](https://atombuild.github.io/) provider for `Rscript`, runs R.

## Installation

### apm

Install `build-rscript` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-rscript`

### Using Git

Change to your Atom packages directory:

```bash
# Windows
$ cd %USERPROFILE%\.atom\packages

# Linux & macOS
$ cd ~/.atom/packages/
```

Clone repository as `build-rscript`:

```bash
$ git clone https://github.com/idleberg/atom-build-rscript build-rscript
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `Rscript` - run script
* `Rscript (user)` - run script with arguments specified in the package settings

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Select active target**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Build script**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

**Jump to error**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd> or <kbd>F4</kbd>

**Toggle build panel**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

## License

This work is licensed under the [The MIT License](LICENSE.md).
