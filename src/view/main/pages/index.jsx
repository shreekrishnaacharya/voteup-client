import React from 'react'
// import Features from './KeyFeatures'
// import Pricing from './Pricing'
// import Testimonials from './Testimonials'
// import TryFree from './TryFree'

// const Features = React.lazy(() => import('./pages/KeyFeatures'));
// const Pricing = React.lazy(() => import('./pages/Pricing'));
// const Testimonials = React.lazy(() => import('./pages/Testimonials'));
// const TryFree = React.lazy(() => import('./pages/TryFree'));

const Features = React.lazy(() => import('./KeyFeatures'));
const Pricing = React.lazy(() => import('./Pricing'));
const Testimonials = React.lazy(() => import('./Testimonials'));
const TryFree = React.lazy(() => import('./TryFree'));

export { Features, Pricing, Testimonials, TryFree }