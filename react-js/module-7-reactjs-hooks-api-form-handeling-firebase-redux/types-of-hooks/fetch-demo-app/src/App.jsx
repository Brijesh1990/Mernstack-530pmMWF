import React,{useState,useEffect} from "react";
import { 
  MDBContainer,MDBBtn,MDBRow, MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse } from "mdb-react-ui-kit";

function App()
{
   const [openBasic, setOpenBasic] = useState(false);
  const[users,setUsers]=useState();
  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error))
  },[users])
  
  return(
    <>

      <MDBNavbar expand='lg' light bgColor='light' className="w-100">
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
        <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
      
      <MDBContainer fluid className="mx-auto mt-5 p-5">
        <MDBRow>
         {users && users.map((items)=>{
          return(
            <>
         
            <div className="col-md-3 ms-3 p-3 shadow mt-3 bg-white">
              <p key={items.id}>{items.id}</p>
              <p><span className="fa fa-users"></span>  {items.name}</p>
              <p ><span className="fa fa-inbox"></span> {items.email}</p>
              <p>Like us : <span className="fa fa-facebook"></span>
              <span className="fa fa-instagram"></span>
              <span className="fa fa-github"></span>
              <span className="fa fa-snapchat"></span>
              <span className="fa fa-twitter"></span></p>
            </div>

            </>
          )
         })}

        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default App