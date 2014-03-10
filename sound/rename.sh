#!/usr/bin/env bash

count=0
for i in *; do 
	mv "${i}" "${count}".`echo "${i}" | awk -F. '{print $2}'`; 
	((++count)); 
done