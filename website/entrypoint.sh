set -e

host="cms"
port="1337"

>&2 echo "!!!!!!!! Check cms for available !!!!!!!!"

until curl http://"$host":"$port"; do
  >&2 echo "CMS is unavailable - sleeping 10 seconds"
  sleep 10
done

>&2 echo "CMS is up - executing command"

npm run build
npm run start