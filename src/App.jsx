/* eslint-disable jsx-a11y/anchor-is-valid */

import Greet from '@/components/Greet'

/* eslint-disable react/button-has-type */
export default function App({ title }) {
  return (
    <>
      <Greet />
      <div>{title || 'Hello World'}</div>
      <input type="text" />
      <a href="#">some link</a>
      <button>Greetings</button>
    </>
  )
}
