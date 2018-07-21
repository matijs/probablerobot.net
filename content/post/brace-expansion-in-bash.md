---
title: "Brace expansion in Bash"
date: 2018-07-30T18:30:14+02:00
tags:
  - bash
  - cli
---

Brace expansion is a mechanism that is used to put together strings to use as
part of a command. It is often used to reduce the amount of typing.

## How does it work?
A pattern that should be brace-expanded consists of a so called *preamble*, an
opening `{`, one or more comma-separated strings, a closing `}` , and finally a
*postscript*. Both the preamble and the postscript are optional.

Brace expansion works by prefixing the preamble to each of the strings between
the curly braces followed by the postscript. It  works from left to right and
maintains the order in which the strings between the curly braces were given.

In the following example the preamble 'foo' will be prefixed to both the
strings 'bar' and 'baz' and the postscript 'quux' is added to both strings.

{{< highlight bash >}}
$ echo foo{bar,baz}quux
foobarquux foobazquux
{{< /highlight >}}

It is also possible to use the empty string as an option between the curly
braces.

{{< highlight bash >}}
$ echo foo{,bar}quux
fooquux foobarquux
$ echo foo{bar,}quux
foobarquux fooquux
{{< /highlight >}}

## How is it useful?

Simply put, it saves typing. The preamble and the postscript only need to be
typed once.

To create multiple (nested) directories with just one command you can use the
following.

{{< highlight bash >}}
$ mkdir -p project/component/{test,src,dist,lib}
{{< /highlight >}}

This will create the following directory structure

{{< highlight text >}}
project/component/test/
project/component/src/
project/component/dist/
project/component/lib/
{{< /highlight >}}

(Because `mkdir` was given the `-p` parameter the necessary parent directories
'project' and 'component' were also created if they did not already exist.)

To rename files without having to type a long pathname more than once.

{{< highlight bash >}}
$ mv project/component/src/{index,main}.js
{{< /highlight >}}

Or if you forgot an extension, add it using brace expansion. Notice the empty
string being used as an option.

{{< highlight bash >}}
$ mv project/component/src/index{,.js}
{{< /highlight >}}

