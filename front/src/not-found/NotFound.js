import * as NF from './NotFound.styled'

function NotFound() {
  return (
    <NF.Main>
      <NF.Logo>404</NF.Logo>
      <NF.Text>Oops! We couldn't load that page!</NF.Text>
    </NF.Main>
  )
}

export default NotFound;