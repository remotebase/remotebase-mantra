#!/bin/bash
echo "On branch '$TRAVIS_BRANCH'."

if [ "$TRAVIS_BRANCH" == "prod" ]; then
  echo "Triggering Mup deployment..."
  (cd .deploy && mupx deploy)
else
  echo "Not deploying. Use 'prod' branch to deploy."
fi
