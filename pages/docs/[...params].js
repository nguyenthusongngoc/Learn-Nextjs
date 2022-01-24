import { useRouter } from "next/router"

function Doc() {
  const router = useRouter()
  const { params } = router.query
  return <h1>Docs Home Page: {params}</h1>
}
export default Doc
