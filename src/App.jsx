/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
export default function App({ title }) {
  return (
    <>
      <div>{title || 'Hello World'}</div>
      <input type="text" />
      <a href="#">some link</a>
      <button>Greet</button>
    </>
  )
}
