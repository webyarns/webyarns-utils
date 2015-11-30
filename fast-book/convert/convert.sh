#!/usr/bin/env bash

FILE="moby"
TMPDIR="$(mktemp -d)"

PDF="$TMPDIR/$FILE.pdf"

ebook-convert "$FILE.epub" $PDF
mkdir "$TMPDIR/images/"
convert -density 100 $PDF -quality 60 $TMPDIR/images/page.jpg

convert -delay 20 -loop 0 $TMPDIR/images/page*.jpg $FILE-animated.gif