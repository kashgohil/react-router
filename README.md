# react-router
Simple react router

copy-paste code from here directly to use it

There are 3 different hooks

## useRouter
This hook will take map of { [path]: Compnoent } as argument, and it will return the memoized component based on the current route/URL

## useSearchParams
This hook will return an object containing all the query/search params as { [key]: value }

## useParams
This hook will return an object of all the path params, all the query/search params, origin and hash for the URL


### Note
all the types, constants are defined inside the hook file itself, for the sake of simplicity whenever copy-pasting the code 