# react-router

Simple react router

copy-paste code from here directly to use it

There are 3 different hooks

## useRouter

This hook will take map of `{ [path]: Compnoent }` as argument, and it will return the memoized component based on the current route/URL

Some assumptions made for simplicity:

- always match for exact path
- optional path parameter to be defined by suffixing with `?`
- variable path parameter to be defined by prefixing with `:`
- all optional path parameters to be used at the tail-end of route, without any constant or variable parameters in-between them
- constant path parameters cannot be optional
- if no match found, returning `null`

## useSearchParams

This hook will return an object containing all the query/search params as `{ [key]: value }`

## useParams

This hook will return an object of all the path params, all the query/search params, origin and hash for the URL
Note: `useSearchParams` hook is used inside `useParams` hook, so make sure both are copy-pasted

### Notes

- should work with any react version above `16.x`, for the development purposes, `react@18.x` is used
- all the types, constants are defined inside the hook file itself, for the sake of simplicity

### On a Side Note:

### Why:

just out of curiosity
wanted to see how routers worked, looked it up and found it more complicated than it should be
so, tried creating a bare minimum version, will use it in one of the projects to see if it works or not
