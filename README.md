# rspack-hmr-bug-repro
`RuntimeError: factory is undefined` during HMR of lazy-loaded React component

Steps to reproduce:
1. clone
2. pnpm i
3. pnpm start
4. edit TestPage.tsx (see comments)
5. inspect console for errors, see that HMR failed
