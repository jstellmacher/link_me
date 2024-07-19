This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
link_me
└─ link_me
   ├─ .eslintrc.json
   ├─ .next
   │  ├─ app-build-manifest.json
   │  ├─ build-manifest.json
   │  ├─ cache
   │  │  ├─ eslint
   │  │  │  └─ .cache_r9fzz9
   │  │  ├─ swc
   │  │  │  └─ plugins
   │  │  │     └─ v7_macos_aarch64_0.106.15
   │  │  └─ webpack
   │  │     ├─ client-development
   │  │     │  ├─ 0.pack.gz
   │  │     │  └─ index.pack.gz
   │  │     ├─ client-production
   │  │     │  ├─ 0.pack
   │  │     │  └─ index.pack
   │  │     ├─ edge-server-production
   │  │     │  ├─ 0.pack
   │  │     │  └─ index.pack
   │  │     └─ server-production
   │  │        ├─ 0.pack
   │  │        ├─ 1.pack
   │  │        ├─ 2.pack
   │  │        ├─ 3.pack
   │  │        ├─ 4.pack
   │  │        ├─ 5.pack
   │  │        ├─ index.pack
   │  │        └─ index.pack.old
   │  ├─ package.json
   │  ├─ react-loadable-manifest.json
   │  ├─ server
   │  │  ├─ app-paths-manifest.json
   │  │  ├─ interception-route-rewrite-manifest.js
   │  │  ├─ middleware-build-manifest.js
   │  │  ├─ middleware-manifest.json
   │  │  ├─ middleware-react-loadable-manifest.js
   │  │  ├─ next-font-manifest.js
   │  │  ├─ next-font-manifest.json
   │  │  ├─ pages-manifest.json
   │  │  ├─ server-reference-manifest.js
   │  │  └─ server-reference-manifest.json
   │  ├─ static
   │  │  ├─ chunks
   │  │  │  └─ polyfills.js
   │  │  └─ development
   │  │     ├─ _buildManifest.js
   │  │     └─ _ssgManifest.js
   │  ├─ trace
   │  └─ types
   │     └─ package.json
   ├─ README.md
   ├─ app
   │  ├─ favicon.ico
   │  ├─ globals.css
   │  ├─ layout.js
   │  └─ public
   │     ├─ next.svg
   │     └─ vercel.svg
   ├─ components
   │  ├─ Avatar.js
   │  ├─ FooterCard.js
   │  └─ LinkCard.js
   ├─ jsconfig.json
   ├─ next.config.mjs
   ├─ package-lock.json
   ├─ package.json
   ├─ pages
   │  ├─ home.js
   │  └─ index.js
   ├─ postcss.config.mjs
   └─ tailwind.config.js

```

```
link_me
├─ .DS_Store
├─ .next
│  ├─ app-build-manifest.json
│  ├─ build-manifest.json
│  ├─ cache
│  │  ├─ swc
│  │  │  └─ plugins
│  │  │     └─ v7_macos_aarch64_0.106.15
│  │  └─ webpack
│  │     ├─ client-development
│  │     │  ├─ 0.pack.gz
│  │     │  ├─ 1.pack.gz
│  │     │  ├─ index.pack.gz
│  │     │  └─ index.pack.gz.old
│  │     ├─ client-development-fallback
│  │     │  ├─ 0.pack.gz
│  │     │  └─ index.pack.gz
│  │     └─ server-development
│  │        ├─ 0.pack.gz
│  │        └─ index.pack.gz
│  ├─ fallback-build-manifest.json
│  ├─ package.json
│  ├─ react-loadable-manifest.json
│  ├─ server
│  │  ├─ app
│  │  │  └─ _not-found
│  │  │     └─ page_client-reference-manifest.js
│  │  ├─ app-paths-manifest.json
│  │  ├─ interception-route-rewrite-manifest.js
│  │  ├─ middleware-build-manifest.js
│  │  ├─ middleware-manifest.json
│  │  ├─ middleware-react-loadable-manifest.js
│  │  ├─ next-font-manifest.js
│  │  ├─ next-font-manifest.json
│  │  ├─ pages-manifest.json
│  │  ├─ server-reference-manifest.js
│  │  └─ server-reference-manifest.json
│  ├─ static
│  │  ├─ chunks
│  │  │  ├─ _error.js
│  │  │  ├─ app
│  │  │  │  ├─ _not-found
│  │  │  │  │  └─ page.js
│  │  │  │  └─ layout.js
│  │  │  ├─ app-pages-internals.js
│  │  │  ├─ fallback
│  │  │  │  ├─ amp.js
│  │  │  │  ├─ main.js
│  │  │  │  ├─ pages
│  │  │  │  │  ├─ _app.js
│  │  │  │  │  └─ _error.js
│  │  │  │  ├─ react-refresh.js
│  │  │  │  └─ webpack.js
│  │  │  ├─ main-app.js
│  │  │  ├─ main.js
│  │  │  ├─ pages
│  │  │  │  ├─ _app.js
│  │  │  │  ├─ _error.js
│  │  │  │  └─ index.js
│  │  │  ├─ polyfills.js
│  │  │  ├─ react-refresh.js
│  │  │  └─ webpack.js
│  │  ├─ css
│  │  │  └─ app
│  │  │     └─ layout.css
│  │  ├─ development
│  │  │  ├─ _buildManifest.js
│  │  │  └─ _ssgManifest.js
│  │  ├─ media
│  │  │  ├─ 05a31a2ca4975f99-s.woff2
│  │  │  ├─ 513657b02c5c193f-s.woff2
│  │  │  ├─ 51ed15f9841b9f9d-s.woff2
│  │  │  ├─ c9a5bc6a7c948fb0-s.p.woff2
│  │  │  ├─ d6b16ce4a6175f26-s.woff2
│  │  │  ├─ ec159349637c90ad-s.woff2
│  │  │  └─ fd4db3eb5472fc27-s.woff2
│  │  └─ webpack
│  │     └─ 633457081244afec._.hot-update.json
│  ├─ trace
│  └─ types
│     └─ package.json
├─ README.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  └─ public
│     ├─ next.svg
│     └─ vercel.svg
├─ components
│  ├─ Avatar.js
│  ├─ FooterCard.js
│  └─ LinkCard.js
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ home.js
│  └─ index.js
├─ postcss.config.mjs
└─ tailwind.config.js

```

new

```
link_me
├─ .DS_Store
├─ .next
│  ├─ app-build-manifest.json
│  ├─ build-manifest.json
│  ├─ cache
│  │  ├─ images
│  │  │  ├─ YNF-K2h385z52YMQeFYv9dssZV4nSj3rSi18zsgGh-U=
│  │  │  │  └─ 60.1721341937357.7d0x4lLXhrTABBMh6bQbYbbyBKU6Bb-z+DH3n+nubFc=.webp
│  │  │  ├─ bYY+Tc9sFquO8ZUsFzF++uVi-R2ZhBWxYTDPbli5pJo=
│  │  │  │  └─ 60.1721341937378.7d0x4lLXhrTABBMh6bQbYbbyBKU6Bb-z+DH3n+nubFc=.webp
│  │  │  ├─ fTn8POmLlofC-dajzs4XQSnBbvkyWmFoSVcvd+LYNqU=
│  │  │  │  └─ 60.1721341937326.7d0x4lLXhrTABBMh6bQbYbbyBKU6Bb-z+DH3n+nubFc=.webp
│  │  │  ├─ iZEkskatDteFh9pnNODs6WzSiOFI4mCyIQT9vvsE+HQ=
│  │  │  │  └─ 60.1721341937401.7d0x4lLXhrTABBMh6bQbYbbyBKU6Bb-z+DH3n+nubFc=.webp
│  │  │  ├─ rPgNy8HuDGsGLAjKIVeWhAvlNa0jl0un9KDNKBsRwik=
│  │  │  │  └─ 60.1721337754582.Mc26T2ynq8JUZq-kgrOKlHbvy75mXZd9LVP4LTMTyWk=.webp
│  │  │  ├─ wnehhulQ8BOMQU+ZrYfuPKG+B4V4Mt1Q7HbXwcyGwJE=
│  │  │  │  └─ 60.1721343280664.7d0x4lLXhrTABBMh6bQbYbbyBKU6Bb-z+DH3n+nubFc=.webp
│  │  │  └─ zgk8fkV1sV8qGqHvr61+dbLeRXV5S95-Ktoy1kkOrzQ=
│  │  │     └─ 60.1721342769874.7d0x4lLXhrTABBMh6bQbYbbyBKU6Bb-z+DH3n+nubFc=.webp
│  │  ├─ swc
│  │  │  └─ plugins
│  │  │     └─ v7_macos_aarch64_0.106.15
│  │  └─ webpack
│  │     ├─ client-development
│  │     │  ├─ 0.pack.gz
│  │     │  ├─ 1.pack.gz
│  │     │  ├─ 10.pack.gz
│  │     │  ├─ 11.pack.gz
│  │     │  ├─ 12.pack.gz
│  │     │  ├─ 2.pack.gz
│  │     │  ├─ 3.pack.gz
│  │     │  ├─ 4.pack.gz
│  │     │  ├─ 5.pack.gz
│  │     │  ├─ 6.pack.gz
│  │     │  ├─ 7.pack.gz
│  │     │  ├─ 8.pack.gz
│  │     │  ├─ 9.pack.gz
│  │     │  ├─ index.pack.gz
│  │     │  └─ index.pack.gz.old
│  │     ├─ client-development-fallback
│  │     │  ├─ 0.pack.gz
│  │     │  ├─ 1.pack.gz
│  │     │  ├─ index.pack.gz
│  │     │  └─ index.pack.gz.old
│  │     ├─ client-production
│  │     │  ├─ 0.pack
│  │     │  └─ index.pack
│  │     ├─ edge-server-production
│  │     │  ├─ 0.pack
│  │     │  └─ index.pack
│  │     ├─ server-development
│  │     │  ├─ 0.pack.gz
│  │     │  ├─ 1.pack.gz
│  │     │  ├─ 10.pack.gz
│  │     │  ├─ 11.pack.gz
│  │     │  ├─ 12.pack.gz
│  │     │  ├─ 13.pack.gz
│  │     │  ├─ 14.pack.gz
│  │     │  ├─ 15.pack.gz
│  │     │  ├─ 2.pack.gz
│  │     │  ├─ 3.pack.gz
│  │     │  ├─ 4.pack.gz
│  │     │  ├─ 5.pack.gz
│  │     │  ├─ 6.pack.gz
│  │     │  ├─ 7.pack.gz
│  │     │  ├─ 8.pack.gz
│  │     │  ├─ 9.pack.gz
│  │     │  ├─ index.pack.gz
│  │     │  └─ index.pack.gz.old
│  │     └─ server-production
│  │        ├─ 0.pack
│  │        └─ index.pack
│  ├─ package.json
│  ├─ react-loadable-manifest.json
│  ├─ server
│  │  ├─ app
│  │  │  └─ favicon.ico
│  │  │     └─ route.js
│  │  ├─ app-paths-manifest.json
│  │  ├─ interception-route-rewrite-manifest.js
│  │  ├─ middleware-build-manifest.js
│  │  ├─ middleware-manifest.json
│  │  ├─ middleware-react-loadable-manifest.js
│  │  ├─ next-font-manifest.js
│  │  ├─ next-font-manifest.json
│  │  ├─ pages
│  │  │  ├─ _app.js
│  │  │  ├─ _document.js
│  │  │  ├─ _error.js
│  │  │  └─ index.js
│  │  ├─ pages-manifest.json
│  │  ├─ server-reference-manifest.js
│  │  ├─ server-reference-manifest.json
│  │  ├─ vendor-chunks
│  │  │  ├─ @swc.js
│  │  │  ├─ next.js
│  │  │  └─ react-icons.js
│  │  └─ webpack-runtime.js
│  ├─ static
│  │  ├─ chunks
│  │  │  ├─ app
│  │  │  │  └─ layout.js
│  │  │  ├─ main-app.js
│  │  │  ├─ main.js
│  │  │  ├─ pages
│  │  │  │  ├─ _app.js
│  │  │  │  ├─ _error.js
│  │  │  │  └─ index.js
│  │  │  ├─ polyfills.js
│  │  │  ├─ react-refresh.js
│  │  │  └─ webpack.js
│  │  ├─ css
│  │  │  └─ app
│  │  ├─ development
│  │  │  ├─ _buildManifest.js
│  │  │  └─ _ssgManifest.js
│  │  ├─ media
│  │  └─ webpack
│  │     ├─ 009925b1f155e44a.webpack.hot-update.json
│  │     ├─ 02007e09cb75927d.webpack.hot-update.json
│  │     ├─ 044595fa9a32406b.webpack.hot-update.json
│  │     ├─ 078dee21ab31c61a.webpack.hot-update.json
│  │     ├─ 095c4828333a9eed.webpack.hot-update.json
│  │     ├─ 146c77243fa6f208.webpack.hot-update.json
│  │     ├─ 35b78e89346623e4.webpack.hot-update.json
│  │     ├─ 37acde96f071b317.webpack.hot-update.json
│  │     ├─ 3f22b94f44f368eb.webpack.hot-update.json
│  │     ├─ 40caf402c0690fb3.webpack.hot-update.json
│  │     ├─ 41037377fed6cc45.webpack.hot-update.json
│  │     ├─ 46672a62979370b9.webpack.hot-update.json
│  │     ├─ 5217766861a20665.webpack.hot-update.json
│  │     ├─ 5b4c239ca7785afc.webpack.hot-update.json
│  │     ├─ 5c00276f4e2f1e63.webpack.hot-update.json
│  │     ├─ 6294a7d85a5d1f89.webpack.hot-update.json
│  │     ├─ 633457081244afec._.hot-update.json
│  │     ├─ 6358e04a4abc40f1.webpack.hot-update.json
│  │     ├─ 68c9486c5de94bed.webpack.hot-update.json
│  │     ├─ 6b08b97f90303134.webpack.hot-update.json
│  │     ├─ 79898a2e24f12706.webpack.hot-update.json
│  │     ├─ 7ae1975b5ff62b48.webpack.hot-update.json
│  │     ├─ 808b5c0ac8323a6d.webpack.hot-update.json
│  │     ├─ 821c54bf3982b7e1.webpack.hot-update.json
│  │     ├─ 9b74d50d8062072d.webpack.hot-update.json
│  │     ├─ 9c01ad3f5f301d6c.webpack.hot-update.json
│  │     ├─ 9d039f90b070913a.webpack.hot-update.json
│  │     ├─ 9e497dd34ad7fc73.webpack.hot-update.json
│  │     ├─ a488ee1498dcb2ad.webpack.hot-update.json
│  │     ├─ a6c4ee9163b7aa40.webpack.hot-update.json
│  │     ├─ aa129da3d435fbe4.webpack.hot-update.json
│  │     ├─ app
│  │     │  ├─ layout.044595fa9a32406b.hot-update.js
│  │     │  ├─ layout.35b78e89346623e4.hot-update.js
│  │     │  ├─ layout.6294a7d85a5d1f89.hot-update.js
│  │     │  ├─ layout.821c54bf3982b7e1.hot-update.js
│  │     │  └─ layout.9e497dd34ad7fc73.hot-update.js
│  │     ├─ b6b2ba4ab495c5ad.webpack.hot-update.json
│  │     ├─ cc3adbbb9bf1fa3d.webpack.hot-update.json
│  │     ├─ f8af8236b1deac96.webpack.hot-update.json
│  │     ├─ fc51d5ba866b2bdd.webpack.hot-update.json
│  │     ├─ pages
│  │     │  ├─ index.009925b1f155e44a.hot-update.js
│  │     │  ├─ index.02007e09cb75927d.hot-update.js
│  │     │  ├─ index.044595fa9a32406b.hot-update.js
│  │     │  ├─ index.078dee21ab31c61a.hot-update.js
│  │     │  ├─ index.095c4828333a9eed.hot-update.js
│  │     │  ├─ index.146c77243fa6f208.hot-update.js
│  │     │  ├─ index.35b78e89346623e4.hot-update.js
│  │     │  ├─ index.37acde96f071b317.hot-update.js
│  │     │  ├─ index.3f22b94f44f368eb.hot-update.js
│  │     │  ├─ index.40caf402c0690fb3.hot-update.js
│  │     │  ├─ index.41037377fed6cc45.hot-update.js
│  │     │  ├─ index.46672a62979370b9.hot-update.js
│  │     │  ├─ index.5217766861a20665.hot-update.js
│  │     │  ├─ index.5b4c239ca7785afc.hot-update.js
│  │     │  ├─ index.5c00276f4e2f1e63.hot-update.js
│  │     │  ├─ index.6294a7d85a5d1f89.hot-update.js
│  │     │  ├─ index.6358e04a4abc40f1.hot-update.js
│  │     │  ├─ index.68c9486c5de94bed.hot-update.js
│  │     │  ├─ index.6b08b97f90303134.hot-update.js
│  │     │  ├─ index.79898a2e24f12706.hot-update.js
│  │     │  ├─ index.7ae1975b5ff62b48.hot-update.js
│  │     │  ├─ index.808b5c0ac8323a6d.hot-update.js
│  │     │  ├─ index.821c54bf3982b7e1.hot-update.js
│  │     │  ├─ index.9b74d50d8062072d.hot-update.js
│  │     │  ├─ index.9c01ad3f5f301d6c.hot-update.js
│  │     │  ├─ index.9d039f90b070913a.hot-update.js
│  │     │  ├─ index.9e497dd34ad7fc73.hot-update.js
│  │     │  ├─ index.a488ee1498dcb2ad.hot-update.js
│  │     │  ├─ index.a6c4ee9163b7aa40.hot-update.js
│  │     │  ├─ index.aa129da3d435fbe4.hot-update.js
│  │     │  ├─ index.b6b2ba4ab495c5ad.hot-update.js
│  │     │  ├─ index.cc3adbbb9bf1fa3d.hot-update.js
│  │     │  ├─ index.f8af8236b1deac96.hot-update.js
│  │     │  └─ index.fc51d5ba866b2bdd.hot-update.js
│  │     ├─ webpack.009925b1f155e44a.hot-update.js
│  │     ├─ webpack.02007e09cb75927d.hot-update.js
│  │     ├─ webpack.044595fa9a32406b.hot-update.js
│  │     ├─ webpack.078dee21ab31c61a.hot-update.js
│  │     ├─ webpack.095c4828333a9eed.hot-update.js
│  │     ├─ webpack.146c77243fa6f208.hot-update.js
│  │     ├─ webpack.35b78e89346623e4.hot-update.js
│  │     ├─ webpack.37acde96f071b317.hot-update.js
│  │     ├─ webpack.3f22b94f44f368eb.hot-update.js
│  │     ├─ webpack.40caf402c0690fb3.hot-update.js
│  │     ├─ webpack.41037377fed6cc45.hot-update.js
│  │     ├─ webpack.46672a62979370b9.hot-update.js
│  │     ├─ webpack.5217766861a20665.hot-update.js
│  │     ├─ webpack.5b4c239ca7785afc.hot-update.js
│  │     ├─ webpack.5c00276f4e2f1e63.hot-update.js
│  │     ├─ webpack.6294a7d85a5d1f89.hot-update.js
│  │     ├─ webpack.6358e04a4abc40f1.hot-update.js
│  │     ├─ webpack.68c9486c5de94bed.hot-update.js
│  │     ├─ webpack.6b08b97f90303134.hot-update.js
│  │     ├─ webpack.79898a2e24f12706.hot-update.js
│  │     ├─ webpack.7ae1975b5ff62b48.hot-update.js
│  │     ├─ webpack.808b5c0ac8323a6d.hot-update.js
│  │     ├─ webpack.821c54bf3982b7e1.hot-update.js
│  │     ├─ webpack.9b74d50d8062072d.hot-update.js
│  │     ├─ webpack.9c01ad3f5f301d6c.hot-update.js
│  │     ├─ webpack.9d039f90b070913a.hot-update.js
│  │     ├─ webpack.9e497dd34ad7fc73.hot-update.js
│  │     ├─ webpack.a488ee1498dcb2ad.hot-update.js
│  │     ├─ webpack.a6c4ee9163b7aa40.hot-update.js
│  │     ├─ webpack.aa129da3d435fbe4.hot-update.js
│  │     ├─ webpack.b6b2ba4ab495c5ad.hot-update.js
│  │     ├─ webpack.cc3adbbb9bf1fa3d.hot-update.js
│  │     ├─ webpack.f8af8236b1deac96.hot-update.js
│  │     └─ webpack.fc51d5ba866b2bdd.hot-update.js
│  ├─ trace
│  └─ types
│     └─ package.json
├─ README.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  └─ layout.js
├─ components
│  ├─ Avatar.js
│  ├─ FooterCard.js
│  ├─ LinkCard.js
│  ├─ TreeIcons.js
│  └─ fetchData.js
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ home.js
│  └─ index.js
├─ postcss.config.mjs
├─ public
│  ├─ .DS_Store
│  ├─ avatar.json
│  ├─ footer.json
│  ├─ images
│  │  ├─ .DS_Store
│  │  ├─ Jai_picture-removebg.png
│  │  ├─ thumbs_up_jai-removebg.png
│  │  └─ thumbs_up_jai.png
│  ├─ links.json
│  ├─ next.svg
│  └─ vercel.svg
└─ tailwind.config.js

```