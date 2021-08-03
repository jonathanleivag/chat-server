export default function context ({ req }) {
  return { token: req.headers.authorization || '' }
}
