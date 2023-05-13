import React from 'react'
import myStyle from '../myStyles/Home'
import kuda1 from '../pics/kuda1.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          
          <div className="ms-5 container-fluid">
                  <Link className="navbar-brand" to='#'>
                  <svg width="99" height="22" viewBox="0 0 99 22" fill="none"><path d="M58.4144 6.81538V21.764H54.0773V19.5807C53.6053 20.3675 52.9857 20.9674 52.2186 21.3804C51.4515 21.7935 50.586 22 49.6222 22C47.7537 22 46.3572 21.4788 45.4327 20.4363C44.5083 19.3938 44.046 17.8203 44.046 15.7157V6.81538H48.5011V15.8042C48.5011 17.6138 49.278 18.5186 50.8319 18.5186C51.7563 18.5186 52.5038 18.2038 53.0742 17.5744C53.6446 16.945 53.9298 16.1189 53.9298 15.0961V6.81538H58.4144ZM75.4086 0V21.764H71.0125V19.5512C70.5601 20.3183 69.9209 20.9182 69.0947 21.3509C68.2686 21.7836 67.3344 22 66.2919 22C65.0134 22 63.8726 21.6755 62.8695 21.0165C61.8663 20.3576 61.0894 19.4332 60.5288 18.2432C59.9682 17.0532 59.6929 15.696 59.6929 14.1618C59.6929 12.6276 59.9682 11.2803 60.5288 10.11C61.0894 8.93965 61.8663 8.03487 62.8596 7.39562C63.8529 6.75637 64.9937 6.44166 66.2919 6.44166C67.295 6.44166 68.2096 6.65802 69.0357 7.07108C69.8619 7.49396 70.5011 8.07421 70.9535 8.82164V0H75.4086ZM70.1274 17.4761C70.7175 16.7188 71.0125 15.637 71.0125 14.2208C71.0125 12.8243 70.7175 11.7523 70.1175 10.9951C69.5176 10.2378 68.6817 9.8641 67.5999 9.8641C66.4984 9.8641 65.6428 10.2378 65.0331 10.9852C64.4233 11.7327 64.1184 12.7948 64.1184 14.1717C64.1184 15.5878 64.4233 16.6795 65.0331 17.4564C65.6428 18.2333 66.4984 18.6169 67.5999 18.6169C68.7014 18.6071 69.5373 18.2333 70.1274 17.4761ZM92.4126 6.81538V21.764H88.0165V19.5512C87.5641 20.3183 86.9249 20.9182 86.0988 21.3509C85.2727 21.7836 84.3384 22 83.2959 22C81.9977 22 80.8569 21.6853 79.8636 21.0559C78.8703 20.4265 78.0934 19.5315 77.5328 18.3612C76.9723 17.1909 76.6969 15.8435 76.6969 14.3093C76.6969 12.7751 76.9723 11.4081 77.5328 10.2083C78.0934 9.00849 78.8703 8.08404 79.8735 7.42512C80.8766 6.7662 82.0174 6.44166 83.2959 6.44166C84.3384 6.44166 85.2727 6.66786 86.0988 7.12025C86.9249 7.57264 87.5641 8.18239 88.0165 8.94949V6.81538H92.4126ZM87.1314 17.4859C87.7215 16.7385 88.0165 15.6567 88.0165 14.2405C88.0165 12.8243 87.7215 11.7425 87.1314 10.9852C86.5413 10.228 85.6956 9.85427 84.5941 9.85427C83.4926 9.85427 82.637 10.2477 82.0272 11.0344C81.4175 11.8212 81.1126 12.9128 81.1126 14.3093C81.1126 15.7059 81.4077 16.768 82.0076 17.5056C82.6075 18.2432 83.4631 18.6071 84.5842 18.6071C85.6956 18.6071 86.5413 18.2333 87.1314 17.4859ZM43.1511 21.9803H37.624L31.6839 15.2043V21.9803H27.1797V0H31.6839V13.3456L37.3585 6.86455H42.7675L36.3455 14.1225L43.1511 21.9803Z" fill="#40196D"></path><path d="M14.8207 21.9803L6.17613 12.0277L10.8967 21.9803H7.62181L2.80286 11.831L4.80912 21.9803H2.79303L0.786768 11.8114V21.9803H0V0H0.786768V10.9656L2.82253 0H4.82879L2.78319 11.0148L7.70049 0H10.9361L6.04828 10.9754L14.9289 0H20.0134L10.8181 11.3491L20.0527 21.9803H14.8207Z" fill="#40196D"></path><path d="M96.146 21.7447C97.493 21.7447 98.585 20.6527 98.585 19.3057C98.585 17.9587 97.493 16.8667 96.146 16.8667C94.799 16.8667 93.707 17.9587 93.707 19.3057C93.707 20.6527 94.799 21.7447 96.146 21.7447Z" fill="#40196D">
                  </path></svg>
                  </Link>
          </div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

            <div className="collapse navbar-collapse" style={myStyle.nav1} >
              <ul className="navbar-nav">
                
                
                <li className="nav-item" >
                <Link className='nav-link ms-5' to="/Home"> Features</Link>
                </li>
                
                <li className="nav-item ms-3">
                  <Link className="nav-link " to="">Business</Link>
                </li> 
                
                
                <li className="nav-item dropdown ms-3">
                      <Link className="nav-link dropdown-toggle" to='#' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Company
                      </Link>

                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" to='#'>Blog</a></li>
                      <li><a className="dropdown-item" href="#">Press</a></li>
                      <li><a className="dropdown-item" href="#">Join Our Team</a></li>
                      <li> <Link className="nav-link" to="">About Us</Link> </li>
                    </ul>
                </li>

                <li className="nav-item dropdown ms-3 mt-2" >Help</li>
                
                </ul>
                <div style={myStyle.nav3}>
                <Link  to="./Login" className='d-flex' > Sign In   </Link>
                </div>
                
                 </div>
              </nav>




    
        
        
        
        
        <div style={myStyle.flex}>    
            <div style={myStyle.font1}>
              <div style={myStyle.font11}> 
                <h1> We’re the bank of <br/>the free</h1>
                  
                  <h3 className='mt-5'>
                  We’re here to help you get the best out of your <br/> money, 
                    no strings attached.
                      <br /> Welcome to your freedom!
                  </h3>
                </div>
            </div>

            <div> 
              <img src={kuda1} alt="" />
            </div>
            
        </div> 

         
            <div style={myStyle.flex}>
          
                  <div className='ms-5 card' style={myStyle.font21}>
                        
                        <div className="card-icon--spacing ps-3 pt-2 ">

                          <svg width="37" height="38" viewBox="0 0 37 38" fill="none">
                          <circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle>
                          <rect x="9.99951" y="12.8003" width="17" height="12" rx="1.5" fill="#40196D" stroke="#DFE3FF">
                            </rect>
                            <path d="M26.5 15H10.5V17H26.5V15Z" fill="white">
                          </path></svg>
                        </div>
                  
                        <div className='ps-3 pt-2'style={myStyle.color1} > We’ll give you a free debit card. Order it <br /> right in the app.</div>
                  </div>

                  
                  <div className='ms-5 card' style={myStyle.font21}>
                      <div className="card-icon--spacing ps-3 pt-2">
                        
                        <svg width="37" height="38" viewBox="0 0 37 38" fill="none">
                          <circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle>
                          <g clip-path="url(#clip0_NEW_ICON)">
                            <path d="M17.9643 11.0671C17.9643 11.3856 17.9643 11.6537 17.9643 11.9386C17.9643 14.1509 17.9643 16.38 17.9643 18.5923C17.9643 18.9107 18.0647 19.0951 18.3493 19.2459C20.2913 20.4023 22.2165 21.5755 24.1418 22.7487C24.2589 22.8157 24.3761 22.8995 24.4766 22.9666C22.6183 25.5811 18.8851 26.8549 15.4699 25.38C12.1886 23.9554 10.3639 20.3018 11.2009 16.7319C12.0714 13.0951 15.3694 11.1007 17.9643 11.0671Z" fill="#40196D"></path><path d="M18.6844 11C21.5806 11.1844 23.7737 12.4916 25.1129 15.0391C26.4187 17.5028 26.2513 20 24.8786 22.4469C23.4388 21.5754 22.0158 20.7207 20.5928 19.8492C20.0236 19.4972 19.4377 19.162 18.8853 18.7933C18.7681 18.7095 18.6509 18.5419 18.6341 18.4078C18.6174 15.9944 18.6174 13.581 18.6341 11.1676C18.6341 11.1508 18.6509 11.1006 18.6844 11Z" fill="white">
                            </path></g><defs>
                              <clipPath id="clip0_NEW_ICON"><rect x="11" y="11" width="15" height="15" fill="white">
                              </rect></clipPath></defs></svg>
                      </div>
                      
                      <div className='ps-3 pt-2' style={myStyle.color1}> Create smart budgets to help you take <br /> control of your spending.</div>
                  </div>

                  
                 <div className='ms-5 card' style={myStyle.font21}>
                  
                        <div className="card-icon--spacing ps-3 pt-2">
                          <svg width="37" height="38" viewBox="0 0 37 38" fill="none">
                              <circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle>
                              <path d="M12.8999 18.6749C12.8999 15.596 15.3958 13.1001 18.4747 13.1001C21.5535 13.1001 24.0495 15.596 24.0495 18.6749C24.0495 21.7537 21.5535 24.2497 18.4747 24.2497C15.3958 24.2497 12.8999 21.7537 12.8999 18.6749Z" fill="white"></path>
                              <path d="M9.40039 25.0443H14.2003V20.2443H12.2231L12.223 18.2877H18.0623V22.4003L16.0793 22.4003V27.2002H20.8791V22.4003H18.9168L18.9111 18.2877H24.7504L24.7503 20.2444H22.7582V25.0443H27.558V20.2444H25.5957L25.5957 17.3705H18.9111V15.0001H20.8867V10.2002H16.0868V15.0001H18.0623V17.3705H11.3776L11.3777 20.2443H9.40039V25.0443Z" fill="#40196D">
                              </path></svg>
                        </div>
                        
                        <div className='ps-3 pt-2' style={myStyle.color1} > 
                          See where your money goes without solving <br /> equations
                        </div>
                    </div>

            </div>
           
           
           
           
           <div className='d-flex' style={myStyle.font22}>
                
                <div className='card mt-3' style={myStyle.font221}>
                    <div className="card-icon--spacing ps-3 pt-2">
                      <svg width="37" height="38" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle>
                      <path d="M14.9197 15.9512C14.9197 12.8724 17.4156 10.3765 20.4945 10.3765C23.5733 10.3765 26.0692 12.8724 26.0692 15.9512C26.0692 19.0301 23.5733 21.526 20.4945 21.526C17.4156 21.526 14.9197 19.0301 14.9197 15.9512Z" fill="white"></path><path d="M18.8958 18.1076L13.7857 22.0356L8.78735 20.0079L22.1668 14.8364L16.9954 28.2159L14.9676 23.2175L18.8958 18.1076Z" fill="#40196D">
                      </path></svg>
                    </div>
                    
                    <div className='ps-3 pt-2' style={myStyle.color1}>Pay absolutely nothing for sending money.</div>
                </div>

                    <div className='card mt-3 ms-3 ' style={myStyle.font222}>
                        <div className="card-icon--spacing ps-3 pt-2">
                          <svg width="37" height="38" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle>
                          <path d="M14.9197 15.9512C14.9197 12.8724 17.4156 10.3765 20.4945 10.3765C23.5733 10.3765 26.0692 12.8724 26.0692 15.9512C26.0692 19.0301 23.5733 21.526 20.4945 21.526C17.4156 21.526 14.9197 19.0301 14.9197 15.9512Z" fill="white"></path><path d="M18.8958 18.1076L13.7857 22.0356L8.78735 20.0079L22.1668 14.8364L16.9954 28.2159L14.9676 23.2175L18.8958 18.1076Z" fill="#40196D">
                          </path></svg>
                        </div>
                        
                        <div className='ps-3 pt-2' style={myStyle.color1}>
                          Save automatically and we’ll pay you up to <br /> 15% interest every year.
                        </div>
                    </div>

                
            </div>

        
          
    </>
  )
}

export default Home