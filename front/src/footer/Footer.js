import * as F from './Footer.styled'
import icon1 from '../static/footer/icon1.png'
import icon2 from '../static/footer/icon2.png'
import icon3 from '../static/footer/icon3.png'
import icon4 from '../static/footer/icon4.png'
import bg from '../static/footer/footer.png'

function Footer() {
  return(
    <F.Footer src={bg}>
      <a href="https://www.linkedin.com/"><F.Icon src={icon1}></F.Icon></a>
      <a href="https://www.twitter.com/"><F.Icon src={icon2}></F.Icon></a>
      <a href="https://www.facebook.com/"><F.Icon src={icon3}></F.Icon></a>
      <a href="https://www.pinterest.com/"><F.Icon src={icon4}></F.Icon></a>
    </F.Footer>
  )
}

export default Footer;