#!/bin/sh
timestamp="2012312"
echo $timestamp

for file in $(ls ./); do
  echo ${file}
done

echo $date

cur_timestamp=$((`date '+%s'`*1000))
echo $cur_timestamp




