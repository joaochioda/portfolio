#!/bin/bash -e

DIR=$1
#Aqui pede a senha toda vez
read -s -p "Password: " SECRET && echo
find $DIR -name "*.crypt" | while read k; do
echo "decrypt: $k"
echo $SECRET | gpg --batch --yes --passphrase-fd 0 --output "$(echo "$k" | sed "s/\.crypt$//g")" --decrypt "$k"
done
