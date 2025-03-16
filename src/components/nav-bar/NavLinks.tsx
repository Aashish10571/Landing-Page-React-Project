import { useDispatch, useSelector} from "react-redux"
import { Link } from "react-scroll"
import  { setSelectedPage }  from "../../features/NavFeature"
import { SelectedPage } from "../../app/utility/AppEnums"
import { RootState } from "../../store/Store"

const NavLinks = ({ page }: { page: string }) => {
  const pageLowercase = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage
  const selectedPage = useSelector((state: RootState) =>  state.selectedPage)
  const dispatch = useDispatch()

  return (
    <Link
      to={pageLowercase}
      spy={true}
      smooth={true}
      offset={-113}
      duration={500}
      onSetActive={() => dispatch(setSelectedPage(pageLowercase))}
      onClick={() => dispatch(setSelectedPage(pageLowercase))}
      className={`${selectedPage === pageLowercase? "font-bold" : ""} cursor-pointer`}
    >
      {page}
    </Link>
  )
}

export default NavLinks
